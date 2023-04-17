import Banner from "./Banner/Banner"
import NavBar from "./NavBar/NavBar";
import './Home.css'
const Home = () =>{
    return (
        <div className="HomeContainer">
            <NavBar />
            <Banner />
        </div>
    )
}

export default Home;