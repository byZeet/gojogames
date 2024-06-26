import { Slider } from '../../components/Slider/Slider';
import CardGame from '../../components/CardGame/CardGame';
import { CardCategory } from '../../components/CardCategory/CardCategory';
import OfertsGame from '../../components/Oferts/OfertsGame';
import { ReviewsGame } from '../../components/Reviews/ReviewsGame';
import NextLaunchGame from '../../components/NextLaunch/NextLaunchGame';
import { Betagames } from '../../components/BetaGames/BetaGames';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

export default function Home() {
  return (
    <main className='w-full h-full'>
      <Slider />
      <div className=''><CardGame /></div>
      <div className=''><OfertsGame /></div>
      <div className=''><ReviewsGame /></div>
      <div className=''><NextLaunchGame /></div>
      <div className=''><Betagames /></div>
      <div className=''><CardCategory /></div>
      <ToastContainer 
        position="bottom-right"
        autoClose={1500}  // 3000 ms = 3 segundos
      />
    </main>
  )
}
