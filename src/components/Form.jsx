import React from "react";
import { useState } from "react";
import { postRequest } from "../services/httpRequest";
import axios from "axios";
import { getChange } from "../services/converApiCall";
const API_URL = import.meta.env.VITE_API_URL;

function Form() {
  const [input, setInput] = useState({
    date: new Date(),
    name: "",
    email: "",
    realesAmount: 0,
    pesosAmount: 0,
    toAccount: "",
    fromAccount: "",
    phone: "",
    description: "",
  });
  // const urlSheets = "https://script.google.com/macros/s/1yr-RsIlJk-VgxY-VmnytbNV2_CuJyeirbaHx5oK9FrXZDYSwryVA1x6L/exec"

  function handleSubmit(e) {
    e.preventDefault();
    postTransaction(input);
  }

  function handleConvert(e) {
    e.preventDefault();
   
   //------ consulta a api externa
   // const resultChange = getChange("BRL", "ARS", input.montoReales);
  }

  async function postTransaction(data) {
    await axios
      .post(API_URL + "/transactions", data)
      .then((response) => {
        const respuesta = response.data.body;
        response.data.status == true && alert("se envio la solicitud de tu transaccion")
        console.log(response.data)
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function handleForm(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };
        setInput(newInput);
  }

  return (
    <div class="bg-light  d-flex justify-content-center mt-4">
      <div class="card border mw-50 w-75 p-3 rounded">
        <form onSubmit={handleSubmit}>
          <div class=" form-group">
            <label for="exampleFormControlInput1" class="form-label text-body">
              Nombre
            </label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Nombre y Apellido"
              onChange={handleForm}
            />
          </div>
          <div class=" form-group">
            <label for="exampleFormControlInput1" class="form-label text-body">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
              onChange={handleForm}
            />
          </div>
          <div class="mb-3 mt-3 border border-secondary rounded">
          <label
              for="exampleFormControlInput2"
              class="form-text text-body m-2 mt-2  pb-0 p-1 text-center  position-absolute bg-white"
            >
              Monto que envia en Reales
            </label>
            <input
              type="number"
              name="realesAmount"
              class="form-control w-75 p-3 m-3"
              id="exampleFormControlInput1"
              placeholder="Ejemplo: 99,90"
              onChange={handleForm}
            />
            <div class="d-flex align-items-center flex-column w-75 m-3 ">
            <label class="form-text text-muted m-1 position-absolute bg-white">
                Monto que deposita en pesos
              </label>
              <input
                class="w-100 p-3 m-3 border rounded border-secondary bg-light"
                type="number"
                name="pesosAmount"
                placeholder="..."
                onChange={handleForm}
                readonly
              />
              <button
                type="button"
                class="btn btn-outline-info rounded-pill btn-sm  m-5 mt-2 mb-1 "
                onClick={handleConvert}
              >
                Verificar
              </button>
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label text-body">
              Numero de Whatsapp
            </label>
            <input
              type="text"
              name="phone"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="+54111234567"
              onChange={handleForm}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label text-body">
              Cuenta en $RS a la que desea transferir
            </label>
            <input
              type="text"
              name="toAccount"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="numero de cuenta: 123553312"
              onChange={handleForm}
            />
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput3" class="form-label text-body">
              Descripcion de su transaccion
            </label>
            <input
              type="text"
              name="description"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Ingrese una descripcion de la transaccion a realizar"
              onChange={handleForm}
            />
          </div>
          <div class="col-auto p-1">
            <button type="submit" class="btn btn-primary  m-2">
              Enviar mi consulta
            </button>
            <a type="button" href="/" class="btn btn-primary m-2">
              Cerrar
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Form;
