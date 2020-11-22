import React from "react";

import LoginForm from "./LoginForm";
import learning from "../assets/learning2-itesm.png";

const LoginDashboard = () => {
  return (
    <>
      <div className="login-container">
        <div className="row">
          <div className="col-8">
            <img className="img-login" src={learning}></img>
          </div>
          <div className="col-4">
            <LoginForm></LoginForm>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDashboard;
