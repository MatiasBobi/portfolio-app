
import "./CardDisplayInfo.css";

const CardDisplayInfo = (props) => {

    const { icon, title, info, backStyle } = props;
  return (
    <div>
      <div class="cardKnowledge_container" style={{backgroundColor:backStyle}}>
        <div class="cardKnowledge_header">
          <div class="cardKnowledge_img-box">
            <img src={icon} alt="" />
          </div>
          <h1 class="cardKnowledge_title">{title}</h1>
        </div>

        <div class="cardKnowledge_content">
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
