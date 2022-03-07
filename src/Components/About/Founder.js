import React from "react";

const Founder = () => {
  return (
    <>
      <div className="container mx-auto py-10 px-4">
        <div className="max-w-md mb-8">
          <h2 className="text-4xl">⛱ Founder</h2>
          <p className="text-gray-600">
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="mt-5">
              <h3 className="text-2xl font-semibold">Niamh O'Shea</h3>
              <p className="text-md text-gray-500">
                Co-founder and Chief Executive
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="mt-5">
              <h3 className="text-2xl font-semibold">Orla Dwyer</h3>
              <p className="text-md text-gray-500">Co-founder, Chairman</p>
            </div>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
              alt=""
            />
            <div className="mt-5">
              <h3 className="text-2xl font-semibold">Dara Frazier</h3>
              <p className="text-md text-gray-500">
                Co-Founder, Chief Strategy Officer
              </p>
            </div>
          </div>
          <div>
            <img
              className="rounded-xl"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt=""
            />
            <div className="mt-5">
              <h3 className="text-2xl font-semibold">Danien Jame</h3>
              <p className="text-md text-gray-500">
                Co-founder and Chief Executive
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Founder;
