import React from "react";
import HeroHeadLine from "./HeroHeadLine";
import ProductCard from "./ProductCard";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const HeroProductPagination = () => {
  return (
    <section className=" relative w-full flex flex-col justify-between gap-16">
      <HeroHeadLine thumb={"Our Products"} title={"Explore Our Products"} />
      {/* product pagination */}
      <div className=" w-full grid md:grid-cols-4 justify-items-center md:gap-22 ">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>

      <div className="absolute flex gap-4 md:top-16 md:right-0">
        <button className="text-black p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <GoArrowLeft />
        </button>
        <button className="text-black p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer">
          <GoArrowRight />
        </button>
      </div>
    </section>
  );
};

export default HeroProductPagination;
