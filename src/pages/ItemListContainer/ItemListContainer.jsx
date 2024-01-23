// Imports

// - - - React - - -
import React, { useEffect, useState } from "react";

// - - - React Router DOM - - -
import { useParams } from "react-router-dom";

// - - - Firebase - - -
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../services/firebase";

// - - - Custom - - -
import ItemList from "../../components/ItemList/ItemList";
import Spinner from "../../components/Spinner/Spinner";

// Esta funcion muestra la totalidad de los items, trae los productos a travez de Firebase
const ItemListContainer = () => {
  const [items, setItem] = useState([]);
  const [load, setLoad] = useState(false);
  const { categoryId } = useParams();

  const traerProductos = async (category) => {
    setLoad(true);
    try {
      const q = category
        ? query(collection(db, "Items"), where("category", "==", category))
        : collection(db, "Items");
      const col = await getDocs(q);
      const result = col.docs.map(
        (doc) => (doc = { id: doc.id, ...doc.data() })
      );
      setItem(result);
      setLoad(false);
    } catch (error) {
      console.log("se ha producido un error en ItemListContainer" + error);
    }
  };
  useEffect(() => {
    traerProductos(categoryId);
  }, [categoryId]);

  return (
    <div className="listContainer">
      <div className="itemsContainer">
        {load ? <Spinner /> : <ItemList items={items} />}
      </div>
    </div>
  );
};
export default ItemListContainer;
