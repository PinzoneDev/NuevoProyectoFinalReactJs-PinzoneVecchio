// Imports

// - - - React - - -
import React from "react";

// - - - React Router DOM - - -
import { NavLink } from "react-router-dom";

// - - - Custom - - -
import CartWidget from "../CartWidget/CartWidget";

// - - - Library React Bootstrap - - -
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

// - - - CSS Files - - -
import "bootstrap/dist/css/bootstrap.min.css";
import "./NavBar.css";

// Esta funcion muestra el NavBar, con su logo, las diferentes categorias
// a las que se puede navegar y la imagen del carrito
function NavBar() {
  return (
    <div>
      <Navbar bsPrefix={"nav"}>
        <Navbar.Brand>
          <NavLink to={"/"}>
            <img
              className="logoImg"
              src="https://play-lh.googleusercontent.com/byZDtGXJxSbMoFgmJA_RHWU7DCt-Lv6IzOVTJd_uPV3HPb0YQSaAx-fb_VZ1OA8sVj0"
              alt="Imagen del logo"
            />
          </NavLink>
        </Navbar.Brand>
        <Nav className="navLinks">
          <ul className="navList">
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/category/chocolates"}>Chocolates</NavLink>
            </li>
            <li>
              <NavLink to={"/category/obleas"}>Obleas</NavLink>
            </li>
            <li>
              <NavLink to={"/category/alfajores"}>Alfajores</NavLink>
            </li>
            <li>
              <NavLink to={"/category/caramelos"}>Caramelos</NavLink>
            </li>
          </ul>
        </Nav>
        <Nav className={"cartWidget"}>
          <CartWidget />
        </Nav>
      </Navbar>
    </div>
  );
}
export default NavBar;
