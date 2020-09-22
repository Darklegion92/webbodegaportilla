import React, { useEffect, useState } from "react";
import { Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import StepPagos from "./StepPagos";
import Resumen from "./Resumen";

const CarShop = () => {
  const [current, setCurrent] = useState(0);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
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

  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Col span={22} className="car-shop">
      <Row>
        <StepPagos current={current} />
      </Row>
      <Row>
        <Resumen next={next} current={current} pagar={pagar} />
      </Row>
    </Col>
  ) : (
    <Row className="car-shop" gutter={20}>
      <Col span={17}>
        <StepPagos current={current} />
      </Col>
      <Col span={6}>
        <Resumen next={next} current={current} pagar={pagar} />
      </Col>
    </Row>
  );
};

export default CarShop;
