import React, { useContext, useState } from 'react'
import { Steps } from 'antd'
import { ShoppingCartOutlined, SolutionOutlined } from '@ant-design/icons'
import CarArticulos from './CarArticulos'
import FormularioDatosEnvio from './FormularioDatosEnvio'
import FormularioMediosPago from './FormularioMediosPago/'
import { GlobalContext } from '../../Context/GlobalContext'
const { Step } = Steps

const StepPagos = ({ current }) => {
  const { carrito, datosOrden } = useContext(GlobalContext)

  const [editar, setEditar] = useState(true)

  const steps = [
    {
      title: 'CARRITO DE COMPRAS',
      content: <CarArticulos carrito={carrito} />,
      icon: (
        <ShoppingCartOutlined
          style={{ color: current === 0 ? 'var(--color-naranja)' : 'gray' }}
        />
      )
    },
    {
      title: 'DATOS DE ENVIO Y PAGO',
      content: editar ? (
        <FormularioDatosEnvio setEditar={setEditar} />
      ) : (
        <FormularioMediosPago
          datosOrden={datosOrden}
          setEditar={setEditar}
        />
      ),
      icon: (
        <SolutionOutlined
          style={{ color: current === 1 ? 'var(--color-naranja)' : 'gray' }}
        />
      )
    }
  ]

  return (
    <>
      <Steps
        current={current}
        className='site-navigation-steps'
        type='navigation'
      >
        {steps.map(item => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className='steps-content'>{steps[current].content}</div>
    </>
  )
}

export default StepPagos
