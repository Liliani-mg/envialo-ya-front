import React from "react";
import SignIn from "../components/Login/SignIn";
import SignUp from "../components/Login/SignUp";
import NavBar from "../components/NavBar";
import "../components/ContainerForm.css"

function Login() {

    const user = JSON.parse(localStorage.getItem("token"))


  return (
    <div id="container-form">
        <NavBar/>
       <div class="d-flex flex-column p-5">

        {
            !user 
            ? <SignIn />
            : <a href="/panelAdmin">Continuar a mi Dashboard</a>
        }
    </div> 
    </div>
    
  );
}

export default Login;
