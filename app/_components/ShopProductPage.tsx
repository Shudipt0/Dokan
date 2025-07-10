"use client";
import { useQuery } from "@tanstack/react-query";

import { useState } from "react";
import { fetchAllProducts } from "../api/Api";
import ProductCard from "./ProductCard";
import { PaginationPage } from "./PaginationPage";


type Products = {
  id: string | number;
  // add other product fields as needed
};

type ProductsResponse = {
  products: Products[];
  totalPages: number;
};

const ShopProductPage = () => {
 

  const [pageNumber, setPageNumber] = useState(1);
  const limit = 12;

  const { data, isPending, isError, error } = useQuery<ProductsResponse, Error>(
    {
      queryKey: ["products", pageNumber, limit],
      queryFn: () => fetchAllProducts(pageNumber, limit),
    }
  );
  // console.log(data);

  return (
    <section className="container mx-auto px-2 md:px-14 space-x-3 bg-white md:flex justify-between md:py-20">
      {/* search inputs */}
      <div className="md:w-[350px] bg-red-100">
        {/* <FilterFields filters={filters} setFilters={setFilters}/> */}
      </div>

      {/* products section */}
      <div className="w-full flex flex-col justify-center gap-20">
        <div className="md:w-full grid grid-cols-4 gap-6 space-y-6">
          {data?.products?.map((item: Products) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>

        {/* pagination */}
        <PaginationPage
          currentPage={pageNumber}
          totalPage={data?.totalPages || 1}
          setPageNumber={setPageNumber}
        />
      </div>
    </section>
  );
};

export default ShopProductPage;
