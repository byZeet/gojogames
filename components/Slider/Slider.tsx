import React from 'react'
import heart from '../../public/assets/icons/heart.svg'
import Image from 'next/image'
import './Slider.css'


export const Slider = () => {
  return (
    <div className='container-carrousel'>
        <div className='content'>
          <div className='pagination'></div>
        </div>
        <div className='state'>
            &nbsp;
        </div>
    <div className='controls'>
    <button className='control control--prev' aria-label='Previous'>
    <Image className='icon' src={heart} alt=' ' width={25} height={25}/>
    </button>
    <button className='control contro--play-pause' aria-label='Play/Pause'>
    <Image className='icon icon--play' src={heart} alt=' ' width={25} height={25}/>
    </button>
    <button className='control control--next' aria-label='Next'>
    <Image className='icon' src={heart} alt=' ' width={25} height={25}/>
    </button>
    </div>
    </div>
    )
}
