import React from "react";
import Logo from "../../../Assets/Images/logo.svg";
import ChooseUsImg from "../../../Assets/Images/Home/Choose-us/choose-us.png";

const ChooseUs = () => {
  return (
    <div className="py-10 bg-slate-100 px-3">
      <div className="container mx-auto">
        <div className="grid items-center md:grid-cols-2">
          <div>
            <img className="w-28 mb-10" src={Logo} alt="Logo" />
            <h2 className="text-4xl py-4 font-semibold">
              Why did you choose us?
            </h2>
            <p className="mb-8 text-gray-500">
              Accompanying us, you have a trip full of experiences. With
              Chisfis, booking accommodation, resort villas, hotels, private
              houses, apartments... becomes fast, convenient and easy.
            </p>
            <button className="btn-primary">Become an author</button>
          </div>
          <div>
            <img
              className="mt-10"
              src={ChooseUsImg}
              alt="Choose us background"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseUs;
