import React from "react";
import { Row, Col } from "antd";
import FiltrosTienda from "../FiltrosTienda";

const Tienda = () => {
  return (
    <Row>
      <Col span={6}>
        <FiltrosTienda />
      </Col>
      <Col span={18}>tienda</Col>
    </Row>
  );
};
export default Tienda;
