import React, { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../Pagination";
import Swal from "sweetalert2";
const API_URL = import.meta.env.VITE_API_URL;

function DashboardTransactions() {
  const [currentPage, setCurrentPage] = useState(1); //comienza con la pag 1
  const [itemsPerPage, setItemsPerPage] = useState(10); //cada pagina contiene 15 games
  const [transactions, setTransactions] = useState();
  const [busqueda, setBusqueda]=useState({email: ""})
  const allItems = transactions;
  const indexLastItem = currentPage * itemsPerPage; //el idx del ultimo game = a la pagina act * 15
  const indexFirstItem = indexLastItem - itemsPerPage; //el idx del primero es el ultimo - 15
  const currentItems = allItems?.slice(indexFirstItem, indexLastItem); //el resultado de los games actuales desde el idx 1 al ultimo

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const toRender = transactions;
  useEffect(() => {
    getTransactions();
  }, []);

  function handleInputChange(e){
    e.preventDefault();
    const newBusqueda = {...busqueda, email: e.target.value}
    setBusqueda(newBusqueda);
  }
  function handleSubmitSearch(e){
    e.preventDefault();
    if(!busqueda.email){
      Swal.fire("ingrese un email");
    } else {
    getTransactionsByEmail(busqueda)
    setBusqueda({email: ""}); 
    }
    

  }
  async function getTransactionsByEmail(busqueda) {
    await axios
      .get(API_URL + `/transactions/search?email=${busqueda.email}`)
      .then((response) => {
        const respuesta = response.data.body;
        setTransactions(respuesta);
        setCurrentPage(1);
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  async function getTransactions() {
    await axios
      .get(API_URL + "/transactions")
      .then((response) => {
        const respuesta = response.data.body;
        setTransactions(respuesta);
        setCurrentPage(1);
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div class=" mt-5 pt-3">
      <div class="input-group  mb-3 ">
        <button
          class="btn btn-outline-primary"
          type="button"
          id="button-addon1"
          onClick={handleSubmitSearch}
        >
          Buscar
        </button>
        <div class="form-floating">
          <input
            onChange={handleInputChange}
            value={busqueda.email}
            id="floatingInput"
            type="email"
            class="form-control"
            placeholder="ejemplo@email.com"
            aria-label="Example text with button addon"
            aria-describedby="button-addon1"
          />
          <label class="text-secondary fw-light" for="floatingInput">
            Buscar transacciones por email
          </label>
        </div>
      </div>

      <Pagination
        itemsPerPage={itemsPerPage}
        allItems={allItems?.length || 0}
        paginado={paginado}
        currentPage={currentPage}
      />
      <div class=" tablealign-middle  fs-6 h-100 w-100 ">
        <table class="table table-sm table-hover caption-top text-truncate bg-light rounded-3 p-3 mb-3">
          <caption class="fw-light mb-0 pb-0 text-primary">
            List of users
          </caption>

          <thead >
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fecha</th>
              <th scope="col">Nombre</th>
              <th scope="col">Email</th>
              <th scope="col">Reales</th>
              <th scope="col">Pesos</th>
              <th scope="col">Cuenta Dest</th>
              <th scope="col">Cuenta Orig</th>
            </tr>
          </thead>
          <tbody class="fw-light fs-6 lh-md text-truncate">
            {toRender ? (
              toRender?.map((e) => {
                return (
                  <tr key={e.id}>
                    <th scope="row">{e.id}</th>
                    <td>{e.date.slice(0, 10)}</td>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.realesAmount}</td>
                    <td>{e.pesosAmount}</td>
                    <td>{e.toAccount}</td>
                    <td>{e.fromAccount}</td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <th scope="row">-</th>
                <td>-</td>
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
      </div>
    </div>
  );
}

export default DashboardTransactions;
