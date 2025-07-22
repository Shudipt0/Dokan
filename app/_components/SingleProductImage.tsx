"use client";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/legacy/image";
import { useState } from "react";

interface Item {
  product: any; // Replace 'any' with a specific type for your product if available
}

const SingleProductImage = ({product}: Item) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // console.log(product?.images)
  return (
    <div className=" md:w-[700px] md:h-[600px] flex gap-8">
      {/* vertical thumbnail */}
      <div className="flex flex-col gap-4">
        {product?.images?.map((image: string, index: number) => (
          <div
            key={image}
            onClick={() => setSelectedIndex(index)}
            className={`w-20 h-20 overflow-hidden rounded border cursor-pointer ${
              selectedIndex === index ? " border-[#DB4444]" : "border-gray-300"
            } `}
          >
            <Image
              src={image}
              alt='product id'
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
          {product?.images?.map((image: string) => (
            <div key={product.id} className="w-[500px] h-[600px] ">
              <Image
                src={image}
                alt={`Product image `}
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
