import React, { useEffect, useState, useContext } from "react";
import { Row, Col } from "antd";

import StepPagos from "./StepPagos";
import Resumen from "./Resumen";

const CarShop = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const next = () => {
    if (current <= 1) {
      const cur1 = current + 1;
      setCurrent(cur1);
    }
  };

  const pagar = () => {
    console.log("pagando....");
  };

  return (
    <Row className="car-shop" gutter={20}>
      <Col span="17">
        <StepPagos current={current} />
      </Col>
      <Col span="6">
        <Resumen next={next} current={current} pagar={pagar} />
      </Col>
    </Row>
  );
};

export default CarShop;
