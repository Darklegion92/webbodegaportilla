import React, { useContext, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Card, Typography, Button, Col, Row, Space } from 'antd'
import { GlobalContext } from '../../Context/GlobalContext'

const { Text } = Typography

function DetallesPedido () {
  const { consultarOrden, ordenCliente } = useContext(GlobalContext)
  const { idorden } = useParams()

  if (ordenCliente && ordenCliente.estado === 'APROBADO') {
    localStorage.removeItem('carrito')
  }
  useEffect(() => {
    consultarOrden(idorden)
  }, [idorden])

  const props = {
    style: {
      color: 'var(--color-primario)',
      fontSize: '17px',
      fontWeight: 'bold',
      textAlign: 'center'
    }
  }

  return (
    <Row justify='center' align='middle'>
      <Col span={24} align='center'>
        <Card>
          <Space size={10} direction='vertical'>
            <Row justify='center' align='middle'>
              <img src='../img/logo.png' alt='logo' width='300px' />
            </Row>
            <Row justify='center' align='middle'>
              <Text {...props}>
                {ordenCliente && ordenCliente.nombre.toUpperCase()}
              </Text>
            </Row>
            <Row justify='center' align='middle'>
              <Text {...props}>
                VALOR:{'    '}
                <span style={{ fontSize: '20px', color: 'red' }}>
                  $ {ordenCliente && ordenCliente.valor}
                </span>
              </Text>
            </Row>
            <Row justify='center' align='middle'>
              <Text {...props}>
                PEDIDO{' '}
                <span
                  style={{
                    color:
                      ordenCliente && ordenCliente.estado === 'APROBADO'
                        ? 'green'
                        : 'red'
                  }}
                >
                  {ordenCliente && ordenCliente.estado}
                </span>
              </Text>
            </Row>
            <Row justify='center' align='middle'>
              <Text {...props}>
                {ordenCliente && ordenCliente.estado === 'APROBADO'
                  ? 'SU PEDIDO YA SE ENCUENTRA EN PROCESO DE DESPACHO'
                  : 'SU PEDIDO NO FUE PAGADO Y SE HA CANCELADO'}
              </Text>
            </Row>
            <Row justify='center' align='middle'>
              <Text {...props}>
                {' '}
                SE DESPACHARA A LA DIRECCIÓN:
                <br />
                <span style={{ color: 'red' }}>
                  {ordenCliente && ordenCliente.direccion}
                </span>
              </Text>
            </Row>
            <Row justify='center' align='middle'>
              <Link
                to='/shop'
                style={{
                  backgroundColor: 'var(--color-primario)',
                  height: 'auto',
                  fontWeight: 'bold',
                  color: 'white',
                  fontSize: '20px',
                  padding: '10px',
                  borderRadius: '10px'
                }}
              >
                IR A LA TIENDA
              </Link>
            </Row>
          </Space>
        </Card>
      </Col>
    </Row>
  )
}

export default DetallesPedido
