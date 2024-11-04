import React from "react";

const BecomeAgent = () => {
  return (
    <div className="h-full lg:h-full flex flex-col justify-center items-center w-full p-10 lg:p-24 gap-6 bg-[#F7F7FD]">
      <div className="flex flex-col justify-between gap-5 items-center w-5/6 lg:w-3/5">
        <h2 className="text-3xl font-bold text-[#002A72]">Become an Agent!!!</h2>
        <span className="text-xs font-light text-[#002A72]">
          Do you want to work as a freelancer with Julari Real Homes?
        </span>
        <div className="flex p-3 justify-between gap-2 bg-white w-full rounded-lg">
          <input
            placeholder="Enter your email"
            type="text"
            name=""
            id=""
            className="border-none w-full active:border-none"
          />{" "}
          <button className="flex m-auto justify-center items-center  border border-[#002A72] bg-[#002A72] text-white py-2 px-5 rounded ">
            Submit
          </button>
        </div>
        <span className="text-xs font-light text-[#002A72]">Join 1000+ other agents in Julari Real Homes</span>
      </div>
    </div>
  );
};

export default BecomeAgent;
