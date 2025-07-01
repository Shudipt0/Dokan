'use client'

import React from "react";
import TopNavbar from "./TopNavbar";
import { link } from "fs";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import ModalMenu from "./ModalMenu";

const NavItem = [
  {link: "/", label: "Home"},
  {link: "#", label: "Contact"},
  {link: "#", label: "About"},
  {link: "#", label: "Sign Up"},
]

const Navbar = () => {
  return (
    <div className="h-28 bg-white border-b border-gray-300">
      {/* upper nav */}
     <TopNavbar/>
      {/* main navbar */}
     <DesktopNavbar NavItem={NavItem} />
     <MobileNavbar NavItem={NavItem}/>
     <ModalMenu/>

    </div>
  );
};

export default Navbar;
