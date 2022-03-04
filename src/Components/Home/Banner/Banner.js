import React from "react";

const Banner = () => {
  return (
    <>
      <div className="lg:container mx-auto">
        <div className="grid gap-2 grid-cols-2 py-20">
          <div>
            <h1 className="text-8xl">Hotel, car & experiences</h1>
            <p className="my-9 text-gray-500">
              Accompanying us, you have a trip full of experiences. With
              Chisfis, booking accommodation, resort villas, hotels
            </p>
            <button className="btn-primary">Start your search</button>
          </div>
          <div>
            <img
              className="w-full h-full"
              src="https://chisnghiax.com/chisfis/static/media/hero-right.ee78c0ffae92062cbe4e.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
