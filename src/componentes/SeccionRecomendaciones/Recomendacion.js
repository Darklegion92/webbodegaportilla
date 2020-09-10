import React from "react";
import { Row, Col, Typography } from "antd";

const { Text, Title } = Typography;

const Modal = ({ recomendacion },tipo) => {
  return (
    <Row gutter={16} className="item-recomendaciones">
      <Col span={tipo==="CUADRADO"?14:10}>
        <img
          src={recomendacion.imagen}
          style={{ maxHeight: "500px", maxWidth: "100%"}}
        />
      </Col>
      <Col span={tipo==="CUADRADO"?10:14}>
        <Row>
          <Title>{recomendacion.titulo}</Title>
        </Row>
        <Row>
          <Text>{recomendacion.texto}</Text>
        </Row>
      </Col>
    </Row>
  );
};

export default Modal;
