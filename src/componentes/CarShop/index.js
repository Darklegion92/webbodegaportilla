import React from "react";
import { Row, Col } from "antd";

import StepPagos from "./StepPagos";
import Resumen from "./Resumen";

const CarShop = () => {
  return (
    <Row className="car-shop" gutter={20}>
      <Col span="17">
        <StepPagos />
      </Col>
      <Col span="6">
        <Resumen />
      </Col>
    </Row>
  );
};

export default CarShop;
