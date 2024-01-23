// Imports

// - - - React - - -
import React, { useState, useContext } from "react";

// - - - React Router DOM - - -
import { Link } from "react-router-dom";

// - - - Custom - - -
import CartContext from "../../store/CartContext";

// - - - Library React Bootstrap - - -
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

// - - - Toastify Library - - -
import Toastify from "toastify-js";

// - - - CSS Files - - -
import "bootstrap/dist/css/bootstrap.min.css";
import "toastify-js/src/toastify.css";
import "./Item.css";

// - - - Fontawesome Library - - -
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

// Esta funcion da estructura al item, dandole propiedades del mismo
// Y colocando los datos dentro de la Card
function Item({ id, producto, precio, img, rating }) {
  const [count] = useState(1);

  const cartCtx = useContext(CartContext);
  function onAdd(quantityToAdd) {
    cartCtx.addProduct({ quantity: quantityToAdd, id, producto, precio, img });
  }

  return (
    <div id={id} className="itemCountain">
      <Card style={{ width: "18rem" }} bsPrefix={"Card"}>
        <Card.Header>
          <Card.Img className="imgCard" variant="top" src={img} />
        </Card.Header>
        <Card.Body className="CardBody">
          <Card.Title className="tituloCard">{producto}</Card.Title>
          <CardGroup bsPrefix="CardMid">
            <Card.Text bsPrefix={"priceCard"}>${precio}.00</Card.Text>
            <Card.Text className="rating">
              <FontAwesomeIcon icon={faStar} />
              {rating}
            </Card.Text>
          </CardGroup>
          <CardGroup bsPrefix="CardBottom">
            <Link to={"/item/" + id}>
              <Button bsPrefix={"btnCard"}>Ver Detalles</Button>
            </Link>
            <Button
              bsPrefix="btnAddList"
              onClick={() => {
                Toastify({
                  text: "Se ha agregado un producto a tu carrito.",
                  duration: 2000,
                  style: {
                    background: "linear-gradient(to right, #8f1919, #d64444)",
                    fontFamily: "Asap",
                  },
                }).showToast() && onAdd(count);
              }}
            >
              Comprar{" "}
            </Button>{" "}
          </CardGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Item;
