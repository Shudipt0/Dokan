'use client'
import { useQuery } from '@tanstack/react-query'
import ProductCard from '../_components/ProductCard'
import {fetchAllProducts} from "../api/Api"

type Products = {
  id: string | number;
  // add other product fields as needed
};

const shopPage = () => {
  const {data,isPending,isError,error} = useQuery<Products[]>({
    queryKey: ['products'],
    queryFn: fetchAllProducts
  })
  console.log(data)
  return (
    <section className="container mx-auto px-2 md:px-14 bg-white md:flex justify-between md:py-20">
     
     {/* search inputs */}
     <div className=''>
          inputs
     </div>
     
     {/* products section */}
      <div className='md:w-[860px] grid grid-cols-3 gap-6'>
      {data?.map((item: Products)=> (
        <ProductCard key={item.id} item={item}/>

      ))}

        {/* <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/>
        <ProductCard/> */}

      </div>
    </section>
  )
}

export default shopPage
