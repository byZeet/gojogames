'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import gojogameslogo from '../../public/assets/img/gojogameslogo.svg';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faSliders } from '@fortawesome/free-solid-svg-icons';
import { getJuegosBuscar } from '@/lib/actions/juegos.actions';
import search from '../../public/assets/icons/search-svgrepo-com.svg';
import deleteicon from '../../public/assets/icons/delete-svgrepo-com.svg';

interface Juego {
  titulo: string;
  precio: number;
  genero: string;
  foto: string;
  // Agrega aquí las demás propiedades necesarias
}

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [showSettings, setShowSettings] = useState(true);
  const [juegosEncontrados, setJuegosEncontrados] = useState<Juego[]>([]);
  const [isMobile, setIsMobile] = useState(false); // Nuevo estado para verificar si es móvil
  const { user } = useUser();

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      setIsTop(scrolled === 0);
    }

    function handleResize() {
      setIsMobile(window.innerWidth <= 550); // Actualiza el estado basado en el ancho de la pantalla
    }

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize(); // Verifica el tamaño de la pantalla al inicio
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

  return (
    <main className=''>
      <div className={`navbar ${isTop ? 'navbar-top' : 'navbar-scrolled'}`}>
        <div className="flex justify-center items-center gap-1">
          <Link href="/">
            <button className="btn btn-ghost text-xl ml-16">
              <Image src={gojogameslogo} alt="" width={60} height={60} />
            </button>
          </Link>
        </div>
        <div className="flex-1 flex justify-center items-center gap-1">
        <form className="form">
      <div className="relative">
      {isMobile ? ( // Renderiza solo el icono de búsqueda en dispositivos móviles
        <button className='search-icon'>
          <Image src={search} alt="" width={20} height={20} />
        </button>
      ) : (
        <button className='search-icon hidden md:block'> {/* Oculta el icono de búsqueda en dispositivos no móviles */}
          <Image src={search} alt="" width={20} height={20} />
        </button>
      )}
        <input
          className={`input rounded-full pl-${isMobile ? '8' : '10'} py-3 pr-${isMobile ? '10' : '12'} border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md bg-white`}
          placeholder="Buscar por título..."
          value={searchValue}
          onChange={handleInputChange}
          type="text"
        />
        {!isMobile && ( // Renderiza el botón de limpiar en dispositivos no móviles
          <button className="btn-close text-gray-400 hover:text-red-600" type="reset" onClick={() => setSearchValue("")}>
            <Image src={deleteicon} alt="" width={20} height={20} />
          </button>
        )}
      </div>
      {searchValue && (
        <div className="custom-width-desplegable absolute left-0 right-0 mt-1 z-10 flex justify-center">
      <div className="desplegable-search shadow-md py-4 px-6 rounded-md">
        <div className="another-custom-search flex justify-between items-center mb-2">
          <div className='custom-cards-gap'>
            <p className="text-gray-400">[{juegosEncontrados.length}] Resultados para "{searchValue}"</p>
            {!isMobile && ( // Renderiza el botón de cerrar en dispositivos no móviles
              <button className='btn-close text-gray-400 hover:text-red-600' type="reset" onClick={() => setSearchValue("")}>
                <FontAwesomeIcon  icon={faTimes} />
              </button>
            )}
          </div>
        </div>
        <div className="juegos-encontrados-container">
          {juegosEncontrados.map((juego, index) => (
            <Link href="/game">
              <div key={index} className="custom-item-juego-despliegue flex items-center gap-4 py-2">
                <div className=" w-52 h-24 relative">
                  <img src={juego.foto} alt={juego.titulo} className="object-cover w-full h-full rounded-md" />
                </div>
                <div className="flex-1">
                  <p className="font-semibold">{juego.titulo}</p>
                  <p>{juego.genero}</p>
                </div>
                <div>
                  <p className="font-semibold">€{juego.precio}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
        </div>
      )}
          </form>
        </div>
        <button className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
      </button>
      <div className="dropdown dropdown-end mr-5">
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
        <span className="badge badge-sm indicator-item">8</span>
      </div>
        </div>
      
        <div className="dropdown-center mt-3 z-[1] card card-compact dropdown-content max-w-[400px] ">
        <div className="carrito-container">
          <div className="card-game-carrito-nav">
            
          </div>
          <Link href="/payment"><button className="btn color-custom-btn-carrito btn-block">Ver Carrito</button></Link>
        </div>
        </div>
         
      </div>
        <div className="flex justify-center items-center gap-1">
          <div className='flex items-center gap-2  mr-10'>
            {!user && (
              <>
                <Link href="/sign-in">
                  <button className="button-nav mr-10">
                    Sign up
                    <div className="arrow-wrapper-nav">
                      <div className="arrow-nav"></div>
                    </div>
                  </button>
                </Link>
              </>
            )}
            {user && (
              <div className='mr-10'>
                <UserButton/>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
