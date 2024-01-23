// Imports

// - - - React - - -
import React from "react";

// - - - Custom - - -
import Item from "../Item/Item";

// - - - CSS Files - - -
import "./ItemList.css";

// - - - AOS Library - - -
import AOS from "aos";

// Esta funcion mapea los items y a cada uno se le asigna propiedades
function ItemList({ items }) {
  // Inicio de AOS library
  AOS.init();
  return (
    <div className="itemList" data-aos="zoom-in">
      {items.map((item) => {
        return (
          <Item
            key={item.id}
            producto={item.producto}
            precio={item.precio}
            id={item.id}
            img={item.img}
            stock={item.dataStock}
            rating={item.rating}
          />
        );
      })}
    </div>
  );
}

export default ItemList;
