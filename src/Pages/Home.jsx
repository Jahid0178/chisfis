import React from "react";
import Banner from "../Components/Home/Banner/Banner";
import Benefits from "../Components/Home/Benefits/Benefits";
import HowItWork from "../Components/Home/HowItWork/HowItWork";
import NewsLetter from "../Components/Home/NewsLetter/NewsLetter";
import TopPlaces from "../Components/Home/TopPlaces/TopPlaces";

const Home = () => {
  return (
    <div>
      <Banner />
      <TopPlaces />
      <Benefits />
      <HowItWork />
      {/* Discovery */}
      <NewsLetter />
    </div>
  );
};

export default Home;
