import { useState } from "react";
import "./FormContact.css";
import axios from "axios";

// Function to see if the element is visible or not
import { useInView } from "react-intersection-observer";
//

// Icons and Images
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCheckCircle,faTimesCircle,} from "@fortawesome/free-solid-svg-icons";
import ReactWhatsapp from "react-whatsapp";
import whatsappIcon from "../../../assets/img/whatsappIcon.png";
import gmailIcon from "../../../assets/img/gmail.png";
//

// Functions of language change 
import { useChangeLang } from "../../../hooks/useChangeLang";
//

const FormContact = () => {

  // Hook to know if an item is being viewed 
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  //

  // form values - usestates
  const [subject, setSubject] = useState("");
  const [from, setFrom] = useState("");
  const [description, setDescription] = useState("");
  const [mailSentReq, setMailSentReq] = useState(false);
  const [mailSentMsg, setMailSentMsg] = useState("");
  //

  // Server response status
  const [isErrorMail, setIsErrorMail] = useState(false);
  //

  // WhatsApp form
  const [changeForm, setChangeForm] = useState(false);
  const [msgWp, setMsgWp] = useState("");
  //

  //TEXT PLACEHOLDER & Buttons
  const contactPlaceHolder = useChangeLang("main.formContact.contact_placeholder");
  const textAreaPlaceHolder = useChangeLang("main.formContact.textarea_placeholder")
  const subjectPlaceHolder = useChangeLang("main.formContact.subject_placeholder")
  const wpPlaceHolder = useChangeLang("main.formContact.wp_placeholder")
  const textSendWpButton = useChangeLang("main.formContact.button_wp_text")
  const textSubmitButton = useChangeLang("main.formContact.button_text")
  //

  // Server response texts
  const error_send_mail_msg = useChangeLang("main.formContact.error_send_mail_msg");
  const success_msg = useChangeLang("main.formContact.success_msg");
  const error_msg = useChangeLang("main.formContact.error_msg");
  const error_server_off = useChangeLang("main.formContact.error_server_off");

  //

  // submit function (MAIL)
  const handlerSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://localhost:80/mail/sendmail", {
        subject: subject,
        from: from,
        description: description,
      });

      const { isError } = res.data;

      if (isError) {
        setIsErrorMail(true);
        setMailSentMsg(error_send_mail_msg);
      }
      setMailSentMsg(success_msg);
      setMailSentReq(true);
      setTimeout(() => {
        setMailSentReq(false);
        setIsErrorMail(false);
        setMailSentMsg("");
      }, 4000);
    } catch (error) {
      if (error.code === "ERR_NETWORK") {
        setMailSentMsg(error_msg);
      } else {
        setMailSentMsg(error_server_off);
      }
      setMailSentReq(true);
      setIsErrorMail(true);

      setTimeout(() => {
        setMailSentReq(false);
        setIsErrorMail(false);
        setMailSentMsg("");
      }, 6000);
    }
  };

  //



  return (
    <section id="contactform_container">
      <div
        ref={myRef}
        className={`contact_container elementVisibility${
          myElementIsVisible ? "_visible" : "_hidden"
        }`}
        id="contact" >
        <div
          className="button_changeType_contact"
          onClick={() => setChangeForm(!changeForm)}
        >
          {changeForm ? (
            <img src={gmailIcon} alt="" />
          ) : (
            <img src={whatsappIcon} alt="" />
          )}
        </div>
        <h2 className="titleFormContact_container">{useChangeLang("main.formContact.form_title")}</h2>
        {changeForm ? <h3>WhatsApp</h3> : <h3>Mail</h3>}
        {changeForm ? 


        <div className="wpForm_container">
              <input
              className="inputContact"
                type="text"
                value={msgWp}
                required
                placeholder={wpPlaceHolder}
                onChange={(e) => setMsgWp(e.target.value)}
              />
              <ReactWhatsapp className="inputContact whatsappSend_button" number="54-381-649-2029" message={msgWp}>{textSendWpButton}
              </ReactWhatsapp>
            </div>
        
          : 
            
            <div className="mailForm_container">
              <form onSubmit={handlerSubmit} className="formContact_container">
              <div className="input_container">
                <input
                  className="inputContact"
                  placeholder={subjectPlaceHolder}
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
                  placeholder={contactPlaceHolder}
                  value={from}
                  onChange={(e) => setFrom(e.target.value)}
                />
              </div>
              <div className="input_container">
                <textarea
                  className="inputContact textareaContact"
                  cols={15}
                  rows={3}
                  placeholder={textAreaPlaceHolder}
                  value={description}
                  required
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              
              <input
                    className="input_container submitButton"
                    type="submit"
                    value={textSubmitButton}
                  />
                  </form>
            </div>
          }

        
        <div
          className={`mailMessage_container_${mailSentReq ? "show" : "hidden"}`}
        >
          <div className="msg_container">
            {isErrorMail ? (
              <FontAwesomeIcon
                className="msgIcon errorCheck"
                icon={faTimesCircle}
              />
            ) : (
              <FontAwesomeIcon className="msgIcon" icon={faCheckCircle} />
            )}
            <p>{mailSentMsg}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormContact;
