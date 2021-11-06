import React, { useState, useEffect } from 'react'
import { Typography, Button, Row, Col, Card } from 'antd'
import { useMediaQuery } from 'react-responsive'
import { AiFillStar } from 'react-icons/ai'
import { BANCO } from '../../config'
import numeral from 'numeral'

const { Text, Title } = Typography
const Item = ({ articulo, id, onClick, enCarrito }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const [img, setImg] = useState()
  useEffect(() => {
    const images = articulo.img.split('|')
    setImg(BANCO.URL + images[0])
  }, [articulo])
  const estrellas = cantidad => {
    const estrellas = []
    for (let i = 0; i < cantidad; i++) {
      estrellas.push(
        <AiFillStar
          size={isTabletOrMobile || isTabletOrMobileDevice ? '10' : '20'}
        />
      )
    }

    return estrellas
  }

  const onError = () => {
    setImg('img/articulodefecto.png')
  }

  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Row className='item' onClick={() => onClick(id)} gutter={16}>
      <Col span={8}>
        <div className='estrellas-item'>
          {articulo.clasificacion > 0 && (
            <div className='estrellas-cantidad'>
              {estrellas(articulo.clasificacion)}
            </div>
          )}
          <img src={img} width='100%' onError={onError} alt={img} />
        </div>
      </Col>
      <Col span={16}>
        <Row>
          <Title level={3}>{articulo.nombre}</Title>
        </Row>
        <Row
          align='middle'
          style={{
            visibility: articulo.descuento > 0 ? 'visible' : 'hidden',
            marginLeft: '10px'
          }}
        >
          <Text className='descuento'>
            {numeral(
              articulo.embalaje.toUpperCase() == 'GR'
                ? Math.round(articulo.precio * articulo.incremento)
                : Math.round(articulo.precio)
            ).format('$ 0,0')}
          </Text>
        </Row>
        <Row gutter={5} justify='start'>
          <Text strong className='precio'>
            {numeral(
              articulo.embalaje.toUpperCase() == 'GR'
                ? Math.round(articulo.precio * articulo.incremento)
                : Math.round(articulo.precio)
            ).format('$ 0,0')}
          </Text>
        </Row>

        <Row justify='start'>
          <Button>{enCarrito ? 'YA AGREGADO' : 'AÑADIR AL CARRITO'}</Button>
        </Row>
      </Col>
    </Row>
  ) : (
    <div className='estrellas-item'>
      {articulo.clasificacion > 0 && (
        <div className='estrellas-cantidad'>
          {estrellas(articulo.clasificacion)}
        </div>
      )}
      <Card
        onClick={() => onClick(id)}
        bodyStyle={{
          maxWidth: '170px',
          boxShadow: '0px 0px 17px 5px rgba(133,124,133,1)',
          borderRadius: '10px',
          marginLeft: 5,
          marginRight: 5,
          marginBottom: 15,
          padding: 0,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 20
        }}
      >
        <img src={img} width='100%' onError={onError} alt={img} />
        <Title
          level={4}
          style={{
            color: 'var(--color-primario)',
            fontSize: '12px',
            textAlign: 'center',
            minHeight: 45
          }}
        >
          {articulo.nombre}
        </Title>
        <Title
          level={4}
          style={{
            color: 'var(--color-primario)',
            fontSize: '16px',
            textAlign: 'center',
            margin: 0
          }}
        >
          {numeral(
            articulo.embalaje.toUpperCase() == 'GR'
              ? Math.round(articulo.precio * articulo.incremento)
              : Math.round(articulo.precio)
          ).format('$ 0,0') +
            ' x ' +
            articulo.incremento +
            ' ' +
            articulo.embalaje}
        </Title>
        <Row justify='center'>
          <Button
            style={{
              backgroundColor: 'var(--color-naranja)',
              borderRadius: '5px'
            }}
          >
            {enCarrito ? (
              <Text strong style={{ fontSize: '12px', color: 'white' }}>
                YA AGREGADO
              </Text>
            ) : (
              <Text strong style={{ fontSize: '12px', color: 'white' }}>
                AÑADIR AL CARRITO
              </Text>
            )}
          </Button>
        </Row>
      </Card>
    </div>
  )
}

export default Item
