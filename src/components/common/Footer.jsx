import React from "react";
const julariLogo = "/assets/images/JulariLogo.png";

const Footer = () => {
  return (
    <div className="h-full lg:h-[80vh] gap-6">
      <div className="flex flex-col col-span-4 lg:flex-row justify-between w-full gap-10  p-10 lg:p-24">
        <div className="flex flex-col items-center">
          <div className="flex flex-col justify-center items-center font-bold">
            <img src={julariLogo} alt="julari real homes" className="w-40" />
            <h3 className="text-2xl text-[#002A72]">Julari Real Homes</h3>
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-sm">Services</span>
          <ul className="flex flex-col gap-2">
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Buy and sell properties
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Rent home
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Builder trade-up
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-sm">Services</span>
          <ul className="flex flex-col gap-2">
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Blog
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              How it works
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Contact
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Investors
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <span className="font-bold text-sm">Services</span>
          <ul className="flex flex-col gap-2">
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Blog
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Guides
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              FAQ
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Help Center
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Trust & Safety
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Terms of Service
            </li>
            <li className="text-sm cursor-pointer text-[#000929] hover:text-[#3AB5FF]">
              Privacy Policy
            </li>
          </ul>
        </div>
      </div>

      <div></div>
      <hr />
      <div className="flex py-5 items-center px-10 lg:px-24">
        <span className="text-[#737275]">
          ©2023 Julari Real Homes Limited. All rights reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
