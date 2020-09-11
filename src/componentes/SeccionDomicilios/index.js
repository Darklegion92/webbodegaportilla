import React, { useContext } from "react";
import { Typography } from "antd";
import { FaTruck } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";

import { GlobalContext } from "../../Context/GlobalContext";

import "./styles.css";

const { Title } = Typography;

function SeccionDomicilios() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const { seccionDomicilio } = useContext(GlobalContext);
  return (
    <div className="secciondomicilios">
      {isTabletOrMobile || isTabletOrMobileDevice ? (
        <Title level={2}>ENVIO GRATIS POR COMPRAS SUPERIORES A $ 50.000</Title>
      ) : (
        <Title level={2}>{seccionDomicilio.texto}</Title>
      )}
      <FaTruck size={isTabletOrMobile || isTabletOrMobileDevice ? 30 : 50} />
    </div>
  );
}
export default SeccionDomicilios;
