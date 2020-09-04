import React from "react";
import { Typography, InputNumber, Button, Row, Col, Divider } from "antd";

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
            <Text className="sinformato">{articulo.precio}</Text>
            <Text>{articulo.precio}</Text>
          </Row>
          <Row className="fila4">
            <Button>IR AL CARRITO</Button>
            <Button className="contrario" onClick={() => onOk(false)}>
              SEGUIR COMPRANDO
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Comprado;
