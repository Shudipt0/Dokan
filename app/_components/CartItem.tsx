'use clinet'

import Image from "next/image";
import CartInDeButton from "./CartInDeButton";
import { FaTimesCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartslice/cartSlice";

// Define the Props type for CartItem
interface Props {
  items: any; // Replace 'any' with the actual type if known
  
}


const CartItem = ({items } : Props) => {
  const dispatch = useDispatch();
  const handleRemove = (item: any) => {
    dispatch(removeFromCart(item))
  };
  return (
    <>
    {items?.map((item : any)=> (
      <div key={item.id} className="w-full md:h-[90px] flex items-center justify-between shadow rounded px-12 bg-white group">
      <div className="relative  md:w-1/4 flex items-center gap-4 ">
        <Image src={item.images[0]} alt="cart image" width={20} height={20} className="w-20 h-20" />
        <p className="text-sm font-semibold text-black/80">{item.title}</p>
        <button onClick={() => handleRemove(item)} className="absolute opacity-0 group-hover:opacity-100 duration-200 cursor-pointer -top-1 -left-1 text-[16px] text-[#DB2222]"><FaTimesCircle /></button>
      </div>
      <p className="md:w-1/4 text-sm font-semibold text-black/80">${item.price}</p>

      <div className="md:w-1/4">
        <CartInDeButton item={item} />
      </div>

      <p className=" text-sm font-semibold text-black/80 mr-5">{item.quantity * item.price}</p>
    </div>
    ))}
    </>
  );
};

export default CartItem;
