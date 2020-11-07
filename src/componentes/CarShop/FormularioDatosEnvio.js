import React, { useState, useContext } from 'react'
import { Row, Col, Input, Select, Form, Typography, Button } from 'antd'
import { useMediaQuery } from 'react-responsive'
import { GlobalContext } from '../../Context/GlobalContext'
import Alerta from '../Alerta'

const { Title } = Typography
const { Option } = Select

const FormularioDatosEnvio = ({ setEditar }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 })
  const [modal, setModal] = useState({
    visible: false
  })

  const { tiposDocumento, user, guardarDatosCliente } = useContext(
    GlobalContext
  )

  const onFinsh = async datos => {
    let ir = true
    if (datos) {
      ir = await guardarDatosCliente({
        apellidos:
          datos.apellidos !== undefined ? datos.apellidos : user.apellidos,
        celular: datos.celular !== undefined ? datos.celular : user.celular,
        direccion:
          datos.direccion !== undefined ? datos.direccion : user.direccion,
        documento:
          datos.documento !== undefined ? datos.documento : user.documento,
        nombres: datos.nombres !== undefined ? datos.nombres : user.nombres,
        otrocelular:
          datos.otrocelular !== undefined
            ? datos.otrocelular
            : user.otrocelular,
        tipodocumento:
          datos.tipodocumento !== undefined
            ? datos.tipodocumento
            : user.tipodocumento
      })
    }
    //setEditar(!ir)

    const resp = await guardarDatosCliente(datos)

    if (resp === true) {
      setModal({
        visible: true,
        tipo: 'SUCCESS',
        mensaje:
          'Datos Alamacenados Correctamente, Para Terminar Dale En Finalizar Compra',
        titulo: 'Guardado Correcto',
        link: ''
      })
    } else if (resp === false) {
      setModal({
        visible: true,
        tipo: 'WARNIN',
        mensaje: 'No Se Ha Podido Guardar, Intentelo Nuevamente',
        titulo: 'Error al guardar',
        link: ''
      })
    } else {
      setModal({
        visible: true,
        tipo: 'ERROR',
        mensaje: 'Error al conectar con el servidor, intentalo mas tarde',
        titulo: 'Error Interno',
        link: ''
      })
    }
  }

  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Col span={24} className='formulario-datosenvio'>
      <Row>
        <Title level={3}>DATOS ENVIO</Title>
      </Row>
      <Form layout='vertical' size='small' onFinish={onFinsh}>
        <Row>
          <Col span={24}>
            <Form.Item
              label='Nombres'
              name='nombres'
              rules={
                user && user.nombres
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Nombres No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.nombres} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label='Apellidos'
              name='apellidos'
              rules={
                user && user.apellidos
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Apellidos No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.apellidos} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label='Teléfono Celular'
              name='celular'
              rules={
                user && user.celular
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Celular No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.celular} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label='Otro Teléfono (opcional)' name='otrocelular'>
              <Input defaultValue={user && user.celular2} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label='Tipo De Documento' name='tipo-documento'>
              <Select>
                {tiposDocumento.map(tipoDocumento => {
                  return (
                    <Option key={tipoDocumento.id}>
                      {tipoDocumento.nombre}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label='Número Documento'
              name='documento'
              rules={
                user && user.documento
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Documento No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.documento} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label='Dirección'
              name='direccion'
              rules={
                user && user.direccion
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Dirección No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.direccion} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item>
              <Button htmlType='submit'>GUARDAR DATOS</Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
      <Alerta modal={modal} setModal={setModal} />
    </Col>
  ) : (
    <Col span={24} className='formulario-datosenvio'>
      <Row>
        <Title level={3}>DATOS ENVIO</Title>
      </Row>
      <Form layout='vertical' onFinish={onFinsh}>
        <Row gutter={30} justify='center'>
          <Col span={10}>
            <Form.Item
              label='Nombres'
              name='nombres'
              rules={
                user && user.nombres
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Nombres No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.nombres} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label='Apellidos'
              name='apellidos'
              rules={
                user && user.apellidos
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Apellidos No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.apellidos} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify='center'>
          <Col span={10}>
            <Form.Item
              label='Teléfono Celular'
              name='celular'
              rules={
                user && user.celular
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Celular No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.celular} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label='Otro Teléfono (opcional)' name='otrocelular'>
              <Input defaultValue={user && user.celular2} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify='center'>
          <Col span={10}>
            <Form.Item
              label='Tipo De Documento'
              name='tipodocumento'
              rules={[{ required: true, message: 'Debe elegir uno' }]}
            >
              <Select>
                {tiposDocumento.map(tipoDocumento => {
                  return (
                    <Option key={tipoDocumento.id}>
                      {tipoDocumento.nombre}
                    </Option>
                  )
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label='Número Documento'
              name='documento'
              rules={
                user && user.documento
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Documento No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.documento} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify='center'>
          <Col span={10}>
            <Form.Item
              label='Dirección'
              name='direccion'
              rules={
                user && user.direccion
                  ? []
                  : [
                      {
                        required: true,
                        message: 'Campo Dirección No Puede Estar Vacío'
                      }
                    ]
              }
            >
              <Input defaultValue={user && user.direccion} />
            </Form.Item>
          </Col>
          <Col span={10} justify='center'>
            <Row align='middle' justify='center' style={{ height: '100%' }}>
              <Form.Item>
                <Button htmlType='submit'>GUARDAR DATOS</Button>
              </Form.Item>
            </Row>
          </Col>
        </Row>
      </Form>
      <Alerta modal={modal} setModal={setModal} />
    </Col>
  )
}

export default FormularioDatosEnvio
