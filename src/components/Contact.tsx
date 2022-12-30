import "../styles/Contact.css";
import githubLogo from "../icons/github.svg";
import linkedinLogo from "../icons/linkedin.svg";
import gmailLogo from "../icons/gmail.svg";
import phoneLogo from "../icons/phone.svg";
import emailLogo from "../icons/email.svg";

const Contact = () => {
  return (
    <section id="contactSection">
      <header id="contactHeader">
        <h1>Contact Me</h1>
        <p>Want to work together?</p>
      </header>
      <main id="contactMain">
        <img id="githubImg" src={githubLogo} alt="nothing"></img>
        <img id="linkedinImg" src={linkedinLogo} alt="nothing"></img>
        <img id="gmailImg" src={gmailLogo} alt="nothing"></img>
      </main>
      <footer id="contactFooter">
        <div id="phone">
          <img src={phoneLogo} alt="nothing"></img>&nbsp;(330) 631 4642
        </div>
        <div id="email">
          <img src={emailLogo} alt="nothing"></img>&nbsp;skhatri15@gmail.com
        </div>
      </footer>
    </section>
  );
};

export default Contact;
