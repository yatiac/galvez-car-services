import React from "react";
import { Link } from "react-router-dom";

const QuotationsList = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h4>Esta es la lista de cotizaciones</h4>
          <Link to="/createQuotation">
            <button className="btn red darken-2">
              <i class="material-icons left">add</i>
              Crear Cotización
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuotationsList;
