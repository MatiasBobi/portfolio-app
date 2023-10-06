
import "./CardDisplayInfo.css";

const CardDisplayInfo = (props) => {

    const { icon, title, info, backStyle } = props;
  return (
    <div>
      <div className="cardKnowledge_container" style={{backgroundColor:backStyle}}>
        <div className="cardKnowledge_header">
          <div className="cardKnowledge_img-box">
            <img src={icon} alt="" />
          </div>
          <h1 className="cardKnowledge_title">{title}</h1>
        </div>

        <div className="cardKnowledge_content">
        <ul>
          {info.map((information, index) =>{
            return <li key={index}>{information}</li>
          })}
        </ul>
        </div>
      </div>
    </div>
  );
};

export default CardDisplayInfo;
