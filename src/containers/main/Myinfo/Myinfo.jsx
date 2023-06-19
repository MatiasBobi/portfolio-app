import "./Myinfo.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useInView } from "react-intersection-observer";
const Myinfo = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  const [iconDownload, setIconDownload] = useState(false);
  const handlerIcon = () => {
    setIconDownload(!iconDownload);
  };
  return (
    <section
      ref={myRef}
      className={`myinfo__container elementVisibility${
        myElementIsVisible ? "_visible" : "_hidden"
      }`}
      id="myInfo"
    >
      <h2 className="title_container item">¿Quien soy?</h2>
      <div className="mydescription__container item">
        <p className="textMyInfo_container">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          ducimus neque exercitationem rerum veniam debitis dolor. Repellat
          culpa magni rem beatae, blanditiis sed atque perferendis repellendus
          voluptatem, iste sunt qui! Ad consectetur deserunt debitis, mollitia
          tenetur dicta voluptatibus delectus voluptates quod explicabo odit
          suscipit dolore quae! Laboriosam voluptatee sit dolor.
        </p>
      </div>
      <div className="buttonCV_container item">
        <button
          className={`buttonCV_link hover`}
          onMouseEnter={handlerIcon}
          onMouseLeave={handlerIcon}
        >
          Descargar mi CV
          <FontAwesomeIcon
            className={`icondownload ${
              iconDownload ? "hoverIcon_on" : "hoverIcon_off"
            }`}
            icon={faDownload}
          />
        </button>
      </div>
    </section>
  );
};

export default Myinfo;
