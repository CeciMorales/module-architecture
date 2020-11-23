import React, { useEffect, useState } from "react";

import RoomList from "./RoomList";
import RoomHeader from "./RoomHeader";
import RoomFooter from "./RoomFooter";
import axios from "axios";

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
      <RoomFooter></RoomFooter>
    </>
  );
};

export default RoomDashboard;
