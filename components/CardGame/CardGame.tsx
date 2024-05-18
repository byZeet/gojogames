// components/CardGame.tsx
'use client'

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './CardGame.scss';

import cartplus from '../../public/assets/icons/cart-plus-svgrepo-com.svg';
import cartcheck from '../../public/assets/icons/cart-check-svgrepo-com.svg';
import arrowright from '../../public/assets/icons/arrow-next-small-svgrepo-com.svg';

import { getJuegos } from '@/lib/actions/juegos.actions';
import { Juego } from '@/types';

const CardGame: React.FC = () => {
  const [juegos, setJuegos] = useState<Juego[]>([]);

  useEffect(() => {
    const fetchJuegos = async () => {
      const juegosData = await getJuegos();
      setJuegos(juegosData);
    };
    fetchJuegos();
  }, []);

  return (
    <main>
      <div className="flex gap-1 ml-32 mb-5 mt-20 items-center title-category w-fit">
        <Link href="/">
          <h1 className="text-3xl">Nuevo y Tendencias</h1>
        </Link>
        <Image src={arrowright} alt="icono-flecha-cards" width={36} height={36} />
      </div>
      <div className="flex w-full justify-center mb-10">
        {/* Contenido adicional aquí */}
      </div>
      <div className="flex justify-center items-center mb-10">
        <div className="w-fit h-fit grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grid-rows-2 gap-5 pl-32 pr-32">
          {juegos.map((juego: Juego, index: number) => (
            <div key={index} className="card w-full custom-bg-color shadow">
              <Link href={`/games/${juego._id}`}>
                <figure>
                  <img className='img-redondeada' src={juego.foto} alt="imagen-juego-card" />
                </figure>
              </Link>
              <div className="card-body gap-5">
                <Link href={`/games/${juego._id}`}>
                  <h2 className="card-title w-auto text-neutral-100">{juego.titulo}</h2>
                </Link>
                <div className="container-badge flex flex-wrap gap-2">
                  {juego.demo_disponible && (
                    <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  )}
                  {juego.dlc && (
                    <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
                  )}
                  {juego.stock ? (
                    <div className="badge badge-outline stock-badge-color p-3">
                      <FontAwesomeIcon icon={faCheck} className="mr-1" />
                      Stock
                    </div>
                  ) : (
                    <div className="badge badge-outline nostock-badge-color p-3">
                      <FontAwesomeIcon icon={faCheck} className="mr-1" />
                      Sin Stock
                    </div>
                  )}
                </div>
                <div className="card-actions justify-between items-center">
                  <div className="flex flex-column items-end gap-3 align-self-end">
                    <h1 className="text-neutral-100 font-medium">{juego.precio}€</h1>
                  </div>
                  <div className="flex gap-3">
                    <label className="ui-bookmark">
                      <input type="checkbox" />
                      <div className="bookmark">
                        <svg
                          viewBox="0 0 16 16"
                          style={{ marginTop: '0px' }}
                          className="bi bi-heart-fill hearth-card-icon"
                          height="25"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                            fillRule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </label>
                    <Image src={cartplus} alt="icono-carrito" width={25} height={25} />
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

export default CardGame;
