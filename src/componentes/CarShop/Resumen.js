import React from "react";
import { Row, Col, Typography, Divider, Button, Input } from "antd";

import "./styles.css";
const { Text, Title } = Typography;

const Resumen = () => {
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
          <Text>$ 240.000</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={10}>
          <Text>AHORRO</Text>
        </Col>
        <Col span={14}>
          <Text>$ 10.000</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={10}>
          <Text>ENVIO</Text>
        </Col>
        <Col span={14}>
          <Text>$ 7.000</Text>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Col span={24}>
          <Text>APLICAR CUPON</Text>
          <Input placeholder="Cupón" />
          <Col span={9}><Button>APLICAR</Button></Col>
        </Col>
      </Row>
      <Divider />
      <Row>
        <Title level={2}>TOTAL</Title>
        <Title>$ 240.000</Title>
      </Row>
    </Col>
  );
};

export default Resumen;
