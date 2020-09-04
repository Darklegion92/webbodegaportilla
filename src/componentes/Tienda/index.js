import React from "react";
import { Row, Col } from "antd";
import FiltrosTienda from "../FiltrosTienda";
import ArticulosTienda from "../ArticulosTienda";

const articulos = [
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
  return (
    <Row>
      <Col span={5}>
        <FiltrosTienda />
      </Col>
      <Col span={19}>
        <ArticulosTienda articulos={articulos} />
      </Col>
    </Row>
  );
};
export default Tienda;
