import { useRef } from "react";
import "../styles/About.css";
import { Link, Routes, Route, BrowserRouter as Router } from "react-router-dom";

const About = () => {
  const contactRef = useRef<HTMLInputElement>(null);
  const contactClick = () => {
    // contact.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <section id="aboutSection">
      <header id="aboutHeader">
        <p>I'm Sunil Khatri. I like to design, code and I am</p>
        <p className="ohioText">based in Ohio</p>
      </header>
      <main id="aboutMain">
        <p>
          I’m one of the most passionate developers you will come across. Have
          an interesting project or idea? Need my amazing, expansive skill set?
          &nbsp;
          {/* use react-dom Link routing here */}
          <strong className="contactMe" onClick={contactClick}>
            Contact me.
          </strong>
        </p>
      </main>
    </section>
  );
};

export default About;
