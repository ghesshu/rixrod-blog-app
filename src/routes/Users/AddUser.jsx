import React, { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const navigate = useNavigate();

  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordC, setPasswordC] = useState("");
  const [loadBtn, setLoadBtn] = useState("hidden");
  const [logBtn, setLogBtn] = useState("block");

  const handleSub = async (e) => {
    e.preventDefault();
    setLoadBtn("block");
    setLogBtn("hidden");

    const userData = {
      first_name,
      last_name,
      email,
      password,
    };

    if (!first_name || !last_name || !email || !password) {
      toast.warn("All fields are required", {
        position: "bottom-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoadBtn("hidden");
      setLogBtn("block");
    } else {
      try {
        console.log(userData);
        // Make your API request to add the user here

        // Reset the form fields
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");

        navigate(-1); // Redirect or perform any other action after success
      } catch (err) {
        console.error(err);
        setLoadBtn("hidden");
        setLogBtn("block");
      }
    }
  };

  return (
    <div>
      <div className="p-4 h-14 w-full bg-white flex justify-between items-center">
        <h1 className="font-semibold">ADD USER</h1>
      </div>

      <div className="bg-white my-8 p-8 ">
        <h1 className="text-xl font-bold">USER INFORMATION</h1>
        <div className="my-7 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Name */}
          <div className="w-full relative">
            <label
              htmlFor="first_name"
              className="absolute ml-3 -mt-[0.6rem] font-light bg-white px-2 text-xs"
            >
              FIRST NAME <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border p-3 border-black"
              value={first_name}
              onChange={(e) => setFirstName(e.target.value)}
              name="first_name"
            />
          </div>

          {/* Last Name */}
          <div className="w-full relative ">
            <label
              htmlFor="last_name"
              className="absolute ml-3 -mt-[0.6rem] font-light bg-white px-2 text-xs"
            >
              LAST NAME <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              className="w-full border p-3 border-black"
              value={last_name}
              onChange={(e) => setLastName(e.target.value)}
              name="last_name"
            />
          </div>
        </div>

        <h1 className="my-5 p-4 pb-2 border-b border-black  ">LOGIN DETAILS</h1>

        <div className="grid gri-cols-2 md:grid-cols-2 gap-8 my-2">
          {/* Email */}
          <div className="w-full relative col-span-2 ">
            <label
              htmlFor="email"
              className="absolute ml-3 -mt-[0.6rem] font-light bg-white px-2 text-xs"
            >
              EMAIL <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              className="w-full border p-3 border-black"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </div>

          {/* Password */}
          <div className="w-full relative ">
            <label
              htmlFor="password"
              className="absolute ml-3 -mt-[0.6rem] font-light bg-white px-2 text-xs"
            >
              PASSWORD <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="w-full border p-3 border-black"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
          {/* Password */}
          <div className="w-full relative ">
            <label
              htmlFor="password"
              className="absolute ml-3 -mt-[0.6rem] font-light bg-white px-2 text-xs"
            >
              CONFIRM PASSWORD <span className="text-red-600">*</span>
            </label>
            <input
              type="password"
              className="w-full border p-3 border-black"
              value={passwordC}
              onChange={(e) => setPasswordC(e.target.value)}
              name="confirmpassword"
            />
          </div>
        </div>

        <div className="mt-4">
          <button
            onClick={handleSub}
            className={` ${logBtn} mt- text-white bg-blue-400 px-8 py-3 hover:bg-blue-600 duration-300 ease-in-out transition w-[8rem] `}
          >
            Submit
          </button>

          <button
            disabled
            type="button"
            className={`${loadBtn} text-white bg-blue-400 hover:bg-blue-600 px-5 py-3 text-center mr-2 w-[8rem]`}
          >
            {/* Add your loading indicator here */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUser;
