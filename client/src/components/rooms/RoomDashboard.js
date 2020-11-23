import React, { useEffect, useState } from "react";
import RoomList from "./RoomList";
import RoomHeader from "./RoomHeader";
import RoomFooter from "./RoomFooter";
import axios from "axios";
import RoomModal from "./RoomModal";

const RoomDashboard = () => {
  const [salones, setSalones] = useState([]);

  useEffect(() => {
    axios(`http://localhost:8000/api/salones`).then((result) => {
      console.log(result.data);
      setSalones(result.data);
    });
  }, []);

  return (
    <>
      <RoomHeader></RoomHeader>
      <RoomList className="dashboard-background" salones={salones}></RoomList>
      <RoomModal></RoomModal>
      <RoomFooter></RoomFooter>
    </>
  );
};

export default RoomDashboard;
