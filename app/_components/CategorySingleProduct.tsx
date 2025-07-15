"use client";
import RelatedItems from "@/app/_components/RelatedItems";
import SingleProduct from "@/app/_components/SingleProduct";
import { fetchProduct } from "@/app/api/Api";
import { useQuery } from "@tanstack/react-query";
import React, { use } from "react";

const CategorySingleProduct = ({ id }: { id: string }) => {
    // Fetch product details based on the product ID
    // console.log(id);
  const { data, isPending, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
  });
  // console.log(data)

  return (
    <div className="container mx-auto px-2 md:px-14 md:py-20 bg-white">
      <SingleProduct data={data} />
      <RelatedItems category={data?.category} />
    </div>
  );
};

export default CategorySingleProduct;
