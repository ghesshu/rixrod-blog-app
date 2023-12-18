import React, { useState } from "react";

import block from "../Assets/block.svg";
import AllPosts from "./Posts/AllPosts";

const Dashboard = () => {
  return (
    <div>
      <div className="p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">DASHBOARD</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 gap-6  ">
        {/* One  */}
        <div className="border relative bg-gradient-to-r rounded-lg from-blue-600 to-blue-800 from h-[10rem] ">
          <div className="absolute w-full h-full">
            <img
              src={block}
              alt=""
              className="h-full w-full object-fill opacity-10"
            />
          </div>
          <div className="absolute p-4 flex gap-4  justify-between w-full h-full">
            <h1 className=" border-b text-xl w-1/2 text-center font-bold text-white  self-center">
              TOTAL POSTS
            </h1>
            <h1 className="text-7xl w-1/2 text-center font-bold text-white self-end ">
              26
            </h1>
          </div>
        </div>
        {/* TWO  */}
        <div className="border relative  bg-gradient-to-r  rounded-lg from-blue-800 to-blue-600 h-[10rem] ">
          <div className="absolute w-full h-full">
            <img
              src={block}
              alt=""
              className="h-full w-full object-fill opacity-10"
            />
          </div>
          <div className="absolute p-4 flex gap-4  justify-between w-full h-full">
            <h1 className=" border-b text-xl w-1/2 text-center font-bold text-white  self-center">
              TOTAL EVENTS
            </h1>
            <h1 className="text-7xl w-1/2 text-center font-bold text-white self-end ">
              09
            </h1>
          </div>
        </div>
        {/* One  */}
        <div className="border relative  bg-gradient-to-r  rounded-lg from-blue-600 to-blue-800 h-[10rem] ">
          <div className="absolute w-full h-full">
            <img
              src={block}
              alt=""
              className="h-full w-full object-fill opacity-10"
            />
          </div>
          <div className="absolute p-4 flex gap-4  justify-between w-full h-full">
            <h1 className=" border-b text-xl w-1/2 text-center font-bold text-white  self-center">
              TOTAL USERS
            </h1>
            <h1 className="text-7xl w-1/2 text-center font-bold text-white self-end ">
              14
            </h1>
          </div>
        </div>
      </div>

      <div className="my-14">
        <AllPosts />
      </div>
    </div>
  );
};

export default Dashboard;
