import { useState } from "react";
import Header from "./components/header";
import "./App.css";
import Home from "./Pages/Home";
function App() {
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        {/* I need to create a component that will move me between the pages when clicked */}
        <Home />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
