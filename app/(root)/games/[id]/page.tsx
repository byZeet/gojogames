import { mongoConnect } from '@/lib/connection';
import Juego from '@/lib/models/juego.model';
import { Juego as JuegoType } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import './GamesStyle.scss';

import controller from '../../../../public/assets/icons/controller-svgrepo-com.svg';
import arrowleft from '../../../../public/assets/icons/arrow-prev-small-svgrepo-com.svg';

import type { Metadata } from 'next';

const SuggestionsSlider = dynamic(() => import('../../../../components/SuggestionsSlider/SuggestionsSlider'), { ssr: false });

export async function generateMetadata({ params }: GamePageProps): Promise<Metadata> {
  const { id } = params;
  await mongoConnect();

  const game: JuegoType | null = await Juego.findById(id).lean();
  if (!game) {
    return notFound();
  }

  const title = game.oferta_aplicada 
    ? `Ahorra un ${((game.precio_original - game.precio) / game.precio_original * 100).toFixed(0)}% en ${game.titulo}` 
    : game.titulo;

  return {
    title,
    description: game.descripcion,
  };
}

interface GamePageProps {
  params: {
    id: string;
  };
}

export default async function GamePage({ params }: GamePageProps) {
  const { id } = params;
  await mongoConnect();

  const game: JuegoType | null = await Juego.findById(id).lean();

  if (!game) {
    return notFound();
  }

  // Obtener cinco juegos sugeridos
  const suggestedGames: JuegoType[] = await Juego.find({ _id: { $ne: id } }).limit(25).lean();

  return (
    <div className="min-h-screen bg-[#151515] text-white flex justify-center items-center py-20 px-4">
      <div className="w-full md:w-11/12 pt-8 lg:w-4/5 flex flex-col">
        <div className="mb-6 flex justify-start ml-6">
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[18px] flex items-center gap-2">
            <Image src={arrowleft} alt="Volver atrás" width={18} height={18} />
            <span>Volver atrás</span>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row p-3 md:p-5 rounded-lg bg-[#202020] shadow-lg">
          <div className="lg:w-1/2 flex flex-col items-center mb-3 lg:mb-0">
            <img className="w-full h-auto rounded-lg mb-3 max-h-[400px]" src={game.foto} alt={game.titulo} />
            <div className="grid grid-cols-3 gap-3 mt-3">
              {game.imagenes && game.imagenes.map((imagen, index) => (
                <img key={index} className="w-full h-auto rounded-lg max-h-[160px]" src={imagen} alt={`${game.titulo} ${index + 1}`} />
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 lg:ml-3 flex flex-col justify-between">
            <div>
              <h1 className="text-lg lg:text-xl font-bold mb-2 lg:mb-3">{game.titulo}</h1>
              <p className="text-sm lg:text-md mb-1 lg:mb-2">{game.genero}</p>
              {game.fecha ? (
                <p className="text-md lg:text-lg font-semibold mb-2 lg:mb-3">Próximamente</p>
              ) : (
                <>
                  {game.oferta_aplicada ? (
                    <div className="flex items-center mb-2 lg:mb-3">
                      <p className="text-md lg:text-lg font-semibold text-green-500">{game.precio}€</p>
                      <p className="text-md lg:text-lg font-semibold line-through ml-2">{game.precio_original}€</p>
                      <p className="text-xs lg:text-sm ml-3 text-yellow-500">({game.tiempo_restante})</p>
                    </div>
                  ) : (
                    <p className="text-md lg:text-lg font-semibold mb-2 lg:mb-3">{game.precio}€</p>
                  )}
                </>
              )}
              {game.fecha && (
                <p className="text-xs lg:text-sm mb-2">Fecha: {game.fecha}</p>
              )}
              <div className="flex flex-wrap gap-1 mb-3">
                {game.demo_disponible && (
                  <span className="badge badge-outline p-2 text-[#84FF82]">Demo Disponible</span>
                )}
                {!game.fecha && (
                  <>
                    {game.stock ? (
                      <span className="badge badge-outline p-2 text-[#3fff3c]">Stock</span>
                    ) : (
                      <span className="badge badge-outline p-2 text-[#ff3c3c]">Sin Stock</span>
                    )}
                  </>
                )}
                {game.dlc && (
                  <span className="badge badge-outline p-2 text-[#7D7D7D]">DLC Disponible</span>
                )}
              </div>
              <h2 className="text-lg font-semibold mb-2">Acerca de</h2>
              <p className="text-xs lg:text-sm mb-3">{game.descripcion}</p>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {game.demo_disponible && (
                <button className="w-1/2 h-12 bg-green-600 hover:bg-green-700 text-white font-bold py-1 px-3 rounded-[18px] flex items-center justify-center gap-2">
                  <Image src={controller} alt="Añadir al Carrito" width={20} height={20} />
                  <span className="truncate">Jugar Demo</span>
                </button>
              )}
              <label className="w-1/2 h-12 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded-[18px] flex items-center justify-center gap-1 sm:gap-2 ui-bookmark-game cursor-pointer">
                <input type="checkbox" className="hidden" />
                <div className="bookmark-game">
                  <svg viewBox="0 0 16 16" className="bi bi-heart-fill" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span className="truncate">Añadir a Favoritos</span>
              </label>
            </div>
          </div>
        </div>
        {/* Slider de sugerencias */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold mb-4">Sugerencias</h2>
          <SuggestionsSlider games={suggestedGames} />
        </div>
      </div>
    </div>
  );
}