import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import './CardCategory.scss';
/**
  * WALLPAPERS IMPORTS
*/
import wallpaperaccion from '../../public/assets/img/wallpaperaccion.png'
import wallpaperarcade from '../../public/assets/img/wallpaperarcade.svg'
import wallpaperaventura from '../../public/assets/img/wallpaperaventura.png'
import wallpapercoop from '../../public/assets/img/wallpapercoop.svg'
import wallpaperfps from '../../public/assets/img/wallpaperfps.svg'
import wallpaperindie from '../../public/assets/img/wallpaperindie.svg'
import wallpaperlucha from '../../public/assets/img/wallpaperlucha.svg'
import wallpaperrpg from '../../public/assets/img/wallpaperrpg.svg'
import wallpapersimulacion from '../../public/assets/img/wallpapersimulacion.svg'
import wallpaperdeporte from '../../public/assets/img/wallpaperdeporte.png'
import wallpapermmo from '../../public/assets/img/wallpapermmo.svg'
import wallpapergestion from '../../public/assets/img/wallpapergestion.svg'
/**
  * IMAGE IMPORTS
*/
import accionmain from '../../public/assets/img/accionmain.svg'
import arcademain from '../../public/assets/img/arcademain.svg'
import aventuramain from '../../public/assets/img/aventuramain.svg'
import coopmain from '../../public/assets/img/coopmain.svg'
import fpsmain from '../../public/assets/img/fpsmain.svg'
import indiesmain from '../../public/assets/img/indiesmain.svg'
import luchamain from '../../public/assets/img/luchamain.svg'
import rpgmain from '../../public/assets/img/rpgmain.svg'
import gestionmain from '../../public/assets/img/gestionmain.png'
import deportemain from '../../public/assets/img/deportemain.png'
import simulacionmain from '../../public/assets/img/simulacionmain.svg'
import arrowright from '../../public/assets/icons/arrow-next-small-svgrepo-com.svg'


export const CardCategory = () => {
  return (
    <div className='w-full h-full md:px-16 px-0'>

      <div className='flex gap-1 pl-7 ml-8 mb-12 mt-10 items-center title-category w-fit'>
        <Link href="/">
          <h1 className='text-3xl'>Categorías</h1>
        </Link>
        <Image src={arrowright} alt='icono-flecha-category' width={36} height={36}/>
      </div>
      
      <div className='flex justify-center items-center flex-col'>
        <div className="w-fit h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-14 p-4 sm:p-16">
          {/* ACCION */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpaperaccion} alt='foto-accion' width={350} height={200} className="background-image rounded-lg"/>
            <div className="card-container">
              <Image src={accionmain} alt='foto-main.accion' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Acción</p>
            </div>
          </div>
          {/* AVENTURA */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpaperaventura} alt='foto-aventura' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container">
              <Image src={aventuramain} alt='foto-main-aventura' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Aventura</p>
            </div>
          </div>
          {/* ARCADE */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpaperarcade} alt='foto-arcade' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-arcade">
              <Image src={arcademain} alt='foto-main-arcade' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Arcade</p>
            </div>
          </div>
          {/* FPS */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpaperfps} alt='foto-fps' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container">
              <Image src={fpsmain} alt='foto-main-fps' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>FPS</p>
            </div>
          </div>
          {/* INDIES */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpaperindie} alt='foto-indie' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-indies">
              <Image src={indiesmain} alt='foto-main-indie' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Indies</p>
            </div>
          </div>
          {/* SIMULACIÓN */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpapersimulacion} alt='foto-simulacion' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-simulacion">
              <Image src={simulacionmain} alt='foto-main-simulacion' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Simulación</p>
            </div>
          </div>
          {/* LUCHA */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpaperlucha} alt='foto-lucha' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-lucha">
              <Image src={luchamain} alt='foto-main-lucha' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Lucha</p>
            </div>
          </div>
          {/* RPG */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpaperrpg} alt='foto-rpg' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-rpg">
              <Image src={rpgmain} alt='foto-main-rpg' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>RPG</p>
            </div>
          </div>
          {/* COOP ONLINE */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpapercoop} alt='foto-coop' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-coop">
              <Image src={coopmain} alt='foto-main-coop' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Coop Online</p>
            </div>
          </div>
          {/* DEPORTE */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpaperdeporte} alt='foto-deporte' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-deporte">
              <Image src={deportemain} alt='foto-main-deporte' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Deporte</p>
            </div>
          </div>
          {/* GESTIÓN */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpapergestion} alt='foto-gestion' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-gestion">
              <Image src={gestionmain} alt='foto-main-gestion' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>Gestión</p>
            </div>
          </div>
          {/* MMO */}
          <div className="image-container w-full sm:w-80 md:w-96">
            <Image src={wallpapermmo} alt='foto-mmo' width={425} height={240} className="background-image rounded-lg"/>
            <div className="card-container custom-mmo">
              <Image src={coopmain} alt='foto-main-mmo' className="foreground-image"/>
            </div>
            <div className="text-container">
              <p>MMO</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
