import "./CardApps.css";

// Functions of language change
import { useChangeLang } from "../../../hooks/useChangeLang";
import { Link } from "react-router-dom";
//

const CardApps = (props) => {
  const { img, imgAlt, title, text, linkApp, linkRepo } = props;
  return (
    <div className="cardApp_container">
      <div className="cardApp_img">
        <img src={img} alt={imgAlt} />
      </div>
      <div className="cardApp_content">
        <h3>{title}</h3>
        <p>{text}</p>
        {linkApp ? (
          <div className="cardApp_buttons">
            <Link target="_blank" to={linkApp}>
              <button>{useChangeLang("main.cardApps.runApp")}</button>
            </Link>
            <Link target="_blank" to={linkRepo}>
              <button>{useChangeLang("main.cardApps.repository")}</button>
            </Link>
          </div>
        ) : (
          <div className="cardApp_buttons">
            <Link target="_blank" to={linkRepo}>
              <button>{useChangeLang("main.cardApps.repository")}</button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CardApps;
