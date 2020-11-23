import React, { useEffect, useState } from "react";

const ReservacionDetail = ({ reservaciones }) => {
  return (
    <>
      <div className="card">
        <h5 className="card-header">Mis Reservaciones</h5>
        <div className="card-body">
          <div className="row">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Día</th>
                  <th scope="col">Mes</th>
                  <th scope="col">Año</th>
                  <th scope="col">Hora Inicio</th>
                  <th scope="col">Hora Fin</th>
                  <th scope="col">Motivo</th>
                  <th scope="col">Estatus</th>
                </tr>
              </thead>
              <tbody>
                {reservaciones.map((reservacion) => (
                  <tr
                    className={
                      reservacion.estado == "Aprobado"
                        ? "table-success"
                        : "table-danger"
                    }
                  >
                    <td scope="row">{reservacion.dia}</td>
                    <td>{reservacion.mes}</td>
                    <td>{reservacion.anio}</td>
                    <td>{reservacion.horaInicio}</td>
                    <td>{reservacion.horaFin}</td>
                    <td>{reservacion.razon}</td>
                    <td>{reservacion.estado}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReservacionDetail;
