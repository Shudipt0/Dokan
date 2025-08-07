// "use client";

import React from "react";
import TopNavbar from "./TopNavbar";
import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";
import ModalMenu from "./ModalMenu";
import { checkRole } from "@/utils/roles";

const NavItem = [
  { link: "/", label: "Home" },
  { link: "/contact", label: "Contact" },
  { link: "/about", label: "About" },
];

const Navbar = async () => {
  const isAdmin = await checkRole("admin");
  return (
    <div className="w-full md:h-28 border border-gray-300">
      {/* upper nav */}
      <TopNavbar />
      {/* main navbar */}
      <DesktopNavbar NavItem={NavItem} isAdmin={isAdmin}/>
      <MobileNavbar NavItem={NavItem} />
      <ModalMenu />
    </div>
  );
};

export default Navbar;
