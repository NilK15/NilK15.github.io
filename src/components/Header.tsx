import "../styles/Header.css";
import hamburgerIcon from "../icons/hamburger.svg";

function Header() {
  return (
    <nav className="header-navbar">
      <div className="navbar-name-div">
        <a href="./components/">Sunil.K</a>
      </div>
      <div className="navbar-links-div">
        <img src={hamburgerIcon} alt="?" />
      </div>
    </nav>
  );
}

export default Header;
