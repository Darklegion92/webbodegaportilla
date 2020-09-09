import React from "react";
import { Col, Row, Typography, Button } from "antd";
import { Link } from "react-router-dom";
import Item from "./ItemMenu";

const { Text, Title } = Typography;

const MenuCarrito = ({ carrito, cerrar }) => {
  let total = 0;
  return (
    <Col className="menu-carrito" span={24}>
      <Col className="items">
        {carrito.map((articulo) => {
          total += articulo.precio * articulo.cantidad;
          return (
            <Row>
              <Item articulo={articulo} />
            </Row>
          );
        })}
      </Col>
      <Row className="totales">
        <Title>TOTAL</Title>
        <Text>$ {total} COP</Text>
      </Row>
      <Row>
        <Button
          onClick={() => {
            cerrar(false);
          }}
        >
          <Link to="/carshop">IR AL CARRITO</Link>
        </Button>
      </Row>
    </Col>
  );
};

export default MenuCarrito;
