import { useRef } from "react";
import "../styles/About.css";
import profileImage from "../imgs/youtube.png";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

const About = () => {
  return (
    <section id="aboutSection">
      <header id="aboutHeader">
        <p>
          Hi, I'm Sunil Khatri. I love to design, code, and I'm<br></br>
        </p>
        <p className="ohioText">based in Ohio.</p>
      </header>
      <main id="aboutMain">
        <div className="profileImage">
          {/* <img src={profileImage} alt="PlaceHolder"></img> */}
        </div>
        <p>
          I’m one of the most passionate developers you will come across. Have
          an interesting project or idea? Need my expertise? &nbsp;
          {/* use react-dom Link routing here */}
          <a href="#contactSection">
            <strong className="contactMe">Contact me.</strong>
          </a>
        </p>
        <div className="buttonsDiv">
          <a href="#contactSection">Contact Me</a>
          <a href="#samplesSection">See My Work</a>
        </div>
      </main>
    </section>
  );
};

export default About;
