// Imports

// - - - React - - -
import React, { useState } from "react";

// - - - Library React Bootstrap
import Button from "react-bootstrap/Button";

// - - -  Toastify Library - - -
import Toastify from "toastify-js";

// - - - CSS Files - - -
import "./ItemCount.css";
import "toastify-js/src/toastify.css";

// Esta funcion logra añadir al carrito la cantidad que el usuario desea llevar.
export default function Contador({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);
  // Contador +1
  function handlePlusButton() {
    if (count < stock) {
      setCount(count + 1);
    }
  }
  // Contador -1
  function handleMinusButton() {
    if (count > 0) setCount(count - 1);
  }
  return (
    <div className="itemCount">
      <div className="countHandlers">
        <Button bsPrefix="btnLess" onClick={() => handleMinusButton()}>
          -
        </Button>{" "}
        <p className="counter">{count}</p>
        <Button bsPrefix="btnMore" onClick={() => handlePlusButton()}>
          +
        </Button>{" "}
      </div>
      <Button
        bsPrefix="btnAdd"
        onClick={() => {
          count !== 0
            ? Toastify({
                text: `Se han agregado ${count} Productos a tu carrito.`,
                duration: 3000,
                style: {
                  background: "linear-gradient(to right, #8f1919, #d64444)",
                  fontFamily: "Asap",
                },
              }).showToast() &&
              count <= stock &&
              onAdd(count)
            : Toastify({
                text: "Cantidad minima : 1 unidad.",
                duration: 2000,
                style: {
                  background: "linear-gradient(to right, #8f1919, #d64444)",
                  fontFamily: "Asap",
                },
              }).showToast();
        }}
      >
        Agregar al Carrito{" "}
      </Button>{" "}
    </div>
  );
}
