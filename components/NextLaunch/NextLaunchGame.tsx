'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import arrowright from '../../public/assets/icons/arrow-next-small-svgrepo-com.svg';
import Link from 'next/link';
import './NextLaunchGame.scss';
import cartplus from '../../public/assets/icons/cart-plus.svg';

import { getJuegosProximos } from '@/lib/actions/juegos.actions';
import { Juego } from '@/types';

const NextLaunchGame = () => {
  const [juegos, setJuegos] = useState<Juego[]>([]);

  useEffect(() => {
    const fetchJuegosProximos = async () => {
      const juegosData = await getJuegosProximos();
      setJuegos(juegosData);
    };
    fetchJuegosProximos();
  }, []);

  return (
    <main>
      <div className='flex gap-1 ml-32 mb-5 mt-32 items-center title-category w-fit'>
        <Link href="/">
          <h1 className='text-3xl'>Próximos Lanzamientos</h1>
        </Link>
        <Image src={arrowright} alt=' ' width={36} height={36} />
      </div>
      <div className='flex w-full justify-center mb-10'></div>
      <div className='flex justify-center items-center mb-10'>
        <div className='w-fit h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-5 pl-32 pr-32 pb-20'>
          {/* CARDS DESCUENTOS */}
          {juegos.map((juego: Juego, index: number) => (
            <div key={index} className='card w-120 custom-bg-color shadow'>
              <Link href="/game">
                <figure>
                  <img src={juego.foto} alt='Shoes' />
                </figure>
              </Link>
              <div className='card-body custom-card-nextlaunch gap-5'>
              <Link href="/game">
                  <h2 className='card-title w-auto text-neutral-100'>{juego.titulo}</h2>
                </Link>
                <div className='card-actions justify-between items-center'>
                  <div className='full-width-blue flex justify-between items-center p-3'>
                    <div>
                      <label className='container-nextlaunch'>
                        <input type='checkbox' defaultChecked={true} />
                        <svg
                          className='bell-regular'
                          xmlns='http://www.w3.org/2000/svg'
                          height='1em'
                          viewBox='0 0 448 512'
                        >
                          <path
                            d='M224 0c-17.7 0-32 14.3-32 32V49.9C119.5 61.4 64 124.2 64 200v33.4c0 45.4-15.5 89.5-43.8 124.9L5.3 377c-5.8 7.2-6.9 17.1-2.9 25.4S14.8 416 24 416H424c9.2 0 17.6-5.3 21.6-13.6s2.9-18.2-2.9-25.4l-14.9-18.6C399.5 322.9 384 278.8 384 233.4V200c0-75.8-55.5-138.6-128-150.1V32c0-17.7-14.3-32-32-32zm0 96h8c57.4 0 104 46.6 104 104v33.4c0 47.9 13.9 94.6 39.7 134.6H72.3C98.1 328 112 281.3 112 233.4V200c0-57.4 46.6-104 104-104h8zm64 352H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'
                            fillRule='evenodd'
                          ></path>
                        </svg>
                        <svg
                          className='bell-solid'
                          xmlns='http://www.w3.org/2000/svg'
                          height='1em'
                          viewBox='0 0 448 512'
                        >
                          <path
                            d='M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z'
                            fillRule='evenodd'
                          ></path>
                        </svg>
                      </label>
                    </div>
                    <div>
                      <p className='text-neutral-100 mb-0 ml-2'>{juego.fecha}</p>
                    </div>
                    <div>
                      <label className='ui-bookmark'>
                        <input type='checkbox' />
                        <div className='bookmark'>
                          <svg
                            viewBox='0 0 16 16'
                            style={{ marginTop: '4px' }}
                            className='bi bi-heart-fill'
                            height='25'
                            width='25'
                            xmlns='http://www.w3.org/2000/svg'
                          >
                            <path
                              d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314'
                              fillRule='evenodd'
                            ></path>
                          </svg>
                        </div>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default NextLaunchGame;
