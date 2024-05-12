'use client'
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/nextjs';
import Image from 'next/image';
import gojogameslogo from '../../public/assets/img/gojogameslogo.svg';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSliders } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isTop, setIsTop] = useState(true);
  const [searchValue, setSearchValue] = useState("");
  const [showSettings, setShowSettings] = useState(true); // Estado para controlar la visibilidad de los ajustes
  const {user} = useUser();

  useEffect(() => {
    function handleScroll() {
      const scrolled = window.scrollY;
      setIsTop(scrolled === 0);
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setSearchValue(inputValue);
  
    // Verifica si el valor del input está vacío
    if (inputValue.trim() === "") {
      setShowSettings(true); // Muestra los ajustes si el input está vacío
    } else {
      setShowSettings(false); // Oculta los ajustes si el input no está vacío
    }
  };

  // Función para manejar el clic en el botón de cerrar búsqueda
  const handleResetSearch = () => {
    setSearchValue(""); // Reinicia el valor del input
    setShowSettings(true); // Muestra los ajustes cuando se borra el contenido del input
  };

  return (
    <div className={`navbar ${isTop ? 'navbar-top' : 'navbar-scrolled'}`}>
      <div className="flex justify-center items-center gap-1">
        <Link href="/">
          <button className="btn btn-ghost text-xl ml-16">
            <Image src={gojogameslogo} alt="" width={60} height={60} />
          </button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center gap-1">
        <form className="form relative">
          <button className="absolute left-2 -translate-y-1/2 search-icon-nav p-1">
            <svg
              width="17"
              height="17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="search"
              className="w-5 h-5 text-gray-400"
            >
              <path
                d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                stroke="currentColor"
                strokeWidth="1.333"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <input
            className="input rounded-full px-8 py-3 border-2 border-transparent focus:outline-none focus:border-blue-500 placeholder-gray-400 transition-all duration-300 shadow-md bg-white"
            placeholder="GTA VI, Acción, Indie..."
            value={searchValue}
            onChange={handleInputChange}
            type="text"
          />
          {searchValue && (
            <button className="absolute right-3 text-gray-400 search-icon-nav hover:text-red-600 close-search-nav" type="reset" onClick={handleResetSearch}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
          )}
          {/* Mostrar los ajustes solo si showSettings es true */}
          {showSettings && (
            <button className="absolute right-10 -translate-y-1/2 settings-icon-nav p-1">
              <FontAwesomeIcon icon={faSliders} className="w-5 h-5 text-gray-400" />
            </button>
          )}
        </form>
      </div>
      <div className="dropdown dropdown-end mr-5">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span>
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
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
  );
}
