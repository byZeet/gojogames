import { Slider } from '@/components/Slider/Slider';
import { CardGame } from '@/components/CardGame/CardGame';
import { CardCategory } from '@/components/CardCategory/CardCategory';
import { Betagames } from '../../components/BetaGames/BetaGames';


import React from "react";
export default function Home() {
  return (
    <main>
      <Slider/>
        <div className=''><CardGame/></div>
        <div className=' mt-36 mb-20'><Betagames/></div>
        <div className=''><CardCategory/></div>

    </main>
  )
}