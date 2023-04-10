import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = import.meta.env.VITE_API_URL;

function SignIn() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    signInRequest(input);
  }
  function handleChange(e) {
    e.preventDefault();
    const newInput = {
      ...input,
      [e.target.name]: e.target.value,
    };
    setInput(newInput);
  }

  async function signInRequest(props) {
    await axios
      .post(API_URL + "/auth/signIn", props)
      .then((response) => {
        const respuesta = response.data.body;
        const parseRespuesta = JSON.stringify(respuesta);
        localStorage.setItem("token", parseRespuesta);
        console.log(respuesta);
        navigate("/panelAdmin")
        return respuesta;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const imagen =
    "https://cdni.iconscout.com/illustration/premium/thumb/login-page-4468581-3783954.png";

  return (
    <div class="d-sm-flex flex-md-row justify-content-center mt-5">
      <div class="d-flex center img-fluid ">
        <img
          src={imagen}
          class="img-fluid"
          alt="..."
          height={500}
          width={500}
        />
      </div>
      <div class="d-flex justify-content-center card border-0 mt-4 mw-50 bg-transparent ">
        <form onSubmit={handleSubmit}>
          <div class=" form-group">
            <label for="exampleFormControlInput5" class="form-label text-body">
              Correo electrónico
            </label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleFormControlInput4"
              placeholder="name@example.com"
              onChange={handleChange}
            />
          </div>
          <div class=" form-group">
            <label
              for="exampleFormControlInput1"
              class=" mt-4 form-label text-body"
            >
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              class="form-control"
              id="exampleFormControlInput1"
              onChange={handleChange}
            />
          </div>

          <div class="d-flex flex-column ">
            <button type="submit" class="btn btn-primary  m-2">
              Iniciar sesion
            </button>
            <a class="text-light fs-6 fw-normal" href="/registro">No tenes cuenta? Registrate</a>
            <p class="fs-6 fw-normal">o inicia sesion con Google</p>
            <div class="btn-group m-1" role="group" aria-label="Basic example">
              <button type="button" class="btn btn-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-google m-4 mt-0 mb-0 ms-1"
                  viewBox="0 0 16 16"
                >
                  <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                </svg>{" "}
               Google
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignIn;
