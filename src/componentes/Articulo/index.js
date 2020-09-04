import React from "react";
import { Typography, InputNumber, Button, Row, Col } from "antd";

import "./styles.css";

const { Text } = Typography;

const Articulo = ({ articulo, onOk }) => {
  return (
    <Row className="articulo-tag" gutter={25}>
      <Col span={14}>
        <img src={articulo.img} width="100%" />
      </Col>
      <Col span={10}>
        <Row className="fila1">
          <Text>{articulo.nombre}</Text>
        </Row>
        <Row className="fila2">
          <Text className="titulo">BENEFICIOS</Text>
          <Text className="cuerpo">{articulo.descripcionLarga}</Text>
        </Row>
        <Row className="fila3">
          <Text>{articulo.precio}</Text>
        </Row>
        <Row className="fila4">
          <Text>{articulo.precio}</Text>
        </Row>
        <Row className="fila5" gutter={20}>
          <Col span={10}>
            <Row>
              <InputNumber min={1} max={10} defaultValue={1} />
              <Text>Gr</Text>
            </Row>
          </Col>
          <Col span={14}>
            <Button onClick={onOk}>AÑADIR AL CARRITO</Button>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Articulo;
