import React from "react";
import { Typography, Form, Select, Input, Col, Row } from "antd";

const { Title, Text } = Typography;
const { Option } = Select;
const { Search } = Input;
const Head = () => {
  return (
    <div className="head">
      <Col span={4}>
        <Title level={2}>TIENDA</Title>
      </Col>
      <Col span={16}>
        <Form>
          <Row>
            <Col span={10}>
              <Select>
                <Option value="lucy">lucy</Option>
                <Option value="otra">otra</Option>
              </Select>
            </Col>
            <Col  span={12}>
              <Search
                placeholder="input search text"
                onSearch={(value) => console.log(value)}
                style={{ width: 200 }}
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </div>
  );
};

export default Head;
