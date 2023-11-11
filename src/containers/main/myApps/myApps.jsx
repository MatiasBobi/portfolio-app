import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useChangeLang } from "../../../hooks/useChangeLang";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./myApps.css";

// Containers
import CardApps from "../CardApps/CardApps";
//

// Images
import jober from "../../../assets/img/jober.png";
import numen from "../../../assets/img/numen.png";
import libreria from "../../../assets/img/libreria.png";
//

// Function to see if the element is visible or not
import { useInView } from "react-intersection-observer";
//

const MyApps = () => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();

  return (
    <div
      ref={myRef}
      className={`myApps_container elementVisibility${
        myElementIsVisible ? "_visible" : "_hidden"
      }`}
    >
      <h2>{useChangeLang("main.myApps.title")}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="swiperApps"
      >
        <SwiperSlide>
          <CardApps
            img={jober}
            imgAlt={useChangeLang("main.myApps.card1.imgAlt")}
            title={useChangeLang("main.myApps.card1.title")}
            text={useChangeLang("main.myApps.card1.text")}
            linkApp="https://proyecto-react-numen.vercel.app"
            linkRepo="https://github.com/NCapdevila/proyectoReactNumen"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardApps
            img={numen}
            imgAlt={useChangeLang("main.myApps.card2.imgAlt")}
            title={useChangeLang("main.myApps.card2.title")}
            text={useChangeLang("main.myApps.card2.text")}
            linkRepo="https://github.com/MatiasBobi/Proyecto-Backend"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardApps
            img={libreria}
            imgAlt={useChangeLang("main.myApps.card3.imgAlt")}
            title={useChangeLang("main.myApps.card3.title")}
            text={useChangeLang("main.myApps.card3.text")}
            linkApp="https://matias-bobi-libreria.netlify.app"
            linkRepo="https://github.com/MatiasBobi/Libreria-sencilla"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardApps
            img={libreria}
            imgAlt={useChangeLang("main.myApps.card4.imgAlt")}
            title={useChangeLang("main.myApps.card4.title")}
            text={useChangeLang("main.myApps.card4.text")}
            linkApp="https://matias-bobi-dan-mar.netlify.app"
            linkRepo="https://github.com/MatiasBobi/Dan-Mar"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyApps;
