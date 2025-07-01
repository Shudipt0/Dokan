import React from "react";
import ProductButton from "./ProductButton";
import HeroProductPagination from "./HeroProductPagination";

const HeroAllProducts = () => {
  return (
    <section className="w-full  flex flex-col items-center justify-center md:gap-20 md:py-20">
      <HeroProductPagination />
      <ProductButton />
    </section>
  );
};

export default HeroAllProducts;
