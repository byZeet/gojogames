// app/(root)/games/[id]/page.tsx
import { mongoConnect } from '@/lib/connection';
import Juego from '@/lib/models/juego.model';
import { Juego as JuegoType } from '@/types';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link'; // Import Link para la navegación
import './GamesStyle.scss'

import controller from '../../../../public/assets/icons/controller-svgrepo-com.svg'
import arrowleft from '../../../../public/assets/icons/arrow-prev-small-svgrepo-com.svg'; // Importar el ícono de flecha izquierda

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
    <div className="min-h-screen bg-[#151515] text-white flex justify-center items-center py-10 px-4">
      <div className="w-full md:w-3/4 lg:w-[90%] flex flex-col">
        <div className="mb-4 flex justify-start custom-margin-button-games">
          <Link href="/" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[20px] flex items-center gap-2">
            <Image src={arrowleft} alt="Volver atrás" width={20} height={20} />
            <span>Volver atrás</span>
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row p-4 md:p-6 rounded-lg">
          <div className="lg:w-1/4 flex flex-col items-start mb-4 lg:mb-0">
            {/* <h2 className="text-2xl font-semibold mb-4">Sugerencias</h2> */}
            <div className="w-full h-[550px] overflow-y-auto pr-2">
              <div className="flex flex-col gap-4">
                {suggestedGames.map((suggestedGame) => (
                  <Link href={`/games/${suggestedGame._id}`} key={suggestedGame._id}>
                    <div className="bg-[#202020] p-2 rounded-lg shadow-lg flex flex-col cursor-pointer hover:bg-[#2c2c2c]">
                      <img className="w-full h-auto rounded-lg mb-2" src={suggestedGame.foto} alt={suggestedGame.titulo} />
                      <div className="text-left">
                        <div className="flex justify-between items-center mb-1">
                          <h3 className="text-md font-bold truncate">{suggestedGame.titulo}</h3>
                          {!suggestedGame.fecha && (
                            <p className={`text-sm font-semibold ml-2`} style={{ color: suggestedGame.stock ? '#3fff3c' : '#ff3c3c' }}>
                              {suggestedGame.stock ? 'En Stock' : 'Sin Stock'}
                            </p>
                          )}
                        </div>
                        <p className="text-sm mb-1">{suggestedGame.genero}</p>
                        <div className="flex justify-between items-center">
                          <div className='flex'>
                            {suggestedGame.fecha ? (
                              <p className="text-md font-semibold text-green-500">Próximamente</p>
                            ) : (
                              suggestedGame.oferta_aplicada ? (
                                <>
                                  <p className="text-md font-semibold text-green-500">{suggestedGame.precio}€</p>
                                  <p className="text-md font-semibold line-through ml-2">{suggestedGame.precio_original}€</p>
                                </>
                              ) : (
                                <p className="text-md font-semibold">{suggestedGame.precio}€</p>
                              )
                            )}
                          </div>
                          <div>
                            {suggestedGame.dlc && (
                              <span className="text-sm font-semibold bg-[#7D7D7D] text-gray-900 px-2 py-1 rounded-full">DLC</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-3/4 flex flex-col lg:flex-row bg-[#202020] p-4 lg:p-6 rounded-lg shadow-lg lg:ml-4">
            <div className="lg:w-1/2 flex flex-col items-center mb-4 lg:mb-0">
              <img className="w-full h-auto rounded-lg mb-4" src={game.foto} alt={game.titulo} />
              <div className="grid grid-cols-3 gap-4 mt-4">
                {game.imagenes && game.imagenes.map((imagen, index) => (
                  <img key={index} className="w-full h-auto rounded-lg" src={imagen} alt={`${game.titulo} ${index + 1}`} />
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 lg:ml-4 flex flex-col justify-between">
              <div>
                <h1 className="text-2xl lg:text-3xl font-bold mb-2 lg:mb-4">{game.titulo}</h1>
                <p className="text-md lg:text-lg mb-1 lg:mb-2">{game.genero}</p>
                {game.fecha ? (
                  <p className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">Próximamente</p>
                ) : (
                  <>
                    {game.oferta_aplicada ? (
                      <div className="flex items-center mb-2 lg:mb-4">
                        <p className="text-lg lg:text-xl font-semibold text-green-500">{game.precio}€</p>
                        <p className="text-lg lg:text-xl font-semibold line-through ml-2">{game.precio_original}€</p>
                        <p className="text-sm lg:text-md ml-4 text-yellow-500">({game.tiempo_restante})</p>
                      </div>
                    ) : (
                      <p className="text-lg lg:text-xl font-semibold mb-2 lg:mb-4">{game.precio}€</p>
                    )}
                  </>
                )}
                {game.fecha && (
                  <p className="text-sm lg:text-md mb-2">Fecha: {game.fecha}</p>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {game.demo_disponible && (
                    <span className="badge badge-outline p-3" style={{ color: '#84FF82' }}>Demo Disponible</span>
                  )}
                  {!game.fecha && (
                    <>
                      {game.stock ? (
                        <span className="badge badge-outline p-3" style={{ color: '#3fff3c' }}>Stock</span>
                      ) : (
                        <span className="badge badge-outline p-3" style={{ color: '#ff3c3c' }}>Sin Stock</span>
                      )}
                    </>
                  )}
                  {game.dlc && (
                    <span className="badge badge-outline p-3" style={{ color: '#7D7D7D' }}>DLC Disponible</span>
                  )}
                </div>
                <h2 className="text-2xl font-semibold mb-2">Acerca de</h2>
                <p className="text-sm lg:text-md mb-4">{game.descripcion}</p>
              </div>
              <div className="flex justify-center gap-2 mt-4">
                {/* <button className="w-1/2 h-16 bg-[#3B82F6] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[20px] flex items-center justify-center gap-2">
                  <Image src={cartplus} alt="Añadir al Carrito" width={20} height={20} />
                  Añadir al Carrito
                </button> */}
                <button className="w-1/2 h-16 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-[20px] flex items-center justify-center gap-2">
                  <Image src={controller} alt="Añadir al Carrito" width={29} height={29} />
                  Jugar Beta
                </button>
                <label className="w-1/2 h-16 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[20px] flex items-center justify-center gap-2 ui-bookmark-game cursor-pointer">
                  <input type="checkbox" className="hidden" />
                  <div className="bookmark-game">
                    <svg viewBox="0 0 16 16" className="bi bi-heart-fill" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314"
                        fillRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  <span>Añadir a Favoritos</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
