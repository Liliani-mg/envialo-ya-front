import React, { useState } from "react";
import { getChange } from "../services/converApiCall";
import "./CardCotiz.css"

function CardCotiz() {
    const [input, setInput] = useState({
        montoReales: ""
    })

    function handleConvert(e){
        e.preventDefault()
         const resultChange = getChange("BRL", "ARS", input.montoReales)
    
      console.log(resultChange);
      }
     

  return (
    <div id="card-cotiz" class="d-flex flex-column bg-transparent ">
        <div class="m-4"></div>
        <div class="rounded m-4 d-flex justify-content-center">
      <div class="card bg-white w-100">
        <div class="border border-light rounded p-2">
        <label for="exampleFormControlInput2" class="text-body pb-0 p-1 text-center  position-absolute bg-white">
              Monto que envia en Reales
            </label>
            <input
              type="string"
              name="montoReales"
              class="form w-75 p-3 m-3 border rounded border-secondary"
              id="exampleFormControlInput1"
              placeholder="Ejemplo: 99,90"
             
            />
            <div class="d-flex flex-column">
         
            <label class="form-text text-muted m-2">
              Monto que deposita en pesos:{" "}
            </label>
            <input class="form-control w-25" type="text" placeholder="23" readonly/>
         
            </div>
         
            <button
              type="button"
              onClick={handleConvert}
              class="btn btn-outline-info rounded btn-sm  m-5 mt-5 mb-1 "
             
            >
              Verificar
            </button> 
        </div>
      </div>
    </div>  
    </div>
  
  );
}

export default CardCotiz;
