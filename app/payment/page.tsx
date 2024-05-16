import React from "react";
import './payment.scss'
import Navbar from '../../components/Navbar/Navbar';
import {Footer} from '../../components/Footer/Footer'


export default function Payment() {
  return (
    <main className='container-payment'>
      <Navbar/>


          <section className="h-full w-full p-5 pt-28">
      <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">

        <h2 className="title font-manrope font-bold text-4xl leading-10 mb-8 text-center custom-text-black">Carrito de Compra
        </h2>
        <div className="hidden lg:grid grid-cols-2 py-6">
          <div className="font-normal text-xl leading-8 custom-text-grey">Juego</div>
          <div className="font-normal text-xl leading-8 custom-text-grey flex items-center justify-between">
            <span className="w-full max-w-[200px] text-center">Precio</span>
            <span className="w-full max-w-[260px] text-center">Cantidad</span>
            <span className="w-full max-w-[200px] text-center">Total</span>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          {/* CARD COMPRA */}
          <div className="tarjeta-juego-carrito grid grid-cols-1 lg:grid-cols-2 min-[550px]:gap-6 border-t custom-border-gray py-6">
            <div className="flex items-center flex-col min-[550px]:flex-row gap-3 min-[550px]:gap-6 w-full max-xl:justify-center max-xl:max-w-xl max-xl:mx-auto">
              <div className="img-box"><img  src="https://cdn.cloudflare.steamstatic.com/steam/apps/292030/header.jpg?t=1710411171" alt="juego" className="img-juego-carrito" /></div>
              <div className="flex h-full pro-data w-full flex-col justify-between max-w-sm ">
                <h5 className="font-semibold text-xl leading-8 custom-text-black max-[550px]:text-center">The Witcher 3: Wild Hunt
                </h5>
                <p className="font-normal text-lg leading-8 custom-text-grey my-2 min-[550px]:my-3 max-[550px]:text-center">Acción</p>
              </div>
            </div>
            <div className="flex items-center flex-col min-[550px]:flex-row w-full max-xl:max-w-xl max-xl:mx-auto gap-2">
              <h6 className="font-manrope font-bold text-2xl leading-9 custom-text-black w-full max-w-[176px] text-center">
                29.99€ <span className="text-sm custom-text-gray-3 ml-3 lg:hidden whitespace-nowrap">(Delivery Charge)</span></h6>
              <div className="flex items-center w-full mx-auto justify-center">
                <button className="group rounded-l-full px-6 py-[18px] border custom-border-gray flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                  <svg className="stroke-white transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M16.5 11H5.5" stroke="" strokeWidth="1.6" strokeLinecap="round" />
                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                      strokeLinecap="round" />
                    <path d="M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                      strokeLinecap="round" />
                  </svg>
                </button>
                <input type="text"
                  className="border-y custom-border-gray outline-none custom-text-gray-2 font-semibold text-lg w-full max-w-[118px] min-w-[80px] placeholder:custom-text-gray-2 py-[15px] text-center bg-transparent"
                  placeholder="1" />
                <button className="group rounded-r-full px-6 py-[18px] border custom-border-gray flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:shadow-gray-200 hover:border-gray-300 hover:bg-gray-50">
                  <svg className="stroke-white transition-all duration-500 group-hover:stroke-black"
                    xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeWidth="1.6"
                      strokeLinecap="round" />
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                      strokeLinecap="round" />
                    <path d="M11 5.5V16.5M16.5 11H5.5" stroke="" strokeOpacity="0.2" strokeWidth="1.6"
                      strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <h6 className="custom-text-indigo-2 font-manrope font-bold text-2xl leading-9 w-full max-w-[176px] text-center">
                120€</h6>
            </div>
          </div>
          {/* FINAL CARD COMPRA */}

          <div className="bg-custom-cart rounded-xl p-6 w-full mb-8 max-lg:max-w-xl max-lg:mx-auto">
            <div className="flex items-center justify-between w-full mb-6">
              <p className="font-normal text-xl leading-8 text-gray-400">Sub Total</p>
              <h6 className="font-semibold text-xl leading-8 custom-text-gray-2">360€</h6>
            </div>
            <div className="flex items-center justify-between w-full pb-6 border-b custom-border-gray">
              <p className="font-normal text-xl leading-8 text-gray-400">Impuestos</p>
              <h6 className="font-semibold text-xl leading-8 custom-text-gray-2">0%</h6>
            </div>
            <div className="flex items-center justify-between w-full py-6">
              <p className="font-manrope font-medium text-2xl leading-9 custom-text-gray-2">Total</p>
              <h6 className="font-manrope font-medium text-2xl leading-9 custom-text-indigo-3">405€</h6>
            </div>
          </div>
        </div>



        <div className="flex items-center flex-col sm:flex-row justify-center gap-3 mt-8">
          <button
            className="rounded-full py-4 w-full max-w-[280px]  flex items-center custom-bg-indigo justify-center">
            <span className="px-2 font-semibold text-lg leading-8 custom-text-indigo-2">Volver atrás</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
              <path d="M8.25324 5.49609L13.7535 10.9963L8.25 16.4998" stroke="#3B82F6;" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="rounded-full w-full max-w-[280px] py-4 text-center justify-center items-center custom-bg-indigo-2 font-semibold text-lg text-white flex">Realizar Pago
            <svg className="ml-2" xmlns="http://www.w3.org/2000/svg" width="23" height="22" viewBox="0 0 23 22"
              fill="none">
              <path d="M8.75324 5.49609L14.2535 10.9963L8.75 16.4998" stroke="white" strokeWidth="1.6"
                strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>


      <Footer/>
    </main>
  )
}