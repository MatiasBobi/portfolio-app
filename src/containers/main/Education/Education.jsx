import "./Education.css";
import unt from "../../../assets/img/unt.png";
import numen from "../../../assets/img/numen.png";
import CardInfo from "./CardInfo/CardInfo";
import { useInView } from "react-intersection-observer";
const Education = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <section>
      <h2
        className={`educationTitle_container elementVisibility${
          myElementIsVisible ? "_visible" : "_hidden"
        }`}
      >
        Mi educación
      </h2>
      <div
        ref={myRef}
        className={`education__container elementVisibility${
          myElementIsVisible ? "_visible" : "_hidden"
        }`}
      >
        <CardInfo
          link="#"
          title="Universidad Nacional de Tucumán"
          text="Programador universitario con bases de Analisis matematico y algebra, con conocimientos en lenguajes como HTML, CSS y JS"
          academy={unt}
          textLink="Leer más"
        />

        <CardInfo
          link="#"
          title="Academia Numen"
          text="Diplomatura en Desarrollo Web FullStack MERN"
          academy={numen}
          textLink="Certificado"
        />
      </div>
    </section>
  );
};

export default Education;
