import React from "react";
import { useState } from "react";
import { postRequest } from "../services/httpRequest";
// const API_URL = import.meta.env.VITE_API_URL;


function Form() {

  const [input, setInput] = useState({
    fecha: new Date(),
    email: "",
    montoPesos: "",
    descripcion: ""
  })

function handleSubmit(e){
  e.preventDefault();
  postRequest(input)
  
}


  return (
    <div class="mb-3">
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label text-body">
            Correo electrónico
          </label>
          <input
            type="email"
            name="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
        <div class="mb-3">
          <label for="exampleFormControlInput2" class="form-label text-body">
            Monto a enviar en pesos
          </label>
          <input
            type="number"
            name="montoPesos"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Ejemplo: 99,90"
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
          />
        </div>
        <div class="col-auto">
          <button type="submit" class="btn btn-primary mb-3">
           Enviar mi consulta
          </button>
          <a type="button" href="/" class="btn btn-primary mb-3">
           Cerrar
          </a>
        </div>
      </form>
    </div>
  );
}

export default Form;
