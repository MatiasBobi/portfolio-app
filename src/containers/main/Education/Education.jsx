import "./Education.css";
import CardInfo from "./CardInfo/CardInfo";
// img imports 
import unt from "../../../assets/img/unt.png";
import numen from "../../../assets/img/numen.png";
//


// Function to see if the element is visible or not
import { useInView } from "react-intersection-observer";
//

// Functions of language change
import { useChangeLang } from "../../../hooks/useChangeLang";
//
const Education = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <section>
      <h2
        className={`educationTitle_container elementVisibility${
          myElementIsVisible ? "_visible" : "_hidden"
        }`}
      >
        {useChangeLang("main.education.title")}
      </h2>
      <div
        ref={myRef}
        className={`education__container elementVisibility${
          myElementIsVisible ? "_visible" : "_hidden"
        }`}
      >
        <CardInfo
          link="https://www.facet.unt.edu.ar/programadoruniversitario/plan-de-estudios/"
          title={useChangeLang("main.education.card1.title")}
          text={useChangeLang("main.education.card1.text")}
          academy={unt}
          textLink={useChangeLang("main.education.card1.link")}
        />

        <CardInfo
          link="https://drive.google.com/uc?export=download&id=13pZxbbWkmE6BL7221IyAwWyXlK_u1RP0"
          title={useChangeLang("main.education.card2.title")}
          text={useChangeLang("main.education.card2.text")}
          academy={numen}
          textLink={useChangeLang("main.education.card2.link")}
        />
      </div>
    </section>
  );
};

export default Education;
