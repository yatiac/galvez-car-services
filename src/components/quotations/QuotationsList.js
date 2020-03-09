import React from "react";
import { Link } from "react-router-dom";
import Topbar from "../layouts/Topbar";

const QuotationsList = () => {
  return (
    <div className="">
      <Topbar title="Cotizaciones" />
      <p></p>
      <div className="row">
        <div className="col">
          
          <Link to="/createQuotation">
            <button className="btn red darken-2">
              <i className="material-icons left">add</i>
              Crear Cotización
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuotationsList;
