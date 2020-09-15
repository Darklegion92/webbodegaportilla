import React from "react";
import { Typography, Row, Col } from "antd";

const { Text, Title } = Typography;

const ItemMenu = ({ articulo }) => {
  return (
    <Row className="item-menu" align="center" gutter={6}>
      <Col span={6}>
        <img src={articulo.img} width="100%" />
      </Col>
      <Col span={18}>
        <Title level={4}>{articulo.nombre}</Title>
        <Text>$ {articulo.cantidad * articulo.precio} COP</Text>
      </Col>
    </Row>
  );
};

export default ItemMenu;
