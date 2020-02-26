import React from 'react';
import logo from '../../logo.jpg';

const Navbar = () => {    
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <a className="brand-logo left">
                   <img src={logo} width="115px" height="auto" alt=""/>
                </a>
                <ul className="right">
                    <li><a href="#">Órdenes de Trabajo</a></li>
                    <li><a href="#">Cotizaciones</a></li>
                </ul>          
            </div>
        </nav>
    )
}
export default Navbar