import React from 'react'
import Image from 'next/image';
import heart from '../../public/assets/icons/heart.svg';
import cartplus from '../../public/assets/icons/cart-plus.svg';
import arrowright from '../../public/assets/icons/chevron-compact-right.svg'
import './OfertsGame.scss'

export const OfertsGame = () => {
  return (
    <main>
    <div className='flex gap-2 ml-52 items-center'>
      <h1 className='text-3xl'>Ofertas</h1>
      <Image src={arrowright} alt=' ' width={36} height={36}/>
    </div>
    <div className='flex w-full justify-center mb-10'>
    </div>
    <div className='flex justify-center items-center mb-10'>
      <div className='w-fit h-fit grid grid-cols-4 grid-rows-3 gap-5'>

{/* CARDS DESCUENTOS */}
<div className="card w-120 custom-bg-color shadow">
  <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
  <div className="card-body gap-5">
    <h2 className="card-title w-auto text-neutral-100">
      LEGO® Star Wars™: La Saga Skywalker
    </h2>
    <div className='container-badge flex flex-wrap gap-2'>
      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
      <div className="badge badge-outline time-badge-color p-3">5 Días Restantes</div>
    </div>
    <div className="card-actions justify-between items-center">
      <div className="flex flex-column items-end gap-3 align-self-end"> {/* Aquí agregué align-self-end */}
        <h1 className='text-neutral-100 font-medium'>14,99€</h1>
        <h2 className='text-neutral-100 font-medium text-1xl' style={{textDecoration: 'line-through'}}>29,99€</h2>
        <div className="flex items-center bg-blue-500 text-white rounded-full py-0.1 px-2">
          -25%
        </div>
      </div>
      <div className='flex gap-3'>
        <label className="ui-bookmark">
          <input type="checkbox" />
          <div className="bookmark">
            <svg
              viewBox="0 0 16 16"
              style={{marginTop: '4px'}}
              className="bi bi-heart-fill"
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
        <Image src={cartplus} alt=' ' width={25} height={25}/>
      </div>
    </div>
  </div>
</div>
{/* CARDS DESCUENTOS */}
<div className="card w-120 custom-bg-color shadow">
  <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
  <div className="card-body gap-5">
    <h2 className="card-title w-auto text-neutral-100">
      LEGO® Star Wars™: La Saga Skywalker
    </h2>
    <div className='container-badge flex flex-wrap gap-2'>
      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
      <div className="badge badge-outline time-badge-color p-3">5 Días Restantes</div>
    </div>
    <div className="card-actions justify-between items-center">
      <div className="flex flex-column items-end gap-3 align-self-end"> {/* Aquí agregué align-self-end */}
        <h1 className='text-neutral-100 font-medium'>14,99€</h1>
        <h2 className='text-neutral-100 font-medium text-1xl' style={{textDecoration: 'line-through'}}>29,99€</h2>
        <div className="flex items-center bg-blue-500 text-white rounded-full py-0.1 px-2">
          -25%
        </div>
      </div>
      <div className='flex gap-3'>
        <label className="ui-bookmark">
          <input type="checkbox" />
          <div className="bookmark">
            <svg
              viewBox="0 0 16 16"
              style={{marginTop: '4px'}}
              className="bi bi-heart-fill"
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
        <Image src={cartplus} alt=' ' width={25} height={25}/>
      </div>
    </div>
  </div>
</div>
{/* CARDS DESCUENTOS */}
<div className="card w-120 custom-bg-color shadow">
  <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
  <div className="card-body gap-5">
    <h2 className="card-title w-auto text-neutral-100">
      LEGO® Star Wars™: La Saga Skywalker
    </h2>
    <div className='container-badge flex flex-wrap gap-2'>
      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
      <div className="badge badge-outline time-badge-color p-3">5 Días Restantes</div>
    </div>
    <div className="card-actions justify-between items-center">
      <div className="flex flex-column items-end gap-3 align-self-end"> {/* Aquí agregué align-self-end */}
        <h1 className='text-neutral-100 font-medium'>14,99€</h1>
        <h2 className='text-neutral-100 font-medium text-1xl' style={{textDecoration: 'line-through'}}>29,99€</h2>
        <div className="flex items-center bg-blue-500 text-white rounded-full py-0.1 px-2">
          -25%
        </div>
      </div>
      <div className='flex gap-3'>
        <label className="ui-bookmark">
          <input type="checkbox" />
          <div className="bookmark">
            <svg
              viewBox="0 0 16 16"
              style={{marginTop: '4px'}}
              className="bi bi-heart-fill"
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
        <Image src={cartplus} alt=' ' width={25} height={25}/>
      </div>
    </div>
  </div>
</div>
{/* CARDS DESCUENTOS */}
<div className="card w-120 custom-bg-color shadow">
  <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
  <div className="card-body gap-5">
    <h2 className="card-title w-auto text-neutral-100">
      LEGO® Star Wars™: La Saga Skywalker
    </h2>
    <div className='container-badge flex flex-wrap gap-2'>
      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
      <div className="badge badge-outline time-badge-color p-3">5 Días Restantes</div>
    </div>
    <div className="card-actions justify-between items-center">
      <div className="flex flex-column items-end gap-3 align-self-end"> {/* Aquí agregué align-self-end */}
        <h1 className='text-neutral-100 font-medium'>14,99€</h1>
        <h2 className='text-neutral-100 font-medium text-1xl' style={{textDecoration: 'line-through'}}>29,99€</h2>
        <div className="flex items-center bg-blue-500 text-white rounded-full py-0.1 px-2">
          -25%
        </div>
      </div>
      <div className='flex gap-3'>
        <label className="ui-bookmark">
          <input type="checkbox" />
          <div className="bookmark">
            <svg
              viewBox="0 0 16 16"
              style={{marginTop: '4px'}}
              className="bi bi-heart-fill"
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
        <Image src={cartplus} alt=' ' width={25} height={25}/>
      </div>
    </div>
  </div>
</div>
{/* CARDS DESCUENTOS */}
<div className="card w-120 custom-bg-color shadow">
  <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
  <div className="card-body gap-5">
    <h2 className="card-title w-auto text-neutral-100">
      LEGO® Star Wars™: La Saga Skywalker
    </h2>
    <div className='container-badge flex flex-wrap gap-2'>
      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
      <div className="badge badge-outline time-badge-color p-3">5 Días Restantes</div>
    </div>
    <div className="card-actions justify-between items-center">
      <div className="flex flex-column items-end gap-3 align-self-end"> {/* Aquí agregué align-self-end */}
        <h1 className='text-neutral-100 font-medium'>14,99€</h1>
        <h2 className='text-neutral-100 font-medium text-1xl' style={{textDecoration: 'line-through'}}>29,99€</h2>
        <div className="flex items-center bg-blue-500 text-white rounded-full py-0.1 px-2">
          -25%
        </div>
      </div>
      <div className='flex gap-3'>
        <label className="ui-bookmark">
          <input type="checkbox" />
          <div className="bookmark">
            <svg
              viewBox="0 0 16 16"
              style={{marginTop: '4px'}}
              className="bi bi-heart-fill"
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
        <Image src={cartplus} alt=' ' width={25} height={25}/>
      </div>
    </div>
  </div>
</div>
{/* CARDS DESCUENTOS */}
<div className="card w-120 custom-bg-color shadow">
  <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
  <div className="card-body gap-5">
    <h2 className="card-title w-auto text-neutral-100">
      LEGO® Star Wars™: La Saga Skywalker
    </h2>
    <div className='container-badge flex flex-wrap gap-2'>
      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
      <div className="badge badge-outline time-badge-color p-3">5 Días Restantes</div>
    </div>
    <div className="card-actions justify-between items-center">
      <div className="flex flex-column items-end gap-3 align-self-end"> {/* Aquí agregué align-self-end */}
        <h1 className='text-neutral-100 font-medium'>14,99€</h1>
        <h2 className='text-neutral-100 font-medium text-1xl' style={{textDecoration: 'line-through'}}>29,99€</h2>
        <div className="flex items-center bg-blue-500 text-white rounded-full py-0.1 px-2">
          -25%
        </div>
      </div>
      <div className='flex gap-3'>
        <label className="ui-bookmark">
          <input type="checkbox" />
          <div className="bookmark">
            <svg
              viewBox="0 0 16 16"
              style={{marginTop: '4px'}}
              className="bi bi-heart-fill"
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
        <Image src={cartplus} alt=' ' width={25} height={25}/>
      </div>
    </div>
  </div>
</div>
{/* CARDS DESCUENTOS */}
<div className="card w-120 custom-bg-color shadow">
  <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
  <div className="card-body gap-5">
    <h2 className="card-title w-auto text-neutral-100">
      LEGO® Star Wars™: La Saga Skywalker
    </h2>
    <div className='container-badge flex flex-wrap gap-2'>
      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
      <div className="badge badge-outline time-badge-color p-3">5 Días Restantes</div>
    </div>
    <div className="card-actions justify-between items-center">
      <div className="flex flex-column items-end gap-3 align-self-end"> {/* Aquí agregué align-self-end */}
        <h1 className='text-neutral-100 font-medium'>14,99€</h1>
        <h2 className='text-neutral-100 font-medium text-1xl' style={{textDecoration: 'line-through'}}>29,99€</h2>
        <div className="flex items-center bg-blue-500 text-white rounded-full py-0.1 px-2">
          -25%
        </div>
      </div>
      <div className='flex gap-3'>
        <label className="ui-bookmark">
          <input type="checkbox" />
          <div className="bookmark">
            <svg
              viewBox="0 0 16 16"
              style={{marginTop: '4px'}}
              className="bi bi-heart-fill"
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
        <Image src={cartplus} alt=' ' width={25} height={25}/>
      </div>
    </div>
  </div>
</div>
{/* CARDS DESCUENTOS */}
<div className="card w-120 custom-bg-color shadow">
  <figure><img src="https://cdn.cloudflare.steamstatic.com/steam/apps/920210/header.jpg?t=1702937065" alt="Shoes" /></figure>
  <div className="card-body gap-5">
    <h2 className="card-title w-auto text-neutral-100">
      LEGO® Star Wars™: La Saga Skywalker
    </h2>
    <div className='container-badge flex flex-wrap gap-2'>
      <div className="badge badge-outline demo-badge-color p-3">DemoDisponible</div>
      <div className="badge badge-outline dlc-badge-color p-3">DLC</div>
      <div className="badge badge-outline time-badge-color p-3">5 Días Restantes</div>
    </div>
    <div className="card-actions justify-between items-center">
      <div className="flex flex-column items-end gap-3 align-self-end"> {/* Aquí agregué align-self-end */}
        <h1 className='text-neutral-100 font-medium'>14,99€</h1>
        <h2 className='text-neutral-100 font-medium text-1xl' style={{textDecoration: 'line-through'}}>29,99€</h2>
        <div className="flex items-center bg-blue-500 text-white rounded-full py-0.1 px-2">
          -25%
        </div>
      </div>
      <div className='flex gap-3'>
        <label className="ui-bookmark">
          <input type="checkbox" />
          <div className="bookmark">
            <svg
              viewBox="0 0 16 16"
              style={{marginTop: '4px'}}
              className="bi bi-heart-fill"
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
        <Image src={cartplus} alt=' ' width={25} height={25}/>
      </div>
    </div>
  </div>
</div>




      </div>
    </div>
  </main>
  )
}
