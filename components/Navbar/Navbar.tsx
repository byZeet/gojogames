'use client'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import gojogameslogo from '../../public/assets/img/gojogameslogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faTrash, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { getJuegosBuscar } from '@/lib/actions/juegos.actions';
import search from '../../public/assets/icons/search-svgrepo-com.svg';
import deleteicon from '../../public/assets/icons/delete-svgrepo-com.svg';

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

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [showSettings, setShowSettings] = useState(true);
  const [juegosEncontrados, setJuegosEncontrados] = useState<Juego[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { user } = useUser();

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      setIsTop(scrolled === 0);
    }

    function handleResize() {
      setIsMobile(window.innerWidth <= 768); // Ancho para considerar una vista móvil
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
              <div className="bg-[#292929] bg-opacity-95 text-white backdrop-blur-lg backdrop-saturate-100 shadow-md py-4 px-6 rounded-md w-4/5 max-h-[940px] overflow-y-auto">
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
          <button className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
          </button>
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div className="dropdown-center mt-5 z-[1] card card-compact dropdown-content max-w-[600px] mr-72">
              <div className="flex flex-col gap-2 p-4 rounded-lg bg-[#292929] bg-opacity-95 backdrop-blur-lg backdrop-saturate-100 w-80 h-full">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16">
                      <img src="/path-to-image.jpg" alt="Juego Ejemplo" className="object-cover w-full h-full rounded-md" />
                    </div>
                    <div>
                      <p className="font-semibold text-white">Juego Ejemplo</p>
                      <div className="flex items-center">
                        <p className="text-green-500 font-semibold mr-2">20€</p>
                        <p className="text-gray-500 line-through">30€</p>
                      </div>
                    </div>
                  </div>
                  <button className="text-white hover:text-red-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
                <div className="flex items-center justify-between mt-2">
                  <button className="text-white hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                  <p className="text-white">1</p>
                  <button className="text-white hover:text-blue-500 transition-colors duration-300">
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
                <Link href="/payment">
                  <button className="w-full bg-blue-500 text-white hover:bg-white hover:text-black py-2 rounded-lg mt-2">Ver Carrito</button>
                </Link>
              </div>
            </div>
          </div>
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
