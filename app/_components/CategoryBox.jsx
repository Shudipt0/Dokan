import Link from 'next/link';
import React from 'react'
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";

// const categoryBoxItems = 
//     {id: 1,
//      icon: <HiOutlineDevicePhoneMobile  />,
//      name: 'phones' ,  
//     }


const CategoryBox = ({item}) => {
  return (
    <Link href={item.link} className='md:w-[170px] md:h-[145px] flex flex-col items-center justify-center text-black/80 hover:text-white border border-gray-300 rounded gap-5 hover:bg-[#DB4444]' >
      
      <div className='text-[55px]'>{item.icon}</div>
      <p className='text-[16px] font-semibold capitalize'>{item.name}</p>
    
    </Link>
  )
}

export default CategoryBox
