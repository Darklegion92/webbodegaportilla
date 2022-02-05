import React, { useContext, useEffect, useState } from 'react'
import { Col, Row, Typography, Input } from 'antd'
import { useMediaQuery } from 'react-responsive'
import {  BsTrash } from 'react-icons/bs'
import { BANCO } from '../../config'

import { GlobalContext } from '../../Context/GlobalContext'
import numeral from 'numeral'
import InputNumber from '../InputNumber'
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
    const images = articulo.img.split('|')
    setImg(BANCO.URL + images[0])
    let total
    if (
      articulo.cant_dcto3 !== null &&
      articulo.cant_dcto3 !== 0 &&
      parseInt(articulo.cantidad) >= parseInt(articulo.cant_dcto3)
    ) {
      total = articulo.cantidad * articulo.dcto3
    } else if (
      articulo.cant_dcto2 !== null &&
      articulo.cant_dcto2 !== 0 &&
      parseInt(articulo.cantidad) >= parseInt(articulo.cant_dcto2)
    ) {
      total = articulo.cantidad * articulo.dcto2
    } else if (
      articulo.cant_dcto1 !== null &&
      articulo.cant_dcto1 !== 0 &&
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

  const onChange = async type => {
    let e = articulo.incremento
    let emb = embalaje
    if (type === 'minus') {
      if (embalaje.toUpperCase() === 'GR') {
        e = cantidad - articulo.incremento
      } else {
        e = cantidad - articulo.incremento / 1000
      }
    } else {
      if (embalaje.toUpperCase() === 'GR') {
        e = cantidad + articulo.incremento
      } else {
        e = cantidad + articulo.incremento / 1000
      }
    }

    if (embalaje.toUpperCase() === 'GR') {
      if (e >= 1000 && type === 'plus') {
        emb = 'Kg'
        e = e / 1000
      } else if (e >= 1000 && type === 'minus') {
        console.log(e)
        emb = 'Kg'
        e = -(e / 1000)
      }
    }
    if (Math.round(e * 10) / 10 < 1) {
      if (type === 'plus') {
        emb = 'Gr'
        e = e * 1000
      } else if (type === 'minus') {
        console.log(e)
        emb = 'Gr'
        e = e * 1000
      }
    }

    if (e < 0 && type === 'minus') {
      e = articulo.incremento
    }

    if (
      (emb.toUpperCase() == 'KG' && e * 1000 >= articulo.incremento) ||
      (emb.toUpperCase() == 'GR' && (e >= articulo.incremento || e < 1))
    ) {
      articulo.cantidad = embalaje.toUpperCase() == 'KG' ? e * 1000 : e
      await carrito.forEach((item, i) => {
        if (item.codigo === articulo.codigo) {
          carrito[i] = articulo
          return
        }
      })
      setEmbalaje(emb)
      console.log(e)
      setCantidad(emb.toUpperCase() == 'KG' ? Math.round(e * 10) / 10 : e)
      actualizarCarrito(carrito, articulo)
      setLoading(!loading)
    }
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
                <InputNumber value={cantidad} onChange={onChange} />
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
            <Title level={3}>{numeral(total).format('$ 0,0')}</Title>
          </Col>
          <Col span={4}>
            <Text className='embalaje'>CANTIDAD</Text>
          </Col>
          <Col span={10}>
            <Row>
              <Col span={18}>
                <InputNumber value={cantidad} onChange={onChange} />
              </Col>
              <Col span={6}>
                <Text className='embalaje'>{embalaje}</Text>
              </Col>
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
