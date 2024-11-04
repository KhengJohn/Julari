import React, { useState } from "react";
const julariRiagtWay = "/assets/images/julariRiagtWay.png";

const Tab = ({ label, isActive, onClick }) => {
  return (
    <button
      className={`py-2 px-6 lg:px-6 focus:outline-none   ${
        isActive
          ? "bg-[#FFF] border text-[#3AB5FF]  rounded border-[#3AB5FF] "
          : " "
      }`}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
const propertiesData =[{},{},{},{},{},{}]
const TabContent1 = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <div className="flex flex-row col-span-3 flex-wrap justify-evenly lg:justify-between w-full gap-y-10">
       {propertiesData.map((items)=> <div className="flex flex-col rounded-lg">
          <div className="flex w-[330px] h-[150px]  rounded-t-lg">
            <img
              src={julariRiagtWay}
              alt="julari real homes"
              className="w-full h-full rounded-t-lg"
            />
          </div>
          <div className="flex flex-col justify-between h-[185px] w-[330px] rounded-b-lg border p-5">
            <div className="flex justify-between items-center">
              <span className="text-2xl font-bold text-[#3AB5FF]">
                N2,999{" "}
                <span className="text-base font-normal text-[#4D5461]">
                  /month
                </span>
              </span>{" "}
              <div className="border-2 w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1.5em"
                  height="1.5em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="#3AB5FF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M24.136 9.1c3.31-3.409 5.46-3.6 7.525-3.6c5.815 0 10.478 6.055 10.394 11.612c-.131 8.693-5.281 16.117-17.932 25.388C12.748 34.747 6.137 24.862 5.947 17.599C5.808 12.318 10.823 5.5 16.665 5.5c2.256 0 4.125.148 7.471 3.6"
                  />
                </svg>
              </div>
            </div>
            <h2 className="text-2xl font-bold">Palm Harbor</h2>
            <span className="text-[#737275]">
              2699 Green Valley, Highland Lake, Abuja
            </span>
            <hr className="border-[#F0EFFB]" />
            <div className="flex flex-row justify-between">
              <div className="flex flex-row justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#3AB5FF"
                    d="M2 19v-6q0-.675.275-1.225T3 10.8V8q0-1.25.875-2.125T6 5h4q.575 0 1.075.213T12 5.8q.425-.375.925-.587T14 5h4q1.25 0 2.125.875T21 8v2.8q.45.425.725.975T22 13v6h-2v-2H4v2zm11-9h6V8q0-.425-.288-.712T18 7h-4q-.425 0-.712.288T13 8zm-8 0h6V8q0-.425-.288-.712T10 7H6q-.425 0-.712.288T5 8zm-1 5h16v-2q0-.425-.288-.712T19 12H5q-.425 0-.712.288T4 13zm16 0H4z"
                  />
                </svg>{" "}
                <span className="text-[#000929] text-sm">3 Beds</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="#3AB5FF"
                      d="M7 6a1 1 0 0 1 1-1h1v1a1 1 0 0 0 2 0V5a2 2 0 0 0-2-2H8a3 3 0 0 0-3 3v5H4a2 2 0 0 0-2 2v1a6 6 0 0 0 2.625 4.961l-.332.332a1 1 0 1 0 1.414 1.414l.876-.875c.454.11.929.168 1.417.168h8c.488 0 .963-.058 1.417-.168l.876.875a1 1 0 0 0 1.414-1.414l-.332-.332A6 6 0 0 0 22 14v-1a2 2 0 0 0-2-2H7z"
                    />
                  </g>
                </svg>
                <span className="text-[#000929] text-sm">3 Bathrooms</span>
              </div>
              <div className="flex flex-row justify-center items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="#3AB5FF"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M2.5 12c0-4.478 0-6.718 1.391-8.109S7.521 2.5 12 2.5c4.478 0 6.718 0 8.109 1.391S21.5 7.521 21.5 12c0 4.478 0 6.718-1.391 8.109S16.479 21.5 12 21.5c-4.478 0-6.718 0-8.109-1.391S2.5 16.479 2.5 12"
                    color="currentColor"
                  />
                </svg>
                <span className="text-[#000929] text-sm">5x7m</span>
              </div>
            </div>
          </div>
        </div>)}
      </div>
    </div>
  );
};
const Properties = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabContent = [
    { label: "Rent", content: <TabContent1 /> },
    { label: "Buy", content: "<TabContent2 />" },
    { label: "Sell", content: "<TabContent3 />" },
  ];
  return (
    <div className="h-full lg:h-full flex flex-col w-full p-10 lg:p-24 gap-6">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-bold text-3xl">Based on your location</h2>
        <span className="text-[#737275]">
          Some of our picked properties near you location.
        </span>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="">
          <div className="flex bg-[#F0EFFB] border border-[#3AB5FF] flex-row justify-between w-[100%] py-1 px-1 rounded">
            {tabContent.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                isActive={index === activeTab}
                onClick={() => setActiveTab(index)}
              />
            ))}
          </div>
        </div>
        <button className="hidden lg:block border border-[#002A72] bg-[#002A72] text-white py-2 px-5 rounded">
          Browse more properties
        </button>
      </div>{" "}
      {tabContent[activeTab].content}
      <button className="flex m-auto justify-center items-center lg:hidden border border-[#002A72] bg-[#002A72] text-white py-2 px-5 rounded w-4/5">
          Browse more properties
        </button>
    </div>
  );
};

export default Properties;
