// Imports

// - - - React - - -
import { useState, useContext } from "react";

// - - - React Router DOM - - -
import { Link } from "react-router-dom";

// - - - Custom - - -
import { CartContext } from "../../store/CartContext";
import Spinner from "../Spinner/Spinner";

// - - - Firebase - - -
import db from "../../services/firebase";
import { addDoc, collection } from "firebase/firestore";

// - - - Library React Bootstrap - - -
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/FloatingLabel";

// - - - Library AOS - - -
import AOS from "aos";

// - - - CSS Files - - -
import "./Checkout.css";
import "bootstrap/dist/css/bootstrap.min.css";

// Esta funcion toma datos del usuario y los almacena en buyer
// Luego de haber pedido los datos
// Se muestra el OrderID, por parte de Firebase
// Y da aviso de que la compra se ha realizado con exito.
const Checkout = () => {
  const { products, getTotalPrice, clear } = useContext(CartContext);
  const [load, setLoad] = useState(false);
  const [OrderID, setOrder] = useState(false);
  const [buyer, setBuyer] = useState({});

  // Almacenamiento de datos del usuario
  const { Nombre, Email, Telefono } = buyer;
  const handleChange = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value,
    });
  };

  // Generacion de orden automatica por parte de Firebase
  const generateOrder = async (data) => {
    setLoad(true);
    try {
      const col = collection(db, "Orders");
      const order = await addDoc(col, data);
      setOrder(order.id);
      clear();
      setLoad(false);
    } catch (error) {
      console.log("Error en Checkout", error);
    }
  };

  //  Cuando se Clickee el Submit del Form, se almacenara en Firebase
  //  Una orden de compra con los datos del comprador(buyer)
  //  Los items que decidio llevar (items)
  //  El dia y la fecha la momento de hacer el Submit (dia)
  //  El total de los productos (total)
  const handleSubmit = (e) => {
    e.preventDefault();
    const dia = new Date();
    const items = products.map((e) => {
      return {
        id: e.id,
        producto: e.producto,
        precio: e.precio,
        quantity: e.quantity,
      };
    });
    const total = getTotalPrice();
    const data = { buyer, items, dia, total };
    generateOrder(data);
  };
  // Inicio de AOS Library
  AOS.init();
  return (
    <div className="checkout" data-aos="zoom-out">
      {/* el Spinner se muestra mientras se cargan los datos*/}
      {load ? (
        <Spinner />
      ) : (
        // Esta Card se motrara solo si, No se genero una OrderID
        !OrderID && (
          <Card
            className="CardForm"
            style={{ height: "20rem", width: "30rem" }}
          >
            <Card.Title>
              Completa los Datos para finalizar su compra:
            </Card.Title>
            <Form onSubmit={handleSubmit}>
              <FloatingLabel
                controlId="floatingName"
                label="Nombre"
                className="mb-3"
              >
                <Form.Control
                  value={Nombre}
                  name="Nombre"
                  onChange={handleChange}
                  type="text"
                  placeholder="Nombre"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  value={Email}
                  name="Email"
                  onChange={handleChange}
                  type="email"
                  placeholder="name@example.com"
                  required
                />
              </FloatingLabel>
              <FloatingLabel
                controlId="floatingTel"
                label="Telefono"
                className="mb-3"
              >
                <Form.Control
                  value={Telefono}
                  name="Telefono"
                  onChange={handleChange}
                  type="number"
                  placeholder="Telefono"
                  required
                />
              </FloatingLabel>
              <Form.Control
                className="btn btn-success mb-2 btnCard"
                value={"Finalizar Compra"}
                type="submit"
                required
              />
            </Form>
          </Card>
        )
      )}
      <div>
        {/* Esta card se mostrara luego de haber completado los datos
        y haber generado una OrderID a travez del Submit */}
        {OrderID && (
          <Card
            data-aos="zoom-out"
            className="CardFinish"
            style={{ height: "15rem", width: "35rem" }}
          >
            <CardGroup className="CardFinishContainer">
              <Card.Title className="mb-4">
                Compra Finalizada con Exito!
              </Card.Title>
              <Card.Subtitle className="mb-4">{`Su codigo de compra es: ${OrderID}`}</Card.Subtitle>
              <Link to="/">
                <Button bsPrefix={"btnCard"}>Ir al Inicio</Button>{" "}
              </Link>
            </CardGroup>
          </Card>
        )}
      </div>
    </div>
  );
};
export default Checkout;
