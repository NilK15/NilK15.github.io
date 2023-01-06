import "../styles/Header.css";
import hamburgerIcon from "../icons/hamburger.svg";
import { useState } from "react";

function Header() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const closeBurger = () => {
    setHamburgerOpen(false);
  };

  return (
    <nav className="header-navbar">
      <div className="navbar-name-div">
        <a id="name" href="/">
          Sunil.K
        </a>
      </div>
      <div className="navbar-links-div">
        <button onClick={toggleHamburger}>
          <img
            className={`hamburgerButton ${hamburgerOpen ? " hideButton" : ""}`}
            src={hamburgerOpen ? "not open" : hamburgerIcon}
            alt="?"
          />
        </button>
        <ul className={`dropDown ${hamburgerOpen ? "" : " hideDropDown"}`}>
          <li onClick={closeBurger}>
            <a href="#">Home</a>
          </li>
          <li onClick={closeBurger}>
            <a href="#skillsSection">Skills</a>
          </li>
          <li onClick={closeBurger}>
            <a href="#samplesSection">Projects</a>
          </li>
          <li onClick={closeBurger}>
            <a href="#contactSection">Contact</a>
          </li>
        </ul>
        {/* maybe introduce Routing here */}
        <ul className="navItemsDesktop">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#skillsSection">Skills</a>
          </li>
          <li>
            <a href="#samplesSection">Projects</a>
          </li>
          <li>
            <a href="#contactSection">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header;
