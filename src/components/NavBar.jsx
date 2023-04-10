import React, { useEffect } from "react";
import {useNavigate} from "react-router-dom"
const API_URL = import.meta.env.VITE_API_URL;
import "./Nav.css";

const imageBrand =
  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499399/logo-envialo-ya-branco_zqtta3.png";
const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png";

function NavBar(props) {
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem("token"));


  //   async function logoutRequest() {
  //   await axios
  //     .post(API_URL + "/auth/logout")
  //     .then((response) => {
  //       const respuesta = response.data.body;
  //       console.log(respuesta);
  //       // const parseRespuesta = JSON.stringify(respuesta);
  //       localStorage.removeItem("token")
  //       return respuesta;
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }

  function handleLogout(e){
    e.preventDefault();
   // logoutRequest()
    localStorage.removeItem("token")
navigate("/")
  }

  return (
    <nav id="nav" class="navbar navbar-expand-md p-0 mb-2">
      <div class="container-fluid ">
        <a class="navbar-brand" href="/">
          <img
            src={imageBrand || defaultImage}
            width="auto"
            height="55"
            class="d-inline-block align-text-top"
          />
        </a>
        <button
          class="navbar-toggler me-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse rounded-3 p-3 mt-1" id="navbarNav">
          <ul class="navbar-nav">
            {location.pathname === "/form" ? (
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="/">
                  Volver a Home
                </a>
              </li>
            ) : (
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="/form">
                  Enviar dinero
                </a>
              </li>
            )}
            {user == undefined ? (
              <li class="nav-item">
                <a class="nav-link  text-white" href="/login">
                  Iniciar sesion
                </a>
              </li>
            ) : (<>
              
               <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Area de Cliente
              </a>
            </li>
            <li class="nav-item">
                <a
                  class="nav-link  text-white"
                 onClick={handleLogout}
                 href="/"
                >
                  Cerrar sesion
                </a>
              </li>
             </>
            )}

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
