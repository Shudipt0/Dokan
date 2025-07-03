import React from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const CartInDeButton = () => {
  return (
    <div className=" md:w-[72px] md:h-[44px] flex items-center justify-between px-3 py-1 border border-gray-300 rounded">
      <p className=" text-[16px] text-black/80 font-semibold">01</p>
      <div className=" flex flex-col gap-1">
        <button className="text-[16px] text-black/80 cursor-pointer ">
          <IoIosArrowUp />
        </button>
        <button className=" text-[16px] text-black/80 cursor-pointer">
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartInDeButton;
