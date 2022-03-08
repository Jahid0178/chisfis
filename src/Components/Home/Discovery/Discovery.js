import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SingleDiscovery from "./SingleDiscovery/SingleDiscovery";
import "swiper/css";

const Discovery = () => {
  const [discovery, setDiscovery] = useState([]);
  useEffect(() => {
    const url = "/FakeData/discovery.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDiscovery(data));
  }, []);
  return (
    <>
      <div className="py-10 bg-orange-50">
        <div className="container mx-auto px-2">
          <div className="text-center">
            <h2 className="text-4xl font-semibold">
              Suggestions for discovery
            </h2>
            <span className="text-xl mt-2 inline-block">
              Popular places to stay that Chisfis recommends for you
            </span>
          </div>
          <div className="mt-5">
            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  width: 640,
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 4,
                },
              }}
              loop={true}
              className="mySwiper"
            >
              {discovery.map((discover) => (
                <SwiperSlide key={discover.id}>
                  <SingleDiscovery discover={discover} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discovery;
