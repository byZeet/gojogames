import React from 'react';
import Image from 'next/image';
import wallpaper2 from '../../public/assets/img/wallpaper2.jpg';
import './Slider.scss';

export const Slider = () => {
  return (
    <main className='w-full'>
      <div className="wallpaper-container relative">
        <div className="absolute inset-0" style={{background: 'linear-gradient(to bottom, transparent, #151515)'}}></div>
        <Image src={wallpaper2} alt="CarrouselPortada" layout="responsive" width={1920} height={450} className="z-10"/>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white z-20 mt-20 gap-5">
          <h2 className="text-2xl md:text-4xl font-bold text-center px-2">Call of Duty Modern Warfare</h2>
          <div className="flex items-center bg-blue-500 text-white rounded-full py-1 px-4 md:px-2">
            45,99€
          </div>
        </div>
      </div>
    </main>
  );
};
