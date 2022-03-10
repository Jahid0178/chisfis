import React from "react";
import { useNavigate } from "react-router-dom";

const SingleDiscovery = (props) => {
  const { img, placeName, properties, id } = props.discover;
  const navigate = useNavigate();
  return (
    <>
      <div
        className="w-full h-96"
        onClick={() => navigate(`/viewDetails/${id}`)}
      >
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
