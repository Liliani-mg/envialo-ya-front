import React from "react";
import "./Nav.css";

const imageBrand =
  "https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499399/logo-envialo-ya-branco_zqtta3.png";
const defaultImage =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Picture_icon_BLACK.svg/1156px-Picture_icon_BLACK.svg.png";

function NavBar() {
  return (
    <nav id="nav" class="navbar navbar-expand-md p-0">
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
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
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

            <li class="nav-item">
              <a class="nav-link  text-white" href="#">
                Registrarse
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">
                Area de Cliente
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
