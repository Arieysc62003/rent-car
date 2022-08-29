import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
// import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Cars from "./Pages/Cars";
import Luxury from "./Pages/Luxury";
import Taxis from "./Pages/Texis";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Cars />} />
          <Route path="/Luxury" element={<Luxury />} />
          <Route path="/Taxis" element={<Taxis />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>

    // <div>
    //   <header>
    //     <Header />
    //   </header>
    //   <main>
    //     <Home />
    //   </main>
    //   <footer>
    //     <Footer />
    //   </footer>
    // </div>
  );
}

export default App;
