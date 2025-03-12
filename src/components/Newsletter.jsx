import React from "react";

function Newsletter() {
  return (
    <div className="w-full py-16 text-white px-4">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Want tips & tricks to optimize your workflow?
          </h1>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className="my-4 ">
          <div className="flex flex-column sm:flex-row items-center justify-center w-full ">
            <input
              className="bg-white p-3 flex w-full rounded-md text-black"
              type="email"
              placeholder="enter email"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 ml-4 lg:ml-3 text-black">
              Notify Me
            </button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Repellendus at enim ipsum aliquam blanditiis!{" "}
            <span className="text-[#00df9a]">exercitationem!</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Newsletter;
