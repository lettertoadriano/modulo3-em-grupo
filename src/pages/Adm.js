import React, { useState } from "react";
import adm from "./Adm.css";

import { useNavigate } from "react-router-dom";

function Adm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  function valida() {
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let form = document.querySelector("form");
    let textForm = document.getElementById("textForm");
    let textEmail = document.getElementById("textEmail");
    let textPassword = document.getElementById("textPassword");

    form.addEventListener("submit", (e) => {
      if (email.value == "" && password.value == "") {
        textForm.textContent = "Você precisa preencher todos os campos!";
      } else if (
        validatorEmail(email.value) === true &&
        validatorPassword(password.value) === true
      ) {
        textForm.textContent = "";
        textEmail.textContent = "";
        textPassword.textContent = "";
        navigate("/Administrador");
      }
      e.preventDefault();
    });

    email.addEventListener("keyup", () => {
      if (validatorEmail(email.value) !== true) {
        textEmail.textContent = "O formato do email deve ser Ex: name@abc.com";
      } else {
        textEmail.textContent = "";
      }
    });

    password.addEventListener("keyup", () => {
      if (validatorPassword(password.value) !== true) {
        textPassword.textContent =
          "Senha deve ter 6 digitos, entre números e caracteres especiais.";
      } else {
        textPassword.textContent = "";
      }
    });

    function validatorEmail(email) {
      let emailPattern =
        /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
      return emailPattern.test(email);
    }

    function validatorPassword(password) {
      let passwordPattern =
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
      return passwordPattern.test(password);
    }
  }

  return (
    <div className='container'>
      <main className='containerAreaGestor'>

        <h1 className='titleAreaGestor'>Área do Administrador</h1>

        <form className='formsAreaGestor'>
          <section className='sectionAreaGestor'>
            <div>
              <label htmlFor="email">E-mail</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id={"email"}
                className='inputEmail'
                type={"text"}
                name={"email"}
                placeholder="Seu melhor e-mail"
              />
              <small id={"textEmail"}></small>
            </div>
            <div>
              <label htmlFor="password">Senha</label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                id={"password"}
                maxLength={6}
                className='inputSenha'
                type={"password"}
                name={"senha"}
                placeholder="Digite sua senha"
              />
              <small id='textPassword'></small>
            </div>
          </section>

          <section className='btnAreaGestor'>
            <button
              onClick={valida}
              type={"submit"}
              className='btnConectese'
            >
              Conecte-se
            </button>
            <small id='textForm'></small>
          </section>
        </form>
      </main>
    </div>
  );
}

export default Adm;