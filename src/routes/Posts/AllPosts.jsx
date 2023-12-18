import React from "react";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { ClassNames } from "@emotion/react";

const AllPosts = () => {
  const navigate = useNavigate();
  const data = [
    {
      _id: "650aa5cfa16fde6b2330d6c7",
      title: "Hello BronsWick",
      user_id: {
        _id: "6509a702c4b9c3e68e4ecaa3",
        first_name: "admin",
        last_name: "admin",
      },
      createdAt: "2023-09-20T07:57:03.522Z",
    },
    {
      _id: "650aa603a16fde6b2330d6cb",
      title: "Dam Built in Town",
      user_id: {
        _id: "6509a702c4b9c3e68e4ecaa3",
        first_name: "admin",
        last_name: "admin",
      },
      createdAt: "2023-09-20T07:57:55.639Z",
    },
    {
      _id: "650aa620a16fde6b2330d6cf",
      title: "ELEC Defines Nothing ",
      user_id: {
        _id: "6509a702c4b9c3e68e4ecaa3",
        first_name: "admin",
        last_name: "admin",
      },
      createdAt: "2023-09-20T07:58:24.461Z",
    },
    {
      _id: "650aa620a16fde6b2330d6cf",
      title: "ELEC Defines Nothing ",
      user_id: {
        _id: "6509a702c4b9c3e68e4ecaa3",
        first_name: "admin",
        last_name: "admin",
      },
      createdAt: "2023-09-20T07:58:24.461Z",
    },
    {
      _id: "650aa620a16fde6b2330d6cf",
      title: "ELEC Defines Nothing ",
      user_id: {
        _id: "6509a702c4b9c3e68e4ecaa3",
        first_name: "admin",
        last_name: "admin",
      },
      createdAt: "2023-09-20T07:58:24.461Z",
    },
  ];

  // Function to format a date string
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <div className="p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">ALL POSTS</h1>

        <Link
          to={`/write-posts`}
          className="px-6 py-2 hover:bg-blue-500 bg-blue-400 text-white duration-500 transition ease-in-out"
        >
          WRITE POSTS
        </Link>
      </div>

      <div className="w-full my-8 ">
        <div className="text-xs md:text-md font-bold bg-blue-300 px-4 py-4 my-2 flex justify-between items-center ">
          <h1 className="w-1/6">NO</h1>
          <h1 className="w-3/6 r">TITLE</h1>
          <h1 className="w-2/6 ">DATE-CREATED</h1>
        </div>

        {data.map((data, index) => (
          <div
            key={index}
            onClick={() => navigate(`/edit-post/${data._id}`)}
            className="cursor-pointer hover:bg-blue-400 hover:text-white duration-500 transition ease-in-out bg-white my-4 px-4 py-4 flex justify-between items-center "
          >
            <h1 className="border-r w-1/6">{index + 1}</h1>
            <h1 className="w-3/6 border-r px-2">{data.title.toUpperCase()}</h1>
            <h1 className="w-2/6 px-2">{formatDate(data.createdAt)}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllPosts;
