import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Rating from "./Rating";
import Image from "next/legacy/image";
import Link from "next/link";

interface ProductCardProps {
  item: any; // Replace 'any' with a specific type for your product if available
}

const ProductCard = ({ item }: ProductCardProps) => {
  // console.log(item)
  // get original price
  const originalPrice = Math.ceil(item?.price + item?.discountPercentage);
  // get discount rate
  const discountRate = Math.ceil(
    (item?.discountPercentage / originalPrice) * 100
  );

  return (
    <Link
      href={`/shop/${item?.id}`}
      className=" group w-[175px] md:w-[270px] h-[270px] md:h-[350px] flex flex-col justify-between "
    >
      {/* image part */}
      <div className="relative w-full md:h-[250px] bg-gray-100 flex flex-col items-center justify-center rounded-t-sm">
        <div className="md:w-[190px] md:h-[180px]">
          <Image
            src={item?.images[0]}
            alt={`Product image ${item?.images[0]?.id}`}
            width={190}
            height={190}
            // style={{ height: "auto" }}
          />
        </div>
        {/* floating items */}
        <button className="absolute bottom-0 w-full md:h-10 text-[10px] md:text-[12px] text-white bg-black font-medium rounded-b opacity-0 group-hover:opacity-100 duration-200 cursor-pointer">
          Add To Cart
        </button>
        <button className="absolute w-8 h-4 md:w-12 md:h-6 top-4 left-4 bg-[#DB4444] text-[8px] md:text-sm text-white rounded ">
          -{discountRate}%
        </button>
        <div className=" absolute top-4 right-4 text-black space-y-2">
          <button className=" md:w-[34px] md:h-[34px]  bg-white rounded-full flex items-center justify-center cursor-pointer ">
            <CiHeart />
          </button>
          <button className=" md:w-[34px] md:h-[34px]  bg-white rounded-full flex items-center justify-center cursor-pointer ">
            <IoEyeOutline />
          </button>
        </div>
      </div>
      {/* text part */}
      <div className=" md:space-y-2">
        <h2 className="text-sm md:text-[16px] text-black font-semibold">{item?.title}</h2>
        <p className="text-[12px] md:text-[14px] text-red-500 font-semibold ">
          ${item?.price}{" "}
          <span className="text-gray-500 line-through">${originalPrice}</span>
        </p>
        <div className="flex items-center gap-3">
          <Rating rating={item?.rating} />
          <span className="text-black/60 text-[10px] md:text-[16px]"> ({item?.reviews?.length})</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
