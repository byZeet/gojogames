'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import mastercard from '../../public/assets/icons/mastercard.svg';
import paypal from '../../public/assets/icons/paypal.svg';
import visa from '../../public/assets/icons/visa.svg';
import currency from '../../public/assets/icons/currency.svg';
import location from '../../public/assets/icons/location.svg';
import language from '../../public/assets/icons/language.svg';
import instagram from '../../public/assets/icons/instagram.svg';
import x from '../../public/assets/icons/x.svg';
import discord from '../../public/assets/icons/discord.svg';
import twitch from '../../public/assets/icons/twitch.svg';
import youtube from '../../public/assets/icons/youtube.svg';
import securepay from '../../public/assets/icons/securepay.svg';

import España from '../../public/assets/img/espana.png';
import Japon from '../../public/assets/img/Japon.png';
import Reinounido from '../../public/assets/img/reino-unido.png';
import USA from '../../public/assets/img/estados-unidos.png';

import './Footer.scss';

export const Footer = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('España');
  const [selectedLanguage, setSelectedLanguage] = useState('Español');
  const [selectedCurrency, setSelectedCurrency] = useState('EUR');

  const handleCountrySelect = (country: string, language: string, currency: string) => {
    setSelectedCountry(country);
    setSelectedLanguage(language);
    setSelectedCurrency(currency);
    setDropdownOpen(false);
  };

  return (
    <main>
      <div className='footer-container' style={{ backgroundColor: '#1B1B1B' }}>
        <div className='custom-gap-footer flex flex-col md:flex-row justify-center gap-5 w-full h-fit mt-20 pt-10 px-5 md:px-20'>
          <div className='gap-5'>
            <h1 className='text-xl'>Sobre GojoGames</h1>
            <div className='mt-3' style={{ color: '#7D7D7D' }}>
              <p>Sobre Nosotros</p>
              <p>Términos y Condiciones</p>
              <p>Política de privacidad y cookies</p>
            </div>
          </div>
          <div>
            <h1 className='text-xl'>Productos</h1>
            <div className='mt-3' style={{ color: '#7D7D7D' }}>
              <p>Todos los productos</p>
              <p>Más vendidos</p>
              <p>Reservas</p>
            </div>
          </div>
          <div>
            <h1 className='text-xl'>Comunidad</h1>
            <div className='mt-3' style={{ color: '#7D7D7D' }}>
              <p>FAQ</p>
              <p>Contacto</p>
              <p>Programa BETA Games</p>
            </div>
          </div>
          <div>
            <h1 className='text-xl'>Métodos de pago</h1>
            <div className='flex mt-3 gap-2'>
              <div style={{ width: '50px', height: 'auto' }}>
                <Image src={visa} alt='icono-visa' />
              </div>
              <div style={{ width: '50px', height: 'auto' }}>
                <Image src={mastercard} alt='icono-mastercard' />
              </div>
              <div style={{ width: '50px', height: 'auto' }}>
                <Image src={paypal} alt='icono-paypal' />
              </div>
            </div>
          </div>
          <div style={{ width: '230px', height: 'auto' }}>
            <Image src={securepay} alt='icono-securepay' />
          </div>
        </div>
        <div className='flex justify-center gap-5 mt-10 mb-4'>
          <div style={{ width: '35px', height: 'auto' }}>
            <Image src={instagram} alt='icono-insta' className='hover:transform hover:translate-y-[-8px] transition-transform duration-300' />
          </div>
          <div style={{ width: '35px', height: 'auto' }}>
            <Image src={x} alt='icono-x' className='hover:transform hover:translate-y-[-8px] transition-transform duration-300' />
          </div>
          <div style={{ width: '35px', height: 'auto' }}>
            <Image src={discord} alt='icono-discord' className='hover:transform hover:translate-y-[-8px] transition-transform duration-300' />
          </div>
          <div style={{ width: '35px', height: 'auto' }}>
            <Image src={twitch} alt='icono-twitch' className='hover:transform hover:translate-y-[-8px] transition-transform duration-300' />
          </div>
          <div style={{ width: '35px', height: 'auto' }}>
            <Image src={youtube} alt='icono-youtube' className='hover:transform hover:translate-y-[-8px] transition-transform duration-300' />
          </div>
        </div>

        <hr className="mx-20" style={{ color: '#7D7D7D' }} /> {/* Aquí se añade la línea divisoria */}
        <div className='mx-20'>
          <div className='footer-bottom mt-5 pb-5 custom-color-rg'>
            <div className='footer-selectors-container flex flex-col md:flex-row md:justify-between gap-5 md:gap-0 w-full'>
              <div className='footer-copyright order-2 md:order-1 text-center md:text-left'>
                <h2 style={{ color: '#ffffff' }}>Copyright © 2024 GojoGames - All rights reserved</h2>
              </div>
              <div className='footer-selectors flex flex-row gap-2 justify-center items-center md:justify-end md:gap-5 order-1 md:order-2'>
                <div className="relative">
                  <div onClick={() => setDropdownOpen(!dropdownOpen)} className="cursor-pointer flex items-center gap-2">
                    <div style={{ width: '20px', height: 'auto' }}>
                      <Image src={location} alt='icono-location' />
                    </div>
                    <h3 style={{ color: '#ffffff' }}>{selectedCountry || 'Seleccionar país'}</h3>
                  </div>
                  {dropdownOpen && (
                    <div className="absolute bg-neutral-800 shadow-md p-2 rounded-md bottom-8 right-0 z-10 overflow-y-auto max-h-80 w-56">
                      <div className="flex flex-col gap-1">
                        <div className='flex gap-1'>
                          <div style={{ width: '24px', height: 'auto' }}>
                            <Image src={España} alt='icono-españa' />
                          </div>
                          <h3 onClick={() => handleCountrySelect('España', 'Español', 'EUR')} className={`cursor-pointer ${selectedCountry === 'España' ? 'text-white' : 'hover:text-white'}`}>España (EUR)</h3>
                        </div>
                        <div className="flex gap-1">
                          <div style={{ width: '24px', height: 'auto' }}>
                            <Image src={USA} alt='icono-usa' />
                          </div>
                          <h3 onClick={() => handleCountrySelect('Estados Unidos', 'Inglés', 'USD')} className={`cursor-pointer ${selectedCountry === 'Estados Unidos' ? 'text-white' : 'hover:text-white'}`}>Estados Unidos (USD)</h3>
                        </div>
                        <div className="flex gap-1">
                          <div style={{ width: '24px', height: 'auto' }}>
                            <Image src={Reinounido} alt='icono-reinounido' />
                          </div>
                          <h3 onClick={() => handleCountrySelect('Reino Unido', 'Inglés', 'GBP')} className={`cursor-pointer ${selectedCountry === 'Reino Unido' ? 'text-white' : 'hover:text-white'}`}>Reino Unido (GBP)</h3>
                        </div>
                        <div className="flex gap-1">
                          <div style={{ width: '24px', height: 'auto' }}>
                            <Image src={Japon} alt='icono-japon' />
                          </div>
                          <h3 onClick={() => handleCountrySelect('Japón', 'Japonés', 'JPY')} className={`cursor-pointer ${selectedCountry === 'Japón' ? 'text-white' : 'hover:text-white'}`}>Japón (JPY)</h3>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <h3>| </h3>
                <div style={{ width: '20px', height: 'auto' }}>
                  <Image src={language} alt='icono-lenguaje' />
                </div>
                <h3 style={{ color: '#ffffff' }}>{selectedLanguage}</h3>
                <h3>| </h3>
                <div style={{ width: '20px', height: 'auto' }}>
                  <Image src={currency} alt='icono-moneda' />
                </div>
                <h3 style={{ color: '#ffffff' }}>{selectedCurrency}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
