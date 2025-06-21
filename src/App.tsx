import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#0f172a", minHeight: "100vh" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/about"
            element={
              <main className="pt-12 sm:pt-14 md:pt-16 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <About />
              </main>
            }
          />
          <Route
            path="/projects"
            element={
              <main className="pt-12 sm:pt-14 md:pt-16 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <Projects />
              </main>
            }
          />
          <Route
            path="/skills"
            element={
              <main className="pt-12 sm:pt-14 md:pt-16 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <Skills />
              </main>
            }
          />
          <Route
            path="/contact"
            element={
              <main className="pt-12 sm:pt-14 md:pt-16 max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                <Contact />
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
