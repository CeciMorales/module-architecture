import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomHeader from "../rooms/RoomHeader";
import RoomFooter from "../rooms/RoomFooter";
import ReservacionDetail from "./ReservacionDetail";

const RoomDetailDashboard = () => {
  let email = localStorage.getItem("email");
  const [reservaciones, setReservaciones] = useState([]);

  useEffect(() => {
    axios(`http://localhost:8000/api/reservaciones/${email}`).then((result) => {
      setReservaciones(result.data);
    });
  }, []);

  return (
    <>
      <RoomHeader></RoomHeader>
      <ReservacionDetail reservaciones={reservaciones}></ReservacionDetail>
      <RoomFooter></RoomFooter>
    </>
  );
};

export default RoomDetailDashboard;
