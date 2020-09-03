import React from "react";
import { Row, Col } from "antd";
import Head from "./Head";
import Item from "./Item";

import "./styles.css";
const ArticulosTienda = () => {
  return (
    <Col className="articulos-tienda" span={24}>
      <Row>
        <Head />
      </Row>
      <Row>
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
        <Item
          articulo={{
            img: "img/articulodefecto.jpeg",
            nombre: "PRODUCTO 1",
            descripcion:
              "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
            precio: "$ 5.000 COP",
            embalaje: "100 Gr",
          }}
        />
      </Row>
    </Col>
  );
};

export default ArticulosTienda;
