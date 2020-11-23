import React, { useState, useEffect } from 'react';
import { Button,Modal } from 'react-bootstrap'

const RoomModal = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        console.log("submit");
    }
    
return (
    <>
      <Button variant="primary" onClick={handleShow} className="text-center mt-3">
        Solicitar salón
      </Button>

      <Modal show={show} onHide={handleClose}>
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
                        name="id_salon">

                    </input>
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
                        name="edificio">

                    </input>
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
                        name="horaInicio">

                    </input>
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
                        name="horaFin">

                    </input>
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
                        name="dia">

                    </input>
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
                        name="mes">

                    </input>
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
                        name="anio">

                    </input>
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
                        name="razon">

                    </input>
                </div>
            </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Enviar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
);
};

export default RoomModal;


//salon, edificio hora inicio, hora fin, dia, mes, año, razon