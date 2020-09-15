import React, { useState } from "react";
import {
  Row,
  Col,
  Input,
  Select,
  InputNumber,
  Radio,
  Form,
  Typography,
  Button,
} from "antd";

const { Title } = Typography;
const { Option } = Select;
const FormularioDatosEnvio = () => {
  const [value, setValue] = useState(0);

  const onChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <Col span={24} className="formulario-datosenvio">
      <Row>
        <Title level={3}>DATOS ENVIO</Title>
      </Row>
      <Form layout="vertical">
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item label="Nombres" name="nombre">
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Apellidos" name="apellidos">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item label="Teléfono Celular" name="celular">
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Otro Teléfono (opcional)" name="otro-celular">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item label="Tipo De Documento" name="tipo-documento">
              <Select>
                <Option>Cédula de Ciudadanía</Option>
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Número Documento" name="documento">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item label="Dirección" name="direccion">
              <Input />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Barrio" name="barrio">
              <Select>
                <Option>Centro</Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item label="Tipo de Pago" name="nombre">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Contraentrega</Radio>
                <Radio value={2}>Otro medio de pago</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </Col>
  );
};

export default FormularioDatosEnvio;
