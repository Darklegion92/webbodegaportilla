import React from 'react'
import { Row, Col, Typography, Button } from 'antd'

const { Paragraph } = Typography

const styleBoton = {
  backgroundColor: 'var(--color-naranja)',
  color: 'white',
  fontWeight: 'bold'
}

function Efecty ({ setSelected, setOpen, guardarMedio }) {
  const onClick = () => {
    setSelected('efecty')
    guardarMedio(null, 'efecty')
    setOpen()
  }
  return (
    <Col>
      <Row>
        <Paragraph>
          <ul>
            <li>Paga en cualquier efecty del país</li>
            <li>
              Al hacer el pago en Efecty, informa que esta dirigido a BODEGA
              PORTILLA
            </li>
            <li>El número de referencia es tu número de pedido</li>
            <li>
              Una vez transcurridads 24 horas sin recibir el pago de tu pedido
              este será cancelado
            </li>
          </ul>
        </Paragraph>
      </Row>
      <Row justify='end'>
        <Button style={styleBoton} onClick={onClick}>
          GUARDAR
        </Button>
      </Row>
    </Col>
  )
}

export default Efecty
