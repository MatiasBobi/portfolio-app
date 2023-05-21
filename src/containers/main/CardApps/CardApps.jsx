import './CardApps.css'
const CardApps = (props) =>{

    const {img, imgAlt,  title, text, linkApp, linkRepo} = props;
    return (
        <div className='cardApp_container'>
            <div className='cardApp_img'>
                <img src={img} alt={imgAlt} />
            </div>
            <div className="cardApp_content">
                <h3>{title}</h3>
                <p>{text}</p>
                <div className='cardApp_buttons'>
                    <a href={linkApp}><button>Run App</button></a>
                    <a href={linkRepo}><button>Repository</button></a>
                </div>
            </div>
        </div>
    )
}

export default CardApps