"use client";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useState } from "react";
import Link from "next/link";
import { useToggleMenu } from "@/context/NavbarToggleContext";

const MobileNavbar = ({
  NavItem,
}: {
  NavItem: { label: string; link: string }[];
}) => {

  const {mobileMenuOpen,setMobileMenuOpen} = useToggleMenu()

  return (
    <div className="">
      <div className="w-full px-6 h-12 flex items-center justify-between md:hidden">
        {/* logo */}
        <div>
          <Link href="/" className="text-md font-bold">
            Exclusive
          </Link>
        </div>
        {/* menu toggle button */}
        <div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer w-8 flex items-center justify-center "
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBarsStaggered />}
          </button>
        </div>
      </div>
      {/* mobile menu items */}
      <div
        className={`fixed left-0 bg-white z-50 w-[50%] h-screen p-8 shadow-md md:hidden transform transition-all ease-in-out duration-300 ${
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } `}
      >
        <ul className="w-full ">
          {NavItem.map((item, index) => (
            <li key={index} className="w-full px-5 py-3 rounded-sm hover:bg-gray-100">
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
    
  );
};

export default MobileNavbar;
