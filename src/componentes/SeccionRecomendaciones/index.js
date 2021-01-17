import React, { useContext, useState, Fragment } from 'react'
import { Typography, Modal, Row, Col } from 'antd'
import { useMediaQuery } from 'react-responsive'
import { BANCO } from '../../config'
import Recomendacion from './Recomendacion'
import { GlobalContext } from '../../Context/GlobalContext'
import './styles.css'
const { Title } = Typography

function SeccionRecomendaciones () {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const { SeccionRecomendaciones } = useContext(GlobalContext)
  const [modal, setModal] = useState(false)
  const [recomendacion, setRecomendacion] = useState({})
  const [tipo, setTipo] = useState('CUADRADO')
  const cerrarModal = () => {
    setModal(false)
  }

  const onClick = e => {
    const i = parseInt(e.target.id)

    if (i === 1 || i === 4 || i === 6 || i === 8 || i === 11) {
      setTipo('RECTANGULO')
    } else {
      setTipo('CUADRADO')
    }
    setRecomendacion(SeccionRecomendaciones[i])
    setModal(true)
  }

  return (
    SeccionRecomendaciones.length > 0 && (
      <div className='recomendaciones'>
        <Title>RECETAS</Title>
        {BANCO.URL + SeccionRecomendaciones[0] && (
          <Fragment>
            <Row justify='center'>
              <Col span={6}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[0].img}
                  alt={BANCO.URL + SeccionRecomendaciones[0].img}
                  style={{ width: '100%', height: '100%' }}
                  id={0}
                  onClick={onClick}
                />
              </Col>
              <Col span={3}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[1].img}
                  alt={BANCO.URL + SeccionRecomendaciones[1].img}
                  style={{ width: '100%', height: '100%' }}
                  id={1}
                  onClick={onClick}
                />
              </Col>
              <Col span={6}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[2].img}
                  alt={BANCO.URL + SeccionRecomendaciones[2].img}
                  style={{ width: '100%', height: '100%' }}
                  id={2}
                  onClick={onClick}
                />
              </Col>
              <Col span={6}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[3].img}
                  alt={BANCO.URL + SeccionRecomendaciones[3].img}
                  style={{ width: '100%', height: '100%' }}
                  id={3}
                  onClick={onClick}
                />
              </Col>
            </Row>
            <Row justify='center'>
              <Col span={3}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[4].img}
                  alt={BANCO.URL + SeccionRecomendaciones[4].img}
                  style={{ width: '100%', height: '100%' }}
                  id={4}
                  onClick={onClick}
                />
              </Col>
              <Col span={6}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[5].img}
                  alt={BANCO.URL + SeccionRecomendaciones[5].img}
                  style={{ width: '100%', height: '100%' }}
                  id={5}
                  onClick={onClick}
                />
              </Col>
              <Col span={3}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[6].img}
                  alt={BANCO.URL + SeccionRecomendaciones[6].img}
                  style={{ width: '100%', height: '100%' }}
                  id={6}
                  onClick={onClick}
                />
              </Col>
              <Col span={6}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[7].img}
                  alt={BANCO.URL + SeccionRecomendaciones[7].img}
                  style={{ width: '100%', height: '100%' }}
                  id={7}
                  onClick={onClick}
                />
              </Col>
              <Col span={3}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[8].img}
                  alt={BANCO.URL + SeccionRecomendaciones[8].img}
                  style={{ width: '100%', height: '100%' }}
                  id={8}
                  onClick={onClick}
                />
              </Col>
            </Row>
            <Row justify='center'>
              <Col span={6}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[9].img}
                  alt={BANCO.URL + SeccionRecomendaciones[9].img}
                  style={{ width: '100%', height: '100%' }}
                  id={9}
                  onClick={onClick}
                />
              </Col>
              <Col span={6}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[10].img}
                  alt={BANCO.URL + SeccionRecomendaciones[10].img}
                  style={{ width: '100%', height: '100%' }}
                  id={10}
                  onClick={onClick}
                />
              </Col>
              <Col span={3}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[11].img}
                  alt={BANCO.URL + SeccionRecomendaciones[11].img}
                  style={{ width: '100%', height: '100%' }}
                  id={11}
                  onClick={onClick}
                />
              </Col>
              <Col span={6}>
                <img
                  src={BANCO.URL + SeccionRecomendaciones[12].img}
                  alt={BANCO.URL + SeccionRecomendaciones[12].img}
                  style={{ width: '100%', height: '100%' }}
                  id={12}
                  onClick={onClick}
                />
              </Col>
            </Row>
          </Fragment>
        )}
        <Modal
          width={
            isTabletOrMobile || isTabletOrMobileDevice
              ? 350
              : tipo === 'CUADRADO'
              ? 900
              : 600
          }
          visible={modal}
          onCancel={cerrarModal}
          footer={null}
          style={{ borderRadius: '50px' }}
        >
          <Recomendacion recomendacion={recomendacion} tipo={tipo} />
        </Modal>
      </div>
    )
  )
}
export default SeccionRecomendaciones
