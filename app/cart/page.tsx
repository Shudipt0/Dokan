import React from 'react'
import CartItem from '../_components/CartItem'
import Link from 'next/link'

const cartPage = () => {
  return (
    <div className='container mx-auto px-2 md:px-14 bg-white md:py-20 space-y-24'>
        {/* cart */}
        <div className='w-full flex flex-col gap-5  '>
             <div className='w-full md:h-[72px] flex items-center justify-between shadow rounded px-12'>
                 <p className='md:w-1/4 text-sm font-semibold text-black/80 '>Product</p>
                 <p className='md:w-1/4 text-sm font-semibold text-black/80 '>Price</p>
                 <p className='md:w-1/4 text-sm font-semibold text-black/80'>Quantity</p>
                 <p className='text-sm font-semibold text-black/80'>Subtotal</p>
             </div>
             {/* cart item */}
             <CartItem/>
             <CartItem/>
             <CartItem/>
             {/* buttons */}
             <div className='w-full flex justify-between'>
                <Link href='/' className='md:w-[218px] md:h-[56px] flex items-center justify-center rounded border border-gray-300 text-[16px] text-black/90 font-semibold hover:bg-[#DB4444] hover:text-white '>
                   Return To Shop
                </Link>
                <button className='md:w-[218px] md:h-[56px] flex items-center justify-center rounded border border-gray-300 text-[16px] text-black/90 font-semibold hover:bg-[#DB4444] hover:text-white '>
                   Update Cart
                </button>
             </div>
        </div>

        {/* total cart */}
        <div className='md:w-full flex justify-between '>
            {/* coupon button */}
            <div className='flex gap-6'>
                <input type="text" placeholder='Coupon Code' className='text-[16px] text-black/70 font-semibold border border-gray-400 px-8 py-2 outline-none rounded'  />
                <button className='md:w-[218px] md:h-[56px] flex items-center justify-center rounded text-[16px] font-semibold bg-[#DB4444] hover:bg-[#DB2222] text-white '>
                   Update Cart
                </button>
            </div>
        </div>
      
    </div>
  )
}

export default cartPage
