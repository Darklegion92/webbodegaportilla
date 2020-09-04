import React, { useState } from "react";
import { Row, Col, Modal } from "antd";
import FiltrosTienda from "../FiltrosTienda";
import ArticulosTienda from "../ArticulosTienda";
import Articulo from "../Articulo";

import "./styles.css";
import Comprado from "../ArticuloComprado";
const articulos = [
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 100.000 COP",
    embalaje: "100 Gr",
    descripcionLarga:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 2.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 5.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 100.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 2.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 5.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "PRODUCTO 1",
    descripcion:
      "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
    precio: "$ 10.000 COP",
    embalaje: "100 Gr",
  },
];

const Tienda = () => {
  const [modalArticulo, setModalArticulo] = useState(true);

  const cerrarArticulo = () => {
    setModalArticulo(false);
  };
  return (
    <Row>
      <Col span={5}>
        <FiltrosTienda />
      </Col>
      <Col span={19}>
        <ArticulosTienda articulos={articulos} />
      </Col>
      <Modal
        width={700 || 900}
        visible={modalArticulo}
        onCancel={cerrarArticulo}
        footer={null}
        style={{ borderRadius: "50px" }}
      >
        <Comprado articulo={articulos[0]} />
      </Modal>
    </Row>
  );
};
export default Tienda;
