import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import './errorpage.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ErrorPage = () =>{
    return (
        <section className="ErrorMsg_container">
            <div>
            <FontAwesomeIcon className="ErrorIconPage" icon={faCircleXmark}/>
            </div>
            <p className="errorMsgStyle">La pagina que solicito no esta disponible o no existe.</p>
        </section>
    )
}

export default ErrorPage;