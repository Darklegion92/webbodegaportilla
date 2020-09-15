import React from "react";
import { Typography, Button, Row, Col, Divider } from "antd";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import "./styles.css";

const { Text } = Typography;

const Comprado = ({ articulo, onOk }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  return (
    <div className="articulo-comprado-tag">
      <Row className="fila1">
        <Text>TU PRODUCTO SE AGREGO AL CARRITO</Text>
        <Divider />
      </Row>
      {isTabletOrMobile || isTabletOrMobileDevice ? (
        <Col gutter={24}>
          <Col span={24}>
            <Row justify="center">
              <img src={articulo.img} width="70%" />
            </Row>
          </Col>
          <Col span={24}>
            <Row className="fila2" justify="center">
              <Text align="center">{articulo.nombre}</Text>
            </Row>
            <Row className="fila3" justify="center">
              <Text className="sinformato">$ {articulo.precio} COP</Text>
              <Text>$ {articulo.precio} COP</Text>
            </Row>
            <Row className="fila4" justify="center">
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
        </Col>
      ) : (
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
      )}
    </div>
  );
};

export default Comprado;
