import NavBarLink from "./NavBarLink/NavBarLink";
import "./NavBar.css";
import { useState } from "react";

// redux functions
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
//

// Logout function from auth slice reducers 
import { logOut } from "../../../slices/authSlice";
//

// Bootstrap imports 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown } from "react-bootstrap";
//

// img imports
import spain_flag from "../../../assets/img/spain_flag.png";
import uk_flag from "../../../assets/img/united_kingdom_flag.png";
//

// React router imports
import { Link } from "react-router-dom";
//

// Floating messages functions
import { ToastContainer, toast } from "react-toastify";
// 

// Functions of language change 
import { useTranslation } from 'react-i18next';
import { useChangeLang } from "../../../hooks/useChangeLang";
/////////////////////////////

const NavBar = () => {

  // Redux user auth //

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const userLoggedIn = useSelector((state) => state.auth);

  //

  // Function that handles the status of the overlay // 
  const [buttonMobile, setButtonMobile] = useState(true);
  const handleButtonMobile = () => {
    setButtonMobile(!buttonMobile);
  };

  // Language configuration //
  const {i18n} = useTranslation("global")
  const handlerLang = (lang) =>{
    i18n.changeLanguage(lang)
  }
  // Variables that change the language change //
  const logout_msg_success = useChangeLang("header.navbar.logOut_msg_success")
  const myProfile = useChangeLang("header.navbar.myProfile")
  const login_msg = useChangeLang("header.navbar.link_logIn_msg")
  const myUser = useChangeLang("header.navbar.myUser")
  const logout_button = useChangeLang("header.navbar.logOut_button")
  //

  // Function that handles unlogging //
  const handleLogOut = () =>{
    dispatch(logOut())
    navigate("/")
    toast.success(logout_msg_success)
  }
  ////////////////////////////////////


  // <div className="btn_mobile" onClick={handleButtonMobile}>
  // <div
  //   className={`btn_hamburger ${
  //     buttonMobile ? "btn_closed" : "btn_open"
  //   }`}
  //   onClick={handleButtonMobile}
  // ></div>

  return (
    
    <nav>
      <ToastContainer />
          <div className="btn_mobile" onClick={handleButtonMobile}>
            <div
              className={`btn_hamburger ${
                buttonMobile ? "btn_closed" : "btn_open"
              }`}
              onClick={handleButtonMobile}
            ></div>
          </div>   
        <div
          className={`navLink__container${
            buttonMobile ? "_closed" : "_open"
          }`}
        >
          <ul className="navLinks">
            <Link to={"/"} onClick={() => setButtonMobile(true)}>
              <NavBarLink text={useChangeLang("header.navbar.links.link1_text")} route={"/"} keyId={1} />
            </Link>
            <a onClick={() => setButtonMobile(true)}>
              <NavBarLink link="/#myInfo" text={useChangeLang("header.navbar.links.link2_text")} route={"#"} keyId={2} />
            </a>
            <a onClick={() => setButtonMobile(true)}>
              <NavBarLink link="" text={useChangeLang("header.navbar.links.link3_text")} keyId={3} />
            </a>
            <aonClick={() => setButtonMobile(true)}>
               <NavBarLink link="/#contact" text={useChangeLang("header.navbar.links.link4_text")} keyId={4} />
            </a>
          </ul>
          <div className="session__container">
            {userLoggedIn.userInfo === null ? (
              <div className="textSession">
                <Link onClick={() => setButtonMobile(true)} className="textlogin" to={"/login"}>
                {login_msg}
                </Link>
              </div>
            ) : (
              <div className="dropdownSession_container">
                <Dropdown className="dropdown_user">
                  <Dropdown.Toggle className="dropdown_toggle_session"  id="dropdown-basic">
                  {myProfile}
                  </Dropdown.Toggle>
                  <Dropdown.Menu className="dropdownMenu_session">
                    <Dropdown.Item >{myUser} {userLoggedIn.userInfo.username} </Dropdown.Item>
                    <Dropdown.Item className="logOut_button" onClick={handleLogOut}>{logout_button}</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            )}
          </div>
          <div className="lang_flags_container">
            <div onClick={() => setButtonMobile(true)}>
              <button className="button_flags" onClick={() => handlerLang("es")}>
              <img src={spain_flag} alt={useChangeLang("header.navbar.alt_msg_changeLang_es")} />
              </button>
            </div>
            <div onClick={() => setButtonMobile(true)}> 
            <button  className="button_flags" onClick={() => handlerLang("en")}>
              <img src={uk_flag} alt={useChangeLang("header.navbar.alt_msg_changeLang_en")} />
              </button>
            </div>
          </div>
        </div>
      
    </nav>
    
  );
};

export default NavBar;
