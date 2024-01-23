// Imports

// - - - React - - -
import React, { useContext } from "react";

// - - - React Router DOM - - -
import { Link } from "react-router-dom";

// - - - Custom - - -
import CartItem from "../../components/CartItem/CartItem";
import CartContext from "../../store/CartContext";

// - - - Library React Bootstrap - - -
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

// - - - Toastify Library - - -
import Toastify from "toastify-js";

// - - - AOS Library
import AOS from "aos";

// - - - CSS Files - - -
import "./Cart.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "toastify-js/src/toastify.css";

// Esta funcion muestra los items que lleva el usuario, de parte de CartItem
function Cart() {
  const cartCtx = useContext(CartContext);
  // Inicio de AOS Library
  AOS.init();
  return (
    <div className="CartItemsContainer" data-aos="zoom-out">
      {cartCtx.products.map((p) => (
        <CartItem item={p} key={p.id} />
      ))}
      {cartCtx.products.length !== 0 ? (
        <Card className="totalContainer">
          <Card.Body className="cartFinishcontainer">
            <Card.Text className="finishPriceCart">
              Precio total:${cartCtx.getTotalPrice()}.00
            </Card.Text>
            <Link to="/checkout">
              {""}
              <Button className="btnFinish">Finalizar Compra</Button>{" "}
            </Link>
            <Button
              className="btnClean"
              onClick={() =>
                Toastify({
                  text: "Se ha Limpiado el Carrito.",
                  duration: 2000,
                  style: {
                    background: "linear-gradient(to right, #8f1919, #d64444)",
                    fontFamily: "Asap",
                  },
                }).showToast() && cartCtx.clear()
              }
            >
              Limpiar Carrito
            </Button>{" "}
          </Card.Body>
        </Card>
      ) : (
        <>
          <div className="notProductCardContainer" data-aos="zoom-out">
            <Card className="notProductCard">
              <Card.Title>No hay productos en el carrito</Card.Title>
              <Link to="/">
                <Button variant="dark" className="btnFinish">
                  Ir al inicio
                </Button>{" "}
              </Link>
            </Card>
          </div>
        </>
      )}
    </div>
  );
}
export default Cart;
