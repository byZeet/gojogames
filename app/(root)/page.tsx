import { Slider } from '@/components/Slider/Slider';
import { CardGame } from '@/components/CardGame/CardGame';
import { CardCategory } from '@/components/CardCategory/CardCategory';
import { OfertsGame } from '@/components/Oferts/OfertsGame';
import { ReviewsGame } from '@/components/Reviews/ReviewsGame';
import { NextLaunchGame } from '@/components/NextLaunch/NextLaunchGame';
import { Betagames } from '../../components/BetaGames/BetaGames';


import React from "react";
export default function Home() {
  return (
    <main>
      <Slider/>
        <div className=''><CardGame/></div>
        <div className=''><OfertsGame/></div>
        <div className=''><ReviewsGame/></div>
        <div className=''><NextLaunchGame/></div>
        <div className=''><Betagames/></div>
        <div className=''><CardCategory/></div>

    </main>
  )
}