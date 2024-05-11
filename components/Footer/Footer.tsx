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
import Australia from '../../public/assets/img/Australia.png'
import España from '../../public/assets/img/España.png'
import Canada from '../../public/assets/img/Canada.png'
import Japon from '../../public/assets/img/Japon.png'
import Inglaterra from '../../public/assets/img/Inglaterra.png'
import USA from '../../public/assets/img/USA.png'

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
      <div className='footer-container ' style={{ backgroundColor: '#1B1B1B' }}>
        <div className='flex justify-center gap-52 w-full h-fit mt-20 pt-10 pl-20 pr-20 '>
          <div className='gap-5'>
            <h1 className=' text-xl'>Sobre GojoGames</h1>
            <div className='mt-3' style={{ color: '#7D7D7D' }}>
              <p>Sobre Nosotros</p>
              <p>Términos y Condiciones</p>
              <p>Política de privacidad y cookies</p>
            </div>
          </div>
          <div>
            <h1 className=' text-xl'>Productos</h1>
            <div className='mt-3' style={{ color: '#7D7D7D' }}>
              <p>Todos los productos</p>
              <p>Más vendidos</p>
              <p>Reservas</p>
            </div>
          </div>
          <div>
            <h1 className=' text-xl'>Comunidad</h1>
            <div className='mt-3'  style={{ color: '#7D7D7D' }}>
              <p>FAQ</p>
              <p>Contacto</p>
              <p>Programa BETA Games</p>
            </div>
          </div>
          <div>
            <h1 className=' text-xl'>Métodos de pago</h1>
            <div className='flex mt-3 gap-2'>
              <Image src={visa} alt=' ' width={50} height={50}/>
              <Image src={mastercard} alt=' ' width={50} height={50}/>
              <Image src={paypal} alt=' ' width={50} height={50}/>
            </div>
          </div>
          <div>
            <Image src={securepay} alt=' ' width={230} height={50}/>
          </div>
        </div>
        <div className='flex justify-center gap-5 mt-10 mb-4'>
  <Image src={instagram} alt=' ' width={35} height={35} className='hover:transform hover:translate-y-[-8px] transition-transform duration-300'/>
  <Image src={x} alt=' ' width={35} height={35} className='hover:transform hover:translate-y-[-8px] transition-transform duration-300'/>
  <Image src={discord} alt=' ' width={35} height={35} className='hover:transform hover:translate-y-[-8px] transition-transform duration-300'/>
  <Image src={twitch} alt=' ' width={35} height={35} className='hover:transform hover:translate-y-[-8px] transition-transform duration-300'/>
  <Image src={youtube} alt=' ' width={35} height={35} className='hover:transform hover:translate-y-[-8px] transition-transform duration-300'/>
</div>

        <hr className=" mx-20" style={{ color: '#7D7D7D' }} /> {/* Aquí se añade la línea divisoria */}
        <div className='mx-20'>
          <div className='flex justify-between mt-5 pb-5 custom-color-rg'>
            <div>
              <h2 style={{ color: '#ffffff' }}>Copyright © 2024 GojoGames - All rights reserved</h2>
            </div>
            <div className='flex gap-2 justify-center'>
            <div className="relative">
  <div onClick={() => setDropdownOpen(!dropdownOpen)} className="cursor-pointer flex items-center gap-2">
    <Image src={location} alt=' ' width={20} height={20}/>
    <h3 style={{ color: '#ffffff' }}>{selectedCountry || 'Seleccionar país'}</h3>
  </div>
  {dropdownOpen && (
    <div className="absolute bg-neutral-800 shadow-md p-2 rounded-md bottom-8 right-0 z-10 overflow-y-auto max-h-80 w-56">
      {/* Aquí puedes agregar los otros países que se mostrarán en el desplegable */}
      <div className="flex flex-col gap-1">
        <div className='flex gap-1'>
          <Image src={España} alt=' ' width={24} height={24}/>
          <h3 onClick={() => handleCountrySelect('España', 'Español', 'EUR')} className={`cursor-pointer ${selectedCountry === 'España' ? 'text-white' : 'hover:text-white'}`}>España (EUR)</h3>
        </div>
        <div className="flex gap-1">
          <Image src={USA} alt=' ' width={24} height={24} />
          <h3 onClick={() => handleCountrySelect('Estados Unidos', 'Inglés', 'USD')} className={`cursor-pointer ${selectedCountry === 'Estados Unidos' ? 'text-white' : 'hover:text-white'}`}>Estados Unidos (USD)</h3>
        </div>
        <div className="flex gap-1">
          <Image src={Inglaterra} alt=' ' width={24} height={24} />
          <h3 onClick={() => handleCountrySelect('Reino Unido', 'Inglés', 'GBP')} className={`cursor-pointer ${selectedCountry === 'Reino Unido' ? 'text-white' : 'hover:text-white'}`}>Reino Unido (GBP)</h3>
        </div>
        <div className="flex gap-1">
          <Image src={Japon} alt=' ' width={24} height={24} />
          <h3 onClick={() => handleCountrySelect('Japón', 'Japonés', 'JPY')} className={`cursor-pointer ${selectedCountry === 'Japón' ? 'text-white' : 'hover:text-white'}`}>Japón (JPY)</h3>
        </div>
        <div className="flex gap-1">
          <Image src={Canada} alt=' ' width={24} height={24} />
          <h3 onClick={() => handleCountrySelect('Canadá', 'Inglés/Francés', 'CAD')} className={`cursor-pointer ${selectedCountry === 'Canadá' ? 'text-white' : 'hover:text-white'}`}>Canadá (CAD)</h3>
        </div>
        <div className="flex gap-1">
          <Image src={Australia} alt=' ' width={24} height={24} />
          <h3 onClick={() => handleCountrySelect('Australia', 'Inglés', 'AUD')} className={`cursor-pointer ${selectedCountry === 'Australia' ? 'text-white' : 'hover:text-white'}`}>Australia (AUD)</h3>
        </div>
      </div>
    </div>
  )}
</div>

              <h3>| </h3>
              <Image src={language} alt=' ' width={20} height={20}/>
              <h3 style={{ color: '#ffffff' }}>{selectedLanguage}</h3>
              <h3>| </h3>
              <Image src={currency} alt=' ' width={20} height={20}/>
              <h3 style={{ color: '#ffffff' }}>{selectedCurrency}</h3>
            </div>
          </div>
        </div>


      </div>
    </main>
  );
};
