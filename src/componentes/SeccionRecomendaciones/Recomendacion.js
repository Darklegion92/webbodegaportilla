import React from 'react'
import { Row, Col, Typography } from 'antd'
import { useMediaQuery } from 'react-responsive'
import ReactHtmlParser from 'react-html-parser';

import { BANCO } from '../../config/'

const { Text, Title } = Typography

const Modal = ({ recomendacion, tipo }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  return isTabletOrMobileDevice || isTabletOrMobile ? (
    <Col className='item-recomendaciones' span={24}>
      <Row justify='center'>
        <img
          src={BANCO.URL + recomendacion.img}
          style={
            tipo === 'CUADRADO'
              ? { width: '70%', marginBottom: '10px' }
              : { maxHeight: '500px', maxWidth: '110px', marginBottom: '10px' }
          }
        />
      </Row>
      <Row justify='center'>
        <Row>
          <Title>{recomendacion.titulo}</Title>
        </Row>
        <Row>
          <Text style={{ textAlign: 'center' }}>{recomendacion.texto}</Text>
        </Row>
      </Row>
    </Col>
  ) : (
    <Row gutter={16} className='item-recomendaciones'>
      <Col span={tipo === 'CUADRADO' ? 14 : 10}>
        <img
          src={BANCO.URL + recomendacion.img}
          style={{ maxHeight: '500px', maxWidth: '100%' }}
        />
      </Col>
      <Col span={tipo === 'CUADRADO' ? 10 : 14}>
        <Row >
          <Title level={3}>{recomendacion.titulo}</Title>
        </Row>
        <Row style={{
          width:"95%"
        }}>
        <Col span={24}>
          <Text>{ReactHtmlParser(recomendacion.texto)}</Text>
        </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Modal
