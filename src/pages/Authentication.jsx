import SignUpForm from "../components/form/SignUpForm";
import LogInForm from "../components/form/LogInForm";
import "../styles/pages/Authentication.scss";
import { useState } from "react";

function Authentication(){

    const [isLogInPage, setIsLogInPage]=useState(true);

    return (
        <div className="Authentication">
            <div className="Authentication__picture"> </div>
            <div className="Authentication__form">
                {isLogInPage == true ?  <SignUpForm setIsLogInPage={setIsLogInPage} /> : <LogInForm setIsLogInPage={setIsLogInPage}/>}
               
            </div>
        </div>    
    )
}

export default Authentication;