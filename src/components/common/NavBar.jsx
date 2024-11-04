import React, { useState } from "react";
const julariLogo = "/assets/images/JulariLogo.png";

const managePropertyData = [
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
    title: "Buy a house",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, velit.",
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
    title: "Rent a house",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, velit.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 16 16"
      >
        <g fill="white">
          <path d="M7.293 1.5a1 1 0 0 1 1.414 0L11 3.793V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v3.293l2.354 2.353a.5.5 0 0 1-.708.708L8 2.207l-5 5V13.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 1 0 1h-4A1.5 1.5 0 0 1 2 13.5V8.207l-.646.647a.5.5 0 1 1-.708-.708z" />
          <path d="M12.5 9a3.5 3.5 0 1 1 0 7a3.5 3.5 0 0 1 0-7m.354 5.854l1.5-1.5a.5.5 0 0 0-.708-.707l-.646.646V10.5a.5.5 0 0 0-1 0v2.793l-.646-.646a.5.5 0 0 0-.708.707l1.5 1.5a.5.5 0 0 0 .708 0" />
        </g>
      </svg>
    ),
    title: "Sell a house",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, velit.",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2.5em"
        height="2.5em"
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="white"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1.5"
        >
          <path d="M12 17.239a2.857 2.857 0 1 0 0-5.714a2.857 2.857 0 0 0 0 5.714m-.476-7.857h.952m-.476 0v2.143m3.199-1.015l.673.673m-.336-.336l-1.516 1.515M17 13.906v.952m0-.476h-2.143m1.015 3.199l-.673.673m.337-.336l-1.516-1.516m-1.544 2.98h-.952m.476 0v-2.143m-3.199 1.015l-.673-.673m.336.337l1.516-1.516M7 14.858v-.952m0 .476h2.143m-1.015-3.199l.673-.673m-.337.337l1.516 1.515" />
          <path d="M3.75 12.382v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-9m3-1.5l-9.885-9.226a2 2 0 0 0-2.73 0L.75 10.882" />
        </g>
      </svg>
    ),
    title: "Manage a house",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, velit.",
  },
];
const resourceData = [
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
    title: "Buy a house",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, velit.",
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
    title: "Rent a house",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, velit.",
  },
];
const NavBar = () => {
  const [showDropdown, setShowDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleMouseEnter = (menu) => {
    setShowDropdown(menu);
  };

  const handleMouseLeave = () => {
    setShowDropdown(null);
  };
  return (
    <div className="flex flex-row justify-between items-center h-20 w-full bg-[#D0EDFF] px-10 lg:px-16">
      <div className="flex flex-row items-center justify-evenly gap-7">
        <div className="flex flex-col justify-center items-center font-bold">
          <img src={julariLogo} alt="julari real homes" className="w-16" />
          <h3>Julari Real</h3>
        </div>
        <span
          className="cursor-pointer  gap-1 justify-center items-center  h-10  hidden lg:flex"
          onMouseEnter={() => handleMouseEnter("manageProperty")}
          onMouseLeave={handleMouseLeave}
        >
          Manage Property
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M36 18L24 30L12 18"
            />
          </svg>
          {showDropdown === "manageProperty" && (
            <div className="dropdown-menu absolute top-14 left-20 w-7/12 bg-white shadow p-5 rounded">
              <div className="grid grid-cols-2 gap-y-5 gap-x-2 ">
                {managePropertyData.map((items, index) => (
                  <div className="flex flex-row items-start justify-start gap-3 w-full hover:text-[#3AB5FF] p-3 rounded-md">
                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
                      <div className="h-10 w-10 bg-[#A1DCFF] rounded-full flex justify-center items-center p-2">
                        {items.icon}
                      </div>
                    </div>
                    <div className="flex flex-col w-5/6">
                      <span className="text-sm font-bold">{items.title}</span>
                      <span className="text-xs font-bold text-[#002A72] hover:text-[#002A72]">
                        {items.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </span>
        <span
          className="cursor-pointer  gap-1 justify-center items-center h-10  hidden lg:flex"
          onMouseEnter={() => handleMouseEnter("resources")}
          onMouseLeave={handleMouseLeave}
        >
          Resources
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="4"
              d="M36 18L24 30L12 18"
            />
          </svg>
          {showDropdown === "resources" && (
            <div className="dropdown-menu absolute top-14 left-20 w-7/12 bg-white shadow p-5 rounded">
              {" "}
              {/* Dropdown content for Resources */}
              <div className="grid grid-cols-2 gap-y-5 gap-x-2 ">
                {resourceData.map((items, index) => (
                  <div className="flex flex-row items-start justify-start gap-3 w-full hover:text-[#3AB5FF] p-3 rounded-md">
                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
                      <div className="h-10 w-10 bg-[#A1DCFF] rounded-full flex justify-center items-center p-2">
                        {items.icon}
                      </div>
                    </div>
                    <div className="flex flex-col w-5/6">
                      <span className="text-sm font-bold">{items.title}</span>
                      <span className="text-xs font-bold text-[#002A72] hover:text-[#002A72]">
                        {items.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </span>
      </div>
      <div className="hidden lg:flex flex-row gap-5 ">
        <button className="border border-[#E0DEF7] py-2 px-5 rounded">
          Login
        </button>
        <button className="border border-[#002A72] bg-[#002A72] text-white py-2 px-5 rounded">
          Signup
        </button>
      </div>
      {/* MOBILE */}
      <div className="lg:hidden">
        <button className="lg:hidden flex flex-col gap-1" onClick={toggleMenu}>
          <span
            className={`block w-6 h-0.5 bg-[#002A72] transition-transform duration-300 ${
              isOpen ? "transform rotate-45 translate-y-1.5" : ""
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#002A72] transition-opacity duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block w-6 h-0.5 bg-[#002A72] transition-transform duration-300 ${
              isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
            }`}
          ></span>
        </button>
        <div
          className={`absolute top-20 left-0 w-full bg-[#D0EDFF] py-4 md:static md:flex md:flex-row md:space-x-6 md:bg-transparent md:py-0 md:opacity-100 ${
            isOpen
              ? "flex flex-col space-y-4 opacity-100 transition-opacity duration-500"
              : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="flex flex-col px-4 md:px-0 gap-3">
            <span className="block text-xs ml-3 uppercase text-red cursor-pointer">
              Manage Property
            </span>
            <div className=" ">
              <div className="grid grid-cols-1 gap-y-5 gap-x-2 ">
                {managePropertyData.map((items, index) => (
                  <div className="flex flex-row items-start justify-start gap-3 w-full hover:text-[#3AB5FF] p-3 rounded-md cursor-pointer">
                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
                      <div className="h-10 w-10 bg-[#A1DCFF] rounded-full flex justify-center items-center p-2">
                        {items.icon}
                      </div>
                    </div>
                    <div className="flex flex-col w-5/6">
                      <span className="text-sm font-bold">{items.title}</span>
                      <span className="text-xs font-bold text-[#002A72] hover:text-[#002A72]">
                        {items.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-[#3ab3ff3d] border-dashed"></div>
          <div
            className="flex flex-col px-4
 md:px-0 gap-3"
          >
            <span className="block text-xs ml-3 uppercase text-red cursor-pointer">
              Resources
            </span>{" "}
            <div className=" ">
              <div className="grid grid-cols-1 gap-y-5 gap-x-2 ">
                {resourceData.map((items, index) => (
                  <div className="flex flex-row items-start justify-start gap-3 w-full hover:text-[#3AB5FF] p-3 rounded-md cursor-pointer">
                    <div className="h-12 w-12 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
                      <div className="h-10 w-10 bg-[#A1DCFF] rounded-full flex justify-center items-center p-2">
                        {items.icon}
                      </div>
                    </div>
                    <div className="flex flex-col w-5/6">
                      <span className="text-sm font-bold">{items.title}</span>
                      <span className="text-xs font-bold text-[#002A72] hover:text-[#002A72]">
                        {items.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="border border-[#3ab3ff3d] border-dashed "></div>
          <div className="flex lg:hidden flex-col gap-5 px-10 py-5">
            <button className="border border-[#E0DEF7] py-2 px-5 rounded">
              Login
            </button>
            <button className="border border-[#002A72] bg-[#002A72] text-white py-2 px-5 rounded">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
