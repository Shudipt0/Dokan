import React from "react";
import ProductCard from "./ProductCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import HeroHeadLine from "./HeroHeadLine";



interface FlashsaleCarouselProps {
  products: any[]; // Replace 'any' with your actual product type if available
}

const FlashsaleCarousel = ({ products }: FlashsaleCarouselProps) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  // console.log(products)
  return (
    <div className=" relative w-full md:h-[495px] flex flex-col justify-between">
     <HeroHeadLine thumb={`Today's`} title={'Flash Sales'} />
     {/* carousel section */}
      <div className="">
        {Array.isArray(products) && products.length > 0 && (
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass=" mx-1 "
          arrows={false}
          customButtonGroup={<ButtonGroup/>}
          renderButtonGroupOutside={true}
        >
        
            {products?.map((item: any) => (
          <ProductCard key={item.id} item={item} />
        ))}
       
          
        </Carousel>
        )}
      </div>
    </div>
  );
};

export default FlashsaleCarousel;

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group absolute md:top-16 md:right-6 md:space-x-3 "> 
      <button className={`text-black p-3 rounded-full bg-gray-100  hover:bg-gray-200 cursor-pointer ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()} ><GoArrowLeft /></button>
      <button onClick={() => next()} className="text-black p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"><GoArrowRight /></button>
    </div>
  );
};
