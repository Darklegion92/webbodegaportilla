import React, { useState, useContext } from "react";
import { Row, Col, Input, Select, Radio, Form, Typography, Button } from "antd";
import { useMediaQuery } from "react-responsive";
import { GlobalContext } from "../../Context/GlobalContext";
import Alerta from "../Alerta";

const { Title } = Typography;
const { Option } = Select;

const FormularioDatosEnvio = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [modal, setModal] = useState({
    visible: false,
  });

  const { barrios, tiposDocumento, user, guardarDatosCliente } = useContext(
    GlobalContext
  );

  const onFinsh = async (datos) => {
    const resp = await guardarDatosCliente(datos);

    if (resp === true) {
      setModal({
        visible: true,
        tipo: "SUCCESS",
        mensaje:
          "Datos Alamacenados Correctamente, Para Terminar Dale En Finalizar Compra",
        titulo: "Guardado Correcto",
        link: "",
      });
    } else if (resp === false) {
      setModal({
        visible: true,
        tipo: "WARNIN",
        mensaje: "No Se Ha Podido Guardar, Intentelo Nuevamente",
        titulo: "Error al guardar",
        link: "",
      });
    } else {
      setModal({
        visible: true,
        tipo: "ERROR",
        mensaje: "Error al conectar con el servidor, intentalo mas tarde",
        titulo: "Error Interno",
        link: "",
      });
    }
  };

  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Col span={24} className="formulario-datosenvio">
      <Row>
        <Title level={3}>DATOS ENVIO</Title>
      </Row>
      <Form layout="vertical" size="small" onFinish={onFinsh}>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Nombres"
              name="nombres"
              rules={[
                {
                  required: true,
                  message: "Campo Nombres No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.nombres} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Apellidos"
              name="apellidos"
              rules={[
                {
                  required: true,
                  message: "Campo Apellidos No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.apellidos} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Teléfono Celular"
              name="celular"
              rules={[
                {
                  required: true,
                  message: "Campo Celular No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.celular} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Otro Teléfono (opcional)" name="otro-celular">
              <Input defaultValue={user && user.celular2} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Tipo De Documento" name="tipo-documento">
              <Select>
                {tiposDocumento.map((tipoDocumento) => {
                  return (
                    <Option key={tipoDocumento.id}>
                      {tipoDocumento.nombre}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Número Documento"
              name="documento"
              rules={[
                {
                  required: true,
                  message: "Campo Documento No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.documento} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item
              label="Dirección"
              name="direccion"
              rules={[
                {
                  required: true,
                  message: "Campo Dirección No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.direccion} />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form.Item label="Barrio" name="barrio">
              <Select onSelect={(e) => {}}>
                {barrios.map((barrio) => {
                  return <Option key={barrio.id}>{barrio.nombre}</Option>;
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={12}>
            <Form.Item>
              <Button htmlType="submit">GUARDAR DATOS</Button>
            </Form.Item>
          </Col>
        </Row>
        {/*  <Row>
          <Col span={24}>
            <Form.Item label="Tipo de Pago" name="nombre">
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Contraentrega</Radio>
                <Radio value={2}>Otro medio de pago</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
      </Row>*/}
      </Form>
      <Alerta modal={modal} setModal={setModal} />
    </Col>
  ) : (
    <Col span={24} className="formulario-datosenvio">
      <Row>
        <Title level={3}>DATOS ENVIO</Title>
      </Row>
      <Form layout="vertical" onFinish={onFinsh}>
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item
              label="Nombres"
              name="nombres"
              rules={[
                {
                  required: true,
                  message: "Campo Nombres No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.nombres} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Apellidos"
              name="apellidos"
              rules={[
                {
                  required: true,
                  message: "Campo Apellidos No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.apellidos} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item
              label="Teléfono Celular"
              name="celular"
              rules={[
                {
                  required: true,
                  message: "Campo Celular No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.celular} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item label="Otro Teléfono (opcional)" name="otro-celular">
              <Input defaultValue={user && user.celular2} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item
              label="Tipo De Documento"
              name="tipodocumento"
              rules={[{ required: true, message: "Debe elegir uno" }]}
            >
              <Select>
                {tiposDocumento.map((tipoDocumento) => {
                  return (
                    <Option key={tipoDocumento.id}>
                      {tipoDocumento.nombre}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Número Documento"
              name="documento"
              rules={[
                {
                  required: true,
                  message: "Campo Documento No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.documento} />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={30} justify="center">
          <Col span={10}>
            <Form.Item
              label="Dirección"
              name="direccion"
              rules={[
                {
                  required: true,
                  message: "Campo Dirección No Puede Estar Vacío",
                },
              ]}
            >
              <Input defaultValue={user && user.direccion} />
            </Form.Item>
          </Col>
          <Col span={10}>
            <Form.Item
              label="Barrio"
              name="barrio"
              rules={[{ required: true, message: "Debe elegir uno" }]}
            >
              <Select onSelect={(e) => {}}>
                {barrios.map((barrio, i) => {
                  return <Option key={i}>{barrio.nombre}</Option>;
                })}
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row justify="center">
          <Col span={12}>
            <Form.Item>
              <Button htmlType="submit">GUARDAR DATOS</Button>
            </Form.Item>
          </Col>
        </Row>

        {/* <Row justify="left" style={{ visibility: "hidden" }}>
          <Col span={24} justify="left">
            <Form.Item
              label={
                <Title level={2} style={{ color: "var(--color-primario)" }}>
                  FORMA DE PAGO
                </Title>
              }
              name="nombre"
              style={{ marginLeft: "100px" }}
            >
              <Radio.Group onChange={onChange} value={value}>
                <Radio value={1}>Contraentrega</Radio>
                <Radio value={2}>Otro medio de pago</Radio>
              </Radio.Group>
            </Form.Item>
          </Col>
            </Row>*/}
      </Form>
      <Alerta modal={modal} setModal={setModal} />
    </Col>
  );
};

export default FormularioDatosEnvio;
