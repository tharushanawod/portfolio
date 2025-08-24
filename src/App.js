import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import MiniGallery from "./components/MiniGallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { GalaxyModified } from "./components/Hero";
import { HeroModified } from "./components/Hero";

function App() {
  return (
    <div className="App min-h-screen bg-dark-bg gradient-bg relative overflow-hidden">
      {/* Light spots for depth */}
      <div className="fixed top-20 left-20 w-96 h-96 light-spot opacity-30 pointer-events-none"></div>
      <div className="fixed top-1/2 right-32 w-64 h-64 light-spot opacity-20 pointer-events-none"></div>
      <div className="fixed bottom-32 left-1/3 w-80 h-80 light-spot opacity-25 pointer-events-none"></div>
<Header/>
      {/* <HeroModified /> */}
      {/* <Hero /> */}
      <GalaxyModified/>
      <About />
      <Projects />
      <MiniGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
