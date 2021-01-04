import React, { useEffect, useState, useContext } from 'react'
import { Typography, Button, Row, Col } from 'antd'
import NumericInput from 'react-numeric-input'
import { AiFillStar } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
import { BANCO } from '../../config'
import { GlobalContext } from '../../Context/GlobalContext'

import './styles.css'

const { Text, Paragraph } = Typography

const Articulo = ({ articulo, onOk }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const { agregarCarrito, carrito } = useContext(GlobalContext)
  const [total, setTotal] = useState()
  const [cantidad, setCantidad] = useState(1)
  const [embalaje, setEmbalaje] = useState('Gr')
  const [img, setImg] = useState('')
  const [lista, setLista] = useState([])
  const [precioDescuento, setPrecioDescuento] = useState(0)
  useEffect(() => {
    setEmbalaje(articulo.embalaje)
    setImg(BANCO.URL + articulo.img)
    setPrecioDescuento(0)
    setCantidad(
      articulo.embalaje.toUpperCase() == 'GR' ? articulo.incremento : 1
    )
    setTotal(
      articulo.embalaje.toUpperCase() == 'GR'
        ? articulo.precio * articulo.incremento
        : articulo.precio
    )
    try {
      let list = articulo.lista.split('*')
      list.splice(0, 1)
      setLista(list)
    } catch (e) {}
  }, [articulo])

  const onError = () => {
    setImg('img/articulodefecto.png')
  }

  let enCarrito = false
  try {
    carrito.forEach(item => {
      if (articulo.codigo === item.codigo) {
        enCarrito = true
        return
      }
    })
  } catch (e) {}

  const estrellas = cantidad => {
    const estrellas = []

    for (let i = 0; i < cantidad; i++) {
      estrellas.push(
        <AiFillStar
          size={isTabletOrMobile || isTabletOrMobileDevice ? '30' : '40'}
          style={{ margin: '5px' }}
        />
      )
    }

    return estrellas
  }
  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <div className='estrellas-item-articulo'>
      {articulo.clasificacion > 0 && (
        <div className='estrellas-cantidad-articulo'>
          {estrellas(articulo.clasificacion)}
        </div>
      )}
      <Col span={24} className='articulo-tag' >
        <Row justify='center' style={{height:"40px"}}>
          <img src={img} width='60%' style={{height:"100%"}} onError={onError} alt={img} />
        </Row>
        <Row justify='center' className='fila2'>
          <Text className='nombre'>{articulo.nombre}</Text>
          <Text className='titulo'>BENEFICIOS</Text>
          <Text className='cuerpo'>{articulo.descripcion}</Text>
        </Row>
        {articulo.descuento > 0 && (
          <Row justify='center' className='fila3'>
            <Text>Ahorra $ {Math.round(total - precioDescuento) + ' COP'}</Text>
          </Row>
        )}
        <Row justify='center' className='fila4'>
          <Text>
            ${' '}
            {articulo.descuento > 0
              ? Math.round(total - (total * articulo.descuento) / 100)
              : Math.round(total)}{' '}
            COP
          </Text>
        </Row>
        <Row className='fila5' align='middle' justify='center' gutter={5}>
          <Col span={8} align='middle'>
            <NumericInput
              value={cantidad}
              min={
                embalaje.toUpperCase() == 'GR'
                  ? articulo.incremento
                  : embalaje.toUpperCase() == 'KG'
                  ? articulo.incremento/1000
                  : 1
              }
              step={
                embalaje.toUpperCase() == 'GR'
                  ? articulo.incremento
                  : embalaje.toUpperCase() == 'KG'
                  ? articulo.incremento / 1000
                  : 1
              }
              onChange={e => {
                if (e == 1000) {
                  setEmbalaje('Kg')
                  setCantidad(1)
                } else if (parseInt(e) <= 0) {
                  setEmbalaje('Gr')
                  setCantidad(e * 1000)
                } else setCantidad(e)

                if (embalaje.toUpperCase() == 'KG') {
                  const cant = e * 1000
                  if (
                    articulo.cant_dcto3 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto3)
                  ) {
                    setPrecioDescuento(articulo.dcto3 * cant)
                  } else if (
                    articulo.cant_dcto2 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto2)
                  ) {
                    setPrecioDescuento(articulo.dcto2 * cant)
                  } else if (
                    articulo.cant_dcto1 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto1)
                  ) {
                    setPrecioDescuento(articulo.dcto1 * cant)
                  } else {
                    setPrecioDescuento(0)
                  }
                  setTotal(articulo.precio * cant)
                } else {
                  const cant = e
                  if (
                    articulo.cant_dcto3 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto3)
                  ) {
                    setPrecioDescuento(articulo.dcto3 * cant)
                  } else if (
                    articulo.cant_dcto2 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto2)
                  ) {
                    setPrecioDescuento(articulo.dcto2 * cant)
                  } else if (
                    articulo.cant_dcto1 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto1)
                  ) {
                    setPrecioDescuento(articulo.dcto1 * cant)
                  } else {
                    setPrecioDescuento(0)
                  }
                  setTotal(articulo.precio * cant)
                }
              }}
              mobile={false}
              className='input-edit'
              disabled={enCarrito}
            />
          </Col>
          <Col span={5}>
            <Text
              style={{
                fontWeight: 'normal',
                fontSize: '20px',
                width: '100%',
                textAlign: 'left',
                color: 'var(--color-primario)'
              }}
            >
              {embalaje}
            </Text>
          </Col>
        </Row>
        <Row justify='center'>
          <Button
            onClick={() => {
              if (!enCarrito) {
                const nuevoArticulo = articulo
                nuevoArticulo.cantidad =
                  embalaje.toUpperCase() == 'KG' ? cantidad * 1000 : cantidad
                agregarCarrito([...carrito, nuevoArticulo], nuevoArticulo)
                onOk(nuevoArticulo.cantidad)
              }
            }}
          >
            {enCarrito ? 'YA AGREGADO' : 'AÑADIR AL CARRITO'}
          </Button>
        </Row>
      </Col>
    </div>
  ) : (
    <div className='estrellas-item-articulo'>
      {articulo.clasificacion > 0 && (
        <div className='estrellas-cantidad-articulo'>
          {estrellas(articulo.clasificacion)}
        </div>
      )}
      <Row className='articulo-tag' gutter={25}>
        <Col span={14}>
          <img src={img} width='100%' onError={onError} alt={img} />
        </Col>
        <Col span={10}>
          <Row className='fila1'>
            <Text>{articulo.nombre}</Text>
          </Row>
          <Row className='fila2'>
            <Col span={24}>
              <Text className='titulo'>BENEFICIOS</Text>
              <Paragraph className='cuerpo'>
                <Text>{articulo.descripcion}</Text>
                {lista.length > 0 &&
                  lista.map(item => (
                    <ul>
                      <li>
                        <div>{item}</div>
                      </li>
                    </ul>
                  ))}
              </Paragraph>
            </Col>
          </Row>
          {precioDescuento > 0 && (
            <Row className='fila3'>
              <Text>
                Ahorra $ {Math.round(total - precioDescuento) + ' COP'}
              </Text>
            </Row>
          )}
          <Row className='fila4'>
            <Text>
              ${' '}
              {precioDescuento > 0
                ? Math.round(precioDescuento)
                : Math.round(total)}{' '}
              COP
            </Text>
          </Row>
          <Row className='fila5'>
            <Col span={10}>
              <Row align='middle'>
                <Col span={18}>
                  <NumericInput
                    value={cantidad}
                    min={
                      embalaje.toUpperCase() == 'GR'
                        ? articulo.incremento
                        : embalaje.toUpperCase() == 'KG'
                        ? 0
                        : 1
                    }
                    step={
                      embalaje.toUpperCase() == 'GR'
                        ? articulo.incremento
                        : embalaje.toUpperCase() == 'KG'
                        ? articulo.incremento/1000
                        : 1
                    }
                    onChange={e => {
                      if (e == 1000) {
                        setEmbalaje('Kg')
                        setCantidad(1)
                      } else if (parseInt(e) <= 0) {
                        setEmbalaje('Gr')
                        setCantidad(e * 1000)
                      } else setCantidad(e)

                      if (embalaje.toUpperCase() == 'KG') {
                        const cant = e * 1000
                        if (
                          articulo.cant_dcto3 !== null &&
                          parseInt(cant) >= parseInt(articulo.cant_dcto3)
                        ) {
                          setPrecioDescuento(articulo.dcto3 * cant)
                        } else if (
                          articulo.cant_dcto2 !== null &&
                          parseInt(cant) >= parseInt(articulo.cant_dcto2)
                        ) {
                          setPrecioDescuento(articulo.dcto2 * cant)
                        } else if (
                          articulo.cant_dcto1 !== null &&
                          parseInt(cant) >= parseInt(articulo.cant_dcto1)
                        ) {
                          setPrecioDescuento(articulo.dcto1 * cant)
                        } else {
                          setPrecioDescuento(0)
                        }
                        setTotal(articulo.precio * cant)
                      } else {
                        const cant = e

                        if (
                          articulo.cant_dcto3 !== null &&
                          parseInt(cant) >= parseInt(articulo.cant_dcto3)
                        ) {
                          setPrecioDescuento(articulo.dcto3 * cant)
                        } else if (
                          articulo.cant_dcto2 !== null &&
                          parseInt(cant) >= parseInt(articulo.cant_dcto2)
                        ) {
                          setPrecioDescuento(articulo.dcto2 * cant)
                        } else if (
                          articulo.cant_dcto1 !== null &&
                          parseInt(cant) >= parseInt(articulo.cant_dcto1)
                        ) {
                          setPrecioDescuento(articulo.dcto1 * cant)
                        } else {
                          setPrecioDescuento(0)
                        }
                        setTotal(articulo.precio * cant)
                      }
                    }}
                    mobile={false}
                    className='input-edit'
                    disabled={enCarrito}
                  />
                </Col>
                <Col span={6}>
                  <Text
                    style={{
                      fontWeight: 'normal',
                      fontSize: '10px',
                      width: '100%',
                      textAlign: 'left',
                      color: 'var(--color-primario)'
                    }}
                  >
                    {embalaje}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Button
                onClick={() => {
                  if (!enCarrito) {
                    const nuevoArticulo = articulo
                    nuevoArticulo.cantidad =
                      embalaje.toUpperCase() == 'KG'
                        ? cantidad * 1000
                        : cantidad
                    nuevoArticulo.descuento =
                      precioDescuento / nuevoArticulo.cantidad
                    agregarCarrito([...carrito, nuevoArticulo], nuevoArticulo)
                    onOk()
                  }
                }}
              >
                {enCarrito ? 'YA AGREGADO' : 'AÑADIR AL CARRITO'}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Articulo
