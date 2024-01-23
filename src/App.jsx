// Imports

// - - - React Router DOM - - -
import { Routes, Route } from "react-router-dom";

//  - - - Custom - - -
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./pages/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer";
import Cart from "./pages/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

// - - - CSS Files - - -
import "./app.css";

export default function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Routes">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </div>
  );
}
