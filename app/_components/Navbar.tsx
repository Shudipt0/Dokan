"use client";

import React from "react";
import TopNavbar from "./TopNavbar";
import { link } from "fs";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import ModalMenu from "./ModalMenu";

const NavItem = [
  { link: "/", label: "Home" },
  { link: "/contact", label: "Contact" },
  { link: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <div className="w-full md:h-28 border border-gray-300">
      {/* upper nav */}
      <TopNavbar />
      {/* main navbar */}
      <DesktopNavbar NavItem={NavItem} />
      <MobileNavbar NavItem={NavItem} />
      <ModalMenu />
    </div>
  );
};

export default Navbar;
