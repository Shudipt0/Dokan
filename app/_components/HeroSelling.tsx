import React from "react";
import HeroHeadLine from "./HeroHeadLine";
import ProductCard from "./ProductCard";
import Link from "next/link";

const HeroSelling = () => {
  return (
    <section className="py-24">
      <div className=" relative w-full md:h-[495px] flex flex-col justify-between gap-16">
        <HeroHeadLine thumb={"This Month"} title={"Best Selling Products"} />
        {/* product card */}
        <div className="w-full flex justify-between ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        <button className=" md:w-[160px] md:h-14 absolute md:top-12 md:right-0 text-white text-[16px] font-semibold bg-[#DB4444] rounded flex items-center justify-center ">
          <Link href="#">View All</Link>
        </button>
      </div>
    </section>
  );
};

export default HeroSelling;
