// use client
import Link from 'next/link'
import React from 'react'



interface Category {
  name: string;
  slug: string
  // add other fields as needed
}

interface HeroCategoryProps {
  categories: Category[];
}

const HeroCategory = ({ categories } : HeroCategoryProps) => {
//  console.log(category)
  return (
    <div className='md:w-[350px] md:h-96 border-r border-gray-300 flex items-end'>
      <div className='w-[90%] h-[344px] flex flex-col space-y-3 overflow-auto scrollbar-thin '>
    {categories?.map((list,index)=> (
          <Link key={index} href={`category/${list.slug}`} className='md:text-[18px] text-black/80 font-mono'>{list.name}</Link>

    ))}
             
      </div>
    </div>
  )
}

export default HeroCategory
