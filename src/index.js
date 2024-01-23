// Imports

// - - - React - - -
import React from "react";

// - - - React Router DOM - - -
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

// - - - APP - - -
import App from "./App";

// - - - CSS Files - - -
import "./index.css";

// - - - Context Cart - - -
import { CartContextProvider } from "./store/CartContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
