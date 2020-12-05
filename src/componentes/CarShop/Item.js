import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Typography } from 'antd'
import NumericInput from 'react-numeric-input'
import { useMediaQuery } from 'react-responsive'
import { BsImageAlt, BsTrash } from 'react-icons/bs'
import { BANCO } from '../../config'

import { GlobalContext } from '../../Context/GlobalContext'
const { Title, Text } = Typography

const Item = ({ articulo }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const [cantidad, setCantidad] = useState(1)
  const [total, setTotal] = useState()
  const [embalaje, setEmbalaje] = useState('Gr')
  const [img, setImg] = useState('')

  const {
    carrito,
    eliminarCarrito,
    actualizarCarrito,
    loading,
    setLoading
  } = useContext(GlobalContext)

  useEffect(() => {
    setImg(BANCO.URL + articulo.img)
    let total
    if (
      articulo.cant_dcto3 !== null &&
      parseInt(articulo.cantidad) >= parseInt(articulo.cant_dcto3)
    ) {
      total = articulo.cantidad * articulo.dcto3
    } else if (
      articulo.cant_dcto2 !== null &&
      parseInt(articulo.cantidad) >= parseInt(articulo.cant_dcto2)
    ) {
      total = articulo.cantidad * articulo.dcto2
    } else if (
      articulo.cant_dcto1 !== null &&
      parseInt(articulo.cantidad) >= parseInt(articulo.cant_dcto1)
    ) {
      total = articulo.cantidad * articulo.dcto1
    } else {
      total = articulo.cantidad * articulo.precio
    }
    setTotal(Math.round(total))
    setCantidad(
      articulo.cantidad > 999 ? articulo.cantidad / 1000 : articulo.cantidad
    )
    setEmbalaje(
      articulo.embalaje.toUpperCase() == 'UND'
        ? 'Und'
        : articulo.cantidad > 999
        ? 'Kg'
        : 'Gr'
    )
  }, [articulo])

  const onError = () => {
    setImg('img/articulodefecto.png')
  }

  const onChange = async e => {
    articulo.cantidad = embalaje.toUpperCase() == 'KG' ? e * 1000 : e
    await carrito.forEach((item, i) => {
      if (item.codigo === articulo.codigo) {
        carrito[i] = articulo
        return
      }
    })
    actualizarCarrito(carrito, articulo)
    setLoading(!loading)
  }

  const eliminar = () => {
    carrito.forEach((item, i) => {
      if (item.codigo === articulo.codigo) {
        const newCar = [...carrito.slice(0, i), ...carrito.slice(i + 1)]
        eliminarCarrito(newCar, item)
        return
      }
    })
  }
  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Row className='item' gutter={10}>
      <Col span={8}>
        <img src={img} width='100%' onError={onError} alt={img} />
      </Col>
      <Col span={14}>
        <Row>
          <Title level={2}>{articulo.nombre}</Title>
        </Row>
        <Row>
          <Title level={3} style={{ color: 'var(--color-naranja)' }}>
            $ {Math.round(total)}
          </Title>
        </Row>
        <Row align='middle' justify='center'>
          <Col span={5}>
            <Title level={4}>CANT.</Title>
          </Col>
          <Col span={19}>
            <Row gutter={10}>
              <Col span={18}>
                <NumericInput
                  value={cantidad}
                  min={
                    embalaje.toUpperCase() == 'GR'
                      ? 100
                      : embalaje.toUpperCase() == 'KG'
                      ? 0
                      : 1
                  }
                  step={
                    embalaje.toUpperCase() == 'GR'
                      ? 100
                      : embalaje.toUpperCase() == 'KG'
                      ? 0.1
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
                    let cant = 0
                    if (embalaje.toUpperCase() == 'KG') {
                      cant = e * 1000
                    } else {
                      cant = e
                    }

                    if (
                      articulo.cant_dcto3 !== null &&
                      parseInt(cant) >= parseInt(articulo.cant_dcto3)
                    ) {
                      setTotal(articulo.dcto3 * cant)
                    } else if (
                      articulo.cant_dcto2 !== null &&
                      parseInt(cant) >= parseInt(articulo.cant_dcto2)
                    ) {
                      setTotal(articulo.dcto2 * cant)
                    } else if (
                      articulo.cant_dcto1 !== null &&
                      parseInt(cant) >= parseInt(articulo.cant_dcto1)
                    ) {
                      setTotal(articulo.dcto1 * cant)
                    } else {
                      setTotal(articulo.precio * cant)
                    }
                    onChange(e)
                  }}
                  mobile={false}
                  className='input-edit'
                />
              </Col>
              <Col span={6}>
                <Text className='embalaje'>{embalaje}</Text>
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
      <Col span={2}>
        <BsTrash color='var(--color-naranja)' size={25} onClick={eliminar} />
      </Col>
    </Row>
  ) : (
    <Row className='item' gutter={30} justify='center' align='middle'>
      <Col span={11}>
        <Row gutter={20} style={{ width: '100%' }}>
          <Col span={6}>
            <img src={img} width='100px' onError={onError} />
          </Col>
          <Col span={18}>
            <Title level={3}>{articulo.nombre}</Title>
          </Col>
        </Row>
      </Col>
      <Col span={13}>
        <Row gutter={10} align='middle' justify='center'>
          <Col span={8}>
            <Title level={3}>$ {total}</Title>
          </Col>
          <Col span={4}>
            <Text className='embalaje'>CANTIDAD</Text>
          </Col>
          <Col span={10}>
            <Row>
              <NumericInput
                value={cantidad}
                min={
                  embalaje.toUpperCase() == 'GR'
                    ? 100
                    : embalaje.toUpperCase() == 'KG'
                    ? 0
                    : 1
                }
                step={
                  embalaje.toUpperCase() == 'GR'
                    ? 100
                    : embalaje.toUpperCase() == 'KG'
                    ? 0.1
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
                  let cant = 0
                  if (embalaje.toUpperCase() == 'KG') {
                    cant = e * 1000
                  } else {
                    cant = e
                  }

                  if (
                    articulo.cant_dcto3 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto3)
                  ) {
                    setTotal(articulo.dcto3 * cant)
                  } else if (
                    articulo.cant_dcto2 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto2)
                  ) {
                    setTotal(articulo.dcto2 * cant)
                  } else if (
                    articulo.cant_dcto1 !== null &&
                    parseInt(cant) >= parseInt(articulo.cant_dcto1)
                  ) {
                    setTotal(articulo.dcto1 * cant)
                  } else {
                    setTotal(articulo.precio * cant)
                  }
                  onChange(e)
                }}
                mobile={false}
                className='input-edit'
              />
              <Text className='embalaje'>{embalaje}</Text>
            </Row>
          </Col>
          <Col span={2}>
            <BsTrash
              color='var(--color-naranja)'
              size={20}
              onClick={eliminar}
            />
          </Col>
        </Row>
      </Col>
    </Row>
  )
}

export default Item
