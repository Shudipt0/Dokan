import React from 'react'
import SingleProductImage from './SingleProductImage'
import SingleProductDetails from './SingleProductDetails'

const SingleProduct = () => {
  return (
    <div className='w-full flex justify-center gap-10 '>
        {/* image section */}
        <SingleProductImage/>
        {/* deatils section */}
        <SingleProductDetails/>
      
    </div>
  )
}

export default SingleProduct
