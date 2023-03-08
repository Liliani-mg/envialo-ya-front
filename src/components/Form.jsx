import React from "react";
import { useState } from "react";
import { postRequest } from "../services/httpRequest";
import axios from "axios";
import { getChange } from "../services/converApiCall";
const API_URL = import.meta.env.VITE_API_URL;

function Form() {
  const [input, setInput] = useState({
    date: new Date(),
    name:"",
    email: "",
    realesAmount: "",
    pesosAmount: "",
    toAccount:"",
    fromAccount:"",
    phone: "",
    description: "",
  });
  // const urlSheets = "https://script.google.com/macros/s/1yr-RsIlJk-VgxY-VmnytbNV2_CuJyeirbaHx5oK9FrXZDYSwryVA1x6L/exec"

  function handleSubmit(e) {
    e.preventDefault();
    postTransaction(input);
  }

 function handleConvert(e){
    e.preventDefault()
     const resultChange = getChange("BRL", "ARS", input.montoReales)

  console.log(resultChange);
  }
 

  async function postTransaction(data) {
    await axios
      .post(API_URL + "/transactions", data)
      .then((response) => {
        const respuesta = response.data.body;
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
    console.log(newInput);
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

          {/* <div class="mb-3 mt-3 border border-secondary rounded">
          <label for="exampleFormControlInput2" class="form-label text-body pb-0 p-3">
            Monto que envia en pesos
          </label>
          <input
            type="string"
            name="montoReales"
            class="form-control w-50 p-3 m-3"
            id="exampleFormControlInput1"
            placeholder="Ejemplo: 99,90"
            onChange={handleForm}
          />
        </div> */}
          <div class="mb-3 mt-3 border border-secondary rounded">
            <label for="exampleFormControlInput2" class="text-body pb-0 p-3">
              Monto que envia en Reales
            </label>
            <input
              type="string"
              name="montoReales"
              class="form-control w-75 p-3 m-3"
              id="exampleFormControlInput1"
              placeholder="Ejemplo: 99,90"
              onChange={handleForm}
            />
            <div class="d-flex flex-row">
              <button
              type="button"
              class="btn btn-outline-info rounded-pill btn-sm  m-5 mt-2 "
              onClick={handleConvert}
            >
              Verificar
            </button>
            <p class="form-text text-muted ">
              El monto que deposita en pesos:{" "}
            </p>{" "}
            <p class="form-text text-muted ">{}</p> 
            </div>
           
          </div>
          <div class="mb-3">
            <label for="exampleFormControlInput2" class="form-label text-body">
              Numero de Whatsapp
            </label>
            <input
              type="text"
              name="telefono"
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
              name="descripcion"
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
