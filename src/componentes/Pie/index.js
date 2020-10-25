import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import { Row, Col, Divider, Typography } from "antd";
import {
  WhatsAppOutlined,
  FacebookOutlined,
  InstagramOutlined,
} from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";

const { Title, Text } = Typography;
function Pie() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  return (
    <div className="pie">
      <Divider
        style={{
          backgroundColor: "var(--color-primario)",
          height: "1px",
          marginBottom: "40px",
        }}
      />
      <Row className="medios-pago">
        <img
          src="img/p-01.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
        <img
          src="img/p-02.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
        <img
          src="img/p-03.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
        <img
          src="img/p-04.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
        <img
          src="img/p-05.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
        <img
          src="img/p-06.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
        <img
          src="img/p-07.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
        <img
          src="img/p-08.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
        <img
          src="img/p-09.png"
          height={isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "30px"}
        />
      </Row>
      <Divider
        style={{
          backgroundColor: "var(--color-primario)",
          height: "1px",
        }}
      />
      <Row className="otros">
        <Col span={8}>
          <Row>
            <Title level={3}>SERVICIO AL CLIENTE</Title>
          </Row>
          <Row>
            <a href="mailto:ventaenlinea@bodegaportilla.com" target="_blank">
              <Text>ventaenlinea@bodegaportilla.com</Text>
            </a>
          </Row>
          <Row>
            <a
              href="mailto:servicioalcliente@bodegaportilla.com"
              target="_blank"
            >
              <Text>servicioalcliente@bodegaportilla.com</Text>
            </a>
          </Row>
          <Row>
            <a href="https://wa.link/q2dusb" target="_blank">
              <Text
                style={
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? {}
                    : { fontSize: "25px" }
                }
              >
                <WhatsAppOutlined
                  style={
                    isTabletOrMobile || isTabletOrMobileDevice
                      ? {
                          fontSize: "20px",
                          marginRight: "10px",
                          marginBottom: "0px",
                        }
                      : { fontSize: "40px", marginRight: "10px" }
                  }
                />
                317 3752073
              </Text>
            </a>
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <Title level={3}>COLOMBIA</Title>
          </Row>
          <Row>
            <a
              href="https://www.google.es/maps/place/Bodega+Portilla/@7.8919667,-72.5047795,20.25z/data=!4m5!3m4!1s0x8e6645c65349ea57:0x67010b7fe6a46cd3!8m2!3d7.8920667!4d-72.5046647"
              target="_blank"
            >
              <Text>Calle 5 No. 4-88 Barrio Latino Cúcuta , Colombia.</Text>
            </a>
          </Row>
          <Row>
            <Title level={3}>TERMINOS</Title>
          </Row>
          <Row>
            <Link to="/terminos">
              <Text>Términos y Condiciones</Text>
            </Link>
          </Row>
          <Row>
            <Link to="/politicas">
              {" "}
              <Text>
                Política de Privacidad y Tratamiento de Datos Personales
              </Text>
            </Link>
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <Title level={1}>SIGUENOS</Title>
          </Row>
          <Row>
            <a
              href="https://www.facebook.com/Bodega-Portilla-372954223119025/"
              target="_blank"
            >
              <Text>
                <FacebookOutlined
                  style={
                    isTabletOrMobile || isTabletOrMobileDevice
                      ? {
                          fontSize: "20px",
                          marginRight: "10px",
                        }
                      : { fontSize: "40px", marginRight: "10px" }
                  }
                />
                BODEGA PORTILLA
              </Text>
            </a>
          </Row>
          <Row>
            <a
              href="https://www.instagram.com/bodegaportilla/?hl=es-la"
              target="_blank"
            >
              <Text>
                <InstagramOutlined
                  style={
                    isTabletOrMobile || isTabletOrMobileDevice
                      ? {
                          fontSize: "20px",
                          marginRight: "10px",
                        }
                      : { fontSize: "40px", marginRight: "10px" }
                  }
                />
                @BODEGAPORTILLA
              </Text>
            </a>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
export default Pie;
