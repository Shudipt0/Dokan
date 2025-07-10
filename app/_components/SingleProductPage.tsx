'use client'
import RelatedItems from '@/app/_components/RelatedItems'
import SingleProduct from '@/app/_components/SingleProduct'
import { fetchProduct } from '@/app/api/Api';
import { useQuery } from '@tanstack/react-query';
import React from 'react'

const SingleProductPage = ({ id }: { id: string }) => {

    const { data, isPending, isError, error } = useQuery({
      queryKey: ['product', id],
      queryFn: () => fetchProduct(id)
    })
    // console.log(data)
  return (
    <div className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
      <SingleProduct data={data}/>
      <RelatedItems/>

    </div>
  )
}

export default SingleProductPage;
