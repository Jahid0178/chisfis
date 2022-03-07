import React from "react";

const FastFact = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-lg mb-4">
          <h2 className="text-4xl font-semibold">🚀 Fast Facts</h2>
          <p className="text-gray-500 text-xl">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 my-12 sm:grid-cols-2 md:grid-cols-3">
          <div>
            <h2 className="text-3xl font-semibold">10 million</h2>
            <p className="text-gray-500">
              Articles have been public around the world (as of Sept. 30, 2021)
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">100,000</h2>
            <p className="text-gray-500">
              Registered users account (as of Sept. 30, 2021)
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-semibold">220+</h2>
            <p className="text-gray-500">
              Countries and regions have our presence (as of Sept. 30, 2021)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FastFact;
