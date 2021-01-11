import React, { useContext, useState, useEffect } from 'react'
import { Row, Col, Typography, Pagination } from 'antd'
import { useMediaQuery } from 'react-responsive'
import { GlobalContext } from '../../Context/GlobalContext'
import Head from './Head'
import Item from './Item'

import './styles.css'
const { Title } = Typography

const ArticulosTienda = ({ articulos, onClick, paginacion, subirScroll }) => {
  const [pagina, setPagina] = useState(1)

  const { carrito } = useContext(GlobalContext)

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })

  useEffect(() => {
    console.log('se ejecuta articulo')
    subirScroll()
  }, [pagina])
  return (
    <Col className='articulos-tienda' span={24}>
      <Row>
        <Head setPagina={setPagina} />
      </Row>
      {isTabletOrMobile || isTabletOrMobileDevice ? (
        articulos.mensaje ? (
          <Title style={{ color: 'var(--color-primario)' }}>
            No hay coincidencias en la busqueda
          </Title>
        ) : (
          articulos.map((articulo, i) => {
            let enCarrito = false
            carrito.forEach(item => {
              if (articulo.codigo === item.codigo) {
                enCarrito = true
                return
              }
            })

            if (i < paginacion * pagina && i >= paginacion * (pagina - 1))
              return (
                <Row>
                  <Item
                    articulo={articulo}
                    onClick={onClick}
                    id={i}
                    enCarrito={enCarrito}
                  />
                </Row>
              )
          })
        )
      ) : (
        <Row style={{ height: '1200px' }}>
          {articulos.mensaje ? (
            <Title style={{ color: 'var(--color-primario)' }}>
              No hay coincidencias en la busqueda
            </Title>
          ) : (
            articulos.map((articulo, i) => {
              let enCarrito = false
              carrito.forEach(item => {
                if (articulo.codigo === item.codigo) {
                  enCarrito = true
                  return
                }
              })
              if (i < paginacion * pagina && i >= paginacion * (pagina - 1))
                return (
                  <Item
                    articulo={articulo}
                    onClick={onClick}
                    id={i}
                    enCarrito={enCarrito}
                  />
                )
            })
          )}
        </Row>
      )}
      <Row className='pagination'>
        <Pagination
          style={{
            paddingTop: '50px',
            margin: 'auto',
            border: 'none',
            fontSize: '25px'
          }}
          size='small'
          total={articulos.length}
          showQuickJumper={false}
          showSizeChanger={false}
          current={pagina}
          defaultCurrent={1}
          pageSize={20}
          onChange={page => {
            setPagina(page)
          }}
        />
      </Row>
    </Col>
  )
}

export default ArticulosTienda
