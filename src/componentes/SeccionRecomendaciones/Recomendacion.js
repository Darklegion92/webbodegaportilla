import React from "react";
import { Row, Col, Typography } from "antd";
import { useMediaQuery } from "react-responsive";

const { Text, Title } = Typography;

const Modal = ({ recomendacion }, tipo) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  return (
    <Row gutter={16} className="item-recomendaciones">
      <Col
        span={
          isTabletOrMobileDevice || isTabletOrMobile
            ? 13
            : tipo === "CUADRADO"
            ? 14
            : 10
        }
        aling={"center"}
        justify={"center"}
      >
        <img
          src={recomendacion.img}
          style={{ maxHeight: "500px", maxWidth: "100%" }}
        />
      </Col>
      <Col
        span={
          isTabletOrMobileDevice || isTabletOrMobile
            ? 11
            : tipo === "CUADRADO"
            ? 10
            : 14
        }
      >
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
