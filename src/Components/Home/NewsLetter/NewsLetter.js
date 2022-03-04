import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import NewsletterBg from "../../../Assets/Images/Home/Newsletter/news-letter.png";

const NewsLetter = () => {
  return (
    <div className="py-10 px-3">
      <div className="container mx-auto">
        <div className="grid items-center gap-5 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold">Join our newsletter 🎉</h2>
            <p className="text-gray-400 text-lg my-4">
              Read and share new perspectives on just about any topic.
              Everyone’s welcome.
            </p>
            <ul>
              <li className="my-2">
                <span className="inline-block px-2 py-1 bg-indigo-200 text-indigo-700 rounded-full">
                  01
                </span>
                <span className="inline-block ml-4">Get more discount</span>
              </li>
              <li className="my-2">
                <span className="inline-block px-2 py-1 bg-red-200 text-red-700 rounded-full">
                  02
                </span>
                <span className="inline-block ml-4">Get premium magazines</span>
              </li>
            </ul>
            <form className="mt-10" action="#">
              <input
                className="primary-input absolute"
                placeholder="Enter your email"
                type="text"
              />
              <button type="submit" className="btn-primary relative left-60">
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </form>
          </div>
          <div>
            <img src={NewsletterBg} alt="Newsletter" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
