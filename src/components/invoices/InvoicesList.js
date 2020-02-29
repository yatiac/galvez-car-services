import React from "react";
import { Link } from "react-router-dom";

const InvoicesList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>Todavia no hay Facturas</h4>
        </div>
      </div>
      <Link to="/createInvoice">
        <button className="btn red darken-2">
          <i className="material-icons left">add</i>Crear Factura
        </button>
      </Link>
    </div>
  );
};

export default InvoicesList;
