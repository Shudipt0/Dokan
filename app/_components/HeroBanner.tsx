import React from 'react'
import HeroCategory from './HeroCategory'
import HeroCarousel from './HeroCarousel'
import { fetchAllCategory } from '../api/Api';
import { useQuery } from '@tanstack/react-query';

const HeroBanner = () => {
       const {data,isPending, isError,error} = useQuery({
        queryKey: ["categories"],
        queryFn: fetchAllCategory,
     });
   //   console.log(data);
  return (
    <div className='w-full md:flex '>
      <HeroCategory categories={data}/>
      <HeroCarousel/>
    </div>
  )
}

export default HeroBanner
