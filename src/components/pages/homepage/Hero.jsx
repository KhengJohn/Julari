import React, { useState } from "react";
const julariHero = "/assets/images/JulariHero.png";

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
    title: "50k+ renters",
    description: "believe in our service.",
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
    title: "10k+ properties",
    description: "and house ready for occupancy.",
  },
];

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`py-2  lg:px-6 focus:outline-none border-b border-[#3AB5FF] bg-white ${
        isActive ? "border-b-4 border-[#3AB5FF] text-[#3AB5FF]" : " "
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

const TabContent1 = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[rgba(0, 22, 25, 0.7)]">Location</span>{" "}
        <div>
          <span className="text-[15px] font-bold">Abuja, Nigeria</span>
        </div>
      </div>
      <div className="w-[1px] h-10 bg-black"></div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[rgba(0, 22, 25, 0.7)]">When</span>{" "}
        <div>
          <span className="text-[15px] font-bold">Select Move-in Date</span>
        </div>
      </div>
      <div className="w-[1px] h-10 bg-black"></div>

      <button className="border border-[#002A72] bg-[#002A72] text-white py-2 px-5 rounded">
        {" "}
        Browse Properties
      </button>
    </div>
  );
};
const TabContent2 = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[rgba(0, 22, 25, 0.7)]">Location</span>{" "}
        <div>
          <span className="text-[15px] font-bold">Abuja, Nigeria</span>
        </div>
      </div>
      <div className="w-[1px] h-10 bg-black"></div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[rgba(0, 22, 25, 0.7)]">When</span>{" "}
        <div>
          <span className="text-[15px] font-bold">Select Availale Date</span>
        </div>
      </div>
      <div className="w-[1px] h-10 bg-black"></div>

      <button className="border border-[#002A72] bg-[#002A72] text-white py-2 px-5 rounded">
        Book A Call
      </button>
    </div>
  );
};
const TabContent3 = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[rgba(0, 22, 25, 0.7)]">Location</span>{" "}
        <div>
          <span className="text-[15px] font-bold">Abuja, Nigeria</span>
        </div>
      </div>
      <div className="w-[1px] h-10 bg-black"></div>
      <div className="flex flex-col gap-1">
        <span className="text-xs text-[rgba(0, 22, 25, 0.7)]">When</span>{" "}
        <div>
          <span className="text-[15px] font-bold">Select Move-in Date</span>
        </div>
      </div>
      <div className="w-[1px] h-10 bg-black"></div>

      <button className="border border-[#002A72] bg-[#002A72] text-white py-2 px-5 rounded">
        Browse Properties
      </button>
    </div>
  );
};
const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    { label: "Buy", content: <TabContent1 /> },
    { label: "Sell", content: <TabContent2 /> },
    { label: "Rent", content: <TabContent3 /> },
  ];
  return (
    <div className="bg-hero-bg-gradient h-full lg:h-screen flex flex-col lg:flex-row w-full">
      <div className="flex flex-col w-full pl-10 lg:pl-16 pr-10 lg:pr-0 pt-10 gap-4">
        <h1 className="text-[40px] lg:text-[50px] leading-[110%] font-bold">
          Buy, rent, or sell <br />
          your property <br /> easily
        </h1>
        <span className="text-[16px] leading-[160%] w-4/5">
          A great platform to buy, sell, or even rent your properties without
          any commisions.
        </span>
        <div className="hidden lg:block w-[120%] h-32 z-10">
          <div className="h-12 w-2/3 -mb-2">
            {tabContent.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                isActive={index === activeTab}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
          <div className="w-full h-20 bg-white shadow-sm rounded py-4 px-6">
            {tabContent[activeTab].content}
          </div>
        </div>
        <div className="block lg:hidden w-[100%] h-32">
          <div className="flex bg-white border-b-1 border-[#3AB5FF] flex-row justify-between -mb-1 h-12 w-[100%]  px-6">
            {tabContent.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                isActive={index === activeTab}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
          <div className="flex flex-row gap-2 w-full h-20 bg-white border-t-4 border-[#3AB5FF]  shadow-sm rounded-b py-4 px-6">
            <input type="text" className="h-10 w-full border rounded" />{" "}
            <button className="border border-[#002A72] bg-[#002A72] text-white h-10 px-4 rounded">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="white"
                  d="M18.425 18.425L23.5 23.5m-12.5-2C5.201 21.5.5 16.799.5 11S5.201.5 11 .5S21.5 5.201 21.5 11S16.799 21.5 11 21.5Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-y-5 gap-x-2 ">
          {heroData.map((items, index) => (
            <div className="flex flex-col items-start justify-start gap-3 w-full hover:text-[#3AB5FF] p-3 rounded-md cursor-pointer">
              <div className="h-14 w-14 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
                <div className="h-12 w-12 bg-[#A1DCFF] rounded-full flex justify-center items-center p-2">
                  {items.icon}
                </div>
              </div>
              <div className="flex flex-col w-5/6 ">
                <span className="text-xl font-semibold text-[#3AB5FF]">
                  {items.title}
                </span>
                <span className="text-sm text-[#002A72] hover:text-[#002A72]">
                  {items.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex w-full relative">
        <img
          src={julariHero}
          alt="julari real homes"
          className="w-full h-full absolute -top-20"
        />
      </div>
    </div>
  );
};

export default Hero;
