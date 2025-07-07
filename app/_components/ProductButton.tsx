import Link from 'next/link'
import React from 'react'

interface PropsLink{
  goTo: string;
}

const ProductButton = ({goTo}: PropsLink) => {
  return (
    <button >
      <Link className='md:w-[234px] md:h-14 text-white text-[16px] font-semibold bg-[#DB4444] rounded flex items-center justify-center ' href={goTo}>View All Products</Link>
    </button>
  )
}

export default ProductButton
