import React from "react";
import { Typography, Button, Row, Col, InputNumber } from "antd";
import { useMediaQuery } from "react-responsive";
import { AiFillStar } from "react-icons/ai";

const { Text, Title } = Typography;
const Item = ({ articulo, id, onClick }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  const estrellas = (cantidad) => {
    const estrellas = [];

    for (let i = 0; i < cantidad; i++) {
      estrellas.push(
        <AiFillStar
          size={isTabletOrMobile || isTabletOrMobileDevice ? "10" : "20"}
        />
      );
    }

    return estrellas;
  };

  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <div className="estrellas-item">
      {articulo.clasificacion > 0 && (
        <div className="estrellas-cantidad">
          {estrellas(articulo.clasificacion)}
        </div>
      )}
      <Row className="item" onClick={() => onClick(id)} gutter={16}>
        <Col span={8}>
          <img src={articulo.img} width="100%" />
        </Col>
        <Col span={16}>
          <Row>
            <Title level={3}>{articulo.nombre}</Title>
          </Row>
          <Row gutter={5} justify="start">
            <Col>
              <Text strong className="precio">
                $ {articulo.precio} COP
              </Text>
            </Col>
            <Col>
              <Text className="embalaje">1 {articulo.embalaje}</Text>
            </Col>
          </Row>

          <Row justify="start">
            <Button>AÑADIR AL CARRITO</Button>
          </Row>
        </Col>
      </Row>
    </div>
  ) : (
    <Col className="item" onClick={() => onClick(id)}>
      <div className="estrellas-item">
        {articulo.clasificacion > 0 && (
          <div className="estrellas-cantidad">
            {estrellas(articulo.clasificacion)}
          </div>
        )}
        <Row gutter={8} justify="center">
          <img src={articulo.img} width="80%" />
        </Row>
        <Row justify="center">
          <Title level={3}>{articulo.nombre}</Title>
        </Row>
        <Row justify="center">
          <Text className="descripcion">{articulo.descripcion}</Text>
        </Row>
        <Row gutter={5} justify="center">
          <Col>
            <Text strong className="precio">
              $ {articulo.precio} COP
            </Text>
          </Col>
          <Col>
            <Text className="embalaje">1 {articulo.embalaje}</Text>
          </Col>
        </Row>
        <Row justify="center">
          <Button>AÑADIR AL CARRITO</Button>
        </Row>
      </div>
    </Col>
  );
};

export default Item;
