import { useState } from "react";
import "./FormContact.css";

const FormContact = () => {
  const [theme, setTheme] = useState("");
  const [from, setFrom] = useState("");
  const [description, setDescription] = useState("");


  const handlerSubmit = (e) =>{
    e.preventDefault()
  }


  return (
    <section>
      <div className="contact_container">
        <h2>Contacto</h2>
        <form onSubmit={handlerSubmit} className="formContact_container">
          <div className="input_container">
            <p>Tema</p>
            <input 
            className="inputContact" 
            type="text" 
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            />
          </div>
          <div className="input_container">
            <p>Contacto</p>
            <input
             className="inputContact" 
             type="text"
             value={from}
             onChange={(e) => setFrom(e.target.value)}
              />
          </div>
          <div className="input_container">
            <p>Descripción</p>
            <textarea
              className="inputContact textareaContact"
              cols={15}
              rows={3}
              placeholder="Escribi tu texto aqui!"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <input className="input_container submitButton" type="submit" />
        </form>
      </div>
    </section>
  );
};

export default FormContact;
