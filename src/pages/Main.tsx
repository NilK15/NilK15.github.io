import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Samples from "../components/Samples";
import Contact from "../components/Contact";
import "../styles/Main.css";
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

// Main page of website
function Main() {
  return (
    <div className="main">
      <Header />
      <About />
      <Skills />
      <Samples />
      <Contact />
    </div>
  );
}

export default Main;
