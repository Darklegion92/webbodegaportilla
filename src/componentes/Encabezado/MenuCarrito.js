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
        {carrito.length > 0 ? (
          carrito.map((articulo) => {
            total += articulo.precio * articulo.cantidad;
            return (
              <Row>
                <Col span={24}><Item articulo={articulo} /></Col>
              </Row>
            );
          })
        ) : (
          <Title level={3} align="center">
            CARRITO VACIO
          </Title>
        )}
      </Col>
      {carrito.length > 0 && (
        <Row className="totales">
          <Title level={4}>TOTAL</Title>
          <Text>$ {total} COP</Text>
        </Row>
      )}
      <Row>
        <Button
          onClick={() => {
            cerrar(false);
          }}
        >
          <Link to={carrito.length > 0 ? "/carshop" : "/shop"}>
            {carrito.length > 0 ? "IR AL CARRITO" : "IR A LA TIENDA"}
          </Link>
        </Button>
      </Row>
    </Col>
  );
};

export default MenuCarrito;
