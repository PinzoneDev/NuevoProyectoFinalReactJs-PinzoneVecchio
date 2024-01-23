// Imports

// - - - React - - -
import React, { useContext } from "react";

// - - - React Router DOM - - -
import { Link } from "react-router-dom";

// - - - Custom - - -
import Contador from "../ItemCount/ItemCount";
import CartContext from "../../store/CartContext";

// - - - CSS Files - - -
import "./ItemDetail.css";
import "bootstrap/dist/css/bootstrap.min.css";

// - - - Library React Bootstrap - - -
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";

// - - - Fontawesome Library - - -
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";

// - - - AOS Library - - -
import AOS from "aos";

// Esta funcion muestra la estructura del detalle del item al que se ha clickeado en ItemListContainer
// Dando lugar a una descripcion del producto
// Tambien se puede agregar varios productos al carrito a travez del Contador
// Como ultimo se puede ir al carrito para ver los productos que lleva
function ItemDetail({ items }) {
  const cartCtx = useContext(CartContext);
  function onAdd(quantityToAdd) {
    cartCtx.addProduct({ quantity: quantityToAdd, ...items });
  }
  // Inicio de AOS Library
  AOS.init();
  return (
    <div id={items?.id} className="ItemDetailCard" data-aos="zoom-out">
      <Card style={{ height: "35rem", width: "55rem" }} bsPrefix={"CardDetail"}>
        <Card.Img src={items?.img} bsPrefix={"ImgItemDetail"} />
        <Card.Body className={"CardDetailBody"}>
          <CardGroup className="right">
            <Card.Title className="titleCardDetail">
              {items?.producto}
            </Card.Title>
            <Card.Text className="descriptionCardDetail">
              {items?.descripcion}
            </Card.Text>
            <CardGroup className="PriceAndRating">
              <Card.Text className="ratingDetail">
                <FontAwesomeIcon icon={faStar} />
                {items?.rating}
              </Card.Text>
              <Card.Text className="priceCardDetail">
                ${items?.precio}
              </Card.Text>
            </CardGroup>
          </CardGroup>
          <CardGroup className="countAndBtnbBuy">
            <Contador onAdd={onAdd} initial={0} stock={items?.dataStock} />
            <Link to="/cart">
              <Button bsPrefix={"btnBuy"}>Ir al carrito</Button>
            </Link>
          </CardGroup>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ItemDetail;
