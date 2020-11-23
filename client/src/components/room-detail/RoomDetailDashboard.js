import React, { useState, useEffect } from "react";
import axios from "axios";
import RoomDetail from "./RoomDetail";
import RoomHeader from "../rooms/RoomHeader";
import RoomFooter from "../rooms/RoomFooter";

const RoomDetailDashboard = ({ match }) => {
  let res = match.params.id;
  const [salon, setSalon] = useState([]);

  useEffect(() => {
    axios(`http://localhost:8000/api/salones/${res}`).then((result) => {
      console.log(result.data);
      setSalon(result.data);
    });
  }, []);
  return (
    <>
      <RoomHeader></RoomHeader>
      <RoomDetail salon={salon}></RoomDetail>
      <RoomFooter></RoomFooter>
    </>
  );
};

export default RoomDetailDashboard;
