import React from "react";
import { Typography, Divider, Row, List } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import "./styles.css";

const { Text, Title } = Typography;

const data = [
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
  "GRUPO 1",
];

const FiltrosTienda = () => {
  return (
    <div className="filtros-tienda">
      <Title level={4}>FILTROS</Title>
      <Divider />
      <Row className="filtros">
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
      <div className="agrupaciones">
        <Title level={4}>GRUPOS</Title>
        <Divider />
        <List
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Divider />
      </div>
      <div className="agrupaciones">
        <Title level={4}>MARCAS</Title>
        <Divider />
        <List
          dataSource={data}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
        <Divider />
      </div>
    </div>
  );
};

export default FiltrosTienda;
