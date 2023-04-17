import './CardInfo.css'

const CardInfo = (props) =>{

  const {text, title, academy, link, textLink} = props;
    return (
       <div>


  <div className="inst__container">
    <div className="box">
      <div className="academy__container">
        <img src={academy}alt="" />
        <h3>{title}</h3>
        <p>{text}</p>
        <a href={link}>{textLink}</a>
      </div>
    </div>
  </div>
       </div>
        

    )
}

export default CardInfo