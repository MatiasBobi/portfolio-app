import { useState } from "react";
import "./FormContact.css";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle} from "@fortawesome/free-solid-svg-icons";
import { useInView } from "react-intersection-observer";

const FormContact = () => {


  const {ref: myRef, inView: myElementIsVisible} = useInView()
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [description, setDescription] = useState("");
  const [mailSentReq, setMailSentReq] = useState(false)
  const [isErrorMail, setIsErrorMail] = useState(false)
  const [mailSentMsg, setMailSentMsg] = useState('')
  const handlerSubmit = async (e) =>{
    e.preventDefault()

    try {
      const res = await axios.post("http://localhost:80/mail/sendmail", {
        subject: subject,
        from: from,
        description: description
      })

      const { isError, msg } = res.data

      if(isError) {
        setIsErrorMail(true)
        setMailSentMsg(msg)
      }
      setMailSentMsg(msg)
      setMailSentReq(true)
      setTimeout(() => {
        setMailSentReq(false)
        setIsErrorMail(false)
        setMailSentMsg('')
      }, 4000);

    } catch (error) {
      if(error.code === 'ERR_NETWORK') {
        setMailSentMsg('Error al intentar conectar con el servidor')
      } else {
        setMailSentMsg(error.response.data[0].msg)
      }
      setMailSentReq(true)
      setIsErrorMail(true)

      setTimeout(() => {
        setMailSentReq(false)
        setIsErrorMail(false)
        setMailSentMsg('')
      }, 6000);
    }

  }




  return (
    <section>
      <div ref={myRef} className={`contact_container elementVisibility${myElementIsVisible ? '_visible' : '_hidden'}`}>
        <h2>Contacto</h2>
        <form onSubmit={handlerSubmit} className="formContact_container">
          <div className="input_container">
            <input 
            className="inputContact" 
            placeholder="Tema"
            type="text" 
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            />
          </div>
          <div className="input_container">
            <input
             className="inputContact" 
             type="email"
             required
             placeholder="Contacto"
             value={from}
             onChange={(e) => setFrom(e.target.value)}
              />
          </div>
          <div className="input_container">
            <textarea
              className="inputContact textareaContact"
              cols={15}
              rows={3}
              placeholder="Escribi tu texto aqui!"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input className="input_container submitButton" type="submit" />
        </form>
        <div className={`mailMessage_container_${mailSentReq ?"show": "hidden"}`}>
            <div className="msg_container">
              {
                isErrorMail ?
                <FontAwesomeIcon className="msgIcon errorCheck" icon={faTimesCircle}/>
                  : 
                <FontAwesomeIcon className="msgIcon" icon={faCheckCircle}/>
              }
            <p>{mailSentMsg}</p>

            </div> 
      </div>
        </div> 

    </section>
  );
};

export default FormContact;
