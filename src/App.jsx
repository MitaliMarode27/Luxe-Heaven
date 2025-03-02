import {Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import "./index.css"
import Home from "./Home";
import ModularInterior from "./ModularInterior";
import Navbar from "./Navbar";
import FullHomeInterior from "./FullHomeInterior";
import LuxuryInterior from "./LuxuryInterior";
import HowItWorks from "./HowItWorks";
import About from "./About";
import Contact from "./Contact";

const App = () => { 
  return (
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/navbar" element={<Navbar/>} />
        <Route path="/modular" element={<ModularInterior/>} />
        <Route path="/fullhome" element={<FullHomeInterior/>} />
        <Route path="/luxury" element={<LuxuryInterior/>} />
        <Route path="/howitworks" element={<HowItWorks/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>  
  );
};

export default App;