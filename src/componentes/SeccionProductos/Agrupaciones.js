import React from 'react'
import { Link } from 'react-router-dom'
import { Typography } from 'antd'

const { Title } = Typography

function Agrupaciones ({ titulo, urlImage, link, onClick }) {
  return (
    <Link to={'/shop'}>
      <div className='agrupacion' onClick={onClick}>
        <Title level={4} id={link}>
          {titulo}
        </Title>
        <img src={urlImage} alt={urlImage} id={link} />
      </div>
    </Link>
  )
}
export default Agrupaciones
