import React from "react";
import logo from "../../logo.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="logo center">
          <Link to="/" className="nav-link center">
            <img src={logo} width="100px" height="auto" alt="" />
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/workOrders" className="nav-link">
            <i className="material-icons">build</i>
            <span className="link-text">Órdenes de Trabajo</span>
          </Link>
        </li>       
        <li className="nav-item">
          <Link to="/quotations" className="nav-link">
            <i className="material-icons">library_books</i>
            <span className="link-text">Cotizaciones</span>
          </Link>
        </li>       
        <li className="nav-item">
          <Link to="/invoices" className="nav-link">
            <i className="material-icons">attach_money</i>
            <span className="link-text">Facturas</span>
          </Link>
        </li>       
      </ul>
    </nav>
  );
};
export default Navbar;
