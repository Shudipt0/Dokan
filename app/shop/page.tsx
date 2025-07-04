import React from 'react'
import ProductCard from '../_components/ProductCard'

const shopPage = () => {
  return (
    <section className="container mx-auto px-2 md:px-14 bg-white md:flex justify-between md:py-20">
     
     {/* search inputs */}
     <div className=''>
          inputs
     </div>
     
     {/* products section */}
      <div className='md:w-[860px] grid grid-cols-3 gap-6'>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>

      </div>
    </section>
  )
}

export default shopPage
