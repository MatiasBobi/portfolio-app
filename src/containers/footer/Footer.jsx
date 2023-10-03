import "./Footer.css";

// Icons
import github from "../../assets/img/github-white.svg";
import linkedn from "../../assets/img/linkedin.svg";
//

// Functions of language change
import { useChangeLang } from "../../hooks/useChangeLang";
import { Link } from "react-router-dom";
//

const Footer = () => {
  return (
    <footer className="footer_container">
      <p>{useChangeLang("footer.rightText")}</p>
      <div className="svg__footer_container">
        <Link to="https://github.com/MatiasBobi">
          <img src={github} alt={useChangeLang("footer.github_alt")} />
        </Link>
        <Link to="https://www.linkedin.com/in/bobi-matias-leonardo-02b457247/?trk=public-profile-join-page">
          <img src={linkedn} alt={useChangeLang("footer.linkedin_alt")} />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
