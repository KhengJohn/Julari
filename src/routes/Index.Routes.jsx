import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../pages/Homepage";
import GeneralLayout from "../components/layout/GeneralLayout";

const IndexRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <GeneralLayout>
            <Homepage />
          </GeneralLayout>
        }
      />
    </Routes>
  );
};

export default IndexRoutes;
