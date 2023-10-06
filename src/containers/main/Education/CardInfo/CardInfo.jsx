import { Link } from "react-router-dom";
import "./CardInfo.css";

const CardInfo = (props) => {
  const { text, title, academy, link, textLink } = props;
  return (

      <div className="inst__container">
        <div className="institution_box">
          <div className="academy__container">
            <div className="imgInstitution_container">
              <img src={academy} alt="" />
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
            <Link target="_blank" to={link}>{textLink}</Link>
          </div>
        </div>
      </div>
  );
};

export default CardInfo;
