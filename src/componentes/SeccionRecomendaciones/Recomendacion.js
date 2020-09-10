import React from "react";
import { Row, Col } from "antd";

const Modal = ({recomendacion}) => {
  return (
    <Row>
      <Col span={14}>{recomendacion.imagen}</Col>
      <Col span={10}>{recomendacion.titulo}</Col>
    </Row>
  );
};

export default Modal;
