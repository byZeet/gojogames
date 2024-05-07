import React from 'react';
import Image from 'next/image';
import './CardGame.css'
import heart from '../../public/assets/icons/heart.svg';
import cartplus from '../../public/assets/icons/cart-plus.svg';

export const CardGame = () => {
  return (
    <main>
      <div className='flex w-full justify-center mt-10 mb-10'>
        <h1 className='text-3xl'>Nuevo y de tendencia</h1>
      </div>
      <div className='flex justify-center items-center mb-10'>
        <div className='w-fit h-fit grid grid-cols-4 grid-rows-3 gap-5'>
                <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
          <div className="card w-96 custom-bg-color shadow">
            <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
            <div className="card-body gap-5">
              <h2 className="card-title w-auto text-neutral-100">
                LEGO® Star Wars™: La Saga Skywalker
              </h2>
              <div className='container-badge flex gap-2'>
                  <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
                  <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
              </div>
              <div className="card-actions justify-between">
                <h1 className='text-neutral-100 font-medium text-2xl'>14,99€</h1>
                <div className='flex gap-3'>
                  <Image src={heart} alt=' ' width={25} height={25}/>
                  <Image src={cartplus} alt=' ' width={25} height={25}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );   
};
