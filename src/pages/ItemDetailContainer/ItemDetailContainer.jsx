// Imports

// - - - React - - -
import React, { useEffect, useState } from "react";

// - - - React Router DOM - - -
import { useParams } from "react-router-dom";

// - - - Firebase - - -
import { doc, getDoc } from "firebase/firestore";
import db from "../../services/firebase";

// - - - Custom - - -
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import Spinner from "../../components/Spinner/Spinner";

// - - - CSS Files - - -
import "./ItemDetailContainer.css";

// Esta funcion muestra los datos obtenidos de ItemListContainer
function ItemDetailContainer() {
  const [Detail, setItemDetail] = useState([]);
  const [load, setLoad] = useState(false);
  const { id } = useParams();

  const traerDetalleProductos = async (idItem) => {
    setLoad(true);
    try {
      const itemRef = doc(db, "Items", idItem);
      const response = await getDoc(itemRef);
      const result = { id: response.id, ...response.data() };
      setItemDetail(result);
      setLoad(false);
    } catch (error) {
      console.log("se ha producido un error en itemDetailContainer" + error);
    }
  };

  useEffect(() => {
    traerDetalleProductos(id);
  }, [id]);

  return (
    <div className="detailContainerCards">
      {load ? <Spinner /> : <ItemDetail items={Detail} />}
    </div>
  );
}
export default ItemDetailContainer;
