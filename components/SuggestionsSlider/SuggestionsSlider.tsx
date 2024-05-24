'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Link from 'next/link';

import { Juego } from '@/types';

interface SuggestionsSliderProps {
  games: Juego[];
}

const SuggestionsSlider: React.FC<SuggestionsSliderProps> = ({ games }) => {
  return (
    <div className="w-full overflow-hidden">
      <Swiper
        spaceBetween={10}
        slidesPerView={2}
        breakpoints={{
          480: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 4,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 10,
          },
        }}
        className="w-full"
      >
        {games.map((game) => (
          <SwiperSlide key={game._id}>
            <Link href={`/games/${game._id}`}>
              <div className="bg-[#202020] p-2 rounded-lg shadow-lg flex flex-col cursor-pointer hover:bg-[#2c2c2c]" style={{ height: '210px' }}>
                <img className="w-full h-auto rounded-lg mb-2" src={game.foto} alt={game.titulo} style={{ maxHeight: '120px' }} />
                <div className="flex-grow">
                  <div className="text-left">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-xs font-bold truncate" style={{ maxWidth: '70%' }}>{game.titulo}</h3>
                      {!game.fecha && (
                        <p className={`text-xs font-semibold ml-2`} style={{ color: game.stock ? '#3fff3c' : '#ff3c3c' }}>
                          {game.stock ? 'En Stock' : 'Sin Stock'}
                        </p>
                      )}
                    </div>
                    <p className="text-xs mb-1 truncate">{game.genero}</p>
                  </div>
                </div>
                <div className="flex justify-between items-end mt-auto">
                  <div>
                    {game.fecha ? (
                      <p className="text-xs font-semibold text-green-500">Próximamente</p>
                    ) : (
                      game.oferta_aplicada ? (
                        <div className="flex items-center">
                          <p className="text-xs font-semibold text-green-500">{game.precio}€</p>
                          <p className="text-xs font-semibold line-through ml-2">{game.precio_original}€</p>
                        </div>
                      ) : (
                        <p className="text-xs font-semibold">{game.precio}€</p>
                      )
                    )}
                  </div>
                  {game.dlc && (
                    <div className="ml-auto">
                      <span className="text-xs font-semibold bg-[#7D7D7D] text-gray-900 px-2 py-1 rounded-full">DLC</span>
                    </div>
                  )}
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuggestionsSlider;
