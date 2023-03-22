import React from "react";
import SignIn from "../components/Login/SignIn";
import SignUp from "../components/Login/SignUp";

function Login() {
  return (
    <div class="d-flex flex-column p-5">

      <SignIn />
      <hr /> 
      <h3 class="bg-dark">registrarse</h3>
      <SignUp/>
    </div>
  );
}

export default Login;
