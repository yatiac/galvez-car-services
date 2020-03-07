import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div>
    {/* <div className="sidenav-close">
      <ul id="slide-out" className="sidenav sidenav-fixed grey lighten-1">
        <li>
          <Link to="/" className="brand-logo center">
            <img src={logo} width="100px" height="auto" alt="" />
          </Link>
        </li>
        <li>
          <div className="divider"></div>
        </li>
        <li>
          <Link to="/workOrders">
            <i className="material-icons">build</i>Órdenes de Trabajo
          </Link>
        </li>
        <li>
          <Link to="/quotations">
            <i className="material-icons">library_books</i>Cotizaciones
          </Link>
        </li>
        <li>
          <Link to="/invoices">
            <i className="material-icons">attach_money</i>Facturas
          </Link>
        </li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger left"><i className="material-icons grey-text text-darken-3">double_arrow</i></a>
    </div> */}

    </div>
  );
};

export default SideNav;
