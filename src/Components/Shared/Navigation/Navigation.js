import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/logo.svg";

const Navigation = () => {
  return (
    <>
      <nav className="p-2 flex flex-col sm:flex-row justify-between w-full h-full bg-white sticky top-0">
        <img className="w-28" src={Logo} alt="logo" />
        <ul>
          <li className="inline-block mx-3 text-indigo-600  hover:text-indigo-500">
            <Link to="/home">Home</Link>
          </li>
          <li className="inline-block mx-3 text-indigo-600  hover:text-indigo-500">
            <Link to="/about">About</Link>
          </li>
          <li className="inline-block mx-3 text-indigo-600  hover:text-indigo-500">
            <Link to="/contact-us">Contact Us</Link>
          </li>
          <li className="inline-block mx-3">
            <button className="btn-primary">Sign Up</button>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
