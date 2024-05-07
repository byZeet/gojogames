import React from 'react';
import Image from 'next/image';
import controllerblack from '../../public/assets/img/controllerblack.png';
import controllerwhite from '../../public/assets/img/controllerwhite.png';
import './BetaGames.css';

export const Betagames = () => {
  return (
    <main className='mt-20'>
      <div className='container-general-beta'>
        <div className='left-section'>
          <div className='controller-container'>
            <Image className='controllerblack' src={controllerblack} alt=' ' width={1000} height={1000} />
          </div>
          <div className='controller-container'>
            <Image className='controllerwhite' src={controllerwhite} alt=' ' width={1000} height={1000} />
          </div>
        </div>
        <div className='right-section mt-2 mb-2 flex justify-evenly gap-10 items-center flex-col'>
          <div className="w-fit">
            <h1 className="text-2xl text-center">¡Únete a los programas BETA de nuestros juegos y sé parte del proceso de desarrollo!</h1>
          </div>
          <button className="btn btn-active btn-primary custom-color-btn-betagames w-62 h-16 text-2xl">ÚNETE AHORA</button>
          <div className='w-fit'>
            <p>¡Hazte escuchar y sé parte del futuro de la diversión virtual ahora!</p>
          </div>
          <div className='w-fit custom-beta-message'>
            <p><span className="font-bold">NUEVO</span> PROGRAMA BETA GAMES</p>
          </div>
        </div>
      </div>
    </main>
  );
};
