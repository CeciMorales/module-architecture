import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomDetail from "./RoomDetail";
import RoomHeader from "../rooms/RoomHeader";
import RoomFooter from "../rooms/RoomFooter";

const RoomDetailDashboard = ({ match }) => {
  let res = match.params.id;
  const [salon, setSalon] = useState([]);
  const [horarios, setHorarios] = useState([]);

  useEffect(() => {
    axios(`/api/reservaciones/salon/${res}`).then((result) => {
      setHorarios(result.data);
    });
  }, []);

  useEffect(() => {
    axios(`/api/salones/${res}`).then((result) => {
      console.log(result.data);
      setSalon(result.data);
    });
  }, []);
  return (
    <>
      <RoomHeader></RoomHeader>
      <RoomDetail salon={salon} horarios={horarios}></RoomDetail>
      <RoomFooter></RoomFooter>
    </>
  );
};

export default RoomDetailDashboard;
