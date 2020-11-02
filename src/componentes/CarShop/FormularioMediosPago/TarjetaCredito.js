import React from 'react'
import { Row, Col, Typography, Form, Input, Select, Button } from 'antd'

const { Paragraph } = Typography

function TargetaCredito () {
  return (
    <Form layout='vertical'>
      <Paragraph>
        Aceptamos tarjetas nacionales de crédito y debito de todos los bancos
        siempre y cuandocuente con CV2. Recuerda ingresar el número de documento
        del titular de la tarjeta.
      </Paragraph>
      <Row gutter={16}>
        <Col span={12}>
          <Form.Item
            label='Nombre del titular'
            name='nombres'
            rules={[
              {
                required: true,
                message: 'Campo Nombre del titular No Puede Estar Vacío'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                label='Mes de Expiración'
                name='nombres'
                rules={[
                  {
                    required: true,
                    message: 'Campo Nombre del titular No Puede Estar Vacío'
                  }
                ]}
              >
                <Select></Select>
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                label='Año de Expiración'
                name='nombres'
                rules={[
                  {
                    required: true,
                    message: 'Campo Nombre del titular No Puede Estar Vacío'
                  }
                ]}
              >
                <Select></Select>
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            label='Tipo de documento'
            name='nombres'
            rules={[
              {
                required: true,
                message: 'Campo Nombre del titular No Puede Estar Vacío'
              }
            ]}
          >
            <Select />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label='Número de tarjeta'
            name='nombres'
            rules={[
              {
                required: true,
                message: 'Campo Nombre del titular No Puede Estar Vacío'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='CVV'
            name='nombres'
            rules={[
              {
                required: true,
                message: 'Campo Nombre del titular No Puede Estar Vacío'
              }
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label='Número de documento asociado a la tarjeta'
            name='nombres'
            rules={[
              {
                required: true,
                message: 'Campo Nombre del titular No Puede Estar Vacío'
              }
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Row justify='end' style={{ width: '100%' }}>
          <Form.Item>
            <Button>GUARDAR</Button>
          </Form.Item>
        </Row>
      </Row>
    </Form>
  )
}

export default TargetaCredito
