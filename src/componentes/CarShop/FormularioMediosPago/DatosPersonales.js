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
  const onClick = () => {
    setEditar(true)
  }

  return (
    <Row justify='center'>
      <Col span={12}>
        <Row></Row>
        <Title style={stylesText} level={3}>
          DATOS ENVIO
        </Title>
        <Row>
          <Text style={stylesText} strong>
            {datos.nombre}
          </Text>
        </Row>
        <Row>
          <Text style={stylesText} strong>
            {datos.direccion}
          </Text>
        </Row>
        <Row>
          <Text style={stylesText} strong>
            {datos.telefono}
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
