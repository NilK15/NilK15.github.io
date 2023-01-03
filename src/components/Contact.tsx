import { useRef } from "react";
import "../styles/Contact.css";
import githubLogo from "../icons/github.svg";
import linkedinLogo from "../icons/linkedin.svg";
import gmailLogo from "../icons/gmail.svg";
import phoneLogo from "../icons/phone.svg";
import emailLogo from "../icons/email.svg";

const Contact = () => {
  const GITHUB_URL = "https://github.com/nilk15";
  const LINKEDIN_URL = "https://www.linkedin.com/in/sunil-khatri-a195a366/";

  const openURL = (url: string) => {
    window.open(`${url}`, "_blank");
  };

  return (
    <section id="contactSection">
      <header id="contactHeader">
        <p className="contactParagraph">Contact Me</p>
        <p>Want to work together?</p>
      </header>
      <main id="contactMain">
        <img
          id="githubImg"
          src={githubLogo}
          alt="nothing"
          onClick={() => openURL(GITHUB_URL)}
        ></img>
        <img
          id="linkedinImg"
          src={linkedinLogo}
          alt="nothing"
          onClick={() => openURL(LINKEDIN_URL)}
        ></img>
        <a
          style={{ margin: "0", padding: "0" }}
          href="mailto:skhatri15@gmail.com"
        >
          <img id="gmailImg" src={gmailLogo} alt="nothing"></img>
        </a>
      </main>
      <footer id="contactFooter">
        <div id="phone">
          <img src={phoneLogo} alt="nothing"></img>
          &nbsp;(330) 631 4642
        </div>
        <div id="email">
          <img src={emailLogo} alt="nothing"></img>&nbsp;skhatri15@gmail.com
        </div>
      </footer>
    </section>
  );
};

export default Contact;
