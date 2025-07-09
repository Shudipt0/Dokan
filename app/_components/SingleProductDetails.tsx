'use client'
import Rating from "./Rating";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { GrPowerCycle } from "react-icons/gr";
import {useDispatch} from 'react-redux';
import { addToCart } from '../redux/cartslice/cartSlice';
import { useState } from "react";


interface Item {
  product: any;
};

const SingleProductDetails = ({ product }: Item) => {
  const [quantity, setQuantity] = useState(1);
  // console.log(product);

  const dispatch = useDispatch();

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1)
  };

  const handleQuantityDecrease = () => {
    setQuantity((prev) =>  Math.max(prev - 1, 1) )
  };
  const handleAddToCart = () => {
    dispatch(addToCart({...product, quantity}))
  }

  return (
    <div className="md:w-[500px] md:h-[600px] flex flex-col justify-between">
      <h1 className="text-3xl text-black/90 font-semibold ">
        {product?.title}
      </h1>
      {/* rating section */}
      <div className="flex items-center gap-5">
        <Rating rating={product?.rating} />
        <p className="text-sm text-gray-400">({product?.reviews?.length})</p>
        <hr className="w-[2px] h-full bg-gray-400" />
        <p className="text-sm text-green-500">
          {" "}
          {product?.stock > 0 ? "In Stock" : "Stock Out"}
        </p>
      </div>
      {/* price section */}
      <h1 className="text-2xl text-black/90 font-normal">${product?.price}</h1>

      {/* details */}
      <p className="text-sm text-black/80 font-semibold">
        {product?.description}
      </p>
      <p className="w-full h-[1px] bg-gray-400" />
      {/* color section */}
      {product?.colors && (
        <div className="flex items-center gap-4">
          <h3 className="text-[20px] text-black/90 ">Colours:</h3>
          <div className="flex gap-2">
            <button className="w-[20px] h-[20px] rounded-full bg-blue-200 "></button>
            <button className="w-[20px] h-[20px] rounded-full bg-[#DB4444] "></button>
          </div>
        </div>
      )}
      {/* size section */}
      {product?.sizes && (
        <div className="flex items-center gap-4">
          <h3 className="text-[20px] text-black/90 ">Size:</h3>
          <div className="flex gap-3">
            <button className="w-[32px] h-[32px] border rounded text-sm text-black/80 hover:text-white bg-white hover:bg-[#DB4444] ">
              XS
            </button>
            <button className="w-[32px] h-[32px] border rounded text-sm text-black/80 hover:text-white bg-white hover:bg-[#DB4444] ">
              S
            </button>
            <button className="w-[32px] h-[32px] border rounded text-sm text-black/80 hover:text-white bg-white hover:bg-[#DB4444] ">
              M
            </button>
            <button className="w-[32px] h-[32px] border rounded text-sm text-black/80 hover:text-white bg-white hover:bg-[#DB4444] ">
              L
            </button>
            <button className="w-[32px] h-[32px] border rounded text-sm text-black/80 hover:text-white bg-white hover:bg-[#DB4444] ">
              XL
            </button>
          </div>
        </div>
      )}
      {/* buttons section */}
      <div className="flex items-center gap-5">
        {/* increase decrease */}
        <div className="w-[160px] h-[44px] text-2xl flex justify-between border border-gray-300 rounded ">
          <button onClick={handleQuantityDecrease} className="w-[44px] h-[44px] flex items-center justify-center rounded-l font-semibold text-black/80 hover:text-white hover:bg-[#DB4444]">
            -
          </button>
          <p className=" text-black/90 font-semibold py-1 ">{quantity}</p>
          <button onClick={handleQuantityIncrease} className=" w-[44px] h-[44px] flex items-center justify-center rounded-r font-semibold text-black/80 hover:text-white hover:bg-[#DB4444]">
            +
          </button>
        </div>
        {/* buy button */}
        <button className="md:w-[165px] md:h-[44px] text-white text-[16px] font-semibold bg-[#DB4444] hover:bg-[#DB4466] rounded flex items-center justify-center cursor-pointer">
          Buy Now
        </button>
        {/* wish button */}
        <button className="w-[45px] h-[45px] flex items-center justify-center text-[24px] border border-gray-300 rounded text-black/90 hover:text-white hover:bg-[#DB4444] cursor-pointer ">
          <FaRegHeart />
        </button>
      </div>
      {/* add to cart button */}
          <div className="md:w-[410px]">
            <button onClick={handleAddToCart} className="w-full md:h-[44px] text-white text-[16px] font-semibold bg-green-500 hover:bg-green-600 rounded flex items-center justify-center cursor-pointer" >Add To Cart</button>
          </div>
      {/* delivery info */}
      <div className="md:w-[410px] md:h-[180px] border border-gray-300 rounded ">
        <div className="w-full h-[50%] pl-5 flex items-center gap-3 text-black/90 border-b border-gray-300">
          <TbTruckDelivery size={30} />
          <div className="space-y-2">
            <h4 className="text-[16px] font-semibold ">Free Delivery</h4>
            <p className="text-sm font-normal underline underline-offset-1">
              Enter your postal code for Delivery Availability
            </p>
          </div>
        </div>
        <div className="w-full h-[50%] pl-5 flex items-center gap-3 text-black/90">
          <GrPowerCycle size={30} />
          <div className="space-y-2">
            <h4 className="text-[16px] font-semibold ">
              {product?.returnPolicy}
            </h4>
            <p className="text-sm font-normal">
              {product?.shippingInformation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductDetails;
