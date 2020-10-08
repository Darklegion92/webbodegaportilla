import React, { useEffect, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Form, Input, Button, Checkbox, Col, Row, Typography } from "antd";
import { useMediaQuery } from "react-responsive";

import { GlobalContext } from "../../Context/GlobalContext";
import Alerta from "../Alerta";

import "./styles.css";

const { TextArea } = Input;
const { Text, Title } = Typography;

const FormularioRegistro = () => {
  const { contactar } = useContext(GlobalContext);
  const [modal, setModal] = useState({
    visible: false,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  const onFinish = async (values) => {
    const resp = await contactar(values);
    if (resp === true) {
      setModal({
        visible: true,
        tipo: "SUCCESS",
        mensaje:
          "Su mensaje ha sido enviado correctamente, nos pondremos en contacto",
        titulo: "Mensaje Enviado Correctamente",
        link: "/shop",
      });
    } else if (resp === false) {
      setModal({
        visible: true,
        tipo: "ERROR",
        mensaje: "No se ha podido enviar su mensaje, intente mas tarde",
        titulo: "Error Interno",
        link: "",
      });
    }
  };

  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      size="large"
      className="contacto"
      initialValues={{ comunicaciones: true }}
    >
      <Row>
        <Col span={20}>
          <Title>CONTACTANOS</Title>
          <Text>
            Al diligenciar el siguiente formulario, uno de nuestros asesores te
            contactará para brindarte toda la información que necesitas
          </Text>
        </Col>
      </Row>
      <Row>
        <Col span={isTabletOrMobile || isTabletOrMobileDevice ? 18 : 14}>
          <Form.Item
            label="Nombre"
            name="nombre"
            rules={[{ required: true, message: "Campo Nombre No Puede Estar Vacío" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[
              {
                type: "email",
                message: "Ingrese Correo Válido",
              },
              {
                required: true,
                message: "Profavor Ingrese Corrreo",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Celular"
            name="telefono"
            rules={[
              { required: true, message: "Porfavor Inserte Un Teléfono" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mensaje"
            name="mensaje"
            rules={[{ required: true, message: "Porfavor Inserte Un Mensaje" }]}
          >
            <TextArea />
          </Form.Item>
          <Form.Item>
            <Col span={24}>
              <Form.Item name="comunicaciones" valuePropName="checked">
                <Checkbox>
                  Me gustaría recibir comunicaciones promocionales
                </Checkbox>
              </Form.Item>
              <Form.Item
                name="politicas"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Debe Aceptar Los Términos"),
                  },
                ]}
              >
                <Checkbox>
                  Declaro que he leido y acepto la nueva{" "}
                  <Link to="/politicas">Política de Privacidad</Link> y los{" "}
                  <Link to="/terminos">Términos y Condiciones</Link> de bodega
                  portilla
                </Checkbox>
              </Form.Item>
            </Col>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              <Text>ENVIAR</Text>
            </Button>
          </Form.Item>
        </Col>
      </Row>
      <Alerta modal={modal} setModal={setModal} />
    </Form>
  );
};

export default FormularioRegistro;
