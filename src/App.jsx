import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Objectives from "./components/Objectives";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Home />
      <About/>
      <Projects/>
      <Objectives/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
