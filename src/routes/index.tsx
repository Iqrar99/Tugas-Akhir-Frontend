import React from "react";
import { Route, Routes } from "react-router-dom";

// Add your components here
import FoodList from "./FoodList";
import Home from "./Home";
import PredictImage from "./PredictImage";
import TrainImage from "./TrainImage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      {/* Add more routes below */}
      <Route path="/list" element={<FoodList />} />
      <Route path="/predict" element={<PredictImage />} />
      <Route path="/train" element={<TrainImage />} />

    </Routes>
  );
};

export default MainRoutes;
