import React, { useContext } from 'react'
import { Typography } from 'antd'
import { Link } from 'react-router-dom'

import Agrupaciones from './Agrupaciones'
import { GlobalContext } from '../../Context/GlobalContext'
import './styles.css'

const { Title } = Typography

function SeccionProductos () {
  const { seccionProductos, grupos, consultarArticulosTienda } = useContext(
    GlobalContext
  )

  const onClick = async e => {
    const id = e.target.id
    await grupos.forEach((grupo, i) => {
      if (grupo.id == id) {
        consultarArticulosTienda([{ nombre: grupo.nombre, tipo: 'GRUPO', id }])
        return
      }
    })
  }
  return seccionProductos.length > 0 ? (
    <div
      className='seccionproductos'
      styles='padding-top: 40px; margin-top: -40px'
    >
      <Title lvl={1}>PRODUCTOS</Title>
      <div className='agrupaciones'>
        {seccionProductos.map(item => {
          return (
            <div>
              <Agrupaciones
                link={item.link1}
                titulo={item.titulo1}
                urlImage={item.img1}
                onClick={onClick}
              />
              <Agrupaciones
                link={item.link2}
                titulo={item.titulo2}
                urlImage={item.img2}
                onClick={onClick}
              />
            </div>
          )
        })}
      </div>
      <Link to='/shop'>
        <Title level={2}>VER MAS</Title>
      </Link>
    </div>
  ) : (
    <div>SIN DATOS PARA CARGAR</div>
  )
}
export default SeccionProductos
