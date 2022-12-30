import "../styles/Skills.css";
import htmlLogo from "../icons/html5.svg";
import javascriptLogo from "../icons/javascript.svg";
import sqlLogo from "../icons/sql.svg";
import mysqlLogo from "../icons/mysql.svg";
import cssLogo from "../icons/css.svg";
import javaLogo from "../icons/java.svg";
import reactLogo from "../icons/react.svg";
import springLogo from "../icons/spring.svg";

const Skills = () => {
  return (
    <section id="skillsSection">
      <header>Skills</header>
      <main id="skillsMain">
        <ol>
          <li>
            <img src={htmlLogo} alt="nothing"></img>HTML
          </li>
          <li>
            <img src={javascriptLogo} alt="nothing"></img>&nbsp;JavaScript
          </li>
          <li>
            <img src={sqlLogo} alt="nothing"></img>&nbsp;SQL
          </li>
          <li>
            <img src={springLogo} alt="nothing"></img>&nbsp;Spring
          </li>
        </ol>
        <ol>
          <li>
            <img src={cssLogo} alt="nothing"></img>CSS
          </li>
          <li>
            <img src={javaLogo} alt="nothing"></img>&nbsp;Java
          </li>
          <li>
            <img src={mysqlLogo} alt="nothing"></img>&nbsp;MySQL
          </li>
          <li>
            <img src={reactLogo} alt="nothing"></img>&nbsp;React
          </li>
        </ol>
      </main>
    </section>
  );
};
export default Skills;
