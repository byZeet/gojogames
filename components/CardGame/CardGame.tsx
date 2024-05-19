'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './CardGame.scss';
import { toast } from 'react-toastify';

import arrowright from '../../public/assets/icons/arrow-next-small-svgrepo-com.svg';

import { getJuegos } from '@/lib/actions/juegos.actions';
import { Juego } from '@/types';
import { useUser } from '@clerk/nextjs';

interface CartItem extends Juego {
  cantidad: number;
}

const CardGame: React.FC = () => {
  const [juegos, setJuegos] = useState<Juego[]>([]);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const { user } = useUser();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const fetchJuegos = async () => {
      const juegosData = await getJuegos();
      setJuegos(juegosData);
    };
    fetchJuegos();
  }, []);

  useEffect(() => {
    if (isClient) {
      const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
      setCartItems(storedCartItems);
      window.addEventListener('storage', syncCartFromLocalStorage);
    }
    return () => {
      window.removeEventListener('storage', syncCartFromLocalStorage);
    };
  }, [isClient]);

  const syncCartFromLocalStorage = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
    setCartItems(storedCartItems);
  };

  const handleAddToCart = (juego: Juego) => {
    if (!user) {
      toast.error('Por favor, regístrate primero.');
      return;
    }

    if (cartItems.reduce((acc, item) => acc + item.cantidad, 0) >= 10) {
      toast.error('No puedes añadir más de 10 artículos en el carrito.');
      return;
    }

    const existingItemIndex = cartItems.findIndex(item => item._id === juego._id);
    let updatedCart: CartItem[];
    if (existingItemIndex !== -1) {
      const existingItem = cartItems[existingItemIndex];
      if (existingItem.cantidad < 10) {
        updatedCart = cartItems.map((item, index) =>
          index === existingItemIndex
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        );
      } else {
        toast.error('No puedes añadir más de 10 unidades de este artículo.');
        return;
      }
    } else {
      updatedCart = [...cartItems, { ...juego, cantidad: 1 }];
    }

    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    toast.success(`${juego.titulo} se ha añadido correctamente al carrito.`);
  };

  const handleRemoveFromCart = (juego: Juego) => {
    const updatedCart = cartItems.filter(item => item._id !== juego._id);
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('cart-updated', { detail: { removedItem: juego } }));
    toast.success(`${juego.titulo} se ha eliminado del carrito.`);
  };

  return (
    <main>
      <div className="flex gap-1 ml-32 mb-5 mt-20 items-center title-category w-fit">
        <Link href="/">
          <h1 className="text-3xl">Nuevo y Tendencias</h1>
        </Link>
        <Image src={arrowright} alt="icono-flecha-cards" width={36} height={36} />
      </div>
      <div className="flex w-full justify-center mb-10">
        {/* Contenido adicional aquí */}
      </div>
      <div className="flex justify-center items-center mb-10">
        <div className="w-fit h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-5 pl-32 pr-32">
          {juegos.map((juego: Juego, index: number) => {
            const isInCart = cartItems.some(item => item._id === juego._id);
            return (
              <div key={index} className="card w-full custom-bg-color shadow">
                <Link href={`/games/${juego._id}`}>
                  <figure>
                    <img className='img-redondeada' src={juego.foto} alt="imagen-juego-card" />
                  </figure>
                </Link>
                <div className="card-body gap-5">
                  <Link href={`/games/${juego._id}`}>
                    <h2 className="card-title w-auto text-neutral-100">{juego.titulo}</h2>
                  </Link>
                  <div className="container-badge flex flex-wrap gap-2">
                    {juego.demo_disponible && (
                      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                    )}
                    {juego.dlc && (
                      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
                    )}
                    {juego.stock ? (
                      <div className="badge badge-outline stock-badge-color p-3">
                        <FontAwesomeIcon icon={faCheck} className="mr-1" />
                        Stock
                      </div>
                    ) : (
                      <div className="badge badge-outline nostock-badge-color p-3">
                        <FontAwesomeIcon icon={faCheck} className="mr-1" />
                        Sin Stock
                      </div>
                    )}
                  </div>
                  <div className="card-actions justify-between items-center">
                    <div className="flex flex-column items-end gap-3 align-self-end">
                      <h1 className="text-neutral-100 font-medium">{juego.precio}€</h1>
                    </div>
                    <div className="flex gap-3">
                      <label className="ui-bookmark">
                        <input type="checkbox" />
                        <div className="bookmark">
                          <svg
                            viewBox="0 0 16 16"
                            style={{ marginTop: '0px' }}
                            className="bi bi-heart-fill hearth-card-icon"
                            height="25"
                            width="25"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                              fillRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      </label>
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="cursor-pointer"
                        onClick={() => isInCart ? handleRemoveFromCart(juego) : handleAddToCart(juego)}
                        width={25}
                        height={25}
                      >
                        {isInCart ? (
                          <>
                            <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#ffffff" strokeWidth="1.5"></path>
                            <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#ffffff" strokeWidth="1.5"></path>
                            <path d="M11 10.8L12.1429 12L15 9" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                            <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                          </>
                        ) : (
                          <>
                            <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#ffffff" strokeWidth="1.5"></path>
                            <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#ffffff" strokeWidth="1.5"></path>
                            <path d="M13 13V11M13 11V9M13 11H15M13 11H11" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                            <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round"></path>
                          </>
                        )}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default CardGame;
