import React from "react";
import { Link } from "react-router-dom";

const RoomElement = ({ salonId, edificio, tipo }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Salón: {salonId}</h5>
          <h6 className="card-subtitle mb-2 text-muted">
            Edificio: {edificio}{" "}
          </h6>
          <p className="card-text">Tipo de salón: {tipo}</p>
          <Link to={`/rooms/${salonId}`}>Ver Detalles</Link>
        </div>
      </div>
    </>
  );
};

export default RoomElement;
