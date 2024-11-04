import React from "react";
import NavBar from "../common/NavBar";
import Footer from "../common/Footer";

const GeneralLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default GeneralLayout;
