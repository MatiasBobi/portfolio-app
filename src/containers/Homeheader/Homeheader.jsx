import Banner from "./Banner/Banner"
import NavBar from "./NavBar/NavBar";
import './Homeheader.css'
const Homeheader = () =>{
    return (
        <header className="HomeContainer">
            <NavBar />
            <Banner />
        </header>
    )
}

export default Homeheader;