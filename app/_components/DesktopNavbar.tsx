import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const DesktopNavbar = ({
  NavItem,
}: {
  NavItem: { label: string; link: string }[];
}) => {
  return (
    <div className="hidden container mx-auto h-16 md:flex items-center justify-between px-14">
      {/* logo */}
      <div>
        <Link href="/" className="text-lg font-bold">
          Exclusive
        </Link>
      </div>
      {/* nav items for desktop */}
      <ul className="hidden md:flex items-center gap-12">
        {NavItem.map((item, index) => (
          <li key={index} className="text-[16px] font-semibold text-gray-500  ">
            <Link href={item.link}>{item.label}</Link>
          </li>
        ))}
      </ul>
      {/* search input and cart */}
      <div className="hidden md:flex items-center gap-6">
        <button className="w-60 h-9 flex items-center justify-between bg-gray-100 rounded text-black/80 px-4 cursor-pointer">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="border p-1 text-[14px] border-none outline-none cursor-pointer "
            disabled
          />

          <span>
            <FiSearch size={20} className="text-black/90" />
          </span>
        </button>
        <span>
          <FaRegHeart size={20} className="text-black/90" />
        </span>
        <span>
          <IoCartOutline size={26} className="text-black/90" />
        </span>
      </div>
    </div>
  );
};

export default DesktopNavbar;
