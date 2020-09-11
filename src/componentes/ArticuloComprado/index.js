import React from "react";
import { Typography, Button, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./styles.css";

const { Text } = Typography;

const Comprado = ({ articulo, onOk }) => {
  return (
    <div className="articulo-comprado-tag">
      <Row className="fila1">
        <Text>TU PRODUCTO SE AGREGO AL CARRITO</Text>
        <Divider />
      </Row>

      <Row gutter={25}>
        <Col span={8}>
          <img src={articulo.img} width="100%" />
        </Col>
        <Col span={16}>
          <Row className="fila2">
            <Text>{articulo.nombre}</Text>
          </Row>
          <Row className="fila3">
            <Text className="sinformato">$ {articulo.precio} COP</Text>
            <Text>$ {articulo.precio} COP</Text>
          </Row>
          <Row className="fila4">
            <Link to="/carshop">
              <Button>IR AL CARRITO</Button>
            </Link>
            <Link to="/shop">
              <Button className="contrario" onClick={() => onOk(false)}>
                SEGUIR COMPRANDO
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Comprado;
