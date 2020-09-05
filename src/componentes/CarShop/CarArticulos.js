import React from "react";
import { Row, Col } from "antd";

import Item from "./Item"

const CarArticulos = ({ carrito }) => {
  return (
    <Col span={22} className="car-articulos">
      {carrito.map((articulo) => {
        return (
          <Row>
            <Item articulo={articulo}/>
          </Row>
        );
      })}
    </Col>
  );
};

export default CarArticulos;
