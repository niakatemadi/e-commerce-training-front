import { useState, useContext } from "react";
import "../../styles/components/SignUpForm.scss"
import axios from 'axios';
import { authenticationContext } from "../../App.js";

function SignUpForm({setIsLogInPage}){
    const [newUser, setNewUser]=useState({});
    const [emailAlreadyUsed, setEmailAlreadyUsed]=useState(false);

    const [currentUser, setCurrentUser]= useContext(authenticationContext);
    console.log('heey');
    console.log(currentUser);
    console.log('heey');

    function handleNewUserDetails(e){

        setNewUser({...newUser, [e.target.name]: e.target.value})
       
    }

    function handleRegisterFormSubmit(e){
        e.preventDefault();
        console.log(newUser);
        axios.post("http://localhost:4000/auth/signup",{
                "_id" : newUser.address,
                "firstName": newUser.email,
                "lastName": newUser.lastName,
                "email" : newUser.email,
                "hashedPassword" : newUser.password,
                "gender" : newUser.gender
        }).then(function(response){

            if(response.data.message == "email already used"){
               return setEmailAlreadyUsed(true);
            }

            setCurrentUser(response.data.currentUser);

            localStorage.setItem("token", JSON.stringify(response.data.token));
            localStorage.setItem("currentUser", JSON.stringify(response.data.currentUser));

        }).catch(function(error){
            console.log(error);
        });

    }


    return (
        <div className="SignUp">
            <h2>Inscription</h2>
            <p>{emailAlreadyUsed == true ? "Email déja utilisé" : ""}</p>
            <form className="SignUp__form"  onSubmit={handleRegisterFormSubmit}>
                <div className="SignUp__form-civilityBloc">
                    <p>Civilité :</p>
                    <label><input className="SignUp__form-civilityField" type="radio" name="gender" value="monsieur" onChange={handleNewUserDetails}/>Monsieur</label>
                    <label><input className="SignUp__form-civilityField" type="radio" name="gender" value="madame" onChange={handleNewUserDetails}/> Madame</label>
                </div>
                <div className="SignUp__form-textFieldBloc"><label>Nom</label><input className="SignUp__form-textInputField" type="text" name="lastName" onChange={handleNewUserDetails} placeholder=" Nom"/></div>
                <div className="SignUp__form-textFieldBloc"><label>Prénom</label><input className="SignUp__form-textInputField"  type="text" name="firstName" onChange={handleNewUserDetails} placeholder=" Prénom"/></div>
                <div className="SignUp__form-textFieldBloc"><label>Adresse e-mail</label><input className="SignUp__form-textInputField"  type="text" name="email" onChange={handleNewUserDetails} placeholder=" Adresse e-mail"/></div>
                <div className="SignUp__form-textFieldBloc"><label>Mot de passe</label><input className="SignUp__form-textInputField"  type="password" name="password" onChange={handleNewUserDetails} placeholder=" Mot de passe"/></div>
                <button type="submit">S'inscrire</button>   
            </form>
            <div>Vous avez déja un compte ? <span onClick={() => setIsLogInPage(false)}>Se connecter</span></div>
        </div>
    );
}

export default SignUpForm;