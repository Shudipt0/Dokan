// 'use client'
import SingleProductImage from './SingleProductImage'
import SingleProductDetails from './SingleProductDetails'


const SingleProduct = ({data}: any) => {

  return (
    <div className='w-full flex flex-col md:flex-row justify-center gap-10 '>
        {/* image section */}
        <SingleProductImage product={data} />
        {/* deatils section */}
        <SingleProductDetails product={data}/>
      
    </div>
  )
}

export default SingleProduct
