"use client";
import Image from "next/image";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/wishlistSlice/wishlistSlice";

interface WishListProps {
  item: any; // Replace 'any' with a specific type for your product if available
}

const WishlistCart = ({ item }: WishListProps) => {
  const dispatch = useDispatch();

  // console.log(item)
  // get original price
  const originalPrice = Math.ceil(item?.price + item?.discountPercentage);
  // get discount rate
  const discountRate = Math.ceil(
    (item?.discountPercentage / originalPrice) * 100
  );

  // // handle wish delete
  const handlewishDelete = () => {
    dispatch(removeFromWishlist(item));
  };
  return (
    <div className=" group md:w-[270px] md:h-[310px] flex flex-col justify-between ">
      {/* image part */}
      <div className="relative w-full md:h-[250px] bg-gray-100 flex flex-col items-center justify-center rounded-t-sm">
        <div className="md:w-[190px] md:h-[180px]">
          <Image
            src={item?.images[0]}
            alt={`Product image ${item?.images[0]?.id}`}
            width={190}
            height={180}
          />
        </div>
        {/* floating items */}
        <button className="absolute bottom-0 w-full md:h-10 text-sm text-white bg-black font-medium rounded-b opacity-0 group-hover:opacity-100 duration-200 cursor-pointer">
          Add To Cart
        </button>
        <button className="absolute md:w-12 md:h-6 top-4 left-4 bg-[#DB4444] text-[12px] text-white rounded ">
          -{discountRate}%
        </button>
        <div className=" absolute top-4 right-4 text-black space-y-2">
          <button
            onClick={handlewishDelete}
            className=" md:w-[34px] md:h-[34px]  bg-white hover:bg-[#DB4444] hover:text-white rounded-full flex items-center justify-center cursor-pointer "
          >
            <RiDeleteBin6Line size={20} />
          </button>
        </div>
      </div>
      {/* text part */}
      <div className="space-y-2">
        <h2 className="text-[16px] text-black font-semibold">{item?.title}</h2>
        <p className="text-[14px] text-red-500 font-semibold ">
          ${item?.price}{" "}
          <span className="text-gray-500 line-through">${originalPrice}</span>
        </p>
      </div>
    </div>
  );
};

export default WishlistCart;
