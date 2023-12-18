import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ClassOutlinedIcon from "@mui/icons-material/ClassOutlined";
import CameraFrontOutlinedIcon from "@mui/icons-material/CameraFrontOutlined";
import BookmarkRemoveOutlinedIcon from "@mui/icons-material/BookmarkRemoveOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";

const SideBar = ({ clickB }) => {
  // const { clickB } = props;
  // Data for sidebar menu items and sub-items
  const data = [
    {
      name: "POSTS",
      img: CameraFrontOutlinedIcon,
      btn: ArrowRightOutlinedIcon,
      content: [
        {
          name: "ALL POSTS",
          img: DashboardOutlinedIcon,
          link: "/all-posts",
        },
        {
          name: "WRITE POSTS",
          img: DashboardOutlinedIcon,
          link: "/write-posts",
        },
      ],
    },
    {
      name: "USERS",
      img: CameraFrontOutlinedIcon,
      btn: ArrowRightOutlinedIcon,
      content: [
        {
          name: "ALL USERS",
          img: DashboardOutlinedIcon,
          link: "/all-users",
        },
        {
          name: "ADD USER",
          img: DashboardOutlinedIcon,
          link: "/add-user",
        },
      ],
    },
  ];

  // State for managing open accordion sections
  const [openAccordion, setOpenAccordion] = useState(null);

  // Function to toggle accordion sections
  const toggleAccordion = (index) => {
    if (openAccordion === index) {
      setOpenAccordion(null);
    } else {
      setOpenAccordion(index);
    }
  };

  return (
    <div className="font-semibold h-full p- flex flex-col pt-8 text-sm text-blue-950 m- mt-9 overflow-y-scroll">
      {/* Dashboard Link */}
      <Link to={`/dashboard`}>
        <div
          onClick={clickB}
          className="flex items-center p-2 py-4 hover: hover:bg-blue-400 hover:text-white mx-2 rounded-lg  transition duration-500 ease-in-out"
        >
          <i>
            <DashboardOutlinedIcon />
          </i>
          &nbsp;&nbsp;
          <h1>DASHBOARD</h1>
        </div>
      </Link>

      {/* Sidebar Menu Items */}
      {data.map((item, index) => (
        <div className="flex flex-col" key={index}>
          <button
            onClick={() => toggleAccordion(index)}
            className={`flex items-center justify-between w-[100%] hover:border-b  hover:bg-blue-400 hover:text-white mx-2 rounded-lg p-2 py-5 my-2 transition duration-500 ease-in-out`}
          >
            <div className="flex items-center">
              <i>{<item.img />}</i>
              &nbsp;&nbsp;
              <h1>{item.name}</h1>
            </div>
            <div
              className={`${
                openAccordion === index ? "rotate-90" : "rotate-0"
              } font-sm transition duration-500 ease-in-out`}
            >
              <i>
                <item.btn />
              </i>
            </div>
          </button>
          <Accordion open={openAccordion === index}>
            <AccordionBody>
              <div className="-mt-4">
                {/* Sub-menu Items */}
                {item.content.map((subItem, subIndex) => (
                  <Link to={subItem.link} key={subIndex}>
                    <div
                      onClick={clickB}
                      className={`flex items-center pl-8 py-4 border-b hover:text-blue-600 hover:border-blue-400 transition duration-500 ease-in-out`}
                    >
                      <i>{<subItem.img />}</i>
                      &nbsp;&nbsp;
                      <h1 className="font-bold">{subItem.name}</h1>
                    </div>
                  </Link>
                ))}
              </div>
            </AccordionBody>
          </Accordion>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
