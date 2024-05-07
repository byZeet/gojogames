import { Slider } from '@/components/Slider/Slider';
import { CardGame } from '@/components/CardGame/CardGame';
import { CardCategory } from '@/components/CardCategory/CardCategory';
import { Betagames } from '../../components/BetaGames/BetaGames';


import React from "react";
export default function Home() {
  return (
    <main>
      <Slider/>
        <CardGame/>
        <br />
        <br /><br />
        <div className='flex justify-center'><CardCategory/></div>
        <Betagames/>

    </main>
  )
}