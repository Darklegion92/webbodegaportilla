import React from "react";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Select,
  Button,
  DatePicker,
} from "antd";

import locale from "antd/es/date-picker/locale/es_ES";

const { Paragraph } = Typography;
const { Option } = Select;
const styleCampos = {
  backgroundColor: "var(--color-secundario)",
  width: "100%",
};

const styleBoton = {
  backgroundColor: "var(--color-naranja)",
  color: "white",
  fontWeight: "bold",
};

function TargetaCredito({ tiposDocumento }) {
  return (
    <Form layout="vertical">
      <Paragraph>
        Aceptamos tarjetas nacionales de crédito y debito de todos los bancos
        siempre y cuandocuente con CV2. Recuerda ingresar el número de documento
        del titular de la tarjeta.
      </Paragraph>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label="Nombre del titular"
            name="nombre"
            rules={[
              {
                required: true,
                message: "Campo Nombre del titular No Puede Estar Vacío",
              },
            ]}
          >
            <Input style={styleCampos} />
          </Form.Item>

          <Form.Item
            label="Año y Mes de Expiración"
            name="fecha"
            rules={[
              {
                type: "object",
                required: true,
                message: "Debe Seleccionar Fecha Válida",
              },
            ]}
          >
            <DatePicker locale={locale} style={styleCampos} picker="month" />
          </Form.Item>

          <Form.Item
            label="Tipo de documento"
            name="tipo-doc"
            rules={[
              {
                required: true,
                message: "Campo Nombre del titular No Puede Estar Vacío",
              },
            ]}
          >
            <Select dropdownStyle={styleCampos} style={styleCampos}>
              {tiposDocumento &&
                tiposDocumento.map((tipo) => {
                  return <Option key={tipo.prefijo}>{tipo.nombre}</Option>;
                })}
            </Select>
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Número de tarjeta"
            name="tarjeta"
            rules={[
              {
                required: true,
                message: "Campo Nombre del titular No Puede Estar Vacío",
              },
            ]}
          >
            <Input style={styleCampos} />
          </Form.Item>
          <Form.Item
            label="CVV"
            name="cvv"
            rules={[
              {
                required: true,
                message: "Campo Nombre del titular No Puede Estar Vacío",
              },
            ]}
          >
            <Input style={styleCampos} placeholder="Ingresa 3 dígitos" />
          </Form.Item>
          <Form.Item
            label="Número de documento asociado a la tarjeta"
            name="documento"
            rules={[
              {
                required: true,
                message: "Campo Nombre del titular No Puede Estar Vacío",
              },
            ]}
          >
            <Input style={styleCampos} />
          </Form.Item>
        </Col>
        <Row justify="end" style={{ width: "100%" }}>
          <Form.Item>
            <Button style={styleBoton}>GUARDAR</Button>
          </Form.Item>
        </Row>
      </Row>
    </Form>
  );
}

export default TargetaCredito;
