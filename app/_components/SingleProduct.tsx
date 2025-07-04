'use client'
import SingleProductImage from './SingleProductImage'
import SingleProductDetails from './SingleProductDetails'
import { useQuery } from '@tanstack/react-query'
import { fetchProduct } from '../api/Api'
import { useParams } from 'next/navigation'

const SingleProduct = () => {
  const params = useParams();
  const id = params.id
    const { data, isPending, isError, error } = useQuery({
      queryKey: ['product', id],
      queryFn: () => fetchProduct(id)
    })
    // console.log(data)
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
