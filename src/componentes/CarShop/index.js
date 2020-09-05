import React from "react";
import { Row, Col } from "antd";

import StepPagos from "./StepPagos";
import Resumen from "./Resumen";

const CarShop = () => {
  return (
    <Row className="car-shop">
      <Col span="18">
        <StepPagos />
      </Col>
      <Col span="6">
        <Resumen />
      </Col>
    </Row>
  );
};

export default CarShop;
