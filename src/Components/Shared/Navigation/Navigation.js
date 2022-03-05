import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/logo.svg";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navigation = () => {
  return (
    <>
      <nav className="p-3 z-10 flex items-center w-full h-full sm:flex-row justify-between  bg-white sticky top-0 left-0 right-0">
        <img className="w-28" src={Logo} alt="logo" />
        <ul className="hidden sm:block toggle">
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
        <FontAwesomeIcon className="block text-4xl sm:hidden" icon={faBars} />
      </nav>
    </>
  );
};

export default Navigation;
