import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero1 from "@/public/hero-banner.jpg";
import Image from "next/image";

const HeroCarousel = () => {
  return (
    <div className=" w-full md:h-96 md:flex justify-end items-start">
      <Carousel
      autoPlay={true}
      showArrows={false}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      className="w-[95%] md:h-[344px]">
        <div className=" ">
          <Image src={hero1} alt="hero1 image" className=" " width={1000} height={280} priority={true} />
        </div>
        <div className=" ">
          <Image src={hero1} alt="hero1 image" className=" " width={1000} height={280} priority={true} />
        </div>
        <div className=" ">
          <Image src={hero1} alt="hero1 image" className=" " width={1000} height={280} priority={true} />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
