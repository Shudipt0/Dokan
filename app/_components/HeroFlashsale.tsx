import React from "react";
import FlashsaleCarousel from "./FlashsaleCarousel";
import ProductButton from "./ProductButton";

const HeroFlashsale = () => {
  return (
    <div className="w-full md:h-[800px] flex flex-col items-center justify-center md:gap-20 md:mt-28 border-b border-gray-300">
      <FlashsaleCarousel />
      <ProductButton />
    </div>
  );
};

export default HeroFlashsale;
