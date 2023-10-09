import CardDisplayInfo from "./CardDisplayInfo/CardDisplayInfo";
import "./Knowledge.css";

// Icons
import html5logo from "../../../assets/img/html5logo.svg";
import expressSvg from "../../../assets/img/expresslogo.svg";
import nodejsLogo from "../../../assets/img/nodejslogo.svg";
import mongodbLogo from "../../../assets/img/mongodblogo.svg";
import css3Logo from "../../../assets/img/css3logo.svg";
import rLogo from "../../../assets/img/reacticon.png";
//

// Function to see if the element is visible or not
import { useInView } from "react-intersection-observer";
//

// Functions of language change
import { useChangeLang } from "../../../hooks/useChangeLang";
//



const Knowledge = () => {

  const {ref: myRef, inView: myElementIsVisible} = useInView()

  return (
    <section ref={myRef} id="Knowledge" className={`Knowledge_container elementVisibility${myElementIsVisible ? '_visible' : '_hidden'}`}>
      <h2>{useChangeLang("main.knowledge.title")}</h2>
      <h3 className="titleKnowledge_container">Front-end</h3>
      <div className="frontEnd_container">
        <CardDisplayInfo
          icon={html5logo}
          backStyle={"#ff7300"}
          title={useChangeLang("main.knowledge.frontend.card1.title")}
          info={[useChangeLang("main.knowledge.frontend.card1.info.text1"),
           useChangeLang("main.knowledge.frontend.card1.info.text2"),
           useChangeLang("main.knowledge.frontend.card1.info.text3")]}
        />

        <CardDisplayInfo
          icon={css3Logo}
          backStyle={"#2750b8"}
          title={useChangeLang("main.knowledge.frontend.card2.title")}
          info={[useChangeLang("main.knowledge.frontend.card2.info.text1"),
          useChangeLang("main.knowledge.frontend.card2.info.text2"),
          useChangeLang("main.knowledge.frontend.card2.info.text3")]}
        />

        <CardDisplayInfo
          icon={rLogo}
          backStyle={"#109acf"}
          title={useChangeLang("main.knowledge.frontend.card3.title")}
          info={[useChangeLang("main.knowledge.frontend.card3.info.text1"),
          useChangeLang("main.knowledge.frontend.card3.info.text2"),
          useChangeLang("main.knowledge.frontend.card3.info.text3")]}
        />
      </div>

      <h3 className="titleKnowledge_container">Back-end</h3>
      <div className="backEnd_container">
        <CardDisplayInfo
          icon={nodejsLogo}
          backStyle={"#54ca62"}
          title={useChangeLang("main.knowledge.backend.card1.title")}
          info={[useChangeLang("main.knowledge.backend.card1.info.text1"),
          useChangeLang("main.knowledge.backend.card1.info.text2"),
          useChangeLang("main.knowledge.backend.card1.info.text3")]}
        />

        <CardDisplayInfo
          icon={expressSvg}
          backStyle={"#e41414"}
          title={useChangeLang("main.knowledge.backend.card2.title")}
          info={[useChangeLang("main.knowledge.backend.card2.info.text1"),
          useChangeLang("main.knowledge.backend.card2.info.text2"),
          useChangeLang("main.knowledge.backend.card2.info.text3")]}
        />

        <CardDisplayInfo
          icon={mongodbLogo}
          backStyle={"#86bd5d"}
          title={useChangeLang("main.knowledge.backend.card3.title")}
          info={[useChangeLang("main.knowledge.backend.card3.info.text1"),
          useChangeLang("main.knowledge.backend.card3.info.text2"),
          useChangeLang("main.knowledge.backend.card3.info.text3")]}
        />
      </div>
    </section>
  );
};

export default Knowledge;
