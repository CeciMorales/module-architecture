import React, { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from "axios";

const RoomModal = () => {
  const [show, setShow] = useState(false);
  const [reserva, setReserva] = useState({
    user_email: localStorage.getItem("email"),
    id_salon: "",
    dia: "",
    mes: "",
    anio: "",
    horaInicio: "",
    horaFin: "",
    razon: "",
    estado: "Pendiente",
  });
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/reservaciones/createReservacion", {
        user_email: reserva.user_email,
        id_salon: reserva.id_salon,
        dia: reserva.dia,
        mes: reserva.mes,
        anio: reserva.anio,
        horaInicio: reserva.horaInicio,
        horaFin: reserva.horaFin,
        razon: reserva.razon,
        estado: reserva.estado,
      })
      .then((response) => {
        console.log(response);
      });
  };
  const handleChange = (event) => {
    setReserva({ ...reserva, [event.target.name]: event.target.value });
    console.log("handle change", reserva);
  };

  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        className="text-center mt-3"
      >
        Solicitar salón
      </Button>

      <Modal show={show} onHide={handleClose}>
        <form onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title>Solicitud de salón</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row mt-2">
              <div className="col ">
                <p>Salón:</p>
              </div>

              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="id_salon"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <p>Edificio:</p>
              </div>

              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="edificio"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <p>Hora inicio:</p>
              </div>

              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="horaInicio"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <p>Hora fin:</p>
              </div>

              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="horaFin"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <p>Día:</p>
              </div>

              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="dia"
                  onChange={handleChange}
                ></input>
              </div>
            </div>

            <div className="row mt-2">
              <div className="col">
                <p>Mes:</p>
              </div>

              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="mes"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <p>Año:</p>
              </div>

              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="anio"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col">
                <p>Razón:</p>
              </div>

              <div className="col">
                <input
                  className="form-control"
                  type="text"
                  name="razon"
                  onChange={handleChange}
                ></input>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
};

export default RoomModal;

//salon, edificio hora inicio, hora fin, dia, mes, año, razon
