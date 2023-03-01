import React from "react";
import axios from "axios";
import { getRequest } from "../services/httpRequest";
import { useState, useEffect } from "react";

const API_KEY = import.meta.env.VITE_API_KEY_SHEETS;
const ID = import.meta.env.VITE_ID_SHEETS;

const values = "A2:AZ100";
// url
const url = `https://content-sheets.googleapis.com/v4/spreadsheets/${ID}/values/${values}?access_token=${API_KEY}&key=${API_KEY}`;

function PanelAdmin() {
  const [value, setValue] = useState({});

  // const responseSheet = getRequest(url)
  let responseApi;
  async function responseSheet() {
    await axios.get(url).then((res) => {
      console.log(res.data.values);
      let responseApi = res.data.values;
      setValue(responseApi);
    });
  }

  useEffect(() => {
    responseSheet();
  }, []);
  const arrayValue = Object.values(value);
  console.log("===========", arrayValue);
  return (
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">id</th>
          <th scope="col">Monto en Pesos</th>
          <th scope="col">Monto en Reales</th>
          <th scope="col">cuenta origen</th>
          <th scope="col">cuenta destino</th>
          <th scope="col">fecha</th>
          <th scope="col">email</th>
          <th scope="col">descripcion</th>
        </tr>
      </thead>
      <tbody>
        {arrayValue ? (
          arrayValue?.map((e, i) => (
            <tr key={i}>
              <th scope="row">{e[0]}</th>

              <td>{e[1]}</td>
              <td>{e[2]}</td>
              <td>{e[3]}</td>
              <td>{e[4]}</td>
              <td>{e[5]}</td>
              <td>{e[6]}</td>
              <td>{e[7]}</td>
            </tr>
          ))
        ) : (
          <tr>
            <th scope="row">-</th>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
            <td>-</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default PanelAdmin;
