import RelatedItems from '@/app/_components/RelatedItems'
import SingleProduct from '@/app/_components/SingleProduct'
import React from 'react'

const page = () => {
  return (
    <div className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
      <SingleProduct/>
      <RelatedItems/>

    </div>
  )
}

export default page
