import React, { useState } from 'react'
import { Row, Col, Button, Typography, Pagination } from 'antd'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import Item from './Item'

const { Title } = Typography
const CarArticulos = ({ carrito }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const [pagina, setPagina] = useState(1)
  const pageSize = 6
  return (
    <>
      <Col span={24} className='car-articulos'>
        {carrito.map((articulo, i) => {
          if (i < pageSize * pagina && i >= pageSize * (pagina - 1))
            return (
              <Row>
                <Item articulo={articulo} key={i} id={i} />
              </Row>
            )
        })}
        {carrito.length === 0 && (
          <Col span={24} align='center' justify='center'>
            <Title
              style={{
                color: 'var(--color-primario)',
                paddingTop:
                  isTabletOrMobile || isTabletOrMobileDevice ? '20px' : '150px'
              }}
            >
              TU CARRITO SE ENCUENTRA VACIO
            </Title>
            <Link to='/shop'>
              <Button
                style={{
                  backgroundColor: 'var(--color-primario)',
                  color: 'white',
                  borderRadius: '10px',
                  boxShadow: 'none',
                  fontSize: '20px',
                  height: 'auto'
                }}
              >
                IR A COMPRAR
              </Button>
            </Link>
          </Col>
        )}
      </Col>
      <Row className='pagination'>
        <Pagination
          style={{
            paddingTop: '50px',
            margin: 'auto',
            border: 'none',
            fontSize: '25px'
          }}
          size='small'
          total={carrito.length}
          showQuickJumper={false}
          showSizeChanger={false}
          current={pagina}
          defaultCurrent={1}
          pageSize={6}
          onChange={page => {
            setPagina(page)
          }}
        />
      </Row>
    </>
  )
}

export default CarArticulos
