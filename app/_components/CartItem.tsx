import Image from "next/image";
import cartImage from "../../public/havic2.png";
import CartInDeButton from "./CartInDeButton";
import { FaTimesCircle } from "react-icons/fa";


const CartItem = () => {
  return (
    <div className="w-full md:h-[90px] flex items-center justify-between shadow rounded px-12 bg-white">
      <div className="relative group md:w-1/4 flex items-center gap-4 ">
        <Image src={cartImage} alt="cart image" className="w-20 h-20" />
        <p className="text-sm font-semibold text-black/80">H1 Gamepad</p>
        <button className="absolute opacity-0 group-hover:opacity-100 duration-200 cursor-pointer -top-1 -left-1 text-[16px] text-[#DB2222]"><FaTimesCircle /></button>
      </div>
      <p className="md:w-1/4 text-sm font-semibold text-black/80">$550</p>

      <div className="md:w-1/4">
        <CartInDeButton />
      </div>

      <p className=" text-sm font-semibold text-black/80 mr-5">$550</p>
    </div>
  );
};

export default CartItem;
