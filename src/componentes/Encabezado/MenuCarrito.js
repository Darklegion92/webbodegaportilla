import React from "react";
import { Col, Row, Typography, Button } from "antd";

import Item from "./ItemMenu";

const { Text, Title } = Typography;

const MenuCarrito = ({ carrito }) => {
  let total = 0;
  return (
    <Col className="menu-carrito" span={24}>
      <Col>
        {carrito.map((articulo) => {
          total += articulo.precio * articulo.cantidad;
          return (
            <Row>
              <Item articulo={articulo} />
            </Row>
          );
        })}
      </Col>
      <Row>
        <Title>TOTAL</Title>
        <Text>{total}</Text>
      </Row>
      <Row>
        <Button>IR AL CARRITO</Button>
      </Row>
    </Col>
  );
};

export default MenuCarrito;
