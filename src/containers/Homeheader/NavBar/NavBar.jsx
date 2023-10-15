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

  // Flags desktop state
  const [changeFlag, setChangeFlag] = useState("es")
  const [flagModal, setFlagModal] = useState(false)
  //

  // Function that handles the status of the overlay // 
  const [buttonMobile, setButtonMobile] = useState(true);
  const handleButtonMobile = () => {
    setButtonMobile(!buttonMobile);
  };

  // Language configuration //
  const { i18n } = useTranslation("global")
  const handlerLang = (lang) => {
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
  const handleLogOut = () => {
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
          className={`btn_hamburger ${buttonMobile ? "btn_closed" : "btn_open"
            }`}
          onClick={handleButtonMobile}
        ></div>
      </div>
      <div className={`drawer ${buttonMobile ? "closed" : "open"
        }`}>
        <div className="navLinks">
          <ul>
            <li key={1}>
              <Link to={"/"} onClick={() => setButtonMobile(true)}>
                {useChangeLang("header.navbar.links.link1_text")}
              </Link>
            </li>
            <li key={2} onClick={() => setButtonMobile(true)}>
              <a href="/#myInfo">{useChangeLang("header.navbar.links.link2_text")}</a>
            </li>
            <li key={3} onClick={() => setButtonMobile(true)}>
              <a href="/#Knowledge">{useChangeLang("header.navbar.links.link3_text")}</a>
            </li>
            <li key={4} onClick={() => setButtonMobile(true)}>
              <a href="/#contact">{useChangeLang("header.navbar.links.link4_text")}</a>
            </li>


          </ul>
          <div className="desktopFlags_modal" onClick={() => setFlagModal(!flagModal)}>
            <button className="button_modal_flag">
              {changeFlag === "es" ?
                <img src={spain_flag} alt={useChangeLang("header.navbar.alt_msg_changeLang_es")} />
                :
                <img src={uk_flag} alt={useChangeLang("header.navbar.alt_msg_changeLang_en")} />
              }
            </button>
          </div>
        
          <div className={`lang_flags_container ${flagModal ? "desktopFlags" : "desktopFlags_off"}`}>
          <span class="top-bot top-bot-border"></span>
            <div onClick={() => {
              setButtonMobile(true)
              setChangeFlag("es")
              setFlagModal(false)
            }}>
              <button className="button_flags" onClick={() => handlerLang("es")}>
                <img src={spain_flag} alt={useChangeLang("header.navbar.alt_msg_changeLang_es")} />
              </button>
            </div>
            <div onClick={() => {
              setButtonMobile(true)
              setChangeFlag("en")
              setFlagModal(false)
            }}>
              <button className="button_flags" onClick={() => handlerLang("en")}>
                <img src={uk_flag} alt={useChangeLang("header.navbar.alt_msg_changeLang_en")} />
              </button>
            </div>
          </div>
          {userLoggedIn.userInfo === null ? (
            <div className="textSession">
              <Link onClick={() => setButtonMobile(true)} className="textLogin" to={"/login"}>
                {login_msg}
              </Link>
            </div>
          ) : (
            <div className="dropdownSession_container">
              <Dropdown className="dropdown_user">
                <Dropdown.Toggle className="dropdown_toggle_session" id="dropdown-basic">
                  {myProfile}
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdownMenu_session">
                  <Dropdown.Item className="myUser_button" >{myUser} {userLoggedIn.userInfo.username} </Dropdown.Item>
                  <Dropdown.Item className="logOut_button" onClick={handleLogOut}>{logout_button}</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          )}
        </div>

      </div>
    </nav>

  );
};

export default NavBar;
