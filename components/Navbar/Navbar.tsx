'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { UserButton, useUser, useClerk } from '@clerk/nextjs';
import Image from 'next/image';
import gojogameslogo from '../../public/assets/img/gojogameslogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash, faPlus, faMinus, faShoppingCart, faCheckCircle, faCreditCard, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { getJuegosBuscar } from '@/lib/actions/juegos.actions';
import { createOrders } from '@/lib/actions/orders.actions';
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
  const { signOut } = useClerk();

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

  useEffect(() => {
    if (user === null) {
      localStorage.removeItem('cart');
      setCartItems([]);
    }
  }, [user]);

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
              <div className="bg-[#101416] bg-opacity-95 text-white backdrop-blur-lg backdrop-saturate-100 shadow-md py-4 px-6 rounded-md w-[90%] max-h-[940px] overflow-y-auto">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-white">[{juegosEncontrados.length}] Resultados para "{searchValue}"</p>
                  <button className="text-gray-400 hover:text-red-600" type="reset" onClick={() => setSearchValue("")}>
                    <FontAwesomeIcon icon={faTimes} />
                  </button>
                </div>
                <div className="max-h-[761px] overflow-y-auto pr-2">
                  {juegosEncontrados.map((juego, index) => (
                    <Link href={`/games/${juego._id}`} key={index} onClick={handleResultClick}>
                      <div className="flex items-center gap-4 py-2 px-2 cursor-pointer custom-hover-dropdown rounded-lg">
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
                  <div className="indicator text-white">
                    <FontAwesomeIcon icon={faShoppingCart} className="h-6 w-6 " />
                    <span className="badge badge-sm indicator-item text-white bg-blue-500 border-blue-500">{cartItems.reduce((acc, item) => acc + item.cantidad, 0)}</span>
                  </div>
                </div>
                {isDropdownOpen && (
                  <div className="absolute top-full left-custom-dropdown mt-5 z-[1] w-[500px] max-h-[650px] overflow-y-auto">
                    <div className="bg-[#101416] bg-opacity-95 text-white backdrop-blur-lg backdrop-saturate-100 shadow-md py-4 px-6 rounded-md w-full custom-dropdown-height overflow-y-auto">
                      <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl text-white">Carrito</h2>
                        <button className="text-gray-400 hover:text-red-600" onClick={() => setIsDropdownOpen(false)}>
                          <FontAwesomeIcon icon={faTimes} />
                        </button>
                      </div>
                      {isLoading ? (
                        <div className="flex flex-col items-center justify-center my-4 gap-5">
                          <div className="w-full gap-x-2 flex justify-center items-center">
                            <div
                              className="w-5 h-5 rounded-full bg-[#93C5FD] animate-pulse"
                            ></div>
                            <div
                              className="w-5 h-5 rounded-full bg-[#3B82F6] animate-pulse"
                            ></div>
                            <div
                              className="w-5 h-5 rounded-full bg-[#1D4ED8] animate-pulse"
                            ></div>
                          </div>
                          <p>Procesando solicitud de pago</p>
                        </div>
                      ) : isPaymentSuccess ? (
                        <div className="flex flex-col items-center my-4 gap-4">
                          <FontAwesomeIcon icon={faCheckCircle} className="h-10 w-10 text-green-500" />
                          <p>Pago realizado con éxito</p>
                        </div>
                      ) : (
                        <>
                          {cartItems.length === 0 ? (
                            <div className="flex flex-col items-center justify-center flex-1">
                              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-white">
                                <path d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke="#ffffff" stroke-width="1.5"></path>
                                <path d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke="#ffffff" stroke-width="1.5"></path>
                                <path d="M11.5 12.5L14.5 9.5M14.5 12.5L11.5 9.5" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                                <path d="M2 3L2.26121 3.09184C3.5628 3.54945 4.2136 3.77826 4.58584 4.32298C4.95808 4.86771 4.95808 5.59126 4.95808 7.03836V9.76C4.95808 12.7016 5.02132 13.6723 5.88772 14.5862C6.75412 15.5 8.14857 15.5 10.9375 15.5H12M16.2404 15.5C17.8014 15.5 18.5819 15.5 19.1336 15.0504C19.6853 14.6008 19.8429 13.8364 20.158 12.3075L20.6578 9.88275C21.0049 8.14369 21.1784 7.27417 20.7345 6.69708C20.2906 6.12 18.7738 6.12 17.0888 6.12H11.0235M4.95808 6.12H7" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"></path>
                              </svg>
                              <p className="text-white text-lg mt-4">Carrito vacío</p>
                              <button className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-lg mt-4 flex justify-center items-center">
                                <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
                                <Link href="/myorders"><span>Mis Pedidos</span></Link>
                              </button>
                            </div>
                          ) : (
                            <>
                              <div className="overflow-y-auto max-h-[400px] pr-2">
                                {cartItems.map((item, index) => (
                                  <div key={index} className="flex items-center gap-4 py-2 px-2 cursor-pointer custom-hover-dropdown rounded-lg">
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
                              <div className="sticky bottom-0 left-0 right-0 text-white py-4 px-6">
                                <p className="text-right text-white font-semibold">Total: {calculateTotalPrice()}€</p>
                                <button className="w-full bg-green-600 text-white hover:bg-green-700 py-2 rounded-lg mt-2 flex justify-center items-center" onClick={handlePayment} disabled={isLoading}>
                                  {isLoading ? (
                                    <span>Procesando...</span>
                                  ) : (
                                    <>
                                      <FontAwesomeIcon icon={faCreditCard} className="mr-2" />
                                      <span>Realizar Pago</span>
                                    </>
                                  )}
                                </button>
                                <button className="w-full bg-blue-500 text-white hover:bg-blue-600 py-2 rounded-lg mt-2 flex justify-center items-center">
                                  <FontAwesomeIcon icon={faClipboardList} className="mr-2" />
                                  <Link href="/myorders"><span>Mis Pedidos</span></Link>
                                </button>
                              </div>
                            </>
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
