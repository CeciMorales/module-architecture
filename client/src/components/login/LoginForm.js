import React from "react";
import logoTec from "../assets/logoTec.png";
const LoginForm = () => {
  return (
    <>
      <img className="img-logoTec" src={logoTec}></img>

      <form className="formLogin">
        <p className="p-login">
          Para iniciar sesión ingresa tu usuario y contraseña
        </p>
        <div className="form-group">
          <input
            class="form-control"
            type="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            class="form-control"
            type="password"
            name="password"
            placeholder="Contraseña"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
      <div className="div-names">
        <p>Ahiram Cruz Martínez</p>
        <p>Cecilia Morales Arriaga</p>
        <p>Juan Carlos Pichardo Vicencio</p>
      </div>
    </>
  );
};

export default LoginForm;
