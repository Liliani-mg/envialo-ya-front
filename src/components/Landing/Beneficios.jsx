import React from "react";
import "./Beneficios.css"


function Beneficios() {
  return (
    <div class="d-md-flex flex-column-3 justify-content-center mt-4 p-5 pt-0 pb-3">
      <div id="card-beneficios" class="card bg-transparent m-2 w-75 p-2 border border-white rounded-4 border-3">
        <div class="card-body mt-5 pt-5">
          <h5 class="card-title text-uppercase fw-semibold">Transacciones 100% seguras</h5>
          <p class="mb-0 fw-normal">
            Sus datos y su dinero seguros. <br/> Siga todos los movimientos desde su
            panel.
          </p>
        </div>
      </div>
      {/* ---------------------- */}
      <div id="card-beneficios" class="card bg-transparent m-3 w-75 p-2  border border-white rounded-4 border-3">
        <div class="card-body  mt-5 pt-5 ">
          <h5 class="card-title text-uppercase fw-semibold">Atención personalizada</h5>
          <p class="mb-0 fw-normal">
            Hable con personas de verdad! <br/>
            Todas nuestras atenciones son personalizadas y nuestro equipo está preparado para ayudarle en todo momento.
          </p>
        </div>
      </div>
      {/* -------------- */}
      <div id="card-beneficios" class="card bg-transparent m-3 w-75 p-2  border border-white rounded-4 border-2">
        <div class="card-body  mt-5 pt-5 ">
          <h5 class="card-title text-uppercase fw-semibold">Transferencia ultra-rápida</h5>
          <p class="mb-0 fw-normal">
            Usted recibe el dinero convertido en menos de una hora, de forma práctica, segura y lo mejor: con <p class="fw-semibold">TAZA CERO!</p>

          </p>
        </div>
      </div>
    </div>
  );
}

export default Beneficios;
