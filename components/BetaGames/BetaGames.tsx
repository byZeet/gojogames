'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import controllerblack from '../../public/assets/img/controllerblack.webp';
import controllerwhite from '../../public/assets/img/controllerwhite.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './BetaGames.scss';
import gojogameslogo from '../../public/assets/img/gojogameslogo.png'

export const Betagames = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [betaCode, setBetaCode] = useState('');
  const [showLoader, setShowLoader] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    const disableScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableScroll = () => {
      document.body.style.overflow = '';
    };

    if (showPopup) {
      disableScroll();
    } else {
      enableScroll();
    }

    return () => enableScroll();
  }, [showPopup]);

  const handleJoinNowClick = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Activar el loader
    setShowLoader(true);
    // Simular un retraso de 2 segundos antes de mostrar el mensaje de éxito
    setTimeout(() => {
      setSuccessMessage('Registrado con éxito');
      // Desactivar el loader después de 2 segundos
      setTimeout(() => {
        setShowLoader(false);
        setSuccessMessage('');
        setShowPopup(false); // Ocultar el popup después de mostrar el mensaje de éxito
      }, 2000);
    }, 2000);
    // Aquí puedes hacer lo que necesites con los datos del formulario (userId, email y betaCode)
    console.log('ID de usuario:', userId);
    console.log('Correo electrónico:', email);
    console.log('Código BETA:', betaCode);
    // Aquí enviar los datos al servidor, por ejemplo, o hacer cualquier otra acción necesaria
    // Luego cerrar el popup
    // setShowPopup(false); // Cerrar el popup automáticamente o dejarlo abierto
  };

  return (
    <main className='betagames-container mt-28 mb-20 w-full h-full' style={{ zIndex: "9999" }}>
      <div className='container-general-beta flex flex-col md:flex-row'>
        <div className='left-section flex justify-center items-center'>
          <div className='controller-container'>
            <Image className='controllerblack' src={controllerblack} alt='foto-mando-negro' width={1000} height={1000} />
          </div>
          <div className='controller-container'>
            <Image className='controllerwhite' src={controllerwhite} alt='foto-mando-blanco' width={1000} height={1000} />
          </div>
        </div>
        <div className='right-section mt-2 mb-2 flex justify-evenly gap-10 items-center flex-col'>
          <div className="w-fit md:w-auto"> {/* Se ajusta el tamaño del contenedor de texto en dispositivos móviles */}
            <h1 className="text-2xl text-center">¡Únete a los programas BETA de nuestros juegos y sé parte del proceso de desarrollo!</h1>
          </div>
          <button className="button" onClick={handleJoinNowClick}><span>Únete Ahora</span></button>
          <div className='w-fit md:w-auto'> {/* Se ajusta el tamaño del contenedor de texto en dispositivos móviles */}
            <p className="overflow-wrap break-word">¡Hazte escuchar y sé parte del futuro de la diversión virtual ahora!</p>
          </div>
          <div className='w-fit md:w-auto custom-beta-message'> {/* Se ajusta el tamaño del contenedor de texto en dispositivos móviles */}
            <p><span className="font-bold">NUEVO</span> PROGRAMA BETA GAMES</p>
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black bg-opacity-80 z-50">
          <div className="max-w-3xl p-4 bg-cutom-betagames rounded-lg shadow-xl relative flex flex-col items-center w-full mx-4">
            <button className="absolute top-2 right-3 text-gray-500 hover:text-red-600" onClick={handlePopupClose}>
              <FontAwesomeIcon icon={faTimes} />
            </button>
            <Image className='mb-4' src={gojogameslogo} alt='foto-gojogameslogo' width={100} height={100}/>

            <p>
              <span className="custom-color-beta-p">BETAS</span> Disponibles
            </p>
            <div className="card-beta mb-4 w-full">
              <p><span className="text-lg">Hades II <hr /> <h1 className="text-xs text-gray-400 inline">DESARROLLADOR: Supergiant Games</h1>
                <br />  <h1 className="text-xs text-gray-400 inline">EDITOR: Supergiant Games</h1></span></p>
              <p><span className="text-lg">Manor Lords <hr /> <h1 className="text-xs text-gray-400 inline">DESARROLLADOR: Slavic Magic</h1>
                <br />  <h1 className="text-xs text-gray-400 inline">EDITOR: Hooded Horse</h1></span></p>
              <p><span className="text-lg">The Finals <hr /> <h1 className="text-xs text-gray-400 inline">DESARROLLADOR: Embark Studios</h1>
                <br />  <h1 className="text-xs text-gray-400 inline">EDITOR: Embark Studios</h1></span></p>
            </div>

            {showLoader ? (
              <div className="flex flex-row gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                <div className="w-4 h-4 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
              </div>
            ) : (
              <form className="space-y-6 w-full" onSubmit={handleFormSubmit}>
                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <select
                      id="betaCode"
                      value={betaCode}
                      onChange={(e) => setBetaCode(e.target.value)}
                      required
                      className="border-b border-white py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit mt-4 p-2 rounded-md w-full custom-select"
                    >
                      <option value="">Selecciona un juego BETA</option>
                      <option value="Hades II">Hades II</option>
                      <option value="Manor Lords">Manor Lords</option>
                      <option value="The Finals">The Finals</option>
                    </select>
                    <label
                      htmlFor="betaCode"
                      className="absolute left-0 bottom-12 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 text-sm font-medium text-white"
                    >
                      Nombre BETA
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <input
                      type="text"
                      id="userId"
                      value={userId}
                      onChange={(e) => setUserId(e.target.value)}
                      required
                      className="border-b border-white py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit mt-4 p-2 rounded-md w-full custom-select"
                    />
                    <label
                      htmlFor="userId"
                      className="absolute left-0 bottom-12 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 text-sm font-medium text-white"
                    >
                      ID Usuario
                    </label>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <div className="relative w-full">
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="border-b border-white py-1 focus:border-b-2 focus:border-blue-700 transition-colors focus:outline-none peer bg-inherit mt-4 p-2 rounded-md w-full custom-select"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 bottom-12 cursor-text peer-focus:text-xs peer-focus:-top-4 transition-all peer-focus:text-blue-700 text-sm font-medium text-white"
                    >
                      Correo Electrónico
                    </label>
                  </div>
                </div>

                <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                  Enviar
                </button>
              </form>
            )}
            {successMessage && <p className="text-green-600 mt-8">{successMessage}</p>}
          </div>
        </div>
      )}

    </main>
  );
};
