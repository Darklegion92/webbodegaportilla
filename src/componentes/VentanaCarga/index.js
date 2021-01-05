import React from "react";
import { useMediaQuery } from 'react-responsive'
import { Typography,Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const VentanaCarga = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })

  return (
    <Row align="middle" justify="center">
      <Title style={{ color: "var(--color-primario)" }} level={3}>
        <LoadingOutlined
          style={{ width: "auto", fontSize: isTabletOrMobile || isTabletOrMobileDevice ?"25px":"50px", margin:isTabletOrMobile || isTabletOrMobileDevice?"15px": "30px" }}
        />
        CARGANDO DATOS
      </Title>
    </Row>
  );
};

export default VentanaCarga;
