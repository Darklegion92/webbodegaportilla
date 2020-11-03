import React from 'react'
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Select,
  Button,
  DatePicker
} from 'antd'

import locale from 'antd/es/date-picker/locale/es_ES'

const { Paragraph } = Typography
const { Option } = Select
const styleCampos = {
  backgroundColor: 'var(--color-secundario)',
  width: '100%'
}

const styleBoton = {
  backgroundColor: 'var(--color-naranja)',
  color: 'white',
  fontWeight: 'bold'
}

function TargetaDebito () {
  return (
    <Form layout='vertical'>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label='Banco'
            name='banco'
            rules={[
              {
                required: true,
                message: 'Debe seleccionar un banco'
              }
            ]}
          >
            <Select style={styleCampos}></Select>
          </Form.Item>
          <Form.Item
            label='Tipo de Persona'
            name='tipo-per'
            rules={[
              {
                required: true,
                message: 'Debe seleccionar un tipo de persona'
              }
            ]}
          >
            <Select dropdownStyle={styleCampos} style={styleCampos}>
              <Option style={styleCampos}></Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Número de documento'
            name='documento'
            rules={[
              {
                required: true,
                message: 'Campo número de documento no puede estar vacío'
              }
            ]}
          >
            <Input style={styleCampos} />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label='Nombre del Titular'
            name='nombre'
            rules={[
              {
                required: true,
                message: 'Campo Nombre del titular No Puede Estar Vacío'
              }
            ]}
          >
            <Input style={styleCampos} />
          </Form.Item>
          <Form.Item
            label='Tipo de documento'
            name='tipo-doc'
            rules={[
              {
                required: true,
                message: 'Debe seleccionar un tipo de documento'
              }
            ]}
          >
            <Select dropdownStyle={styleCampos} style={styleCampos}>
              <Option style={styleCampos}></Option>
            </Select>
          </Form.Item>
          <Form.Item
            label='Teléfono'
            name='tarjeta'
            rules={[
              {
                required: true,
                message: 'Campo Teléfono No Puede Estar Vacío'
              }
            ]}
          >
            <Input style={styleCampos} />
          </Form.Item>
        </Col>
        <Row justify='end' style={{ width: '100%' }}>
          <Form.Item>
            <Button style={styleBoton}>GUARDAR</Button>
          </Form.Item>
        </Row>
      </Row>
    </Form>
  )
}

export default TargetaDebito
