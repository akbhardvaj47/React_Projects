import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../../public/logo.jpg";
import { CiSearch } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { FaRegBell } from "react-icons/fa6";

function Header() {
  return (
    <div className=" flex justify-between px-6 fixed top-0 w-[100%] bg-white">
      <div className=" space-x-3 flex items-center">
        <AiOutlineMenu className="text-xl" />
        <img src={logo} className="w-28" alt="" />
      </div>

      <div className=" w-[45%] flex items-center">
        <div className=" flex w-full border border-gray-300 py-2 px-4 rounded-l-full">
          <input
            type="text"
            name=""
            id=""
            placeholder="Search"
            className=" outline-none w-[100%]"
          />
        </div>
        <button className="border border-gray-300 bg-gray-100 cursor-pointer py-2 px-4 rounded-r-full">
          <CiSearch className=" font-bold  text-2xl" />
        </button>
        <button className="px-4 ml-3 py-2 bg-gray-100 hover:bg-gray-300 rounded-full duration-300 cursor-pointer "><FaMicrophone className="text-2xl" /></button>
      </div>
      <div className=" flex items-center space-x-3 ">
        <div className="flex items-center bg-gray-100 py-1 font-semibold rounded-full px-2"><IoMdAdd className="text-2xl" /><span>Create</span></div>
        <FaRegBell className="text-2xl" />
        <img src={logo} className="w-20" alt="" />
      </div>
    </div>
  );
}

export default Header;
