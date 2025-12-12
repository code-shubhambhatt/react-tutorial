import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex px-5 py-3 justify-between  bg-gray-800 text-white font-bold text-3xl">
        <Link to='/' className="cursor-pointer">
          HOME
        </Link>
        <div className="flex gap-5 ">
          <Link to='/about' className="cursor-pointer">
            ABOUT
          </Link>
          <Link to='/contact' className="cursor-pointer">
            CONTACT
          </Link>
          <Link to='/product' className="cursor-pointer">
            PRODUCT
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
