import "./Banner.css";

// img imports
import myPhoto from "../../../assets/img/my-photo.png";
import github from "../../../assets/img/github.svg";
import linkedn from "../../../assets/img/linkedin.svg";

//

// Functions of language change
import { useChangeLang } from "../../../hooks/useChangeLang";
import { Link } from "react-router-dom";
//
const Banner = () => {
  return (
    <section className="banner__container">
        <h1 className="title__banner mobile_title">
          {useChangeLang("main.banner.title")}
        </h1>
        <div className="img_banner_container">
          <img src={myPhoto} className="bannerImage" alt="Foto descriptiva de mi persona." />
          <div className="profession_text">
            {useChangeLang("main.banner.myProfession")}
          </div>
        </div>
        <div className="textInfo_container">
          <h1 className="title__banner desktop_title tracking-in-expand">
            {useChangeLang("main.banner.title")}
          </h1>
          <div className="text_banner_descrption">
            {useChangeLang("main.banner.description_text")}
          </div>
          <div className="info__container">
            <div className="img_container">
              <Link target="_blank" to="https://www.linkedin.com/in/bobi-matias-leonardo-02b457247/?trk=public-profile-join-page">
                <img
                  src={linkedn}
                  alt={useChangeLang("main.banner.linkedin_alt")}
                />
              </Link>
            </div>
            <div className="img_container">
              <Link target="_blank" to="https://github.com/MatiasBobi">
                <img
                  src={github}
                  alt={useChangeLang("main.banner.github_alt")}
                />
              </Link>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Banner;
