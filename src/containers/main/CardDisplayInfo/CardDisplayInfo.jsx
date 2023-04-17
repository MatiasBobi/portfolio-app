
import "./CardDisplayInfo.css";
const CardDisplayInfo = (props) => {
  const { icon, title, info, backStyle } = props;

  return (
    <div className="cardInfo_container">
      <div className="card_details">
        <div className="face face1" style={{backgroundColor : backStyle}}>
          <div className="card_content_container">
            <div className="icon_2">
                <img className="svgImage" src={icon} alt="" />
            </div>
          </div>
        </div>
        <div class="face face2">
          <div class="card_content_container">
            <h3>
              {title}
            </h3>
            <ul>
              {info.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="face2"></div>
      </div>
    </div>
  );
};

export default CardDisplayInfo;
