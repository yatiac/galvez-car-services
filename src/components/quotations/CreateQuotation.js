import React from "react";

const CreateQuotation = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>Crear Cotización</h4>
        </div>
      </div>
      <form className="white">
        <div className="row">
          <h5>Datos de la Cotización</h5>
        </div>
        <div className="row">
          <div className="col s6">
            <label htmlFor="date">Fecha</label>
            <input type="text" className="datepicker" id="date" />
          </div>
        </div>
        <div className="row">
          <div className="col s12">
            <h5>Datos del Cliente</h5>
          </div>
        </div>
        <div className="row">
          <div className="col s12 m6 l4">
            <label htmlFor="name">Nombre</label>
            <input type="text" id="name" />
          </div>
          <div className="col s12 m6 l4">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="col s12 m6 l4">
            <label htmlFor="phone">Teléfono</label>
            <input type="text" id="phone" />
          </div>
        </div>
        <div className="row">
          <div className="col right">
            <button className="btn red darken-2">
              <i class="material-icons right">send</i>
              Enviar
            </button>
          </div>
          <div className="col right">
            <button className="btn red darken-2">
              <i className="material-icons left">picture_as_pdf</i>
              Generar PDF
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateQuotation;
