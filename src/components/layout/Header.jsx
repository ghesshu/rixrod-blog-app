import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Header = (props) => {
  // Destructuring props
  const { menuClick } = props;

  // State for controlling the profile menu visibility and position
  const [profList, setProfList] = useState("translate-x-44");
  const [profClick, setProfClick] = useState(false);

  // Ref for the profile menu
  const proRef = useRef(null);

  // Function to handle profile button click
  function handleProfileClick(e) {
    e.preventDefault();

    if (profClick === false) {
      // Show profile menu
      setProfClick(true);
      setProfList("translate-x-0");
      console.log(true);
    } else {
      // Hide profile menu
      setProfClick(false);
      setProfList("translate-x-44");
      console.log(false);
    }
  }

  return (
    <div className="h-full w-screen  ">
      <div className="w-screen h-full flex justify-between items-center px-">
        {/* Logo and Menu Button */}
        <div className="flex items-center justify-center space-x-4">
          <h1 className="w-[10rem] md:w-[18rem] slg:w-[14rem] xl:w-[15.4rem] text-center font-extrabold text-2xl border-r">
            BLOG APP
          </h1>

          <button
            onClick={menuClick}
            className="bg-blue-100 p-2 text-blue-950 rounded-md hover:bg-blue-950 hover:text-white transition duration-500 ease-in-out"
          >
            <MenuIcon />
          </button>
        </div>

        {/* Profile Button and Menu */}
        <div className="px-4">
          <button
            onClick={handleProfileClick}
            className="bg-blue-100 p-2 text-blue-950 rounded-md hover:bg-blue-950 hover:text-white transition duration-500 ease-in-out"
          >
            <AccountCircleOutlinedIcon />
          </button>

          <div
            ref={proRef}
            className={`${profList} transition-all duration-300 ease-linear flex flex-col absolute mt-6 bg-white w-32 -ml-[6.0rem] shadow-lg rounded`}
          >
            {/* Profile Link */}

            {/* Logout Button */}
            <button
              // onClick={Logout}
              className="text-center text-red-600 font-bold hover:border-red-600 border-b border-red-400 transition duration-500 ease-in-out rounded-"
            >
              <h1 className="py-4">Logout</h1>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
