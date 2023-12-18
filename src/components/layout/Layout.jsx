import React, { useEffect, useState, useContext } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import Content from "./Content";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const Layout = () => {
  // State for controlling the sidebar menu
  const [menu, setMenu] = useState(false);
  const [menuCL, setMenuCL] = useState("w-[20rem] -translate-x-0 ");
  const [tll, setTll] = useState("");

  // Function to handle menu click
  const menuClick = (e) => {
    e.preventDefault();
    if (menu === false) {
      // Show menu
      setMenu(true);
      setMenuCL("w-[0rem] -translate-x-60");
    } else {
      // Hide menu
      setMenu(false);
      setMenuCL("w-[20rem] -translate-x-0");
    }
  };

  // useEffect(() => {
  //   const screenWidth = window.innerWidth;
  //   if (screenWidth <= 1024) {
  //     setMenu(true);
  //     setMenuCL("w-[0rem] -translate-x-60");
  //   }
  // });

  const clickB = () => {
    const screenWidth = window.innerWidth;
    if (screenWidth <= 1024) {
      setMenu(true);
      setMenuCL("w-[0rem] -translate-x-60");
    }
  };

  return (
    <div className="h-screen w-screen overflow-hidden">
      {/* Navbar code */}
      <div className="h-14 fixed z-50 bg-white shadow-sm w-screen">
        <Header menuClick={menuClick} />
      </div>

      {/* Sidebar and Page Content Code */}
      <div className="flex bg-blue-100">
        {/* Sidebar code */}
        <div
          className={` ${menuCL} transition-all duration-700 ease-out bg-white h-screen fixed z-40 lg:static shadow-lg`}
        >
          <SideBar clickB={clickB} />
        </div>

        {/* Page Content Code */}
        <div
          className={`z-20 w-full transition duration-500 ease-out h-[100vh] mt-14 bg-gray-100 md:bg-whit overflow-y-hidden scroll-smooth flex items-center justify-center`}
        >
          <Content content={<Outlet />} />
        </div>
      </div>
    </div>
  );
};

export default Layout;
