import React from "react";
import Book from "../../../Assets/Images/Home/Work/relax.png";
import Smart from "../../../Assets/Images/Home/Work/smart.png";
import Save from "../../../Assets/Images/Home/Work/save.png";

const HowItWork = () => {
  return (
    <div className="py-10 px-3">
      <div className="container mx-auto">
        <div className="w-full md:w-1/2 mx-auto text-center">
          <h2 className="text-4xl font-semibold">How it work</h2>
          <span className="block mt-3 text-gray-500 text-xl">
            Keep calm & travel on
          </span>
        </div>
        <div className="my-20 grid gap-5 md:grid-cols-3">
          <div className="text-center">
            <img className="w-48 mx-auto mb-10" src={Book} alt="Relax & Book" />
            <h3 className="text-xl font-medium mb-5">Book & relax</h3>
            <p>
              Let each trip be an inspirational journey, each room a peaceful
              space
            </p>
          </div>
          <div className="text-center">
            <img
              className="w-48 mx-auto mb-14"
              src={Smart}
              alt="Smart checklist"
            />
            <h3 className="text-xl font-medium mb-5">Smart checklist</h3>
            <p>
              Let each trip be an inspirational journey, each room a peaceful
              space
            </p>
          </div>
          <div className="text-center">
            <img className="w-48 mx-auto mb-12" src={Save} alt="Save more" />
            <h3 className="text-xl font-medium mb-5">Save more</h3>
            <p>
              Let each trip be an inspirational journey, each room a peaceful
              space
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
