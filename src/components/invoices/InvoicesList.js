import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../layouts/Topbar";

const InvoicesList = () => {
  return (
    <div className="">
      <Topbar title="Facturas" />
      <p></p>
      <div className="row">
        <div className="col">
          <Link to="/createInvoice">
            <button className="btn red darken-2">
              <i className="material-icons left">add</i>Crear Factura
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default InvoicesList;
