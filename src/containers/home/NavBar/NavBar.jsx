import NavBarLink from "./NavBarLink/NavBarLink";
import "./NavBar.css";
import { useState } from "react";
import spain_flag from '../../../assets/img/spain_flag.png'
import uk_flag from '../../../assets/img/united_kingdom_flag.png'
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
        <div className={`navLink__container${buttonMobile ? "_closed" : "_open"}`}>
          <ul className="navLinks">
            <NavBarLink text="Home" keyId={1} />
            <NavBarLink text="Quien soy" keyId={2} />
            <NavBarLink text="Conocimientos" keyId={3} />
            <NavBarLink text="Contacto" keyId={4} />

          </ul>
        
          <div className="session__container">
          
            <div className="textSession">
              Iniciar sesión
            </div>
            <div className="textSession">
              Registarme
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
