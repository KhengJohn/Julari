import React from "react";
const julariRiagtWay = "/assets/images/julariRiagtWay.png";

const heroData = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          viewBox="0 0 2048 2048"
          className=""
        >
          <path
            fill="white"
            d="M1280 1920h384v128h-512v-896H768v896H256V987l-83 82l-90-90l877-877l877 877l-90 90l-83-82v165h-128V859L960 282L384 859v1061h256v-896h640zm768-640v768h-128v-256h-512v-512zm-128 128h-384v256h384z"
          />
        </svg>
      ),
      title: "7.4%",
      description: "Property Return Rate.",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2.5em"
          height="2.5em"
          viewBox="0 0 24 24"
        >
          <path
            fill="white"
            d="m16.5 16.25l2.86 1.69l-.75 1.22L15 17v-5h1.5zM23 16c0 3.87-3.13 7-7 7c-2.38 0-4.47-1.19-5.74-3H4v-8H1l10-9l7 6.29c2.89.86 5 3.54 5 6.71M9.29 18c-.18-.63-.29-1.3-.29-2c0-3.46 2.5-6.32 5.8-6.89L11 5.69l-5 4.5V18zM21 16c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"
          />
        </svg>
      ),
      title: "283",
      description: "Property in Sell & Rent",
    },
    {
        icon: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2.5em"
            height="2.5em"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="m16.5 16.25l2.86 1.69l-.75 1.22L15 17v-5h1.5zM23 16c0 3.87-3.13 7-7 7c-2.38 0-4.47-1.19-5.74-3H4v-8H1l10-9l7 6.29c2.89.86 5 3.54 5 6.71M9.29 18c-.18-.63-.29-1.3-.29-2c0-3.46 2.5-6.32 5.8-6.89L11 5.69l-5 4.5V18zM21 16c0-2.76-2.24-5-5-5s-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5"
            />
          </svg>
        ),
        title: "100",
        description: "Daily Completed Transactions",
      },
  ];
const RightWay = () => {
  return (
    <div className="h-full lg:h-screen flex flex-col lg:flex-row w-full p-10 lg:p-24">
      <div className="flex flex-col lg:flex-row w-full bg-[#a1dcff1b] border border-[#A1DCFF] rounded">
        <div className="flex flex-col justify-center  p-5 gap-5 text-[#002A72]">
          <h2 className="text-[25px] font-bold">
            The right way to <br />
            find your new home
          </h2>
          <span className="text-[#4D5461] text-sm w-3/4">
            Find your dream place to live in with more than 10k+ properties
            listed.
          </span>
          <div className="grid grid-cols-3 gap-y-5 gap-x-2 ">
          {heroData.map((items, index) => (
            <div className="flex flex-col items-center justify-center gap-3 w-full hover:text-[#3AB5FF] p-3 rounded-md cursor-pointer">
              <div className="h-14 w-14 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
                <div className="h-12 w-12 bg-[#A1DCFF] rounded-full flex justify-center items-center p-2">
                  {items.icon}
                </div>
              </div>
              <div className="flex flex-col w-full ">
                <span className="text-md font-semibold text-[#3AB5FF] text-center">
                  {items.title}
                </span>
                <span className="text-xs text-[#002A72] hover:text-[#002A72] text-center">
                  {items.description}
                </span>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="flex lg:w-[50%] w-full justify-end">        <img
          src={julariRiagtWay}
          alt="julari real homes"
          className="w-[400px] h-full"
        /></div>
      </div>
    </div>
  );
};

export default RightWay;
