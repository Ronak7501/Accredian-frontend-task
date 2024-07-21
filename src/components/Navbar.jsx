import React from "react";
import logomain from "../assets/logomain.png";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="px-4 max-w-[1240px] mx-auto h-24 flex justify-between items-center">
      <ul className="flex items-center justify-start flex-wrap">
        <li className="p-4">
          <img src={logomain} alt="Logo" className="w-24 md:w-36 h-auto" />
        </li>
        <li className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-800" h-10 py-2 px-4'>
          <button type="button" className="flex items-center space-x-2">
            <span>Courses</span>
            <IoIosArrowDown className="h-5 w-5" />
          </button>
        </li>
      </ul>
      <ul className="flex items-center justify-end flex-wrap">
        <li className="p-4">
          <a href="">Refer & Earn</a>
        </li>
        <li className="p-4">
          <a href="">Resources</a>
        </li>
        <li className="p-4">
          <a href="">About Us</a>
        </li>
        <li className="p-4">
          <button type="button">Login</button>
        </li>
        <li className='p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-800" h-10 py-2 px-4'>
          <button type="button">Try for free</button>
        </li>
      </ul>

      {/* <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 w-[50%] text-white border-r border-r-gray-900 h-full">
      <li className="p-4">
          <img src={logomain} alt="Logo" className="w-24 md:w-36 h-auto" />
        </li>
        <ul className="pt-24 ">
          <li className="p-4">
            <a href="">Refer & Earn</a>
          </li>
          <li className="p-4">
            <a href="">Resources</a>
          </li>
          <li className="p-4">
            <a href="">About Us</a>
          </li>
          <li className="p-4">
            <button type="button">Login</button>
          </li>
          <li className='p-4 bg-gray-200 text-gray-600 rounded-lg hover:bg-blue-800" h-10 py-2 px-4'>
            <button type="button">Try for free</button>
          </li>
        </ul>
        </div> */}
      </div>
  );
};

export default Navbar;
