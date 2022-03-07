import React from "react";

const SingleDiscovery = (props) => {
  const { img, placeName, properties } = props.discover;
  return (
    <div>
      <h2>{placeName}</h2>
    </div>
  );
};

export default SingleDiscovery;
