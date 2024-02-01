import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import ContactMe from "./Components/ContactMe";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div id="about"></div>
        <About />
        <div id="skills"></div>
        <Skills />
        <div id="projects"></div>
        <Projects />
        <div id="contact"></div><ContactMe />
      </div>
      <Footer />
    </>
  );
}

export default App;
