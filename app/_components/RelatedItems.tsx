'use client'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import HeroHeadLine from "./HeroHeadLine";
import ProductCard from "./ProductCard";


const RelatedItems = () => {
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
  return (
    <section className="w-full md:h-[750px] flex flex-col items-center justify-center md:gap-20 ">
      <div className=" relative w-full md:h-[495px] flex flex-col justify-between">
     <HeroHeadLine thumb={`Related`} title={'Items'} />
     {/* carousel section */}
      <div className="">
        <Carousel
          responsive={responsive}
          removeArrowOnDeviceType={["tablet", "mobile"]}
          itemClass=" mx-1 "
          arrows={false}
          customButtonGroup={<ButtonGroup/>}
          renderButtonGroupOutside={true}
        >
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </Carousel>
      </div>
    </div>
    </section>
  )
}

export default RelatedItems

//custom button  

const ButtonGroup = ({ next, previous, goToSlide, ...rest }: any) => {
  const { carouselState: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group absolute md:top-16 md:right-6 md:space-x-3 "> 
      <button className={`text-black p-3 rounded-full bg-gray-100  hover:bg-gray-200 cursor-pointer ${currentSlide === 0 ? 'disable' : ''}`} onClick={() => previous()} ><GoArrowLeft /></button>
      <button onClick={() => next()} className="text-black p-3 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer"><GoArrowRight /></button>
    </div>
  );
};