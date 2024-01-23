// Imports

// - - - React - - -
import { createContext, useState } from "react";

export const CartContext = createContext({
  products: [],
  addProduct: () => {},
  removeProduct: () => {},
  clear: () => {},
  isInCart: () => {},
  getCartQuantity: () => {},
  getTotalPrice: () => {},
});
// Esta funcion es el contexto del carrito, con el se puede :
// Agregar un producto,Eliminar un producto, Limpiar el carrito
// Ver el precio total de los productos,Consultar si el item esta en el carrito
// y por ultimo La cantidad de productos del item
export const CartContextProvider = ({ children }) => {
  const [productsList, setProductsList] = useState([]);
  // Funcion para agregar productos
  const addProduct = (productToAdd) => {
    const repeatedItemIndex = productsList.findIndex(
      (item) => item.id === productToAdd.id
    );
    if (repeatedItemIndex !== -1) {
      setProductsList(
        productsList.map((p) =>
          p.id === productToAdd.id
            ? { ...p, quantity: p.quantity + productToAdd.quantity }
            : p
        )
      );
    } else {
      setProductsList([productToAdd, ...productsList]);
    }
  };
  // Funcion para eliminar productos
  const removeProduct = (id) => {
    const indexToRemove = productsList.findIndex((item) => item.id === id);

    if (productsList[indexToRemove]) {
      if (productsList[indexToRemove].quantity === 1) {
        setProductsList(productsList.filter((i) => i.id !== id));
      } else {
        setProductsList(
          productsList.map((p) =>
            p.id === id ? { ...p, quantity: p.quantity - 1 } : p
          )
        );
      }
    } else {
      alert("No se encuentra este producto en su carrito");
    }
  };
  // Funcion para limpiar el carrito
  const clear = () => {
    setProductsList([]);
  };
  // Funcion para consultar si el item esta en el carrito
  const isInCart = (id) => {
    return productsList.map((p) => p.id).indexOf(id) !== -1;
  };
  // Funcion para tomar la cantidad de productos
  const getCartQuantity = () => {
    return productsList.reduce((total, value) => {
      return total + value.quantity;
    }, 0);
  };
  // Funcion para tomar el precio total de los productos
  const getTotalPrice = () => {
    return productsList.reduce((total, value) => {
      return total + value.precio * value.quantity;
    }, 0);
  };
  return (
    <CartContext.Provider
      value={{
        products: productsList,
        addProduct,
        removeProduct,
        clear,
        isInCart,
        getCartQuantity,
        getTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
