import "../styles/Contact.css";
import githubLogo from "../icons/github.svg";
import linkedinLogo from "../icons/linkedin.svg";
import gmailLogo from "../icons/gmail.svg";

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
      <footer></footer>
    </section>
  );
};

export default Contact;
