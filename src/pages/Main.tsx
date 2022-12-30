import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
// import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";

// Main page of website
function Main() {
  return (
    <div className="main">
      <Header />
      <About />
      <Skills />
    </div>
  );
}

export default Main;
