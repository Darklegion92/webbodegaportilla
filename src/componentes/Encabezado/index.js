import React, { useEffect, useState, useRef } from "react";
import { Row, Col, Menu, Typography } from "antd";
import { UserOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { ImTruck, ImExit } from "react-icons/im";
import "./styles.css";

const { SubMenu } = Menu;
const { Text, Title } = Typography;
function Encabezado() {
  const [ancho, setAncho] = useState();
  const [current, setCurrent] = useState();

  const mounted = useRef();

  useEffect(() => {});

  useEffect(() => {
    if (!mounted.current) {
      resize();
      mounted.current = true;
    } else {
      // do componentDidUpdate logic
    }
  });

  const resize = () => {
    setAncho(window.innerWidth);
    console.log(window.innerWidth);
  };

  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  return (
    <div className="head">
      <Row align="middle" justify="center">
        <Col span={4} className="logo">
          <img src="img/logo.png" alt="logo.png" width="200px"></img>
        </Col>
        <Col span={20}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="inicio">
              <Title level={4} className="items" code={true}>
                INICIO
              </Title>
            </Menu.Item>
            <Menu.Item key="quienes">
              <Title level={4} className="items" code={true}>
                QUIENES SOMOS
              </Title>
            </Menu.Item>
            <Menu.Item key="productos">
              <Title level={4} className="items" code={true}>
                PRODUCTOS
              </Title>
            </Menu.Item>
            <Menu.Item key="nuevo">
              <Title level={4} className="items" code={true}>
                NUEVO
              </Title>
            </Menu.Item>
            <Menu.Item key="reco">
              <Title level={4} className="items" code={true}>
                RECOMENDACIONES
              </Title>
            </Menu.Item>
            <Menu.Item key="contacto">
              <Title level={4} className="items" code={true}>
                CONTACTO
              </Title>
            </Menu.Item>
            <SubMenu icon={<UserOutlined className="icons" />}>
              <Menu.Item
                className="item-menu"
                key="1"
                icon={<ImTruck size={30} />}
              >
                <Text>Pedidos</Text>
              </Menu.Item>
              <Menu.Item
                key="2"
                className="item-menu"
                icon={<ImExit size={30} />}
              >
                <Text className="item-menu">Salir</Text>
              </Menu.Item>
            </SubMenu>
            <SubMenu
              title=""
              icon={<ShoppingCartOutlined className="icons" />}
            ></SubMenu>
          </Menu>
        </Col>
      </Row>
    </div>
  );
}
export default Encabezado;
