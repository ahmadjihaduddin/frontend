import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Navigasi from "./Components/Navbar/Navigasi";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Service/Services" 
import Contact from "./Components/Contact/Contact"
import FAQ from "./Components/FAQ/FAQ"
import Footer from "./Components/Footer/Footer"

function App() {
  return (
    <div className="App">
      <Navigasi />
      <Hero />
      <About />
      <Services />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
