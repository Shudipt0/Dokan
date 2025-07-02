import React from 'react'
import Rating from './Rating'
import { CiHeart } from 'react-icons/ci'
import { IoEyeOutline } from 'react-icons/io5'

const ProductCardTwo = () => {
  return (
     <div className=' group md:w-[270px] md:h-[350px] flex flex-col justify-between ' >
        {/* image part */}
        <div className='relative w-full md:h-[250px] bg-gray-100 flex flex-col items-center justify-center rounded-t-sm'>
           <div className='md:w-[190px] md:h-[180px]  bg-blue-100'></div>
           {/* floating items */}
           <button className='absolute bottom-0 w-full md:h-10 text-sm text-white bg-black font-medium rounded-b opacity-0 group-hover:opacity-100 duration-200 cursor-pointer' >Add To Cart</button>
           <div className=' absolute top-4 right-4 text-black space-y-2'>
           <button className=' md:w-[34px] md:h-[34px]  bg-white rounded-full flex items-center justify-center cursor-pointer '><CiHeart /></button>
           <button className=' md:w-[34px] md:h-[34px]  bg-white rounded-full flex items-center justify-center cursor-pointer '><IoEyeOutline /></button>
           </div>
        </div>
        {/* text part */}
        <div className="space-y-2">
           <h2 className="text-[16px] text-black font-semibold">HAVIT HV-G92 Gamepad</h2>
           <p className="text-[14px] text-red-500 font-semibold ">$120 <span className="text-gray-500 line-through">$160</span></p>
           <div>
            <Rating/>
            <span className="text-black/60"> (88)</span>
           </div>
        </div>
      
    </div>
  )
}

export default ProductCardTwo
