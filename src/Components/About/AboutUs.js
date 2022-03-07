import React from "react";
import AboutHeroImg from "../../Assets/Images/About/about-hero.png";

const AboutUs = () => {
  return (
    <>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 py-10 items-center sm:grid-cols-2">
          <div>
            <h1 className="text-4xl font-semibold">👋 About Us.</h1>
            <p className="text-gray-600">
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div>
            <img src={AboutHeroImg} alt="About Us" />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
