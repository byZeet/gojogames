import React from 'react';
import Image from 'next/image';
import gojogameslogo from '../../public/assets/img/gojogameslogo.png';
import './Loader.scss'

const Loader = () => (
  <div className="flex flex-col items-center justify-center min-h-screen">
    {/* <Image className='mb-8' src={gojogameslogo} alt='GojoGames Logo' width={300} height={300} /> */}
    <div className="flex flex-row gap-2">
      <div className="loader">
        <svg viewBox="0 0 80 80">
          <circle id="test" cx="40" cy="40" r="32"></circle>
        </svg>
      </div>

      <div className="loader triangle">
        <svg viewBox="0 0 86 80">
          <polygon points="43 8 79 72 7 72"></polygon>
        </svg>
      </div>

      <div className="loader">
        <svg viewBox="0 0 80 80">
          <rect x="8" y="8" width="64" height="64"></rect>
        </svg>
      </div>
    </div>
  </div>
);

export default Loader;
