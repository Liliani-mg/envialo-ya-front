import React, { useState } from "react";
import { postRequest } from "../services/httpRequest";
//import { getChange } from "../services/converApiCall";

function CardCotiz() {
  const [input, setInput] = useState({
    realesAmount: "",
  });

  function handleChange(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };
    console.log(newInput);
    setInput(newInput);
  }

  function handleConvert(e) {
    e.preventDefault();
    const resultado = postRequest("post", input, "value/exchange")
    console.log(resultado);

   // ---------esta es la ocnsulta a una api ext .50%
    // const resultChange = getChange("BRL", "ARS", input.montoReales);

  }

  return (
    <div
      id="card-cotiz"
      class="container modal d-inline-flex align-items-center w-100"
    >
      <div class="m-4"></div>
      <div class="rounded m-4  d-flex justify-content-center w-100">
        <div class="card bg-white w-100">
          <div class="border border-light rounded p-4 pt-3 pb-2  d-flex align-items-center flex-column">
            <label
              for="exampleFormControlInput2"
              class="form-text text-body m-2 mt-0  pb-0 p-1 text-center  position-absolute bg-white"
            >
              Monto que envia en Reales
            </label>
            <input
              type="string"
              name="realesAmount"
              class="form w-100 p-3 m-3 border rounded border-secondary"
              id="exampleFormControlInput1"
              placeholder="Ejemplo: 99,90"
              onChange={handleChange}
            />
            <div class="d-flex align-items-center flex-column w-100">
              <label class="form-text text-muted m-2 mt-0 pb-0 p-1 text-center  position-absolute bg-white">
                Monto que deposita en pesos
              </label>
              <input
                class="form-control w-100 p-3 m-3 border rounded border-secondary bg-light"
                type="text"
                placeholder="23"
                readonly
              />
              <div class="d-flez flez-row justify-content-center">
                <button
                  type="button"
                  onClick={handleConvert}
                  class="btn btn-outline-info rounded btn-sm m-1 mt-2 mb-1 m-50 "
                >
                  Verificar
                </button>
                <a
                  id="btn-siguiente"
                  class="btn btn-primary rounded m-1 mt-1 h-75 "
                  href="/form"
                 >
                  Siguiente
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardCotiz;
