import React from "react";
import {
  FaFacebookSquare,
  FaTwitter,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/logo.svg";

const Footer = () => {
  return (
    <div className="py-5 px-3">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3">
          <div>
            <img className="w-28" src={Logo} alt="Logo" />
            <ul className="mt-7">
              <li className="my-5">
                <Link to="#">
                  <FaFacebookSquare className="inline-block text-blue-600 text-2xl" />{" "}
                  <span className="ml-2">Facebook</span>
                </Link>
              </li>
              <li className="my-5">
                <Link to="#">
                  <FaTwitter className="inline-block text-sky-500 text-2xl" />{" "}
                  <span className="ml-2">Twitter</span>
                </Link>
              </li>
              <li className="my-5">
                <Link to="#">
                  <FaYoutube className="inline-block text-red-700 text-2xl" />{" "}
                  <span className="ml-2">Youtube</span>
                </Link>
              </li>
              <li className="my-5">
                <Link to="#">
                  <FaInstagram className="inline-block text-violet-700 text-2xl" />{" "}
                  <span className="ml-2">Instagram</span>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>
                <Link to="#">Facebook</Link>
              </li>
              <li>
                <Link to="#">Youtube</Link>
              </li>
            </ul>
          </div>
          <div>3</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
