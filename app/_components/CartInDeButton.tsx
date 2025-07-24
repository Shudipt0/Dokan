'use client'
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useDispatch } from "react-redux";
import { addToCart, decrement } from "../redux/cartslice/cartSlice";

const CartInDeButton = ({item} : any) => {
  const dispatch = useDispatch();
  

  const handleIncrement = () => {
    dispatch(addToCart(item))
  };

  const handleDecrement = () => {
    dispatch(decrement(item))
  };

  return (
    <div className="w-14 h-8 md:w-[72px] md:h-[44px] flex items-center justify-between px-3 py-1 border border-gray-300 rounded">
      <p className="text-sm md:text-[16px] text-black/80 font-semibold">{item.quantity}</p>
      <div className=" flex flex-col gap-1">
        <button onClick={handleIncrement} className="text-sm md:text-[16px] text-black/80 cursor-pointer ">
          <IoIosArrowUp />
        </button>
        <button onClick={handleDecrement} className="text-sm md:text-[16px] text-black/80 cursor-pointer">
          <IoIosArrowDown />
        </button>
      </div>
    </div>
  );
};

export default CartInDeButton;
