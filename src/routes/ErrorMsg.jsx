import { Outlet } from "react-router-dom";
import Errorpage from "../containers/ErrorPage/Errorpage";
import NavBar from "../containers/Homeheader/NavBar/NavBar";
import Footer from "../containers/footer/Footer";



const ErrorMsg = () =>{
    return(
    <div>
        <NavBar />
        <Errorpage />
        <Footer />
    </div>
    )
}

export default ErrorMsg;