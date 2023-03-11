import React, { useState } from "react";
import { postRequest } from "../services/httpRequest";
//import { getChange } from "../services/converApiCall";
import axios from "axios";
import "../pages/Landing.css"
const API_URL = import.meta.env.VITE_API_URL;

function CardCotiz() {
  const [input, setInput] = useState({
    realesAmount: "",
    pesosAmount: "",
  });

 const valorPeso = 0.073

  function handleChange(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };
    console.log(newInput);
    setInput(newInput);
  }
  async function resultado(data) {
    await axios
      .post(API_URL + "/value/exchange", data)
      .then((response) => {
        const respuesta = response.data.body;
        console.log(respuesta)
        const newInput = {...input, pesosAmount:respuesta}
        setInput(newInput)
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleConvert(e) {
    e.preventDefault();
      resultado(input);
    // ---------esta es la ocnsulta a una api ext .50%
    // const resultChange = getChange("BRL", "ARS", input.montoReales);
  }

  return (
    <div
     
      class="container-fuid d-inline-flex align-items-center bg-transparent w-75 mt-5 "
    >
     
      <div class="rounded m-3  d-flex justify-content-center w-100 bg-transparent">
        <div  class="card w-100 bg-transparent ">
          <div class="border border-light rounded p-4 pt-3 pb-2  d-flex align-items-center flex-column">
            <h5>1 BRL = {valorPeso} ARS</h5>
            <label
              for="exampleFormControlInput2"
              class="form-text m-2 mt-0  pb-0 p-1 text-center bg-transparent  text-white"
            >
              Monto que envia en Reales
            </label>
            <input
              type="string"
              name="realesAmount"
              class="form w-100 p-3 m-3 border rounded border-white  bg-transparent"
              id="exampleFormControlInput1"
              placeholder="Ejemplo: 99,90"
              onChange={handleChange}
            />
            <div class="d-flex align-items-center flex-column w-100">
              <label class="form-text  text-white  m-2 mt-0 pb-0 p-1 text-center bg-transparent">
                Monto que deposita en Pesos
              </label>
              <input
                class="form-control w-100 p-3 m-3 border rounded border-white bg-transparent"
                type="text"
                placeholder={input.pesosAmount}
                readonly
              />
              <div class="d-flez flez-row justify-content-center">
                <button
                  type="button"
                  onClick={handleConvert}
                  class="btn btn-outline-info rounded m-1 mt-1 mb-1 m-50 p-2 "
                >
                  Cotizar
                </button>
                <a
                  id="btn-siguiente"
                  class="btn btn-primary rounded m-1 mt-1 mb-1 m-50 p-2 "
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
