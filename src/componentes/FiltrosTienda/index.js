import React from "react";
import { Typography, Divider, Row } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./styles.css";

const { Text, Title } = Typography;

const FiltrosTienda = () => {
  return (
    <div className="filtros-tienda">
      <Title level={4}>FILTROS</Title>
      <Divider />
      <Row>
        <Text className="item">
          Filtreg 1 <CloseOutlined />
        </Text>
        <Text className="item">
          Filtrossss 2 <CloseOutlined />
        </Text>
        <Text className="item">
          Filt 3 <CloseOutlined />
        </Text>
        <Text className="item">
          Fi 4 <CloseOutlined />
        </Text>
        <Text className="item">
          Fi 4 <CloseOutlined />
        </Text>
      </Row>

      <Divider />
      <div className="Grupos">
        <Title level={4}>GRUPOS</Title>
        <Divider />
        <Divider />
      </div>
      <div className="Marcas">
        <Title level={4}>MARCAS</Title>
        <Divider />
        <Divider />
      </div>
    </div>
  );
};

export default FiltrosTienda;
