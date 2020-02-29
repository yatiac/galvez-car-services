import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sidenav-close">
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
            <i className="material-icons">local_atm</i>Cotizaciones
          </Link>
        </li>
      </ul>
      <a href="#" data-target="slide-out" className="sidenav-trigger left"><i className="material-icons grey-text text-darken-3">double_arrow</i></a>
    </div>
  );
};

export default SideNav;