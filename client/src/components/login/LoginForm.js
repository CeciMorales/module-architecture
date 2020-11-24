import React, { useState } from "react";
import logoTec from "../assets/logoTec.png";
import axios from "axios";
import { Redirect } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState();
  const [errors, setErrors] = useState(false);
  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Se envio");
    await axios
      .post("/api/users/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if (response.status === 200) {
          localStorage.setItem("email", response.data.email);
          localStorage.setItem("userType", response.data.userType);

          console.log(response.data);
          setIsLogin(true);
        } else {
          console.log("maaal");
          setErrors(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrors(true);
      });
  };

  return (
    <>
      <img className="img-logoTec" src={logoTec}></img>

      <form className="formLogin">
        <p className="p-login">
          Para iniciar sesión ingresa tu usuario y contraseña
        </p>
        {errors ? (
          <p className="p-error">La contraseña o email no son correctos</p>
        ) : null}
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            name="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
      <div className="div-names">
        <p>Ahiram Cruz Martínez</p>
        <p>Cecilia Morales Arriaga</p>
        <p>Juan Carlos Pichardo Vicencio</p>
      </div>
      {isLogin ? <Redirect to="/rooms" /> : <Redirect to="/" />}
    </>
  );
};

export default LoginForm;
