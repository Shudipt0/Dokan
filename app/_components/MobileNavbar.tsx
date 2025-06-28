"use client";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useToggleMenu } from "@/context/NavbarToggleContext";
import SearchMain from "./SearchMain";

const MobileNavbar = ({
  NavItem,
}: {
  NavItem: { label: string; link: string }[];
}) => {
  const { mobileMenuOpen, setMobileMenuOpen } = useToggleMenu();

  // disable modal when scroll attempts
  useEffect(() => {
    const handleScrollAttempt = (e: Event) => {
      e.preventDefault();
      // close modal on scroll
      setMobileMenuOpen(false);
    };

    if (mobileMenuOpen) {
      window.addEventListener("wheel", handleScrollAttempt, { passive: false });
      window.addEventListener("touchmove", handleScrollAttempt, {
        passive: false,
      });
    }
    return () => {
      window.removeEventListener("wheel", handleScrollAttempt);
      window.removeEventListener("touchmove", handleScrollAttempt);
    };
  }, [mobileMenuOpen]);

  return (
    <div className="">
      <div className="w-full px-6 h-12 flex items-center justify-between md:hidden">
        {/* logo */}
        <div>
          <Link href="/" className="text-md font-bold">
            Exclusive
          </Link>
        </div>
        {/* buttons */}
        <div className="flex items-center gap-4">
          {/* search input and cart */}
          <SearchMain />
          {/* menu toggle button */}

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="cursor-pointer w-8 flex items-center justify-center "
          >
            {mobileMenuOpen ? (
              <FaTimes size={20} />
            ) : (
              <FaBarsStaggered size={20} />
            )}
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
            <li
              key={index}
              className="w-full px-5 py-3 rounded-sm hover:bg-gray-100"
            >
              <Link href={item.link}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileNavbar;
