// Imports

// - - - React - - -
import React, { useContext } from "react";

// - - - Custom - - -
import CartContext from "../../store/CartContext";
import Bubble from "../Bubble/Bubble";

// - - - Library React Bootstrap - - -
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Badge from "react-bootstrap/Badge";

// - - - Library Toastify
import Toastify from "toastify-js";

// - - - CSS Files - - -
import "bootstrap/dist/css/bootstrap.min.css";
import "toastify-js/src/toastify.css";
import "./CartItem.css";

// Esta funcion muestra los datos tomados por ItemDetail y los coloca en CartItem
function CartItem({ item }) {
  // Context de mi carrito
  const cartCtx = useContext(CartContext);
  return (
    <div className="cartMain">
      <Card style={{ height: "25rem", width: "55rem" }} className="cartItem">
        <CardGroup className="badges">
          <Bubble>
            <Badge className="bubbleQuantity" bg="danger" pill>
              {item.quantity}
            </Badge>
          </Bubble>
          <Bubble
            isButton
            onBubbleClick={() =>
              Toastify({
                text: "Se ha eliminado un producto en tu carrito.",
                duration: 2000,
                style: {
                  background: "linear-gradient(to right, #8f1919, #d64444)",
                  fontFamily: "Asap",
                },
              }).showToast() && cartCtx.removeProduct(item.id)
            }
          >
            <Badge className="bubbleClose" pill bg="danger">
              X
            </Badge>
          </Bubble>
        </CardGroup>
        <Card.Body className="cartContainer">
          <CardGroup>
            <Card.Img
              className="cartImgContainer"
              variant="top"
              src={item?.img}
            />
          </CardGroup>
          <CardGroup className="propContainer">
            <Card.Title className="cartTitleProp">{item?.producto}</Card.Title>
            <CardGroup className="cartPriceProp">
              El precio por unidad es de{" "}
              <Card.Text className="priceCart">${item?.precio}.00</Card.Text>
            </CardGroup>
            <CardGroup className="cartPriceProp">
              Contiene{" "}
              <Card.Text className="priceCart">{item?.quantity}</Card.Text>{" "}
              unidad/es de este producto
            </CardGroup>
          </CardGroup>
        </Card.Body>
      </Card>
    </div>
  );
}
export default CartItem;
