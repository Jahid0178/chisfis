import React from "react";
import AboutUs from "../Components/About/AboutUs";
import FastFact from "../Components/About/FastFact";
import Founder from "../Components/About/Founder";
import NewsLetter from "../Components/Home/NewsLetter/NewsLetter";

const About = () => {
  return (
    <div>
      <AboutUs />
      <Founder />
      <FastFact />
      <NewsLetter />
    </div>
  );
};

export default About;
