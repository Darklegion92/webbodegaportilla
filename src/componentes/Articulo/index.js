import React, { useEffect, useState, useContext } from 'react'
import { Typography, Button, Row, Col } from 'antd'
import numeral from 'numeral'
import { AiFillStar } from 'react-icons/ai'
import { useMediaQuery } from 'react-responsive'
import { BANCO } from '../../config'
import InputNumber from '../InputNumber'
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

    setCantidad(articulo.incremento)
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


  const onChange = async type => {

    let e = articulo.incremento
    let emb = embalaje
    if(type==='minus'){
      if(embalaje.toUpperCase()==='GR' || embalaje.toUpperCase()==='UND'){
        e = cantidad-articulo.incremento
      }else if(embalaje.toUpperCase()==='KG'){
        e = cantidad-articulo.incremento/1000
      }
    }else{
      if(embalaje.toUpperCase()==='GR' || embalaje.toUpperCase()==='UND' ){
        e = cantidad+articulo.incremento
      }else if(embalaje.toUpperCase()==='KG'){
        e = cantidad+articulo.incremento/1000
      }
    }

    if(embalaje.toUpperCase()==='GR'){
      if(e>=1000 && type==='plus'){
        emb='Kg'
        e= (e/1000)
      }else if(e>=1000 && type==='minus'){
        emb='Kg'
        e= -(e/1000)
      }
    }
    if(Math.round(e*10)/10<1 && (['GR','KG'].includes(embalaje.toUpperCase()))){
      if(type==='plus'){
        emb='Gr'
        e= e*1000
      }else if(type==='minus'){
        emb='Gr'
        e= e*1000
      }

    }

    if(e<0 && type==='minus'){
      e=articulo.incremento
    }

    if((emb.toUpperCase() == 'KG' && e*1000>=articulo.incremento)||
    (emb.toUpperCase() == 'GR' && (e>=articulo.incremento|| e<1))||
    (emb.toUpperCase() === 'UND' && e>0) ){
      
      articulo.cantidad = embalaje.toUpperCase() == 'KG' ? e * 1000 : e
      setEmbalaje(emb)
      const pru = e.toString().split('.')
      if(pru[1] ) e = parseFloat(pru[0]+'.'+pru[1].substring(0,1))
      setCantidad(e)

      if(articulo.cant_dcto3 > 0 && articulo.cant_dcto3<=(emb.toUpperCase() == 'KG' ?e*1000: e)){
        console.log('descuento 3');
        setPrecioDescuento(articulo.dcto3 * e* (emb.toUpperCase() == 'KG'?1000:1))
      } else if(articulo.cant_dcto2 && articulo.cant_dcto2<=(emb.toUpperCase() == 'KG' ?e*1000: e)){
        console.log('descuento 2');
        setPrecioDescuento(articulo.dcto2 * e* (emb.toUpperCase() == 'KG'?1000:1))
      } else if(articulo.cant_dcto1 && articulo.cant_dcto1<=(emb.toUpperCase() == 'KG' ?e*1000: e)){
        console.log('descuento 1');
        setPrecioDescuento(articulo.dcto1 * e * (emb.toUpperCase() == 'KG'?1000:1))
      }else{
        setPrecioDescuento(0)
      }

      setTotal(emb.toUpperCase() == 'KG' && articulo.cantidad === 1 ? articulo.precio * articulo.cantidad *1000:articulo.precio * articulo.cantidad)
    }
  }


  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <div className='estrellas-item-articulo'>
      {articulo.clasificacion > 0 && (
        <div className='estrellas-cantidad-articulo'>
          {estrellas(articulo.clasificacion)}
        </div>
      )}
      <Col span={24} className='articulo-tag'>
        <Row justify='center' style={{ height: '30%' }}>
          <img
            src={img}
            width='50%'
            style={{ height: '100%' }}
            onError={onError}
            alt={img}
          />
        </Row>
        <Row justify='center' className='fila2'>
          <Text className='nombre'>{articulo.nombre}</Text>
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
        </Row>
        {articulo.descuento > 0 && (
          <Row justify='center' className='fila3'>
            <Text>Ahorra {numeral(total - precioDescuento).format(' 0,0')}</Text>
          </Row>
        )}
        <Row justify='center' className='fila4'>
          <Text>
          {numeral(articulo.descuento > 0
              ? Math.round(total - (total * articulo.descuento) / 100)
              : Math.round(total)).format('$ 0,0')}
          </Text>
        </Row>
        <Row className='fila5' align='middle' justify='center' gutter={5}>
          <Col span={8} align='middle'>
          <InputNumber
             value={cantidad}
             onChange={onChange}
             
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
                Ahorra {numeral(total - precioDescuento).format('$ 0,0')}
              </Text>
            </Row>
          )}
          <Row className='fila4'>
            <Text>
            {numeral(precioDescuento > 0
                ? Math.round(precioDescuento)
                : Math.round(total)).format('$ 0,0')}
            </Text>
          </Row>
          <Row className='fila5'>
            <Col span={10}>
              <Row align='middle'>
                <Col span={18}>
                <InputNumber
                  value={cantidad}
                  onChange={onChange}
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
