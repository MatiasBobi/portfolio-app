import "./Education.css";
import unt from "../../../assets/img/unt.png";
import numen from "../../../assets/img/numen.png";
import CardInfo from "./CardInfo/CardInfo";
import { useInView } from "react-intersection-observer";
const Education = () => {

  const {ref: myRef, inView: myElementIsVisible} = useInView()

  /*
  const {ref: myRef, inView: myElementIsVisible} = useInView()
  ref={myRef} className={`education__container elementVisibility${myElementIsVisible ? '_visible' : '_hidden'}`}
  */
  
  return (
    <div ref={myRef} className={`education__container elementVisibility${myElementIsVisible ? '_visible' : '_hidden'}`}>
      <h2>Mi educación</h2>
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
  );
};

export default Education;
