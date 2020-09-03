import React from "react";
import { Typography, Form, Select, Input, Col, Row } from "antd";
import { SearchOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;
const { Option } = Select;
const Head = () => {
  return (
    <div className="head">
      <Col span={10}>
        <Title>TIENDA</Title>
      </Col>
      <Col span={14}>
        <Form>
          <Row>
            <Col span={8}>
              <Select placeholder="ORDENADO POR">
                <Option value="lucy">PRECIO MAYOR</Option>
                <Option value="otra">PRECIO MENOR</Option>
              </Select>
            </Col>
            <Col span={14}>
              <Input placeholder="Busqueda" />
            </Col>
            <Col span={2}>
              <SearchOutlined />
            </Col>
          </Row>
        </Form>
      </Col>
    </div>
  );
};

export default Head;
