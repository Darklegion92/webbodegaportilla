import React from "react";
import { Typography, InputNumber, Button, Row, Col } from "antd";
import { AiFillStar } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

const { Text, Title } = Typography;

const Articulo = ({ articulo, onOk }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const estrellas = (cantidad) => {
    const estrellas = [];

    for (let i = 0; i < cantidad; i++) {
      estrellas.push(<AiFillStar size="80" />);
    }

    return estrellas;
  };
  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <div className="estrellas-item-articulo">
      {articulo.clasificacion > 0 && (
        <div className="estrellas-cantidad-articulo">
          {estrellas(articulo.clasificacion)}
        </div>
      )}
      <Col span={24} className="articulo-tag">
        <Row justify="center">
          <img src={articulo.img} width="60%" />
        </Row>
        <Row justify="center" className="fila2">
          <Text className="nombre">{articulo.nombre}</Text>
          <Text className="titulo">BENEFICIOS</Text>
          <Text className="cuerpo">{articulo.descripcionLarga}</Text>
        </Row>
        <Row justify="center" className="fila3">
          <Text>$ {articulo.precio} COP</Text>
        </Row>
        <Row justify="center" className="fila4">
          <Text>$ {articulo.precio} COP</Text>
        </Row>
        <Row className="fila5">
          <InputNumber min={1} max={10} defaultValue={1} /> <Text>Gr</Text>
        </Row>
        <Row justify="center" className="fila5">
          <Button onClick={onOk}>AÑADIR AL CARRITO</Button>
        </Row>
      </Col>
    </div>
  ) : (
    <div className="estrellas-item-articulo">
      {articulo.clasificacion > 0 && (
        <div className="estrellas-cantidad-articulo">
          {estrellas(articulo.clasificacion)}
        </div>
      )}
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
            <Text>$ {articulo.precio} COP</Text>
          </Row>
          <Row className="fila4">
            <Text>$ {articulo.precio} COP</Text>
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
    </div>
  );
};

export default Articulo;
