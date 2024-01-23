// Imports

// - - - React - - -
import React from "react";

// Esta funcion es utilizada como badge en el sitio, logrando elimimar productos o mostrar su cantidad, etc. Utilizable para otros metodos.
function Bubble({ children, isButton, onBubbleClick }) {
  return (
    <div
      className={`bubble ${isButton ? "bubble-Button" : ""}`}
      onClick={() => isButton & onBubbleClick()}
    >
      {children}
    </div>
  );
}

export default Bubble;
