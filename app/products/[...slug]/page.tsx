'use client'

import ProductCard from "@/app/_components/ProductCard";
import { fetchSearchProducts } from "@/app/api/Api";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";

// Define the Products type (adjust fields as needed)
type Products = {
  id: string;
  // add other fields as needed, e.g. name: string, price: number, etc.
};

const productsPage = ({params}: {params: Promise<{ slug: string }>;}) => {
 
     const { slug } = use(params);
    //  console.log(slug)

    if (slug.length === 1){
         const {data} = useQuery({
            queryKey: ["products", slug[0]],
            queryFn:() => fetchSearchProducts(slug[0])
         });

        //  console.log(data)
        return(
            <div>
                <div className="md:w-full grid grid-cols-4 gap-6 space-y-6">
        {data?.map((item: Products) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
            </div>
        )
    }
  return (
    <div>
      Product page
    </div>
  )
}

export default productsPage
