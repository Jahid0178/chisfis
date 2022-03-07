import React from "react";

const SingleDiscovery = (props) => {
  const { img, placeName, properties } = props.discover;
  return (
    <>
      <div className="w-full h-96 ">
        <img
          className="h-5/6 w-full rounded-2xl object-cover"
          src={img}
          alt=""
        />
        <div className="mt-5">
          <h3 className="text-xl">{placeName}</h3>
          <span className="text-gray-500">{properties} properties</span>
        </div>
      </div>
    </>
  );
};

export default SingleDiscovery;
