'use client'

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import './ReviewsGame.scss'
import Image from 'next/image';
import Image1 from '../../public/assets/img/Card_Image_1.webp'
import Image2 from '../../public/assets/img/Card_Image_2.webp'
import Image3 from '../../public/assets/img/Card_Image_3.webp'
import Image4 from '../../public/assets/img/Card_Image_4.webp'
import Image5 from '../../public/assets/img/Card_Image_5.webp'

export const ReviewsGame = () => {
  return (
    <main>
      <div className='footer-container' style={{ backgroundColor: '#1B1B1B' }}>

        <div className='flex justify-center items-stretch custom-review-container w-full h-fit px-4 md:px-32 pt-10 pb-10'>
          <div className="flex flex-col md:flex-row gap-5 justify-center">
            {/* RESEÑAS */}
            <div className="cards-flex flex flex-col p-5 rounded-2xl bg-[rgba(18,18,18,0.75)] backdrop-blur-lg backdrop-filter backdrop-opacity-70" style={{ width: "100%", maxWidth: "360px" }}>
              <div className="flex">
                <div className="flex gap-4">
                <Image src={Image2} alt='foto-card-1' width={64} height={64} className="rounded-full fit-content"/>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center -mt-1">
                      <p className="font-semibold cursor-pointer text-[#3B82F6]">DJPalos</p>
                      <p className="text-sm text-[#7c7c7c] cursor-pointer hover:text-[#ff786e]">Seguir</p>
                    </div>
                    <div className="font-light text-md text-[#ffffff]">FIFA 22</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-[#FFCD02] text-xl tracking-[2px]">
                ★★★★
              </div>
              <div className="italic mt-2 text-[18px] text-[#ffffff] font-normal">
                A QUIEN NO LE MOLA ABRIR CAJAS
              </div>
              <div className="flex justify-between gap-6 text-[#ffffff] text-[12px] mt-4">
                <span className="flex items-center cursor-pointer hover:text-[#3B82F6]">
                  <FontAwesomeIcon icon={faShare} className="mr-1" /> Compartir
                </span>
                <span className="cursor-pointer">Feb 11</span>
                <span className="flex items-center gap-1 cursor-pointer">
                  <span className="text-[8px]"></span>hace 42 minutos
                </span>
              </div>
            </div>
            {/* RESEÑAS */}
            <div className="cards-flex flex flex-col p-5 rounded-2xl bg-[rgba(18,18,18,0.75)] backdrop-blur-lg backdrop-filter backdrop-opacity-70" style={{ width: "100%", maxWidth: "360px" }}>
              <div className="flex">
                <div className="flex gap-4">
                  <div>
                    <Image src={Image1} alt='foto-card-2' width={64} height={64} className="rounded-full fit-content"/>
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center -mt-1">
                      <p className="font-semibold cursor-pointer text-[#3B82F6]">MrBossFTW</p>
                      <p className="text-sm text-[#7c7c7c] cursor-pointer hover:text-[#ff786e]">Seguir</p>
                    </div>
                    <div className="font-light text-md text-[#ffffff]">Minecraft Edición Microsoft</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-[#FFCD02] text-xl tracking-[2px]">
                ★★★★
              </div>
              <div className="italic mt-2 text-[18px] text-[#ffffff] font-normal">
                Excelente juego y excelente servicio
              </div>
              <div className="flex justify-between gap-6 text-[#ffffff] text-[12px] mt-4">
                <span className="flex items-center cursor-pointer hover:text-[#3B82F6]">
                  <FontAwesomeIcon icon={faShare} className="mr-1" /> Compartir
                </span>
                <span className="cursor-pointer">Feb 10</span>
                <span className="flex items-center gap-1 cursor-pointer">
                  <span className="text-[8px]"></span>hace 10 minutos
                </span>
              </div>
            </div>
            {/* RESEÑAS */}
            <div className="cards-flex flex flex-col p-5 rounded-2xl bg-[rgba(18,18,18,0.75)] backdrop-blur-lg backdrop-filter backdrop-opacity-70" style={{ width: "100%", maxWidth: "360px" }}>
              <div className="flex">
                <div className="flex gap-4">
                <Image src={Image3} alt='foto-card-3' width={64} height={64} className="rounded-full fit-content"/>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center -mt-1">
                      <p className="font-semibold cursor-pointer text-[#3B82F6]">Papimiauw</p>
                      <p className="text-sm text-[#7c7c7c] cursor-pointer hover:text-[#ff786e]">Seguir</p>
                    </div>
                    <div className="font-light text-md text-[#ffffff]">Celeste</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-[#FFCD02] text-xl tracking-[2px]">
                ★★★★
              </div>
              <div className="italic mt-2 text-[18px] text-[#ffffff] font-normal">
                Como siempre, rápidos y efectivos 100% confiable
              </div>
              <div className="flex justify-between gap-6 text-[#ffffff] text-[12px] mt-4">
                <span className="flex items-center cursor-pointer hover:text-[#3B82F6]">
                  <FontAwesomeIcon icon={faShare} className="mr-1" /> Compartir
                </span>
                <span className="cursor-pointer">Mar 4</span>
                <span className="flex items-center gap-1 cursor-pointer">
                  <span className="text-[8px]"></span>hace 1 h
                </span>
              </div>
            </div>
            {/* RESEÑAS */}
            <div className="cards-flex flex flex-col p-5 rounded-2xl bg-[rgba(18,18,18,0.75)] backdrop-blur-lg backdrop-filter backdrop-opacity-70" style={{ width: "100%", maxWidth: "360px" }}>
              <div className="flex">
                <div className="flex gap-4">
                <Image src={Image4} alt='foto-card-4' width={64} height={64} className="rounded-full fit-content"/>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center -mt-1">
                      <p className="font-semibold cursor-pointer text-[#3B82F6]">GatoLoko</p>
                      <p className="text-sm text-[#7c7c7c] cursor-pointer hover:text-[#ff786e]">Seguir</p>
                    </div>
                    <div className="font-light text-md text-[#ffffff]">V Rising</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-[#FFCD02] text-xl tracking-[2px]">
                ★★★★
              </div>
              <div className="italic mt-2 text-[18px] text-[#ffffff] font-normal">
                Pa k emulaaaaa teniendo estooo lokooo
              </div>
              <div className="flex justify-between gap-6 text-[#ffffff] text-[12px] mt-4">
                <span className="flex items-center cursor-pointer hover:text-[#3B82F6]">
                  <FontAwesomeIcon icon={faShare} className="mr-1" /> Compartir
                </span>
                <span className="cursor-pointer">Feb 10</span>
                <span className="flex items-center gap-1 cursor-pointer">
                  <span className="text-[8px]"></span>hace 33 minutos
                </span>
              </div>
            </div>
            {/* RESEÑAS */}
            <div className="cards-flex flex flex-col p-5 rounded-2xl bg-[rgba(18,18,18,0.75)] backdrop-blur-lg backdrop-filter backdrop-opacity-70" style={{ width: "100%", maxWidth: "360px" }}>
              <div className="flex">
                <div className="flex gap-4">
                <Image src={Image5} alt='foto-card-5' width={64} height={64} className="rounded-full fit-content"/>
                  <div className="flex flex-col gap-1">
                    <div className="flex gap-3 items-center -mt-1">
                      <p className="font-semibold cursor-pointer text-[#3B82F6]">Requeson221</p>
                      <p className="text-sm text-[#7c7c7c] cursor-pointer hover:text-[#ff786e]">Seguir</p>
                    </div>
                    <div className="font-light text-md text-[#ffffff]">The Witcher 3: Wild Hunt</div>
                  </div>
                </div>
              </div>
              <div className="mt-4 text-[#FFCD02] text-xl tracking-[2px]">
                ★★★★
              </div>
              <div className="italic mt-2 text-[18px] text-[#ffffff] font-normal">
                Juegazooooooo lo tenia pa la play y ahora en pc
              </div>
              <div className="flex justify-between gap-6 text-[#ffffff] text-[12px] mt-4">
                <span className="flex items-center cursor-pointer hover:text-[#3B82F6]">
                  <FontAwesomeIcon icon={faShare} className="mr-1" /> Compartir
                </span>
                <span className="cursor-pointer">Feb 16</span>
                <span className="flex items-center gap-1 cursor-pointer">
                  <span className="text-[8px]"></span>hace 41 minutos
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}
