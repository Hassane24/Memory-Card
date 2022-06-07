import "../styles/Footer.css";
import github from "../assets/github.svg";
const Footer = () => {
  return (
    <div className="footer">
      My github{" "}
      <a href="https://github.com/Hassane24" target="_blank" className="link">
        <img src={github} alt="my github"></img>
      </a>
    </div>
  );
};
export default Footer;
