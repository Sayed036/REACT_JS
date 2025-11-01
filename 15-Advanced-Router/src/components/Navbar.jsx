import React from "react";
// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-between py-4 px-8 bg-cyan-800 items-center bg-linear-to-r from-black via-black to-cyan-600">
      <Link to={"/"}>
        <h2 className="text-xl font-bold">Firesoul</h2>
      </Link>
      <div className="flex gap-8">
        <Link className="text-lg font-bold" to="/">
          Home
        </Link>
        <Link className="text-lg font-bold" to="/about">
          About
        </Link>
        <Link className="text-lg font-bold" to="/courses">
          Courses
        </Link>
        <Link className="text-lg font-bold" to="/product">
          Product
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
