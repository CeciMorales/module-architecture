import React, { useEffect, useState } from "react";
import RoomList from "./RoomList";
import RoomHeader from "./RoomHeader";
import RoomFooter from "./RoomFooter";
import axios from "axios";
import RoomModal from "./RoomModal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RoomDashboard = () => {
  const [salones, setSalones] = useState([]);
  let usuario = localStorage.getItem("userType");
  useEffect(() => {
    axios(`/api/salones`).then((result) => {
      console.log(result.data);
      setSalones(result.data);
    });
  }, []);
  const logout = () => {
    localStorage.removeItem("userType");
    localStorage.removeItem("email");
  };
  return (
    <>
      <RoomHeader></RoomHeader>
      {usuario != "alumno" ? <RoomModal></RoomModal> : null}
      {usuario != "alumno" ? (
        <Link to="/reservaciones">
          <br></br>
          <br></br>
          <Button> Mis reservaciones </Button>
        </Link>
      ) : null}
      <br></br>
      <br></br>
      <Link to="/">
        <Button onClick={logout} className="btn-danger">
          Logout
        </Button>
      </Link>
      <RoomList className="dashboard-background" salones={salones}></RoomList>
      <RoomFooter></RoomFooter>
    </>
  );
};

export default RoomDashboard;
