import React, { useState,  useContext, useEffect } from 'react'
import { Row, Col, Modal } from 'antd'
import { useMediaQuery } from 'react-responsive'
import FiltrosTienda from '../FiltrosTienda'
import ArticulosTienda from '../ArticulosTienda'
import Articulo from '../Articulo'
import { GlobalContext } from '../../Context/GlobalContext'
import VentanaCarga from '../VentanaCarga'
import Comprado from '../ArticuloComprado'

import './styles.css'

const Tienda = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const { articulosTienda, modalCarga,consultarArticulosTienda } = useContext(GlobalContext)
  const [modalArticulo, setModalArticulo] = useState(false)
  const [modalComprado, setModalComprado] = useState(false)
  const [articuloSeleccionado, setArticuloSeleccionado] = useState()
  const [pagina, setPagina] = useState(1)

  const subirScroll = () => {
    window.scrollTo(0, 0)
  }

  const cerrarArticulo = () => {
    setModalArticulo(false)
  }

  const agregarArticulo = e => {
    setArticuloSeleccionado(articulosTienda[e])
    setModalArticulo(true)
  }
  const agregarCantidad = cantidad => {
    const newArticulo = articuloSeleccionado
    newArticulo.setCantidad = cantidad
    setArticuloSeleccionado(newArticulo)
    setModalArticulo(false)
    setModalComprado(true)
  }
  const cerrarComprado = () => {
    setModalComprado(false)
  }

useEffect(()=>{
    consultarArticulosTienda()

},[])

  return (
    <Row>
      {(!isTabletOrMobile || !isTabletOrMobileDevice) && (
        <Col span={5}>
          <FiltrosTienda setPagina={setPagina} />
        </Col>
      )}
      <Col span={isTabletOrMobile || isTabletOrMobileDevice ? 24 : 19}>
        <ArticulosTienda
          articulos={articulosTienda}
          onClick={agregarArticulo}
          paginacion={20}
          subirScroll={subirScroll}
          pagina={pagina}
          setPagina={setPagina}
        />
      </Col>
      <Modal
        width={isTabletOrMobile || isTabletOrMobileDevice ? 450 : 900}
        visible={modalArticulo}
        onCancel={cerrarArticulo}
        footer={null}
        style={{ borderRadius: '50px' }}
        centered
      >
        <Articulo articulo={articuloSeleccionado} onOk={agregarCantidad} />
      </Modal>
      <Modal
        width={isTabletOrMobile || isTabletOrMobileDevice ? 450 : 500}
        visible={modalComprado}
        onCancel={cerrarComprado}
        footer={null}
        style={{ borderRadius: '50px' }}
        centered
      >
        <Comprado articulo={articuloSeleccionado} onOk={setModalComprado} />
      </Modal>
      <Modal
        centered
        footer={null}
        closable={false}
        destroyOnClose
        visible={modalCarga}
      >
        <VentanaCarga />
      </Modal>
    </Row>
  )
}
export default Tienda
