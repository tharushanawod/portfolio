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
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <MiniGallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
