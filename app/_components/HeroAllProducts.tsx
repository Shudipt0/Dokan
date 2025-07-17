// 'use client'
import ProductButton from "./ProductButton";
import HeroProductPagination from "./HeroProductPagination";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { fetchAllProducts } from "../api/Api";

const HeroAllProducts = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const limit = 8
  const {data} = useQuery({
    queryKey: ['products', pageNumber, limit],
    queryFn: () => fetchAllProducts(pageNumber,limit),
    staleTime: 1000 * 60 * (60 * 24), // 24 hours
    refetchOnWindowFocus: false,
  });
  // console.log(data?.products)
  return (
    <section className="w-full  flex flex-col items-center justify-center md:gap-20 md:py-20">
      <HeroProductPagination products={data?.products} totalPages={data?.totalPages ?? 1} currentPage={pageNumber} setPageNumber={setPageNumber} />
      <ProductButton goTo="/shop" />
    </section>
  );
};

export default HeroAllProducts;
