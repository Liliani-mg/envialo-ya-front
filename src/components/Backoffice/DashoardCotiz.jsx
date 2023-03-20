import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import Swal from "sweetalert2";

const API_URL = import.meta.env.VITE_API_URL;

function DashoardCotiz() {
  const [currentPage, setCurrentPage] = useState(1); //comienza con la pag 1
  const [itemsPerPage, setItemsPerPage] = useState(10); //cada pagina contiene 15 games
  const [cotizations, setCotizations] = useState();
  const [lastcotization, setLastcotization] = useState();
  const [renderizar, setRenderizar] = useState("ultima");
  const [input, setInput] = useState({ valueReal: "" });
  const allItems = cotizations;
  const indexLastItem = currentPage * itemsPerPage; //el idx del ultimo game = a la pagina act * 15
  const indexFirstItem = indexLastItem - itemsPerPage; //el idx del primero es el ultimo - 15
  const currentItems = allItems?.slice(indexFirstItem, indexLastItem); //el resultado de los games actuales desde el idx 1 al ultimo
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // ------------------------------------------------- PAGINADO FIN

  let toRender;
  useEffect(() => {
    getLastCotization();
  }, []);
  // !-------------------------------------------------alert agregar nueva cotizaqcion

  function handleInputChange(e) {
    e.preventDefault();
    const newAgregar = { ...input, valueReal: e.target.value };
    setInput(newAgregar);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!input.valueReal) {
      Swal.fire("Agregue un valor");
    } else {
      postNewCotization(input);
      setInput({ valueReal: "" });
    }
  }
  function handleAddCotization(e) {
    e.preventDefault();
    setRenderizar("agregar");
  }
  async function postNewCotization(props) {
    await axios
      .post(API_URL + "/value", props)
      .then((response) => {
        const respuesta = response.data.body;
        setLastcotization(respuesta);
        if (respuesta.valueReal)
          Swal.fire(
            `Se agregó el valor correctamente: $${respuesta.valueReal}`
          );
        setRenderizar("ultima");
        toRender = lastcotization;
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // --------------------------------------------------------------obtener ultima
  function handleLastCotization(e) {
    e.preventDefault();
    setRenderizar("ultima");
    getLastCotization();
  }
  async function getLastCotization() {
    await axios
      .get(API_URL + "/value")
      .then((response) => {
        const respuesta = response.data.body;
        setLastcotization(respuesta);
        toRender = lastcotization;
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  // ------------------------------------------------------OBTENER TODAS
  function handleAllCotizations(e) {
    e.preventDefault();
    setRenderizar("todas");
    getAllCotizations();
  }
  async function getAllCotizations() {
    await axios
      .get(API_URL + "/value/all")
      .then((response) => {
        const respuesta = response.data.body;
        setCotizations(respuesta);
        toRender = cotizations;
        setCurrentPage(1);
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  // ------------------------------CONDICIONAL COMPONENT
  function ShowResult() {
    if (renderizar === "ultima") {
      return (
        <div>
          <div class="card d-flex-flex-colum p-4 pt-2 pb-2 mb-4 mt-3">
            <table class="table table-sm table-hover caption-top">
              <caption class="fw-light mb-0 pb-0 text-primary">
                Last cotization
              </caption>
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Valor Real-peso</th>
                </tr>
              </thead>
              <tbody class="fw-light fs-6 lh-md text-truncate">
                <tr>
                  <th scope="row">{lastcotization?.id}</th>
                  <td>{lastcotization?.createdAt.slice(0, 10)}</td>
                  <td>{lastcotization?.valueReal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if (renderizar === "todas") {
      return (
        <div class="d-flex flex-column bg-light rounded-3 p-3 mb-3">
          <Pagination
            itemsPerPage={itemsPerPage}
            allItems={allItems?.length || 0}
            paginado={paginado}
            currentPage={currentPage}
          />
          <div class=" tablealign-middle  fs-6 h-100 w-100">
            <table class="table table-sm table-hover caption-top">
              <caption class="fw-light mb-0 pb-0 text-primary">
                List historical cotizations
              </caption>

              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Fecha</th>
                  <th scope="col">Valor Real-peso</th>
                </tr>
              </thead>
              <tbody class="fw-light fs-6 lh-md text-truncate">
                {cotizations ? (
                  cotizations?.map((e) => {
                    return (
                      <tr key={e.id}>
                        <th scope="row">{e.id}</th>
                        <td>{e.createdAt.slice(0, 10)}</td>
                        <td>{e.valueReal}</td>
                      </tr>
                    );
                  })
                ) : (
                  <tr>
                    <th scope="row">-</th>
                    <td>-</td>
                    <td>-</td>
                    <td>-</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if (renderizar === "agregar") {
      return (
        <div class="input-group  mb-3">
          <div class="form-floating">
            <input
              class="form-control"
              placeholder="73.45"
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              type="text"
              value={input.valueReal}
              onChange={handleInputChange}
            />
            <label class="text-secondary fw-light" for="floatingInput">
              {" "}
              Agregar cotización
            </label>
            <button
              class="btn btn-outline-primary"
              type="button"
              id="button-addon1"
              onClick={handleSubmit}
            >
              Agregar
            </button>
          </div>
        </div>
      );
    }
  }

  return (
    <div class="d-flex flex-column">
      <div class="d-flex flex-column-3">
        <div class="d-flex flex-column m-2">
          <button
            class="btn btn btn-light "
            type="button"
            onClick={handleAllCotizations}
          >
            Mostrar
          </button>

          <label class="text-white fst-italic fw-light" for="floatingInput">
            Mostrar todas las cotizaciones
          </label>
        </div>
        <div class="d-flex flex-column  m-2">
          <button
            class="btn btn btn-light"
            type="button"
            onClick={handleLastCotization}
          >
            Mostrar la última
          </button>

          <label class="text-white fst-italic fw-light" for="floatingInput">
            Mostrar última cotizacion
          </label>
        </div>
        <div class="d-flex flex-column  m-2">
          <button
            class="btn btn btn-light"
            type="button"
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleAddCotization}
          >
            Agregar nueva
          </button>
          <label class="text-white fst-italic fw-light" for="floatingInput">
            Agregar nueva cotizacion
          </label>
        </div>
      </div>

      <ShowResult />
    </div>
  );
}

export default DashoardCotiz;
