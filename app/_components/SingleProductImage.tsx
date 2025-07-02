"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import havic1 from "../../public/havic1.png";
import Image from "next/image";
import { useState } from "react";

const Images = [
  { id: 1, src: havic1 },
  { id: 2, src: havic1 },
  { id: 3, src: havic1 },
  { id: 4, src: havic1 },
  { id: 5, src: havic1 },
];

const SingleProductImage = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <div className=" md:w-[700px] md:h-[600px] flex gap-8">
      {/* vertical thumbnail */}
      <div className="flex flex-col gap-4">
        {Images.map((item, index) => (
          <div
            key={item.id}
            onClick={() => setSelectedIndex(index)}
            className={`w-20 h-20 overflow-hidden rounded border cursor-pointer ${
              selectedIndex === index ? " border-[#DB4444]" : "border-gray-300"
            } `}
          >
            <Image
              src={item.src}
              alt={`thumb ${item.id}`}
              width={80}
              height={80}
              objectFit="cover"
            />
          </div>
        ))}
      </div>

      {/* main carousel */}
      <div className="w-[500px] h-[600px] overflow-hidden">
        <Carousel
          selectedItem={selectedIndex}
          onChange={setSelectedIndex}
          showArrows={false}
          showThumbs={false}
          autoPlay={false}
          showStatus={false}
          showIndicators={false}
        >
          {Images.map((item) => (
            <div key={item.id} className="w-[500px] h-[600px] ">
              <Image
                src={item.src}
                alt={`Product image ${item.id}`}
                width={300}
                height={300}
                className="object-contain w-full h-full"
              />



            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default SingleProductImage;
