import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import About from "./components/About";


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About/>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
     

    </div>
  );
}

export default App;
