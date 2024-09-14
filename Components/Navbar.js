"use client";

import {
  faAngleRight,
  faArrowRight,
  faMagnifyingGlass,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";
import Sidebar from "./Sidebar";
import NavigationMenu from "./NavigationMenu";

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const[isNavigationMenuOpen, setIsNavigationMenuOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleNavigationMenu = () => {
    setIsNavigationMenuOpent(!isNavigationMenuOpen);
  };

  return (
    <div className="flex flex-row items-center m-6 justify-between lg:justify-evenly md:justify-betweenc sm:justify-evenly">
      <div className="flex flex-row gap-6 items-center">
        <div className="block hover:cursor-pointer">
          <Image
            src="/clerk-logo-dark-accent.png"
            alt="logo"
            width={80}
            height={100}
          />
        </div>

        <div className="hidden xl:flex lg:hidden sm:flex flex-row border-solid border rounded-[50px] pl-[8px] pr-[8px] items-center pt-[6px] pb-[6px] gap-2 hover:cursor-pointer ">
          <Image src='/clerklogo.png' alt='logo' width={18} height={18}/>
          <h3 className="text-[12px] font-medium">Introducing Catalyst</h3>
          <p className="text-[12px] font-normal">
            A modern application UI kit for React
          </p>
          <FontAwesomeIcon
            icon={faAngleRight}
            style={{ fontSize: "10px", color: "gray" }}
            fontWeight={"1px"}
          />
        </div>
      </div>

      <div className="hidden lg:flex flex-row items-center gap-6">
        <ul className="flex flex-row gap-8">
          <li className="text-[14px] font-semibold hover:cursor-pointer">
            <NavigationMenu isOpen={isNavigationMenuOpen} toggleNavigationMenu={toggleNavigationMenu}/>
          </li>
          <li className="text-[14px] font-semibold hover:cursor-pointer">
            Components
          </li>
          <li className="text-[14px] font-semibold hover:cursor-pointer">
            Templates
          </li>
          <li className="text-[14px] font-semibold hover:cursor-pointer">
            Docs
          </li>
        </ul>

        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          style={{ fontSize: "18px" }}
        />

        <div className="h-[22px] border-l-2 border-gray-300"></div>

        <p className="text-[16px] font-semibold hover:cursor-pointer">
          Sign in
        </p>
        <button className="bg-black text-white font-semibold pl-[14px] pr-[14px] pt-[6px] pb-[6px] items-center justify-center rounded-[10px] hover:cursor-pointer">
          Get all-access{" "}
          <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: "10px" }} />
        </button>
      </div>

      {/* Hamburger Icon for Medium Devices */}
      <div className="lg:hidden">
        <button onClick={toggleSidebar}>
          <FontAwesomeIcon
            icon={faBars}
            style={{ fontSize: "20px", color: "gray" }}
          />
        </button>
      </div>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
};

export default Navbar;
