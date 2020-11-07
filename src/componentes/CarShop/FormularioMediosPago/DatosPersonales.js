import React from 'react'
import { Row, Col, Typography, Button } from 'antd'

const { Title, Text } = Typography

const stylesText = {
  color: 'var(--color-primario)'
}

const stylesButton = {
  background: 'var(--color-naranja)',
  color: 'white',
  fontWeight: 'bold'
}

function DatosPersonales ({ datos, setEditar }) {
  console.log(datos)
  const onClick = () => {
    setEditar(true)
  }

  return (
    <Row justify='center' style={{ marginBottom: '20px' }}>
      <Col span={12}>
        <Title style={stylesText} level={3}>
          DATOS ENVIO
        </Title>
        <Row>
          <Text style={stylesText} strong>
            {datos && datos.nombres + ' ' + datos.apellidos}
          </Text>
        </Row>
        <Row>
          <Text style={stylesText} strong>
            {datos && datos.direccion}
          </Text>
        </Row>
        <Row>
          <Text style={stylesText} strong>
            {datos && datos.celular}
          </Text>
        </Row>
      </Col>
      <Col span={12}>
        <Row justify='end' style={{ height: '100%' }} align='middle'>
          <Button style={stylesButton} onClick={onClick}>
            EDITAR
          </Button>
        </Row>
      </Col>
    </Row>
  )
}

export default DatosPersonales
