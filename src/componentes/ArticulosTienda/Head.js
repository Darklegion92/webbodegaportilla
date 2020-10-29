import React, { useState, useContext } from "react";
import { Typography, Form, Select, Input, Col, Row, Drawer } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { GlobalContext } from "../../Context/GlobalContext";
import FiltrosTienda from "../FiltrosTienda";

const { Title, Text } = Typography;
const { Option } = Select;

const Head = ({setPagina}) => {
  const [visible, setVisible] = useState(false);
  const [nombre, setNombre] = useState("");
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const { consultarArticulosTienda, cambiarOrden } = useContext(GlobalContext);

  const onSelect = (e) => {
    if (e === "precio-mayor") cambiarOrden("precio desc");
    else if (e === "precio-menor") cambiarOrden("precio asc");
  };

  const onClick = () => {
    setVisible(!visible);
  };
  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Col span={24} className="head">
      <Row>
        <Title>TIENDA</Title>
      </Row>
      <Row>
        <Col span={17}>
          <Form>
            <Row>
              <Col span={10}>
                <Row>
                  <Select placeholder="ORDENADO POR" onSelect={onSelect}>
                    <Option value="precio-mayor">
                      <Text>PRECIO MAYOR</Text>
                    </Option>
                    <Option value="precio-menor">
                      <Text>PRECIO MENOR</Text>
                    </Option>
                  </Select>
                </Row>
              </Col>
              <Col span={12}>
                <Input
                  placeholder="Busqueda"
                  onChange={(e) => {
                    if (!e.target.value) consultarArticulosTienda(null, nombre);
                    setNombre(e.target.value);
                  }}
                  onPressEnter={() => {
                    if (nombre != "" || nombre)
                      consultarArticulosTienda(null, nombre);
                  }}
                />
              </Col>
              <Col span={2}>
                <SearchOutlined />
              </Col>
            </Row>
          </Form>
        </Col>
        <Col span={7}>
          <Row
            className="filtro"
            onClick={onClick}
            justify="center"
            align="middle"
          >
            <Col span={16}>
              <Title level={4}>FILTRO</Title>
            </Col>
            <Col span={8}>
              <FilterOutlined
                onClick={() => {
                  consultarArticulosTienda(null, nombre);
                }}
              />
            </Col>
          </Row>
          <Drawer
            style={{ marginTop: "242px" }}
            placement="right"
            closable={false}
            onClose={() => {
              setVisible(false);
            }}
            width="100%"
            visible={visible}
            key="right"
          >
            <FiltrosTienda />
          </Drawer>
        </Col>
      </Row>
    </Col>
  ) : (
    <Row className="head">
      <Col span={10}>
        <Title>TIENDA</Title>
      </Col>
      <Col span={14}>
        <Form>
          <Row>
            <Col span={8}>
              <Select placeholder="ORDENADO POR" onSelect={onSelect}>
                <Option value="precio-mayor">PRECIO MAYOR</Option>
                <Option value="precio-menor">PRECIO MENOR</Option>
              </Select>
            </Col>
            <Col span={14}>
              <Input
                placeholder="Busqueda"
                onChange={(e) => {
                  if (!e.target.value) {
                    consultarArticulosTienda(null, nombre);
                    setPagina(1);
                  }
                  setNombre(e.target.value);
                }}
                onPressEnter={() => {
                  consultarArticulosTienda(null, nombre);
                  setPagina(1);
                }}
              />
            </Col>
            <Col span={2}>
              <SearchOutlined
                onClick={() => {
                  consultarArticulosTienda(null, nombre);
                  setPagina(1);
                }}
              />
            </Col>
          </Row>
        </Form>
      </Col>
    </Row>
  );
};

export default Head;
