import React, { useEffect, useState } from "react";

import RoomElement from "./RoomElement";
const RoomList = ({ salones, match }) => {
  let res = match.params;
  useEffect(() => {
    axios(`http://localhost:8000/api/reservaciones/`).then((result) => {
      console.log(result.data);
      setSalones(result.data);
    });
  }, []);
  return (
    <>
      <h3 className="building-title">Edificio CEDETEC </h3>
      <div className="grid-container">
        {salones
          .filter((salon) => salon.edificio.includes("CEDETEC"))
          .map((salon, i) => (
            <RoomElement
              key={i}
              salonId={salon.id_salon}
              edificio={salon.edificio}
              tipo={salon.tipo}
            ></RoomElement>
          ))}
      </div>

      <h3 className="building-title">Edificio Sur</h3>
      <div className="grid-container">
        {salones
          .filter((salon) => salon.edificio.includes("Edificio Sur"))
          .map((salon, i) => (
            <RoomElement
              key={i}
              salonId={salon.id_salon}
              edificio={salon.edificio}
              tipo={salon.tipo}
            ></RoomElement>
          ))}
      </div>

      <h3 className="building-title">Aulas 1</h3>
      <div className="grid-container">
        {salones
          .filter((salon) => salon.edificio.includes("1"))
          .map((salon, i) => (
            <RoomElement
              key={i}
              salonId={salon.id_salon}
              edificio={salon.edificio}
              tipo={salon.tipo}
            ></RoomElement>
          ))}
      </div>

      <h3 className="building-title">Aulas 2</h3>
      <div className="grid-container">
        {salones
          .filter((salon) => salon.edificio.includes("2"))
          .map((salon, i) => (
            <RoomElement
              key={i}
              salonId={salon.id_salon}
              edificio={salon.edificio}
              tipo={salon.tipo}
            ></RoomElement>
          ))}
      </div>

      <h3 className="building-title">Aulas 3</h3>
      <div className="grid-container">
        {salones
          .filter((salon) => salon.edificio.includes("3"))
          .map((salon, i) => (
            <RoomElement
              key={i}
              salonId={salon.id_salon}
              edificio={salon.edificio}
              tipo={salon.tipo}
            ></RoomElement>
          ))}
      </div>

      <h3 className="building-title">Aulas 4</h3>
      <div className="grid-container">
        {salones
          .filter((salon) => salon.edificio.includes("4"))
          .map((salon, i) => (
            <RoomElement
              key={i}
              salonId={salon.id_salon}
              edificio={salon.edificio}
              tipo={salon.tipo}
            ></RoomElement>
          ))}
      </div>
    </>
  );
};

export default RoomList;
