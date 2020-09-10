import React from "react";
import { Row, Col, Typography } from "antd";

const { Text, Title } = Typography;

const Modal = ({ recomendacion }) => {
  return (
    <Row gutter={16}>
      <Col span={14}>
        <img src={recomendacion.imagen} width="100%" height="500px"></img>
      </Col>
      <Col span={10}>
        <Row>
          <Title>{recomendacion.titulo}</Title>
        </Row>
        <Row>
          <Text >{recomendacion.texto}</Text>
        </Row>
      </Col>
    </Row>
  );
};

export default Modal;
