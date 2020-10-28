import React from "react";
import { Typography,Row } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const { Title } = Typography;

const VentanaCarga = () => {
  return (
    <Row align="middle" justify="center">
      <Title style={{ color: "var(--color-primario)" }} level={3}>
        <LoadingOutlined
          style={{ width: "auto", fontSize: "50px", margin: "30px" }}
        />
        CARGANDO DATOS
      </Title>
    </Row>
  );
};

export default VentanaCarga;
