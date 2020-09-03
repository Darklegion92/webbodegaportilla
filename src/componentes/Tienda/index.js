import React from "react";
import { Row, Col } from "antd";
import FiltrosTienda from "../FiltrosTienda";
import ArticulosTienda from "../ArticulosTienda";

const Tienda = () => {
  return (
    <Row>
      <Col span={6}>
        <FiltrosTienda />
      </Col>
      <Col span={18}>
        <ArticulosTienda />
      </Col>
    </Row>
  );
};
export default Tienda;
