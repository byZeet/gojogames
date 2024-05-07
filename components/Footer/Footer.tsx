import React from 'react';
import './Footer.css'
import Image from 'next/image';
import mastercard from '../../public/assets/icons/mastercard.svg'
import paypal from '../../public/assets/icons/paypal.svg'
import visa from '../../public/assets/icons/visa.svg'
import currency from '../../public/assets/icons/currency.svg'
import location from '../../public/assets/icons/location.svg'
import language from '../../public/assets/icons/language.svg'
import instagram from '../../public/assets/icons/instagram.svg'
import x from '../../public/assets/icons/x.svg'
import discord from '../../public/assets/icons/discord.svg'
import twitch from '../../public/assets/icons/twitch.svg'
import youtube from '../../public/assets/icons/youtube.svg'
import securepay from '../../public/assets/icons/securepay.svg'


export const Footer = () => {
  return (
    <main>
      <div className='footer-container'>
        <div className='flex justify-center gap-32 w-full h-fit mt-20 p-10'>
          <div className='gap-5'>
            <h1>Sobre GojoGames</h1>
            <div className='mt-3'>
              <p>Sobre Nosotros</p>
              <p>Términos y Condiciones</p>
              <p>Política de privacidad y cookies</p>
            </div>
          </div>
          <div>
            <h1>Productos</h1>
            <div className='mt-3'>
              <p>Todos los productos</p>
              <p>Más vendidos</p>
              <p>Reservas</p>
            </div>
          </div>
          <div>
            <h1>Comunidad</h1>
            <div className='mt-3'>
              <p>FAQ</p>
              <p>Contacto</p>
              <p>Programa BETA Games</p>
            </div>
          </div>
          <div>
            <h1>Métodos de pago</h1>
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
          <Image src={instagram} alt=' ' width={35} height={35}/>
          <Image src={x} alt=' ' width={35} height={35}/>
          <Image src={discord} alt=' ' width={35} height={35}/>
          <Image src={twitch} alt=' ' width={35} height={35}/>
          <Image src={youtube} alt=' ' width={35} height={35}/>
        </div>
        <hr /> {/* Aquí se añade la línea divisoria */}
        <div className='flex justify-between ml-20 mr-20 mt-5 pb-5 custom-color-rg'>
          <div>
            <h2>Copyright © 2024 GojoGames - All rights reserved</h2>
          </div>
          <div className='flex gap-2 justify-center'>
            <Image src={location} alt=' ' width={20} height={20}/>
            <h3>España</h3>
            <h3>| </h3>
            <Image src={language} alt=' ' width={20} height={20}/>
            <h3>Español</h3>
            <h3>| </h3>
            <Image src={currency} alt=' ' width={20} height={20}/>
            <h3>EUR</h3>
          </div>
        </div>
      </div>
    </main>
  );
};
