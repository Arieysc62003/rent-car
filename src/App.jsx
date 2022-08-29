import React from "react";
import ReactDOM from "react-dom/client";
// import Header from "./components/Header";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import "./App.css";
function App() {
  return (
    <div>
      {/* <header>
        <Header />
      </header> */}
      <main>
        <Home />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
