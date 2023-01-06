import { useRef } from "react";
import "../styles/About.css";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

const About = () => {
  return (
    <section id="aboutSection">
      <header id="aboutHeader">
        <p>Hi. I'm Sunil Khatri. I like to design, code and I am</p>
        <p className="ohioText">based in Ohio</p>
      </header>
      <main id="aboutMain">
        <p>
          I’m one of the most passionate developers you will come across. Have
          an interesting project or idea? Need my amazing, expansive skill set?
          &nbsp;
          {/* use react-dom Link routing here */}
          <a href="#contactSection">
            <strong className="contactMe">Contact me.</strong>
          </a>
        </p>
        <div className="buttonsDiv">
          <button>Contact Me</button>
          <button>See My Work</button>
        </div>
      </main>
    </section>
  );
};

export default About;
