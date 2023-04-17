import "./Education.css";
import unt from "../../../assets/img/unt.png";
import numen from "../../../assets/img/numen.png";
import CardInfo from "./CardInfo/CardInfo";
const Education = () => {
  return (
    <div className="education__container">
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
