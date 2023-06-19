import { useState } from "react";
import "./LoginLayout.css";

import facebook from "../../../assets/img/facebook.svg";
import google from "../../../assets/img/google.svg";
import twitter from "../../../assets/img/twitter.svg";
const LoginLayout = () => {
  const [moveOverlay, setMoveOverlay] = useState(false);
  const [usernameLogin, setUsernameLogin] = useState("");
  const [usernameRegister, setUsernameRegister] = useState("");
  const [passLogin, setPassLogin] = useState("");
  const [passRegister, setPassRegister] = useState("");
  const [mailRegister, setMailRegister] = useState("");

  const setMoveOverlayHandler = () => {
    setMoveOverlay(!moveOverlay);
  };

  return (
    <div className="loginLayout_container">
      <div className="loginForm_container">
        <div className="singIn_container">
          <h2 className="loginTitle">Iniciar sesión</h2>
          <div className="formLogin_container">
            <form action="">
              <div className="inputLoginForm_container">
                <input
                  className="inputContact"
                  placeholder="Ingresar usuario u mail"
                  type="text"
                  required
                  value={usernameLogin}
                  onChange={(e) => setUsernameLogin(e.target.value)}
                />
              </div>
              <div className="inputLoginForm_container">
                <input
                  className="inputContact"
                  placeholder="Contraseña"
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
                  value={"Iniciar Sesión"}
                />
              </div>
            </form>
          </div>
          <div className="sessionIcons_container">
            <p>Tambien podes iniciar sesión utilizando:</p>
            <div className="iconsLogin">
              <div>
                <img src={facebook} alt="" />
              </div>
              <div>
                <img src={google} alt="" />
              </div>
              <div>
                <img src={twitter} alt="" />
              </div>
            </div>
          </div>
          <div className="changeFormLogin">
            <p>
              ¿No estas registrado? registrate{" "}
              <span className="moveOverlayButton" onClick={setMoveOverlayHandler}>
                aqui
              </span>
            </p>
          </div>
        </div>
        <div className={`singUp_container${moveOverlay ? "_show" : "_hidden"} singUpDesktop`}>
          <h2 className="">Registro</h2>
          <div className="formLogin_container">
            <form action="">
              <div className="inputLoginForm_container">
                <input
                  className="inputContact"
                  placeholder="Usuario"
                  type="text"
                  required
                  value={usernameRegister}
                  onChange={(e) => setUsernameRegister(e.target.value)}
                />
              </div>
              <div className="inputLoginForm_container">
                <input
                  className="inputContact"
                  placeholder="Ingresar mail"
                  type="email"
                  required
                  value={mailRegister}
                  onChange={(e) => setMailRegister(e.target.value)}
                />
              </div>
              <div className="inputLoginForm_container">
                <input
                  className="inputContact"
                  placeholder="Ingresar contraseña"
                  type="password"
                  required
                  value={passRegister}
                  onChange={(e) => setPassRegister(e.target.value)}
                />
              </div>
              <div className="inputLoginForm_container">
                <input
                  className="input_container buttonRegister submitButton"
                  type="submit"
                  value={"Registrarse"}
                />
              </div>
            </form>
          </div>
          <div className="changeFormLogin">
            <p>
              Volver al Inicio de sesión{' '}
              <span className="moveOverlayButton" onClick={setMoveOverlayHandler}>
                aqui
              </span>
            </p>
          </div>
        </div>
        <div
          className={`overlayLogin_container`}
        >
        </div>
          <div className={`overlayLogin ${moveOverlay ? "overlayDesktop_left" : "overlayDesktop_right"}`}>
            <div className={`${moveOverlay ? "newUser_hidden" : "newUser"}`}>
              <h2>¿Que hay de nuevo?</h2>
              <p>¿Ya estas registrado en mi sitio web? presiona en el boton de abajo para iniciar sesión!</p>
              <button onClick={setMoveOverlayHandler}>Iniciar Sesión</button>
            </div>
            <div className={`${moveOverlay ? "loginUser" : "loginUser_hidden"}`}>
              <h2>Bienvenido</h2>
              <p>¿Sos nuevo en este sitio? registrate haciendo click en el boton de abajo!</p>
              <button onClick={setMoveOverlayHandler}>Registrarme</button>
            </div>
          </div>
      </div>
    </div>
  );
};

export default LoginLayout;

/*

        <div
          className={`overlayLogin_container overleymove${
            moveOverlay ? "_top" : "_down"
          }`}
        >
        </div>
          <div className="overlay">
            <div className={`${moveOverlay ? "signIn_show" : "singIn_hidden"}`}>
              <h2>welcome back</h2>
              <button onClick={setMoveOverlayHandler}>move</button>
            </div>
            <div className={`${moveOverlay ? "singIn_hidden" : "signIn_show"}`}>
              <h2>new user!</h2>
              <button onClick={setMoveOverlayHandler}>move</button>
            </div>
          </div>

*/
