'use client'
import CartItem from "../../_components/CartItem";
import Link from "next/link";
import TotalCart from "../../_components/TotalCart";
import { useSelector } from "react-redux";

interface RootState {
  cart: {
    items: any[]; // Replace 'any' with your actual item type
    total: number; // Assuming you have a total in your cart state
  };
}


const cartPage = () => {
  const {items, total} = useSelector((state: RootState) => state.cart)
  console.log(items, total)
  
  return (
    <div className="container mx-auto px-3 md:px-14 bg-white pb-10 md:py-20 space-y-5 md:space-y-24">
      {/* cart */}
      <div className="w-full flex flex-col gap-5  ">
        <div className="w-full h-12 md:h-[72px] flex items-center justify-between shadow rounded px-2 md:px-12">
          <p className="md:w-1/4 text-[12px] md:text-sm font-semibold text-black/80 ">
            Product
          </p>
          <p className="md:w-1/4 text-[12px] md:text-sm font-semibold text-black/80 ">Price</p>
          <p className="md:w-1/4 text-[12px] md:text-sm font-semibold text-black/80">
            Quantity
          </p>
          <p className="text-[12px] md:text-sm font-semibold text-black/80">Subtotal</p>
        </div>
        {/* cart item */}
        
        <CartItem items={items}  />
        
        {/* buttons */}
        <div className="w-full flex justify-between ">
          <Link
            href="/"
            className="w-36 h-8 md:w-[218px] md:h-[56px] flex items-center justify-center rounded border border-gray-300 text-sm md:text-[16px] text-black/90 font-semibold hover:bg-[#DB4444] hover:text-white "
          >
            Return To Shop
          </Link>
          <button className="w-36 h-8 md:w-[218px] md:h-[56px] flex items-center justify-center rounded border border-gray-300 text-sm md:text-[16px] text-black/90 font-semibold hover:bg-[#DB4444] hover:text-white ">
            Update Cart
          </button>
        </div>
      </div>

      {/* total cart */}
      <TotalCart total={total} />
    </div>
  );
};

export default cartPage;
