import React, { useContext, useEffect } from "react";
import { Row, Col, Typography, Divider, Button, Input } from "antd";
import { GlobalContext } from "../../Context/GlobalContext";
import "./styles.css";
const { Text, Title } = Typography;

const Resumen = () => {
  const { carrito } = useContext(GlobalContext);
  let total = 0;

  const calcular = (car) => {
    car.forEach((item) => {
      total += item.cantidad * item.precio;
    });
  };
  calcular(carrito);
  useEffect(() => {}, [carrito]);

  return (
    <Col span={24} className="resumen">
      <Row>
        <Title level={3}>RESUMEN DEL PEDIDO</Title>
      </Row>
      <Divider />
      <Row>
        <Col span={11}>
          <Text>SUB-TOTAL</Text>
        </Col>
        <Col span={13}>
          <Text>$ {total}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={10}>
          <Text>AHORRO</Text>
        </Col>
        <Col span={14}>
          <Text>$ {total > 50000 ? 7000 : 0}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={10}>
          <Text>ENVIO</Text>
        </Col>
        <Col span={14}>
          <Text>$ {total > 50000 ? 0 : 7000}</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Text>APLICAR CUPON</Text>
          <Input placeholder="Cupón" />
          <Col span={9}>
            <Button>APLICAR</Button>
          </Col>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Title level={2}>TOTAL</Title>
        <Title>${total > 50000 ? total : total + 7000}</Title>
      </Row>
    </Col>
  );
};

export default Resumen;
