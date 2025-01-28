import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

export const Nav = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className=" sticky top-0 z-50 flex justify-between items-center h-24 w-100%  text-white mx-auto p-4 ">
      <h1 className="w-full text-3xl font-bold">SHALOM</h1>
      <ul className="hidden md:flex">
        <li className="p-4">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="portfolio"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer"
          >
            Portfolio
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="service"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer"
          >
            Service
          </Link>
        </li>
        <li className="p-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="text-white cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r-gray-900 bg-black ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <div
          onClick={handleNav}
          className=" m-5 md:hidden flex items-end justify-end"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <h1 className="w-full text-3xl text-white font-bold m-4">SHALOM</h1>
        <ul className="  uppercase p-4 text-white">
          <li className="p-4  border-b border-gray-600'">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li className="p-4  border-b border-gray-600'">
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              About
            </Link>
          </li>
          <li className="p-4  border-b border-gray-600'">
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              Portfolio
            </Link>
          </li>
          <li className="p-4  border-b border-gray-600'">
            <Link
              to="service"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              Service
            </Link>
          </li>
          <li className="p-4  border-b border-gray-600'">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="text-white cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
