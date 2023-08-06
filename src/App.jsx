import React from "react";
import Home from "./Pages/Home";
import Destinations from "./Pages/Destinations";
import Crew from "./Pages/Crew";
import Technology from "./Pages/Technology";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<Destinations />} path="/destination" />
      <Route element={<Crew />} path="/crew" />
      <Route element={<Technology />} path="/technology" />
    </Routes>
  );
};

export default App;
