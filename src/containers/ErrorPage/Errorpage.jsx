import './errorpage.css'

// Icons
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//

// Functions of language change
import { useChangeLang } from "../../hooks/useChangeLang";
//

const ErrorPage = () =>{
    return (
        <section className="ErrorMsg_container">
            <div>
            <FontAwesomeIcon className="ErrorIconPage" icon={faCircleXmark}/>
            </div>
            <p className="errorMsgStyle">{useChangeLang("errorPage.text")}</p>
        </section>
    )
}

export default ErrorPage;