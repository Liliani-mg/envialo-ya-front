import React from "react";
import "./Beneficios.css"

function Beneficios2() {
  return (
    <div id="card-beneficios" class="d-md-flex  flex-column-2">
      <div class="d-flex flex-column m-4 pt-4 w-100">
        <div class="d-flex flex-column justify-content-center w-100">
          <h3>Comience ahora mismo a envier dinero al exterior!</h3>
        
          <ul>
            <li>
            <i class="bi bi-caret-right"></i><h6>Registrese gratuitamente.</h6>
            </li>
            <li>
            <i class="bi bi-caret-right"></i> <h6>Envie dinero online con tasa cero todos los días.</h6>
            </li>
            <li>
            <i class="bi bi-caret-right"></i>  <h6>Siga todas las transacciones desde su panel.</h6>
            </li>
            <li>
            <i class="bi bi-caret-right"></i> <h6>Ambiente 100% seguro.</h6>
            </li>
          </ul>
          <a class="btn btn-primary rounded-pill w-50 " href="/form">
            Enviar dinero
          </a>
        </div>
      </div>
      <div class="d-flex justify-content-center pb-5 pt-5 w-100">
      <img src="https://res.cloudinary.com/dxsvkn4eo/image/upload/v1677499400/bg006_xfm8rl.jpg" class="rounded-circle border border-2  w-50" />
      </div>
    </div>
  );
}

export default Beneficios2;
