import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div className="flex gap-20 w-full justify-center py-10 text-4xl font-semibold font-sans">
        <Link to="/product/men" className="cursor-pointer"> Men</Link>
        <Link to="/product/women" className="cursor-pointer"> Women</Link>
        <Link to="/product/kids" className="cursor-pointer"> Kids</Link>
      </div>

      <Outlet/>
    </>
  );
};

export default Product;
