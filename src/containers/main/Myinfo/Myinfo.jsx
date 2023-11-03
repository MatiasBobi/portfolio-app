import "./Myinfo.css";
import { useState } from "react";

// Icons
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//

// Function to see if the element is visible or not
import { useInView } from "react-intersection-observer";
//

// Functions of language change
import { useChangeLang } from "../../../hooks/useChangeLang";
import { Link } from "react-router-dom";
//

const Myinfo = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  const [iconDownload, setIconDownload] = useState(false);
  const handlerIcon = () => {
    setIconDownload(!iconDownload);
  };
  return (
    <section ref={myRef} className={`myinfo__container`} id="myInfo">
      <div className="whoiam_container">
        <h2 className="title_container item">
          {useChangeLang("main.myInfo.title")}
        </h2>
        <div className="mydescription__container item">
          <p className="textMyInfo_container">
            {useChangeLang("main.myInfo.myDescription")}
          </p>
        </div>
        <div className="buttonCV_container item">
          <Link to="https://drive.google.com/uc?export=download&id=1c0wJqqKfUKK5fnVnIi1RP5lD2ximP-l6">
            <button
              className={`buttonCV_link hover`}
              onMouseEnter={handlerIcon}
              onMouseLeave={handlerIcon}
            >
              {useChangeLang("main.myInfo.button_cv_download")}
              <FontAwesomeIcon
                className={`icondownload ${
                  iconDownload ? "hoverIcon_on" : "hoverIcon_off"
                }`}
                icon={faDownload}
              />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Myinfo;
