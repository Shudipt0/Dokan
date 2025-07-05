'use client'
import SingleProductImage from './SingleProductImage'
import SingleProductDetails from './SingleProductDetails'
import { useQuery } from '@tanstack/react-query'
import { fetchProduct } from '../api/Api'
import { useParams } from 'next/navigation'

const SingleProduct = ({data}: any) => {

  return (
    <div className='w-full flex justify-center gap-10 '>
        {/* image section */}
        <SingleProductImage product={data} />
        {/* deatils section */}
        <SingleProductDetails product={data}/>
      
    </div>
  )
}

export default SingleProduct
