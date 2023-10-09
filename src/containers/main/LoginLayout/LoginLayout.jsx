import { useEffect, useRef, useState } from "react";
import "./LoginLayout.css";

// Fontawesome icons 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
//

// redux functions & slices 
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation, useRegisterMutation } from "../../../slices/userApiSlice";
import { setUserInfo } from "../../../slices/authSlice";
//

// Floating messages functions
import { toast } from "react-toastify";
//

// Functions of language change
import { useChangeLang } from "../../../hooks/useChangeLang";
//


const LoginLayout = () => {

// Server response texts
const verifyRegisterData = useChangeLang("main.loginLayout.registerFetch.statusMsg.verify")
const registerdontMatchpass = useChangeLang("main.loginLayout.registerFetch.statusMsg.dontMatchpass")
const registerError = useChangeLang("main.loginLayout.registerFetch.statusMsg.errorRegister")
const registerUserExists = useChangeLang("main.loginLayout.registerFetch.statusMsg.userexist")
const loginSuccess = useChangeLang("main.loginLayout.loginFetch.statusMsg.successLogin")
const loginError = useChangeLang("main.loginLayout.loginFetch.statusMsg.loginError")
const loginDontMatchData = useChangeLang("main.loginLayout.loginFetch.statusMsg.dontMatchData")
const serverOFF = useChangeLang("main.loginLayout.serverOFF")
//

// Functions for status management
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [login] = useLoginMutation();
  const { userInfo } = useSelector((state) => state.auth);
  const [register] = useRegisterMutation();
//

// Regex requirements
  const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9]{3,23}$/;
  const PWD_REGEX = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%]).{7,25}$/;
  const MAIL_REGEX = /^[A-Z-a-z._\-0-9]*[@][A-Za-z]*[.][a-z]{2,4}$/;
//

// states, values and reference functions
  const [moveOverlay, setMoveOverlay] = useState(false);
  const [mailLogin, setMailLogin] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const userRef = useRef();
  const errRef = useRef();
  const [usernameRegister, setUsernameRegister] = useState("");
  const [validUser, setValidUser] = useState(false);
  const [userFocus, setUserFocus] = useState(false);
  const [passRegister, setPassRegister] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPassRegister, setMatchPassRegister] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);
  const [mailRegister, setMailRegister] = useState("");
  const [validMail, setValidMail] = useState(false);
  const [mailFocus, setMailFocus] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [isError, setIsError] = useState(false);
  //

  // Verification if a user is already logged in
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);
  //

  // regex validations
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(usernameRegister);
    setValidUser(result);
  }, [usernameRegister]);

  useEffect(() => {
    const result = MAIL_REGEX.test(mailRegister);
    setValidMail(result);
  }, [mailRegister]);

  useEffect(() => {
    const result = PWD_REGEX.test(passRegister);
    setValidPwd(result);
    const match = passRegister === matchPassRegister;
    setValidMatch(match);
  }, [passRegister, matchPassRegister]);

  
  useEffect(() => {
    setErrorMsg("");
  }, [usernameRegister, passRegister, matchPassRegister]);
  //

  // overlay movement
  const setMoveOverlayHandler = () => {
    setMoveOverlay(!moveOverlay);
  };
  //

  // submit register fuction
  const handleSubmitRegister = async (e) => {
    e.preventDefault();

    const verify1 = USER_REGEX.test(usernameRegister);
    const verify2 = PWD_REGEX.test(passRegister);

    if (!verify1 || !verify2) {
      setErrorMsg(verifyRegisterData);
      return;
    }

    try {
      if(passRegister !== matchPassRegister){
        setIsError(true)
        setErrorMsg(registerdontMatchpass)
        setTimeout(() => {
          setIsError(false)
        }, 3000);
        return;
      }
      const res = await register({
        username: usernameRegister,
        email: mailRegister,
        password: passRegister
      }).unwrap()
      setUsernameRegister("");
      setMailRegister("");
      setPassRegister("");
      setMatchPassRegister("")
      dispatch(setUserInfo({ ...res}));
      navigate("/");
    } catch (error) {
      if (!error) {
        setIsError(true)
        setErrorMsg(registerError);
        setTimeout(() => setIsError(false), 3000)
      } else if (error.status === 409) {
        setIsError(true)
        setErrorMsg(registerUserExists);
      } else {
        setIsError(true)
        setErrorMsg(serverOFF);
      }
      errRef.current.focus();
    }
    return;
  };
  //

  // submit login fuction

  const handleSubmiteLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await login({
        email: mailLogin,
        password: passLogin,
      }).unwrap();
      toast.success(loginSuccess);
      dispatch(setUserInfo({ ...res }));
      navigate("/");
    } catch (error) {
      if (!error) {
        toast.error(loginError);
      } else if (error.status === 501) {
        toast.error(loginDontMatchData);
      } else {
        toast.error(serverOFF);
      }
    }
  };
  //

  return (
    <div className="loginLayout_container">
      <div className="loginForm_container">
        <div className="singIn_container">
          <h2 className="loginTitle">{useChangeLang("main.loginLayout.formLogin.title")}</h2>
          <div className="formLogin_container loginform_box">
            <form onSubmit={handleSubmiteLogin}>
              <div className="inputLoginForm_container">
                <input
                  className="inputContact"
                  placeholder={useChangeLang("main.loginLayout.formLogin.email_placeholder")}
                  type="email"
                  required
                  value={mailLogin}
                  onChange={(e) => setMailLogin(e.target.value)}
                />
              </div>
              <div className="inputLoginForm_container">
                <input
                  className="inputContact"
                  placeholder={useChangeLang("main.loginLayout.formLogin.password_placeholder")}
                  type="password"
                  required
                  value={passLogin}
                  onChange={(e) => setPassLogin(e.target.value)}
                />
              </div>
              <div className="inputLoginForm_container">
                <input
                  className="input_container submitButton"
                  type="submit"
                  value={useChangeLang("main.loginLayout.formLogin.button_text")}
                />
              </div>
            </form>
          </div>

          <div className="changeFormLogin">
            <p>
            {useChangeLang("main.loginLayout.formLogin.changeModal_text")}
              <span
                className="moveOverlayButton"
                onClick={setMoveOverlayHandler}
              >
                {useChangeLang("main.loginLayout.formLogin.changeModal_button_text")}
              </span>
            </p>
          </div>
        </div>
        <div
          className={`singUp_container${
            moveOverlay ? "_show" : "_hidden"
          } singUpDesktop`}
        >
          <h2 className="titleForm">{useChangeLang("main.loginLayout.formRegister.title")}</h2>
          
          <p
            ref={errRef}
            className={isError ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
          <FontAwesomeIcon className="iconError" icon={faTimes} /> {errorMsg}
          </p>
          <div className="formLogin_container registerBox">

            <form onSubmit={handleSubmitRegister}>
              <div className="inputLoginForm_container registerForm">
                <label htmlFor="username" className="labelRegister">
                {useChangeLang("main.loginLayout.formRegister.user_label")}
                  <span className={validUser ? "validUserIcon" : "hideIcon"}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  <span
                    className={
                      validUser || !usernameRegister
                        ? "hideIcon"
                        : "NotValiduserIcon"
                    }
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input
                  className="inputContact"
                  placeholder={useChangeLang("main.loginLayout.formRegister.user_placeholder")}
                  ref={userRef}
                  autoComplete="off"
                  id="username"
                  type="text"
                  required
                  aria-invalid={validUser ? "false" : "true"}
                  aria-describedby="uidnote"
                  value={usernameRegister}
                  onChange={(e) => setUsernameRegister(e.target.value)}
                  onFocus={() => setUserFocus(true)}
                  onBlur={() => setUserFocus(false)}
                />
                <p
                  id="uidnote"
                  className={
                    userFocus && usernameRegister && !validUser
                      ? "guideValidUser"
                      : "disableGuideValidUser"
                  }
                >
                  {useChangeLang("main.loginLayout.formRegister.user_guide_text")}
                </p>
              </div>
              <div className="inputLoginForm_container registerForm">
                <label htmlFor="mailReg" className="labelRegister">
                {useChangeLang("main.loginLayout.formRegister.email_label")}
                  <span className={validMail ? "validUserIcon" : "hideIcon"}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  <span
                    className={
                      validMail || !mailRegister
                        ? "hideIcon"
                        : "NotValiduserIcon"
                    }
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input
                  className="inputContact"
                  placeholder={useChangeLang("main.loginLayout.formRegister.email_placeholder")}
                  type="email"
                  id="mailReg"
                  required
                  aria-invalid={validMail ? "false" : "true"}
                  aria-describedby="mailFocus"
                  value={mailRegister}
                  onChange={(e) => setMailRegister(e.target.value)}
                  onFocus={() => setMailFocus(true)}
                  onBlur={() => setMailFocus(false)}
                />

                <p
                  id="mailFocus"
                  className={
                    mailFocus && mailRegister && !validMail
                      ? "guideValidUser"
                      : "disableGuideValidUser"
                  }
                >
                  {useChangeLang("main.loginLayout.formRegister.email_guide_text")}
                </p>
              </div>
              <div className="inputLoginForm_container registerForm">
                <label htmlFor="pass" className="labelRegister">
                {useChangeLang("main.loginLayout.formRegister.password_label")}
                  <span className={validPwd ? "validUserIcon" : "hideIcon"}>
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  <span
                    className={
                      validPwd || !passRegister
                        ? "hideIcon"
                        : "NotValiduserIcon"
                    }
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input
                  className="inputContact"
                  id="passw"
                  placeholder={useChangeLang("main.loginLayout.formRegister.password_placeholder")}
                  type="password"
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  required
                  value={passRegister}
                  onChange={(e) => setPassRegister(e.target.value)}
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <p
                  id="pwdnote"
                  className={
                    pwdFocus && !validPwd
                      ? "guideValidUser"
                      : "disableGuideValidUser"
                  }
                >
                  {useChangeLang("main.loginLayout.formRegister.password_guide_text")}
                </p>
              </div>
              <div className="inputLoginForm_container registerForm">
                <label htmlFor="passw" className="labelRegister">
                {useChangeLang("main.loginLayout.formRegister.repeatPassword_label")}
                  <span
                    className={
                      validMatch && matchPassRegister
                        ? "validUserIcon"
                        : "hideIcon"
                    }
                  >
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </span>
                  <span
                    className={
                      validMatch || !matchPassRegister
                        ? "hideIcon"
                        : "NotValiduserIcon"
                    }
                  >
                    <FontAwesomeIcon icon={faTimes} />
                  </span>
                </label>
                <input
                  className="inputContact"
                  placeholder={useChangeLang("main.loginLayout.formRegister.repeatPassword_placeholder")}
                  type="password"
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  required
                  value={matchPassRegister}
                  onChange={(e) => setMatchPassRegister(e.target.value)}
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <p
                  id="confirmnote"
                  className={
                    matchFocus && !validMatch
                      ? "guideValidUser matchPass"
                      : "disableGuideValidUser"
                  }
                >
                  
                  {useChangeLang("main.loginLayout.formRegister.repeatPassword_guide_text")}
                </p>
              </div>
              <div className="inputLoginForm_container">
                <button
                  className={`input_container buttonRegister submitButton ${
                    !validUser || !validMail || !validPwd || !validMatch
                      ? "button_OFF"
                      : "button_ON"
                  }`}
                  disabled={
                    !validUser || !validMail || !validPwd || !validMatch
                      ? true
                      : false
                  }
                >
                  {useChangeLang("main.loginLayout.formRegister.button_submit_text")}
                </button>
              </div>
            </form>
          </div>
          <div className="changeFormLogin">
            <p>
            {useChangeLang("main.loginLayout.formRegister.changeModal_text")}
              <span
                className="moveOverlayButton"
                onClick={setMoveOverlayHandler}
              >
                {useChangeLang("main.loginLayout.formRegister.changeModal_button_text")}
              </span>
            </p>
          </div>
        </div>
        <div className={`overlayLogin_container`}></div>
        <div
          className={`overlayLogin ${
            moveOverlay ? "overlayDesktop_left" : "overlayDesktop_right"
          }`}
        >
          <div className={`${moveOverlay ? "newUser_hidden" : "newUser"}`}>
            <h2>{useChangeLang("main.loginLayout.modalDesktop.login.title")}</h2>
            <p>
            {useChangeLang("main.loginLayout.modalDesktop.login.text")}
            </p>
            <button onClick={setMoveOverlayHandler}>{useChangeLang("main.loginLayout.modalDesktop.login.button_text")}</button>
          </div>
          <div className={`${moveOverlay ? "loginUser" : "loginUser_hidden"}`}>
            <h2>{useChangeLang("main.loginLayout.modalDesktop.register.title")}</h2>
            <p>
            {useChangeLang("main.loginLayout.modalDesktop.register.text")}
            </p>
            <button onClick={setMoveOverlayHandler}>{useChangeLang("main.loginLayout.modalDesktop.register.button_text")}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
