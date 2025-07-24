import { VscSend } from "react-icons/vsc";
import { FaFacebookF } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const items = [
  {
    item: (
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-[16px] md:text-xl font-bold text-white py-1">Dokan</h1>
        <h3 className="text-[14px] md:text-[16px] font-semibold text-white">Subscribe</h3>
        <p className="text-[12px] md:text-sm text-white">Get 10% off your first order</p>
        <div className="w-[190px] md:w-[217px] h-10 md:h-12 flex justify-between items-center border border-white/80 rounded p-4">
          <input
            type="text"
            placeholder="Enter your email"
            className="w-32 md:w-36 bg-black text-[12px] md:Ftext-[16px] text-white/50 outline-none border-none "
          />
          <VscSend size={20} className="text-white " />
        </div>
      </div>
    ),
  },
  {
    item: (
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-[16px] md:text-xl font-bold text-white py-1">Support</h1>
        <p className="text-[12px] md:text-sm text-white">
          111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
        </p>
        <p className="text-[12px] md:text-sm text-white">dokan10@gmail.com</p>
        <p className="text-[12px] md:text-sm text-white">+88017-88888-9999</p>
      </div>
    ),
  },
  {
    item: (
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className=" text-[16px] md:text-xl font-bold text-white py-1">Account</h1>
        <p className="text-[12px] md:text-sm text-white">My Account</p>
        <p className="text-[12px] md:text-sm text-white">Login / Register</p>
        <p className="text-[12px] md:text-sm text-white">Cart</p>
        <p className="text-[12px] md:text-sm text-white">Wishlist</p>
        <p className="text-[12px] md:text-sm text-white">Shop</p>
      </div>
    ),
  },
  {
    item: (
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-[16px] md:text-xl font-bold text-white py-1">Quick Link</h1>
        <p className="text-[12px] md:text-sm text-white">Privacy Policy</p>
        <p className="text-[12px] md:text-sm text-white">Terms Of Use</p>
        <p className="text-[12px] md:text-sm text-white">FAQ</p>
        <p className="text-[12px] md:text-sm text-white">Contact</p>
      </div>
    ),
  },
  {
    item: (
      <div className="flex flex-col gap-2 md:gap-4">
        <h1 className="text-[16px] md:text-xl font-bold text-white py-1">Download App</h1>
        <h3 className="text-[10px] font-semibold text-white">
          Save $3 with App New User Only
        </h3>

        <div className=" flex md:justify-between gap-3 md:gap-0 items-center">
          <FaFacebookF className="text-white text-[25px]" />
          <FiTwitter className="text-white text-[25px]" />
          <FaInstagram className="text-white text-[25px]" />
          <FaLinkedinIn className="text-white text-[25px]" />
        </div>
      </div>
    ),
  },
];

const Footer = () => {
  return (
    <div className="bg-black w-full md:h-[440px]">
      <div className="container mx-auto  px-2 md:px-14 py-8 md:py-17  flex flex-col">
        <div className="w-full md:h-[236px] md:flex items-start justify-around space-y-3 md:space-y-0 ">
          {items.map((item, index) => (
            <div key={index}>{item.item}</div>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-white/20 "></div>

      <div className=" container mx-auto px-2 md:px-14 py-3 md:py-5 flex justify-center items-end">
        <p className="text-[12px] md:text-[16px] text-white/30 ">
          @Copyright by Shuvo 2025. All right reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
