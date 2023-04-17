import CardDisplayInfo from "../CardDisplayInfo/CardDisplayInfo";
import "./Knowledge.css";
import html5logo from "../../../assets/img/html5logo.svg";
import expressSvg from "../../../assets/img/expresslogo.svg";
import nodejsLogo from "../../../assets/img/nodejslogo.svg";
import mongodbLogo from "../../../assets/img/mongodblogo.svg";
import css3Logo from "../../../assets/img/css3logo.svg";
import rLogo from "../../../assets/img/reacticon.png";

const Knowledge = () => {
  return (
    <section className="Knowledge_container">
      <h2>Mis conocimientos</h2>
      <div className="frontEnd_container">
        <h3>Front-end</h3>
        <CardDisplayInfo
          icon={html5logo}
          backStyle={"#ff7300"}
          title="HTML5"
          info={["Etiquetas semanticas", "Contenedores", "Meta tags"]}
        />

        <CardDisplayInfo
          icon={css3Logo}
          backStyle={"#2750b8"}
          title="CSS3"
          info={["CSS Grid & Flex", "Boostrap & Tailwind", "CSS Modules"]}
        />

        <CardDisplayInfo
          icon={rLogo}
          backStyle={"#109acf"}
          title="React"
          info={["Manejo de estados", "Contenedores", "JSX"]}
        />
      </div>

      <div className="backEnd_container">
      <h3>Back-end</h3>
        <CardDisplayInfo
          icon={nodejsLogo}
          backStyle={"#54ca62"}
          title="NodeJs"
          info={["Manejo de archivos", "Autenticación y Autorización", "JWT"]}
        />

        <CardDisplayInfo
          icon={expressSvg}
          backStyle={"#f3e2cf"}
          title="Express"
          info={["Router", "Express Validator", "Session & Cookies"]}
        />

        <CardDisplayInfo
          icon={mongodbLogo}
          backStyle={"#86bd5d"}
          title="MongoDB"
          info={["Mongoose", "CRUD", "Schemas"]}
        />
      </div>
    </section>
  );
};

export default Knowledge;
