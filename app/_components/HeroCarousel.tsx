import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import hero1 from "@/public/hero-banner.jpg";
import Image from "next/legacy/image";

const HeroCarousel = () => {
  return (
    <div className="hidden w-full md:h-96 md:flex justify-end items-end">
      <Carousel
      autoPlay={true}
      showArrows={false}
      infiniteLoop={true}
      showStatus={false}
      showThumbs={false}
      className=" w-[95%] md:h-[344px]">
        <div className=" ">
          <Image src={hero1} alt="hero1 image"  width={1070} height={344} priority={true} />
        </div>
        <div className=" ">
          <Image src={hero1} alt="hero1 image"  width={1070} height={344} priority={true} />
        </div>
        <div className=" ">
          <Image src={hero1} alt="hero1 image"  width={1070} height={344} priority={true} />
        </div>
      </Carousel>
    </div>
  );
};

export default HeroCarousel;
