import NavBarLink from "./NavBarLink/NavBarLink";
import "./NavBar.css";
import { useState } from "react";
import spain_flag from '../../../assets/img/spain_flag.png'
import uk_flag from '../../../assets/img/united_kingdom_flag.png'
import { Link } from "react-router-dom";
const NavBar = () => {

    const [buttonMobile, setButtonMobile] = useState(true)
    
    const handleButtonMobile = () =>{
        setButtonMobile(!buttonMobile)
    }

  return (
    <nav>
      <div className="NavBarMobile">
        <div className="btn_container">
        <div className="btn_mobile" onClick={handleButtonMobile}>
            <div className={`btn_hamburger ${buttonMobile ? "btn_closed":"btn_open"}`}></div>
        </div>
        </div>
        <div className={`navLink__container${buttonMobile ? "_closed" : "_open"} navbardesktop`}>
          <ul className="navLinks">
            <Link to={"/"}><NavBarLink text="Inicio" route={"/"} keyId={1} /></Link>
            <a href="/#myInfo"><NavBarLink text="Quien soy" route={"#"} keyId={2} /></a>
            <a href="/#Knowledge"><NavBarLink text="Conocimientos" keyId={3} /></a>
            <a href="/#contact"><NavBarLink text="Contacto" keyId={4} /></a>
          </ul>
          <div className="session__container">
            <div className="textSession">
              <Link className="textlogin" to={'/login'}>Iniciar sesión</Link>
            </div>
            <div className="textSession">
            <Link  className="textlogin" to={'/login'}>Registarme</Link>
              
            </div>
          </div>
          <div className="lang_flags_container">
              <div><img src={spain_flag} alt="Cambiar de idioma a español" /></div>
              <div><img src={uk_flag} alt="Cambiar de idioma a ingles" /></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
