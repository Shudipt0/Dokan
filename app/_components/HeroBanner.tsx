import React from 'react'
import HeroCategory from './HeroCategory'
import HeroCarousel from './HeroCarousel'

const HeroBanner = () => {
  return (
    <div className='w-full md:flex '>
      <HeroCategory/>
      <HeroCarousel/>
    </div>
  )
}

export default HeroBanner
