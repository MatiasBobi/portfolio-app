import { Outlet } from "react-router-dom"
import Homeheader from "../containers/Homeheader/Homeheader"
import Footer from "../containers/footer/Footer"
import Main from "../containers/main/Main"

const Home = () =>{
    return(
    <div>
        <Homeheader />
        <Main />
        <Footer />
    </div>
    )
}

export default Home;