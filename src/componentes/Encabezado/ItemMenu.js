import React, { useState } from 'react'
import { Typography, Row, Col } from 'antd'
import { useMediaQuery } from 'react-responsive'
import { BANCO } from '../../config'
import numeral from 'numeral'
const { Text, Title } = Typography

const ItemMenu = ({ articulo }) => {
  const letras = articulo.nombre.split('')
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const [img, setImg] = useState(BANCO.URL + articulo.img)
  const numero = 13
  let texto = ''
  let texto2 = ''

  const onError = () => {
    setImg('img/articulodefecto.png')
  }

  return (
    <Row className='item-menu' gutter={6} align='middle'>
      <Col span={6}>
        <img src={img} width='100%' onError={onError} alt={img} />
      </Col>
      <Col span={!isTabletOrMobile || !isTabletOrMobileDevice ? 18 : 17}>
        {!isTabletOrMobile || !isTabletOrMobileDevice ? (
          letras.length >= numero ? (
            <Title level={4} style={{ marginTop: '10px' }}>
              {letras.map((letra, i) => {
                texto += letra
                if (i == numero) {
                  return texto
                }
              })}
            </Title>
          ) : (
            <Title level={4} style={{ marginTop: '10px' }}>
              {articulo.nombre}
            </Title>
          )
        ) : (
          <Title level={4}>{articulo.nombre}</Title>
        )}
        {(!isTabletOrMobile || !isTabletOrMobileDevice) &&
          letras.length > numero && (
            <Title level={4}>
              {letras.map((letra, i) => {
                if (i > numero && i <= 32) {
                  texto2 += letra
                }
                if (i == letras.length - 1) {
                  return texto2
                }
              })}
            </Title>
          )}
        <Text>
        {numeral(articulo.cant_dcto3 !== null &&
          parseInt(articulo.cantidad) >= parseInt(articulo.cant_dcto3)
            ? Math.round(articulo.dcto3 * articulo.cantidad)
            : articulo.cant_dcto2 !== null &&
              parseInt(articulo.cantidad) >= parseInt(articulo.cant_dcto2)
            ? Math.round(articulo.dcto2 * articulo.cantidad)
            : articulo.cant_dcto1 !== null &&
              parseInt(articulo.cantidad) >= parseInt(articulo.cant_dcto1)
            ? Math.round(articulo.dcto1 * articulo.cantidad)
            : Math.round(articulo.precio * articulo.cantidad)).format('$ 0,0')}
        </Text>
      </Col>
    </Row>
  )
}

export default ItemMenu
