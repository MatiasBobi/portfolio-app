import myPhoto from "../../../assets/img/my-photo.png";
import github from "../../../assets/img/github.svg";
import linkedn from "../../../assets/img/linkedin.svg";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner__container">
      <h1 className="title__banner mobile_title">Hola, me llamo Matias.</h1>
      <div className="img_banner_container">
        <img src={myPhoto} alt="Foto descriptiva de mi persona." />
        <div>Fullstack Developer Web Jr.</div>
      </div>
      <div className="textInfo_container">
      <h1 className="title__banner desktop_title tracking-in-expand">Hola, me llamo Matias.</h1>
        <div className="text_banner_descrption">
          Tengo 23 años y estoy en busqueda de ofrecer mis conocimientos para mi
          primera experencia laboral.
        </div>
        <div className="info__container">
          <div className="img_container">
            <img src={linkedn} alt="" />
          </div>
          <div className="img_container">
            <img src={github} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
