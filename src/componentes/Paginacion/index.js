import React from 'react'
import { Row, Typography } from 'antd'
import {
  LeftOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
  RightOutlined
} from '@ant-design/icons'

import './styles.css'

const { Text } = Typography
const items = (cantidad, style, pagina, setPagina) => {
  let numeracion = []
  for (let i = 1; i <= pagina; i++) {
    pagina - 5 < i
      ? numeracion.push(
          <Text
            style={style}
            className={i === pagina ? 'pagina-activa' : 'pagina-inactiva'}
            onClick={() => {
              setPagina(i)
            }}
          >
            {i}
          </Text>
        )
      : i - 5 === 1 &&
        numeracion.push(
          <Text
            style={style}
            className={i === pagina ? 'pagina-activa' : 'pagina-inactiva'}
            onClick={() => {
              setPagina(i)
            }}
          >
            ...
          </Text>
        )

    i === pagina + 1 &&
      numeracion.push(
        <Text
          style={style}
          className={i === pagina ? 'pagina-activa' : 'pagina-inactiva'}
          onClick={() => {
            setPagina(i)
          }}
        >
          ...
        </Text>
      )
  }
  return numeracion
}
const Paginacion = ({
  cantidad,
  cantidadItems,
  style,
  pagina,
  setPagina,
  className
}) => {
  const cantidadNeta = parseInt(cantidad / cantidadItems + 0.99)
  return (
    <Row
      justify='center'
      align='middle'
      className={className || 'default-pagination'}
    >
      <DoubleLeftOutlined
        style={style}
        onClick={() => {
          setPagina(1)
        }}
      />
      <LeftOutlined
        style={style}
        onClick={() => {
          if (pagina > 1) setPagina(pagina - 1)
        }}
      />
      {items(cantidadNeta, style, pagina, setPagina)}
      <RightOutlined
        style={style}
        onClick={() => {
          if (pagina < cantidadNeta) setPagina(pagina + 1)
        }}
      />
      <DoubleRightOutlined
        style={style}
        onClick={() => {
          setPagina(cantidadNeta)
        }}
      />
    </Row>
  )
}

export default Paginacion
