import { useContext, useState } from "react";
import "../../styles/components/SignUpForm.scss"
import axios from 'axios';
import { NavLink } from "react-router-dom";
import { authenticationContext } from "../../App.js";

function LogInForm({setIsLogInPage}){
    const [user, setUser]=useState({});
    const [isLoggedIn, setIsLoggedIn]= useState(true);

    const [currentUser, setCurrentUser]= useContext(authenticationContext);

    function handleUserDetails(e){
    
        setUser({...user, [e.target.name]: e.target.value})
       
    }

    function handleLogInFormSubmit(e){
        e.preventDefault();

        console.log(user);
        axios.post("http://localhost:4000/auth/login",{
                "email" : user.email,
                "hashedPassword" : user.password
        }).then(function(response){

            if(response.data.message == "Email ou mot de passe incorrect"){
                setIsLoggedIn(false); 
                setCurrentUser(response.data);    

            }else{
                setIsLoggedIn(true);      
                setCurrentUser(response.data.currentUser);
                localStorage.setItem("token", JSON.stringify(response.data.token));
                localStorage.setItem("currentUser", JSON.stringify(response.data.currentUser));

            }

           
           
        }).catch(function(error){
            console.log(error);
        });

    }

    return (
        <div className="SignUp">
            <h2>Connexion</h2>
            <p>{isLoggedIn == true ? "" : "Email ou mot de passe incorrect"}</p>
            <form className="SignUp__form"  onSubmit={handleLogInFormSubmit}>
                <div className="SignUp__form-textFieldBloc"><label>Adresse e-mail</label><input className="SignUp__form-textInputField"  type="text" name="email" onChange={handleUserDetails} placeholder=" Adresse e-mail"/></div>
                <div className="SignUp__form-textFieldBloc"><label>Mot de passe</label><input className="SignUp__form-textInputField"  type="password" name="password" onChange={handleUserDetails} placeholder=" Mot de passe"/></div>
                <button type="submit">Se connecter</button>   
            </form>
            <div>Vous n'avez pas de compte ? <span onClick={() => setIsLogInPage(true)}>S'inscrire</span></div>
        </div>
    );
}

export default LogInForm;