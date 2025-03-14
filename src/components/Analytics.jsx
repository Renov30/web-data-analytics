import React from "react";
import Laptop from "../assets/laptop.jpg";

function Analytics() {
  return (
    <div>
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
          <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Lorem ipsum dolor sit amet.
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              magnam laudantium molestias obcaecati placeat harum officiis
              beatae nemo quasi. Ut corporis repellat omnis rem, id dolores cum
              ea aperiam iste.
            </p>
            <button className="text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 bg-black">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
