import React from "react";
import berLogo from "../assets/images/Uber-Logo.wine.png";
import { Link } from "react-router";

const Home = () => {
  return (
    <div
      className={`bg-[url(/src/assets/images/traffic-light.jpg)] bg-cover bg-center min-h-screen w-full flex flex-col justify-between`}
    >
      <img
        src={berLogo}
        alt="Uber logo"
        className="w-full max-w-28 ml-9 mt-9 invert"
      />
      <div className="bg-white p-5 pb-8">
        <h1 className="text-3xl font-semibold mb-5">Get Started with Uber</h1>
        <Link to={"/login"} className="primary-btn w-full">
          <span>Continue</span>
        </Link>
      </div>
    </div>
  );
};

export default Home;
