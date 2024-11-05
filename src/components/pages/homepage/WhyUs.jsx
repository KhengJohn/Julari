import React from "react";
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
    title: "Property Insurance",
    description:
      "We offer our customer property protection of liability coverage and insurance for their better life.",
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
    title: "Best Price",
    description:
      "Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.",
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
    title: "Lowest Commission",
    description:
      "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
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
    title: "Overall Control",
    description:
      "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
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
    title: "Best Price",
    description:
      "Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.",
  },
];
const WhyUs = () => {
  return (
    <div className="h-full lg:h-screen flex flex-col lg:flex-row w-full p-10 lg:p-16">
      <div className="grid lg:grid-cols-3 gap-y-3 lg:gap-y-0 gap-x-5">
        <div className="flex flex-col justify-center lg:h-2/3 bg-[#a1dcff1b] border border-[#A1DCFF] text-[#002A72] p-5 rounded">
          <h2 className="text-[25px] font-bold">Why Julari Real Homes?</h2>
          <span className="text-[#4D5461] text-sm">
            Find your dream place to live in with more than 10k+ properties
            listed.
          </span>
        </div>
        {heroData.map((items, index) => (
          <div className="flex flex-col items-start justify-start gap-3 w-full hover:text-[#3AB5FF] p-3 rounded-md cursor-pointer">
            <div className="h-14 w-14 bg-white rounded-full flex justify-center items-center border border-[#A1DCFF]">
              <div className="h-12 w-12 bg-[#A1DCFF] rounded-full flex justify-center items-center p-2">
                {items.icon}
              </div>
            </div>
            <div className="flex flex-col lg:w-5/6 gap-2">
              <span className="text-[20px] font-bold text-[#002A72] ">
                {items.title}
              </span>
              <span className="text-[#4D5461] text-sm">
                {items.description}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyUs;
