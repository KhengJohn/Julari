import React from "react";

const WeMakeItEasy = () => {
  return (
    <div className="h-full lg:h-screen flex flex-col w-full p-10 lg:p-24 gap-10 lg:gap-6 bg-[#002A72] justify-between">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <h2 className="text-3xl font-bold text-white">
          We make it easy for <span className="text-[#3AB5FF]">tenants </span>
          and <span className="text-[#3AB5FF]">landlords.</span>
        </h2>
        <span className="text-[#FFF] text-sm">
          Whether it’s selling your current home, getting financing, or buying a
          new home, we make it easy and efficient. The best part? you’ll save a
          bunch of money and time with our services.
        </span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex flex-row gap-4 bg-[#ffffff4b] p-5 rounded">
          <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
            <div className="h-8 w-8 bg-[#002A72] rounded-full flex justify-center items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#FFF"
                  d="M3 3.993C3 3.445 3.445 3 3.993 3h16.014c.548 0 .993.445.993.993v16.014a.994.994 0 0 1-.993.993H3.993A.993.993 0 0 1 3 20.007zM5 5v14h14V5zm5.622 3.415l4.879 3.252a.4.4 0 0 1 0 .666l-4.88 3.252a.4.4 0 0 1-.621-.332V8.747a.4.4 0 0 1 .622-.332"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-4/5">
            <span className="text-lg font-semibold text-white">
              Virtual home tour
            </span>
            <span className="text-xs text-white">
              You can communicate directly with landlords and we provide you
              with virtual tour before you buy or rent the property.
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-4 bg-[#fff] p-5 rounded">
          <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
            <div className="h-8 w-8 bg-[#A1DCFF] rounded-full flex justify-center items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2.5em"
                height="2.5em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3AB5FF"
                  d="m16 8.41l-4.5-4.5L4.41 11H6v8h3v-6h5v6h3v-8h1.59L17 9.41V6h-1zM2 12l9.5-9.5L15 6V5h3v4l3 3h-3v8h-5v-6h-3v6H5v-8z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-4/5">
            <span className="text-lg font-semibold text-[#002A72]">
              Find the best deal
            </span>
            <span className="text-xs text-[#002A72]">
              Browse thousands of properties, save your favorites and set up
              search alerts so you don’t miss the best home deal!{" "}
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-4 bg-[#3AB5FF] p-5 rounded">
          <div className="h-10 w-10 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
            <div className="h-8 w-8 bg-[#fff] rounded-full flex justify-center items-center p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#3AB5FF"
                  d="M3 5.25A2.25 2.25 0 0 1 5.25 3h9.5A2.25 2.25 0 0 1 17 5.25V14h4v3.75A3.25 3.25 0 0 1 17.75 21H6.25A3.25 3.25 0 0 1 3 17.75zM17 19.5h.75a1.75 1.75 0 0 0 1.75-1.75V15.5H17zM6.5 7.75c0 .414.336.75.75.75h5.5a.75.75 0 0 0 0-1.5h-5.5a.75.75 0 0 0-.75.75M7.25 11a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm-.75 4.75c0 .414.336.75.75.75h3a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-1 w-4/5">
            <span className="text-lg font-semibold text-[#fff]">
              Get ready to apply
            </span>
            <span className="text-xs text-[#fff]">
              Find your dream house? You just need to do a little to no effort
              and you can start move in to your new dream home!
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center lg:px-20">
        <div className="flex flex-col gap-1 text-center">
          <span className="text-3xl text-[#FFF] font-bold">7.4%</span>{" "}
          <div>
            <span className="text-[15px] font-extralight text-xs text-[#fff]">
              Property Return Rate
            </span>
          </div>
        </div>
        <div className="w-[1px] h-10 bg-[#fff]"></div>
        <div className="flex flex-col gap-1 text-center">
          <span className="text-3xl text-[#FFF] font-bold">236</span>{" "}
          <div>
            <span className="text-[15px] font-extralight text-xs text-[#fff]">
              Property in Sell & Rent
            </span>
          </div>
        </div>
        <div className="w-[1px] h-10 bg-[#fff]"></div>
        <div className="flex flex-col gap-1 text-center">
          <span className="text-3xl text-[#FFF] font-bold">736</span>{" "}
          <div>
            <span className="text-[15px] font-extralight text-xs text-[#fff]">
              Daily Completed Transactions
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeMakeItEasy;
