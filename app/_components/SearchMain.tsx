"use client";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { useToggleMenu } from "@/context/NavbarToggleContext";
import { useSelector } from "react-redux";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import SearchRaise from "./SearchRaise";

const SearchMain = () => {
  // const { setSearchItem } = useToggleMenu();

  
  // active link
  const pathName = usePathname();

  // const handleSearchModal = () => {
  //   setSearchItem(true);
  //  // console.log("search on");
  // };

  // Define RootState type according to your Redux store
  interface RootState {
    cart: {
      items: any[]; // Replace 'any' with your actual item type
    };
    wishlist: {
      items: any[]; // Replace 'any' with your actual item type
    };
  }

  const { items } = useSelector((state: RootState) => state.cart);
  const wish = useSelector((state: RootState) => state.wishlist);

  return (
    <div className="flex items-center gap-3  md:gap-6">
      <SearchRaise/>
      {/* <button
        onClick={handleSearchModal}
        className="w-8 md:w-[250px] h-9 flex items-center justify-center md:justify-between bg-gray-100 rounded text-black/80 px-4 z-20 cursor-pointer"
      >
        <h4 className="hidden md:inline w-[170px] border p-1 text-[14px] text-black/50 border-none outline-none cursor-pointer ">
          What are you looking for?
        </h4>

        <span>
          <FiSearch size={24} className="text-black/90" />
        </span>
      </button> */}
      <Link
        href="#"
        className={`relative ${
          pathName === "/signup" || pathName === "/login" ? "hidden" : ""
        }`}
      >
        <FaRegHeart size={22} className="text-black/90" />
        {wish.items.length > 0 && (
          <div className="absolute w-5 h-5 flex items-center justify-center -top-2 -right-2 text-white text-sm font-semibold rounded-full bg-green-500 ">
            {wish.items.length}
          </div>
        )}
      </Link>
      <Link
        href="/cart"
        className={`relative ${
          pathName === "/signup" || pathName === "/login" ? "hidden" : ""
        }`}
      >
        <IoCartOutline size={26} className="text-black/90" />

        {items.length > 0 && (
          <div className="absolute w-5 h-5 flex items-center justify-center -top-2 -right-2 text-white text-sm font-semibold rounded-full bg-red-500 ">
            {items.length}
          </div>
        )}
      </Link>
    </div>
  );
};

export default SearchMain;
