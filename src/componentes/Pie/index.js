import React from "react";
import "./styles.css";
import { Row, Col, Divider, Typography } from "antd";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;
function Pie() {
  return (
    <div className="pie">
      <Divider
        style={{
          backgroundColor: "var(--color-primario)",
          height: "1px",
        }}
      />
      <Row >
        <img src="img/p-01.png" height="30px" />
        <img src="img/p-02.png" height="30px" />
        <img src="img/p-03.png" height="30px" />
        <img src="img/p-04.png" height="30px" />
        <img src="img/p-05.png" height="30px" />
        <img src="img/p-06.png" height="30px" />
        <img src="img/p-07.png" height="30px" />
        <img src="img/p-08.png" height="30px" />
        <img src="img/p-09.png" height="30px" />
        <img src="img/p-10.png" height="30px" />
        <img src="img/p-11.png" height="30px" />
        <img src="img/p-12.png" height="30px" />
      </Row>
      <Divider
        style={{
          backgroundColor: "var(--color-primario)",
          height: "1px",
        }}
      />
      <Row className="otros">
        <Col >
          <Row>
            <Title level={3}>SERVICIO AL CLIENTE</Title>
          </Row>
          <Row>
            <Text>ventaenlinea@bodegaportilla.com</Text>
          </Row>
          <Row>
            <Text>servicioalcliente@bodegaportilla.com</Text>
          </Row>
          <Row>
            <Text>
              <WhatsAppOutlined
                style={{ fontSize: "40px", marginRight: "10px" }}
              />
              314 3529702
            </Text>
          </Row>
        </Col>

        <Col >
          <Row>
            <Title level={3}>COLOMBIA</Title>
          </Row>
          <Row>
            <Text>Cl 5a. # 4-38. Cúcuta, Norte de Santander</Text>
          </Row>
          <Row>
            <Title level={3}>TERMINOS</Title>
          </Row>
          <Row>
            <Text>Términos y Condiciones</Text>
          </Row>
          <Row>
            <Text>
              Política de Privacidad y Tratamiento de Datos Personales
            </Text>
          </Row>
        </Col>

        <Col >
          <Row>
            <Title level={1}>SIGUENOS</Title>
          </Row>
          <Row>
            <Text>
              <FacebookOutlined
                style={{ fontSize: "40px", marginRight: "10px" }}
              />
              BODEGA PORTILLA
            </Text>
          </Row>
          <Row>
            <Text>
              <InstagramOutlined
                style={{ fontSize: "40px", marginRight: "10px" }}
              />
              @BODEGAPORTILLA
            </Text>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Pie;
