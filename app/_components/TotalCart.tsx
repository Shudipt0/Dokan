import Link from "next/link";
import React from "react";

interface Props{
  total: number
}
const TotalCart = ({total} : Props) => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between space-y-5 md:space-y-0 ">
      {/* coupon button */}
      <div className="flex justify-between md:justify-start md:gap-6">
        <input
          type="text"
          placeholder="Coupon Code"
          className="w-52 h-8 md:w-[260px] md:h-[56px] text-sm md:text-[16px] text-black/70 font-semibold border border-gray-400 px-8 py-2 outline-none rounded"
        />
        <button className="w-36 h-8 md:w-[218px] md:h-[56px] flex items-center justify-center rounded text-sm md:text-[16px] font-semibold bg-[#DB4444] hover:bg-[#DB2222] text-white ">
          Update Cart
        </button>
      </div>
      {/* total section */}
      <div className="w-full h-fit p-3 md:p-0 md:w-[470px] md:h-[324px] md:border-2 border-black/60 flex flex-col gap-5 justify-center px-6 rounded">
        <h2 className="text-[16px] md:text-[20px] text-black/80 font-semibold ">Cart Total</h2>
        {/* subtotal */}
        <div className="w-full flex items-center justify-between">
          <p className="text-[12px] md:text-sm text-black/80 font-semibold">Subtotal:</p>
          <p className="text-[12px] md:text-sm text-black/80 font-semibold">${total}</p>
        </div>
        <hr className="w-full text-[1px] text-black/60" />
        {/* shipping */}
        <div className="w-full flex items-center justify-between">
          <p className="text-[12px] md:text-sm text-black/80 font-semibold">Shipping:</p>
          <p className="text-[12px] md:text-sm text-black/80 font-semibold">Free</p>
        </div>
        <hr className="w-full text-[1px] text-black/60" />
        {/* total */}
        <div className="w-full flex items-center justify-between">
          <p className="text-[12px] md:text-sm text-black/80 font-semibold">Total:</p>
          <p className="text-[12px] md:text-sm text-black/80 font-semibold">${total}</p>
        </div>
        {/* proccess button */}
        <div className="w-full flex items-center justify-center">
          <Link href='/checkout' className="w-48 h-8 md:w-[260px] md:h-[56px] flex items-center justify-center rounded text-sm md:text-[16px] font-semibold bg-[#DB4444] hover:bg-[#DB2222] text-white ">
            Proccess To Checkout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TotalCart;
