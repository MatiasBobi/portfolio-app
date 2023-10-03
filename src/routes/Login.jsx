
import { ToastContainer } from "react-toastify";
import NavBar from "../containers/Homeheader/NavBar/NavBar";
import Footer from "../containers/footer/Footer";
import LoginLayout from "../containers/main/LoginLayout/LoginLayout";
import 'react-toastify/dist/ReactToastify.css'


const Login = () =>{
    return(
    <div>

        <ToastContainer />
        <NavBar />
        <LoginLayout />
        <Footer />
    </div>
    )
}

export default Login;