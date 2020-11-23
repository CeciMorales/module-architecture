import React from "react";

import RoomList from "./RoomList";
import RoomHeader from "./RoomHeader";
import RoomFooter from "./RoomFooter";
import RoomModal from "./RoomModal";

const RoomDashboard = () => {
  return (
    <>
      <RoomHeader></RoomHeader>
      <RoomModal></RoomModal>
      <RoomList></RoomList>
      <RoomFooter></RoomFooter>
    </>
  );
};

export default RoomDashboard;
