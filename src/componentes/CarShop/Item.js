import React from "react";
import { Col, Row, Typography, InputNumber } from "antd";
import { GoTrashcan } from "react-icons/go";
const { Text, Title } = Typography;

const Item = ({ articulo }) => {
  return (
    <Row className="item">
      <Col span={6}>
        <Row>
          <Col span={12}>
            <img src={articulo.img} width="100%" />
          </Col>
          <Col span={12}>
            <Title level={3}>{articulo.nombre}</Title>
          </Col>
        </Row>
      </Col>
      <Col span={14}>
        <Row>
          <Col span={6}>
            <Title level={3}>$ {articulo.precio}</Title>
          </Col>
          <Col span={6}>
            <Title level={4}>CANTIDAD</Title>
          </Col>
          <Col span={6}>
            <Title>
              <InputNumber min={1} max={10} defaultValue={articulo.cantidad} />
            </Title>
          </Col>
          <Col span={6}>
            <GoTrashcan color="red" size={50} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Item;
