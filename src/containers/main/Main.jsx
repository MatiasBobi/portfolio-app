import Education from "./Education/Education"
import FormContact from "./FormContact/FormContact"
import Knowledge from "./Knowledge/Knowledge"
import Myinfo from "./Myinfo/Myinfo"
import MyApps from "./myApps/myApps"



const Main = () =>{

    return(
        <main className="main_container">

            <Myinfo />
            <Education />
            <Knowledge />
            <MyApps />
            <FormContact />
        </main>
    )
}

export default Main