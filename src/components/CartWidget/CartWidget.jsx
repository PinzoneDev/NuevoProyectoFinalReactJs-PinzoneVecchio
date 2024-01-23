// Imports

// - - - React - - -
import React, { useContext } from "react";

// - - - React Router DOM - - -
import { Link } from "react-router-dom";

// - - - Custom - - -
import carritoImg from "./carritoCompras.png";
import Bubble from "../Bubble/Bubble";
import CartContext from "../../store/CartContext";

// - - - Library React Bootstrap - - -
import Badge from "react-bootstrap/Badge";

// - - - CSS Files - - -
import "bootstrap/dist/css/bootstrap.min.css";
import "./CartWidget.css";

// Esta funcion muestra la imagen del carrito en el Navbar con la cantidad de productos que lleva el carrito(cartCtx)
function CartWidget() {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <div className="badgeCart">
        <Bubble>
          <Badge pill>{cartCtx.getCartQuantity()}</Badge>
        </Bubble>
      </div>
      <Link to="/cart">
        <img
          src={carritoImg}
          className="carritoImg"
          alt="Imagen del Carrito"
        ></img>
      </Link>
    </div>
  );
}
export default CartWidget;
