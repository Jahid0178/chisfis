import React from "react";
import BenefitImg from "../../../Assets/Images/Home/Benefits/benefits.png";

const Benefits = () => {
  return (
    <>
      <div>
        <div className="container mx-auto px-2">
          <div className="grid grid-cols-1 gap-2.5 py-10 items-center lg:grid-cols-2">
            <div className="p-3">
              <img src={BenefitImg} alt="" />
            </div>
            <div>
              <span className="uppercase text-gray-400">Benefits</span>
              <h2 className="text-4xl font-semibold mt-4">Happening cities</h2>
              <ul className="mt-10">
                <li>
                  <span className="bg-indigo-100 px-2 py-1 text-indigo-800 rounded-full">
                    Advertising
                  </span>
                  <h3 className="text-2xl font-medium my-2">
                    Cost-effective advertising
                  </h3>
                  <p className="text-gray-400 text-base">
                    With a free listing, you can advertise your rental with no
                    upfront costs
                  </p>
                </li>
                <li className="mt-6">
                  <span className="bg-green-200 px-2 py-1 text-green-800 rounded-full">
                    Exposure
                  </span>
                  <h3 className="text-2xl font-medium my-2">
                    Reach millions with Chisfis
                  </h3>
                  <p className="text-gray-400 text-base">
                    Millions of people are searching for unique places to stay
                    around the world
                  </p>
                </li>
                <li className="mt-6">
                  <span className="bg-red-200 px-2 py-1 text-red-800 rounded-full">
                    Secure
                  </span>
                  <h3 className="text-2xl font-medium my-2">
                    Secure and simple
                  </h3>
                  <p className="text-gray-400 text-base">
                    A Holiday Lettings listing gives you a secure and easy way
                    to take bookings and payments online
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
