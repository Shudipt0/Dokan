import Link from 'next/link'
import React from 'react'

const ProductButton = () => {
  return (
    <button className='md:w-[234px] md:h-14 text-white text-[16px] font-semibold bg-[#DB4444] rounded flex items-center justify-center '>
      <Link href='#'>View All Products</Link>
    </button>
  )
}

export default ProductButton
