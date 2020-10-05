import React from "react";
import { Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";

const { Text, Title } = Typography;

const Modal = ({ recomendacion,tipo }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  return isTabletOrMobileDevice || isTabletOrMobile ? (
    <Col className="item-recomendaciones" span={24}>
      <Row justify="center">
        <img
          src={recomendacion.img}
          style={
            tipo === "CUADRADO"
              ? { width: "70%" }
              : { maxHeight: "500px", maxWidth: "110px" }
          }
        />
      </Row>
      <Row justify="center">
        <Row>
          <Title>{recomendacion.titulo}</Title>
        </Row>
        <Row>
          <Text style={{ textAlign: "center" }}>{recomendacion.texto}</Text>
        </Row>
      </Row>
    </Col>
  ) : (
    <Row gutter={16} className="item-recomendaciones">
      <Col
        span={tipo === "CUADRADO" ? 14 : 10}
      >
        <img
          src={recomendacion.img}
          style={{ maxHeight: "500px", maxWidth: "100%" }}
        />
      </Col>
      <Col span={tipo === "CUADRADO" ? 10 : 14}>
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
