import CardDisplayInfo from "../CardDisplayInfo/CardDisplayInfo";
import "./Knowledge.css";
import html5logo from "../../../assets/img/html5logo.svg";
import expressSvg from "../../../assets/img/expresslogo.svg";
import nodejsLogo from "../../../assets/img/nodejslogo.svg";
import mongodbLogo from "../../../assets/img/mongodblogo.svg";
import css3Logo from "../../../assets/img/css3logo.svg";
import rLogo from "../../../assets/img/reacticon.png";
import { useInView } from "react-intersection-observer";




const Knowledge = () => {

  const {ref: myRef, inView: myElementIsVisible} = useInView()

  return (
    <section ref={myRef} id="Knowledge" className={`Knowledge_container elementVisibility${myElementIsVisible ? '_visible' : '_hidden'}`}>
      <h2>Mis conocimientos</h2>
      <h3 className="titleKnowledge_container">Front-end</h3>
      <div className="frontEnd_container">
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
          info={["CSS Grid & Flex", "Boostrap & Tailwind", "CSS Modules & SASS"]}
        />

        <CardDisplayInfo
          icon={rLogo}
          backStyle={"#109acf"}
          title="React"
          info={["Manejo de estados", "Contenedores", "JSX"]}
        />
      </div>

      <h3 className="titleKnowledge_container">Back-end</h3>
      <div className="backEnd_container">
        <CardDisplayInfo
          icon={nodejsLogo}
          backStyle={"#54ca62"}
          title="NodeJs"
          info={["Manejo de archivos", "Autenticación y Autorización", "JWT"]}
        />

        <CardDisplayInfo
          icon={expressSvg}
          backStyle={"#e41414"}
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
