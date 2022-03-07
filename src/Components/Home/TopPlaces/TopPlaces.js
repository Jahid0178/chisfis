import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleTopPlace from "./SingleTopPlace/SingleTopPlace";
import "swiper/css";
import "swiper/css/pagination";

const TopPlaces = () => {
  const [topPlaces, setTopPlaces] = useState([]);
  useEffect(() => {
    const url = "/FakeData/topPlaces.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTopPlaces(data));
  }, []);
  return (
    <>
      <div className="py-10">
        <div className="lg:container mx-auto">
          <div>
            <h2 className="text-4xl font-semibold py-4">Top Places</h2>
            <span className="text-xl text-gray-500">
              You can see top places in our website.
            </span>
            <div className="my-10">
              <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                  clickable: true,
                }}
                loop={true}
                className="mySwiper"
              >
                {topPlaces.map((topPlace) => (
                  <SwiperSlide className="py-2">
                    <SingleTopPlace key={topPlace.id} topPlace={topPlace} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopPlaces;
