'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import gojogameslogo from '../../public/assets/img/gojogameslogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash, faPlus, faMinus, faShoppingCart, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { getJuegosBuscar } from '@/lib/actions/juegos.actions';
import { createOrders } from '@/lib/actions/orders.actions'; // Importa la función createOrders
import search from '../../public/assets/icons/search-svgrepo-com.svg';
import deleteicon from '../../public/assets/icons/delete-svgrepo-com.svg';
import { toast } from 'react-toastify';
import './Navbar.scss';

interface Juego {
  _id: string;
  titulo: string;
  genero: string;
  precio: number;
  foto: string;
  tiempo_restante: string;
  fecha?: string;
  oferta: boolean;
  precio_original: number;
}

interface CartItem extends Juego {
  cantidad: number;
}

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [showSettings, setShowSettings] = useState(true);
  const [juegosEncontrados, setJuegosEncontrados] = useState<Juego[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { user } = useUser();
  const clerkId = user?.id || ''; // Asegurarse de que clerkId es un string
  const [isClient, setIsClient] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentSuccess, setIsPaymentSuccess] = useState(false);

  useEffect(() => {
    setIsClient(true);
    function handleScroll() {
      const scrolled = window.scrollY;
      setIsTop(scrolled === 0);
    }

    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
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

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const syncCartFromLocalStorage = () => {
    const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[];
    setCartItems(storedCartItems);
  };

  const handleInputChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);

    if (inputValue.trim() === "") {
      setShowSettings(true);
    } else {
      setShowSettings(false);
      try {
        const juegos = await getJuegosBuscar(inputValue);
        setJuegosEncontrados(juegos);
      } catch (error) {
        console.log(error);
      }
    }
  };

  const handleResultClick = () => {
    setSearchValue("");
  };

  const handleRemoveFromCart = (index: number) => {
    const updatedCart = [...cartItems];
    const removedItem = updatedCart.splice(index, 1)[0];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    window.dispatchEvent(new Event('storage'));
    window.dispatchEvent(new CustomEvent('cart-updated-navbar', { detail: { removedItem } }));
  };

  const handleCartIconClick = () => {
    if (!user) {
      toast.error('Por favor, regístrate primero.');
      return;
    }
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleIncreaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    if (updatedCart.reduce((acc, item) => acc + item.cantidad, 0) < 10) {
      updatedCart[index].cantidad += 1;
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new Event('storage'));
    } else {
      toast.error('No puedes añadir más de 10 artículos en el carrito.');
    }
  };

  const handleDecreaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].cantidad > 1) {
      updatedCart[index].cantidad -= 1;
      setCartItems(updatedCart);
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      window.dispatchEvent(new Event('storage'));
    } else {
      handleRemoveFromCart(index);
    }
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0).toFixed(2);
  };

  const handlePayment = async () => {
    if (!clerkId) {
      toast.error('Usuario no autenticado.');
      return;
    }

    const compra_juego = cartItems.map(item => ({
      titulo: item.titulo,
      precio: item.precio,
      foto: item.foto,
      cantidad: item.cantidad
    }));
    const precio_total = parseFloat(calculateTotalPrice());

    setIsLoading(true);
    try {
      await createOrders(clerkId, compra_juego, precio_total);
      setTimeout(() => {
        setIsLoading(false);
        setIsPaymentSuccess(true);
        setCartItems([]);
        localStorage.removeItem('cart');
        window.dispatchEvent(new Event('storage'));
        setTimeout(() => {
          setIsPaymentSuccess(false);
        }, 3000);
      }, 4000);
    } catch (error) {
      console.error(error);
      toast.error('Error realizando el pago. Por favor, inténtelo de nuevo.');
      setIsLoading(false);
    }
  };

  if (!isClient) return null; // Evitar renderización en el servidor

  return (
    <main>
      <div className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 flex justify-between items-center px-8 py-2 ${isTop ? 'bg-transparent' : 'bg-[#151515] bg-opacity-75 backdrop-blur-lg backdrop-saturate-100'}`}>
        <div className="flex justify-center items-center gap-1">
          <Link href="/">
            <button className="btn btn-ghost text-xl">
              <Image src={gojogameslogo} alt="logogojogames" width={60} height={60} />
            </button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center gap-1 relative">
          <form className="relative flex items-center w-60 max-w-md">
            <button className="absolute pl-3">
              <Image src={search} alt="search-icon" width={20} height={20} />
            </button>
            <input
              className="input rounded-full pl-10 py-2 pr-8 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md bg-white w-full"
              placeholder="Buscar por título..."
              value={searchValue}
              onChange={handleInputChange}
              type="text"
            />
            <button className="absolute text-gray-400 hover:text-red-600 right-2" type="reset" onClick={() => setSearchValue("")}>
              <Image src={deleteicon} alt="delete-icon" width={20} height={20} />
            </button>
          </form>
          {searchValue && (
            <div ref={dropdownRef} className="absolute top-full mt-5 w-custom-dropdown flex justify-center">
              <div className="bg-[#292929] bg-opacity-95 text-white backdrop-blur-lg backdrop-saturate-100 shadow-md py-4 px-6 rounded-md w-[90%] max-h-[940px] overflow-y-auto">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white">[{juegosEncontrados.length}] Resultados para "{searchValue}"</p>
                  <button className="text-gray-400 hover:text-red-600" type="reset" onClick={() => setSearchValue("")}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <div className="max-h-[761px] overflow-y-auto pr-5">
                  {juegosEncontrados.map((juego, index) => (
                    <Link href={`/games/${juego._id}`} key={index} onClick={handleResultClick}>
                      <div className="flex items-center gap-4 py-2 px-2 cursor-pointer hover:bg-blue-500 rounded-lg">
                        <div className="w-52 h-24 relative">
                          <img src={juego.foto} alt="FotoJuegoSearch" className="object-cover w-full h-full rounded-md" />
                        </div>
                        <div className="flex-1">
                          <p className="font-semibold">{juego.titulo}</p>
                          <p>{juego.genero}</p>
                        </div>
                        <div>
                          {juego.fecha ? (
                            <p className="font-semibold text-yellow-500">Próximamente</p>
                          ) : (
                            juego.oferta ? (
                              <>
                                <p className="font-semibold text-green-500">{juego.precio}€</p>
                                <p className="text-sm text-gray-500 line-through">{juego.precio_original}€</p>
                              </>
                            ) : (
                              <p className="font-semibold">{juego.precio}€</p>
                            )
                          )}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex items-center gap-4">
          {user && (
            <>
              <div className="dropdown dropdown-end" ref={dropdownRef}>
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle"
                  onClick={handleCartIconClick}
                >
                  <div className="indicator">
                    <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6" />
                    <span className="badge badge-sm indicator-item">{cartItems.reduce((acc, item) => acc + item.cantidad, 0)}</span>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-custom-dropdown mt-5 z-[1] w-[500px] max-h-[650px] overflow-y-auto">
                    <div className="bg-[#292929] bg-opacity-95 text-white backdrop-blur-lg backdrop-saturate-100 shadow-md py-4 px-6 rounded-md w-full max-h-full overflow-y-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl text-white">Carrito</h2>
                        <button className="text-gray-400 hover:text-red-600" onClick={() => setIsDropdownOpen(false)}>
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                      {isPaymentSuccess ? (
                        <div className="flex flex-col items-center my-4">
                          <FontAwesomeIcon icon={faCheckCircle} className="h-8 w-8 text-green-500" />
                          <p>Pago realizado con éxito</p>
                        </div>
                      ) : (
                        <>
                          {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center">
                              <FontAwesomeIcon icon={faShoppingCart} className="h-12 w-12 text-white" />
                              <p className="text-white mt-2">Carrito vacío</p>
                            </div>
                          ) : (
                            <>
                              <div className="overflow-y-auto max-h-[400px]">
                                {cartItems.map((item, index) => (
                                  <div key={index} className="flex items-center gap-4 py-2 px-2 cursor-pointer hover:bg-gray-700 rounded-lg">
                                    <div className="w-20 h-20 relative">
                                      <img src={item.foto} alt={item.titulo} className="object-cover w-full h-full rounded-md" />
                                    </div>
                                    <div className="flex-1 flex flex-col justify-between">
                                      <p className="font-semibold text-white">{item.titulo}</p>
                                      <p className={`font-semibold ${item.oferta ? 'text-green-500' : 'text-white'}`}>{(item.precio * item.cantidad).toFixed(2)}€</p>
                                    </div>
                                    <div className="flex items-center">
                                      <button
                                        className="text-white hover:text-blue-500 transition-colors duration-300 mx-1"
                                        onClick={() => handleDecreaseQuantity(index)}
                                      >
                                        <FontAwesomeIcon icon={faMinus} />
                                      </button>
                                      <p className="text-white mx-2">{item.cantidad}</p>
                                      <button
                                        className="text-white hover:text-blue-500 transition-colors duration-300 mx-1"
                                        onClick={() => handleIncreaseQuantity(index)}
                                      >
                                        <FontAwesomeIcon icon={faPlus} />
                                      </button>
                                      <button
                                        className="text-white hover:text-red-500 transition-colors duration-300 ml-2"
                                        onClick={() => handleRemoveFromCart(index)}
                                      >
                                        <FontAwesomeIcon icon={faTrash} />
                                      </button>
                                    </div>
                                  </div>
                                ))}
                              </div>
                              <div className="sticky bottom-0 left-0 right-0 bg-[#292929] bg-opacity-95 text-white backdrop-blur-lg backdrop-saturate-100 py-4 px-6">
                                <p className="text-right text-white font-semibold">Total: {calculateTotalPrice()}€</p>
                                <button className="w-full bg-blue-500 text-white hover:bg-white hover:text-black py-2 rounded-lg mt-2" onClick={handlePayment} disabled={isLoading}>
                                  {isLoading ? "Procesando..." : "Realizar Pago"}
                                </button>
                              </div>
                            </>
                          )}
                          {isLoading && (
                            <div className="flex justify-center items-center my-4">
                              <div className="loader">
                                <svg viewBox="0 0 80 80">
                                  <circle id="test" cx="40" cy="40" r="32"></circle>
                                </svg>
                              </div>
                              <div className="loader triangle">
                                <svg viewBox="0 0 86 80">
                                  <polygon points="43 8 79 72 7 72"></polygon>
                                </svg>
                              </div>
                              <div className="loader">
                                <svg viewBox="0 0 80 80">
                                  <rect x="8" y="8" width="64" height="64"></rect>
                                </svg>
                              </div>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </>
          )}
          <div className="flex items-center gap-1">
            {!user && (
              <Link href="/sign-in">
                <button className="button-nav">
                  Sign up
                </button>
              </Link>
            )}
            {user && (
              <UserButton />
            )}
          </div>
        </div>
      </div>
    </main>
  );
}


// CAMBIO AQUI