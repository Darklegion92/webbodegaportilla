import React, { useEffect } from "react";
import { Row, Col, Typography, Tabs, Button } from "antd";
import { AiFillFacebook } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import FormularioRegistro from "./FormularioRegistro";
import FormularioIngreso from "./FormularioIngreso";

import "./styles.css";

const { Title, Text } = Typography;
const { TabPane } = Tabs;


const callback = (key) => {
  console.log(key);
};
const Validacion = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  const Shield = () => (
    <svg
      t="1598801065009"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8842"
      width={isTabletOrMobile || isTabletOrMobileDevice ? "60" : "80"}
      height={isTabletOrMobile || isTabletOrMobileDevice ? "41" : "64"}
    >
      <path
        d="M511.780571 944.859429c6.857143 0 18.011429-2.56 29.147429-8.576 243.437714-136.704 327.424-194.56 327.424-350.994286v-327.862857c0-44.982857-19.712-59.136-55.716571-74.569143-50.56-20.992-214.272-79.725714-264.850286-97.28-11.574857-3.858286-23.570286-6.436571-36.004572-6.436572-11.995429 0-23.990857 3.437714-35.565714 6.436572-50.578286 15.414857-214.290286 76.708571-264.850286 97.28-36.022857 14.994286-55.716571 29.568-55.716571 74.569143v327.862857c0 156.416 84.425143 213.851429 327.424 350.994286 11.154286 5.997714 21.851429 8.576 28.708571 8.576z m0-78.006858c-6.418286 0-13.714286-2.56-26.569142-10.276571-197.997714-120.009143-261.430857-155.154286-261.430858-287.140571V270.262857c0-14.573714 2.998857-20.132571 14.573715-24.868571 65.152-25.691429 190.72-70.272 256.731428-93.842286 6.4-2.56 11.977143-3.84 16.694857-3.84 5.156571 0 10.294857 1.28 17.152 3.84 66.011429 23.588571 190.281143 71.131429 256.713143 93.860571 11.574857 4.278857 14.573714 10.276571 14.573715 24.868572V569.417143c0 131.986286-63.853714 166.710857-261.430858 287.140571-12.854857 7.716571-20.150857 10.276571-27.008 10.276572z m-106.715428-166.272h213.430857c29.988571 0 44.141714-14.994286 44.141714-47.158857v-166.272c0-28.288-11.154286-43.300571-33.846857-46.299428V389.851429c0-78.848-47.140571-131.986286-117.010286-131.986286-69.430857 0-116.992 53.138286-116.992 131.986286v51.437714c-22.290286 2.998857-33.426286 17.993143-33.426285 45.860571v166.272c0 32.146286 14.134857 47.140571 43.702857 47.140572z m34.285714-315.428571c0-50.578286 29.147429-84.004571 72.429714-84.004571 43.702857 0 72.429714 33.426286 72.429715 83.986285v54.857143l-144.859429 0.438857z"
        p-id="8843"
        fill="#4c2e1e"
      ></path>
    </svg>
  );

  return (
    <Col span={24} className="validacion">
      <Row align="center" className="head">
        <Col span={9}>
          <Link to="/">
            <img
              src="img/logo.png"
              width={
                isTabletOrMobile || isTabletOrMobileDevice ? "70%" : "150px"
              }
            />
          </Link>
        </Col>
        <Col span={15} className="texto">
          <Title level="4">
            <Shield />
            COMPRA SEGURA
          </Title>
        </Col>
      </Row>
      <Row align="center" justify="center" className="body">
        <Col span={isTabletOrMobile || isTabletOrMobileDevice ? 22 : 7}>
          <Tabs defaultActiveKey="1" onChange={callback} size="large" centered>
            <TabPane tab={<Text align="center">INICIAR SESION</Text>} key="1">
              <FormularioIngreso />
            </TabPane>
            <TabPane tab={<Text align="center">REGISTRARSE</Text>} key="2">
              <FormularioRegistro />
            </TabPane>
          </Tabs>
          <Title level={3}>O ingresa con</Title>
        </Col>
      </Row>
      <Row
        align="center"
        justify="center"
        className="footer"
        gutter={isTabletOrMobile || isTabletOrMobileDevice ? 50 : 0}
      >
        <Col span={isTabletOrMobile || isTabletOrMobileDevice ? 6 : 4}>
          <Button>
            <AiFillFacebook
              className="icon"
              size={isTabletOrMobile || isTabletOrMobileDevice ? 50 : 30}
            />
            {isTabletOrMobile || isTabletOrMobileDevice ? "" : "FACEBOOK"}
          </Button>
        </Col>
        <Col span={isTabletOrMobile || isTabletOrMobileDevice ? 6 : 4}>
          <Button>
            <img
              src="img/logo-google.png"
              width={
                isTabletOrMobile || isTabletOrMobileDevice ? "50px" : "35px"
              }
            />
            {isTabletOrMobile || isTabletOrMobileDevice ? "" : "GOOGLE"}
          </Button>
        </Col>
      </Row>
    </Col>
  );
};
export default Validacion;
