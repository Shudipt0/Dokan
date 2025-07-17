// 'use client'
import { useQuery } from "@tanstack/react-query";
import HeroHeadLine from "./HeroHeadLine";
import ProductCard from "./ProductCard";
import Link from "next/link";
import { fetchBestSale } from "../api/Api";

const HeroSelling = () => {
  const {data, isPending, isError,error} = useQuery({
    queryKey: ['saleProducts'],
    queryFn: fetchBestSale,
    staleTime: 1000 * 60 * (60 * 24), // 24 hours
    refetchOnWindowFocus: false,
  })
  return (
    <section className="py-24">
      <div className=" relative w-full md:h-[495px] flex flex-col justify-between gap-16">
        <HeroHeadLine thumb={"This Month"} title={"Best Selling Products"} />
        {/* product card */}
        <div className="w-full flex justify-between ">
             {data?.map((item: any) => (
          <ProductCard key={item.id} item={item} />
        ))}
        </div>
        <button className=" md:w-[160px] md:h-14 absolute md:top-12 md:right-0 text-white text-[16px] font-semibold bg-[#DB4444] rounded flex items-center justify-center ">
          <Link href="/shop">View All</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSelling;
