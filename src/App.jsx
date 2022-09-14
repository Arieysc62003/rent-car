import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Taxis from "./Pages/Texis";
import Luxury from "./Pages/Luxury";
import Footer from "./components/Footer";
import Cars from "./Pages/Cars";
import CarPage from "./Pages/CarPage";
import Overtrue from "./Pages/overtrue";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Overtrue />} />
          <Route path="/Overtrue" element={<Overtrue />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/CarPage/:id" element={<CarPage />} />
          <Route path="/Luxury" element={<Luxury />} />
          <Route path="/Taxis" element={<Taxis />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
