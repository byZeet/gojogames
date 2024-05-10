import React from 'react'
import Image from 'next/image'
import './CardCategory.scss';
/**
  * WALLPAPERS IMPORTS
*/
import wallpaperaccion from '../../public/assets/img/wallpaperaccion.svg'
import wallpaperarcade from '../../public/assets/img/wallpaperarcade.svg'
import wallpaperaventura from '../../public/assets/img/wallpaperaventura.svg'
import wallpapercoop from '../../public/assets/img/wallpapercoop.svg'
import wallpaperfps from '../../public/assets/img/wallpaperfps.svg'
import wallpaperindie from '../../public/assets/img/wallpaperindie.svg'
import wallpaperlucha from '../../public/assets/img/wallpaperlucha.svg'
import wallpaperrpg from '../../public/assets/img/wallpaperrpg.svg'
import wallpapersimulacion from '../../public/assets/img/wallpapersimulacion.svg'
import wallpaperdeporte from '../../public/assets/img/wallpaperdeporte.svg'
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
import arrowright from '../../public/assets/icons/chevron-compact-right.svg'


export const CardCategory = () => {
  return (
    <div>

<div className='flex gap-1 ml-20 mb-28 items-center title-category'>
        <h1 className='text-3xl'>Categorías</h1>
        <Image src={arrowright} alt=' ' width={36} height={36}/>
      </div>
<div className='flex justify-center items-center flex-col'>
    <div className="grid-container">
      {/* ACCION */}
        <div className="image-container">
            <Image src={wallpaperaccion} alt='' width={350} height={200} className="background-image"/>
            <div className="card-container">
                <Image src={accionmain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Acción</p>
            </div>
        </div>
        {/* AVENTURA */}
        <div className="image-container">
            <Image src={wallpaperaventura} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container">
                <Image src={aventuramain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Aventura</p>
            </div>
        </div>
        {/* ARCADE */}
        <div className="image-container">
            <Image src={wallpaperarcade} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-arcade">
                <Image src={arcademain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Arcade</p>
            </div>
        </div>
        {/* FPS */}
        <div className="image-container">
            <Image src={wallpaperfps} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container">
                <Image src={fpsmain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>FPS</p>
            </div>
        </div>
        {/* INDIES */}
        <div className="image-container">
            <Image src={wallpaperindie} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-indies">
                <Image src={indiesmain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Indies</p>
            </div>
        </div>
        {/* SIMULACIÓN */}
        <div className="image-container">
            <Image src={wallpapersimulacion} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-simulacion">
                <Image src={simulacionmain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Simulación</p>
            </div>
        </div>
        {/* LUCHA */}
        <div className="image-container">
            <Image src={wallpaperlucha} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-lucha">
                <Image src={luchamain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Lucha</p>
            </div>
        </div>
        {/* RPG */}
        <div className="image-container">
            <Image src={wallpaperrpg} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-rpg">
                <Image src={rpgmain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>RPG</p>
            </div>
        </div>
        {/* COOP ONLINE */}
        <div className="image-container">
            <Image src={wallpapercoop} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-coop">
                <Image src={coopmain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Coop Online</p>
            </div>
        </div>
        {/* DEPORTE */}
        <div className="image-container">
            <Image src={wallpaperdeporte} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-deporte">
                <Image src={deportemain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Deporte</p>
            </div>
        </div>
        {/* GESTIÓN */}
        <div className="image-container">
            <Image src={wallpapergestion} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-gestion">
                <Image src={gestionmain} alt='' className="foreground-image"/>
            </div>
            <div className="text-container">
                <p>Gestión</p>
            </div>
        </div>
        {/* MMO */}
        <div className="image-container">
            <Image src={wallpapermmo} alt='' width={425} height={240} className="background-image"/>
            <div className="card-container custom-mmo">
                <Image src={coopmain} alt='' className="foreground-image"/>
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
