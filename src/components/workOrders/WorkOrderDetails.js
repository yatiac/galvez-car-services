import React from "react";

function createData(
  id,
  plate,
  name,
  phone,
  email,
  date,
  status,
  maker,
  model,
  color,
  year
) {
  return {
    id,
    plate,
    name,
    phone,
    email,
    date,
    status,
    maker,
    model,
    color,
    year
  };
}

const row = createData(
  "123",
  "650035",
  "Rafael Echeverría",
  "6981-7547",
  "master.152@gmail.com",
  "10 de Febrero 2020",
  "Nueva",
  "Nissan",
  "Almera",
  "Blanco",
  "2011"
);
const WorkOrderDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h4>Orden de Trabajo 123</h4>
        </div>
      </div>
      <div className="white">
        <div className="row">
          <div className="col s12 m6">
            <strong>Fecha</strong>
            <p>{row.date}</p>
          </div>
          <div className="col s12 m6">
            <strong>Estado</strong>
            <p>{row.status}</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h5>Datos del Dueño</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 l4">
            <strong>Nombre</strong>
            <p>{row.name}</p>
          </div>
          <div className="col s12 m6 l4">
            <strong>Teléfono</strong>
            <p>{row.phone}</p>
          </div>
          <div className="col s12 m6 l4">
            <strong>E-Mail</strong>
            <p>{row.email}</p>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 l4">
            <h5>Datos del Vehículo</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s6 l4">
            <strong>Placa</strong>
            <p>{row.plate}</p>
          </div>
          <div className="col s6 l4">
            <strong>Marca</strong>
            <p>{row.maker}</p>
          </div>
          <div className="col s6 l4">
            <strong>Modelo</strong>
            <p>{row.model}</p>
          </div>
          <div className="col s6 l4">
            <strong>Año</strong>
            <p>{row.year}</p>
          </div>
          <div className="col s6 l4">
            <strong>Color</strong>
            <p>{row.color}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkOrderDetails;
