import React from "react";
import Cars from "../components/Cars/Cars";
import Luxury from "../components/Cars/Luxury";
import Taxis from "../components/Cars/Texis";
import Header from "../components/Header";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Cars />} />
        <Route path="/Luxury" element={<Luxury />} />
        <Route path="/Taxis" element={<Taxis />} />
      </Routes>
    </BrowserRouter>

    // <div>
    //   <Cars />
    //   <Luxury />
    //   <Taxis />
    // </div>
  );
};

export default Home;
