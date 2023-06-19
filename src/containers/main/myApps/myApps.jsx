import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./myApps.css";

//CONTAINERS
import CardApps from "../CardApps/CardApps";

// IMAGES
import jober from "../../../assets/img/jober.png";
import numen from "../../../assets/img/numen.png"
import { useInView } from "react-intersection-observer";

const MyApps = () => {

const {ref: myRef, inView: myElementIsVisible} = useInView()

  return (
    <div ref={myRef} className={`myApps_container elementVisibility${myElementIsVisible ? '_visible' : '_hidden'}`}>
      <h2>My Apps</h2>
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
            imgAlt="Pagina de demo sobre una tienda de ropas"
            title="E-commerce"
            text="Aplicacion web trabajada en grupo de estudio durante nuestro aprendizaje."
            linkApp="#"
            linkRepo="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardApps
            img={numen}
            imgAlt="Api REST sobre equipos de futbol"
            title="Proyecto backend"
            text="Api REST basada sobre jugadores de futbol. Desarollada como proyecto para backend utilizando NodeJs, Express y MongoDB"
            linkApp="#"
            linkRepo="#"
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardApps
            img={jober}
            imgAlt="Pagina sobre manejo de consultas a APIs externas"
            title="APIs"
            text="Pagina sobre consulta a APIs"
            linkApp="#"
            linkRepo="#"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MyApps;
