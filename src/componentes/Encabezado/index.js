import React, { useState } from "react";
import { Row, Col, Menu, Typography, Drawer, Button } from "antd";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";
import { ImTruck, ImExit } from "react-icons/im";
import { useMediaQuery } from "react-responsive";
import "./styles.css";

const { SubMenu } = Menu;
const { Text, Title } = Typography;
const Person = () => (
  <svg
    t="1598405106235"
    class="icon"
    viewBox="0 0 1024 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="2977"
    width="30"
    height="30"
  >
    <path
      d="M514.56 51.456a214.4 214.4 0 1 1 0 428.8 214.4 214.4 0 0 1 0-428.8z m0 42.88a171.52 171.52 0 1 0 0 343.04 171.52 171.52 0 0 0 0-343.04zM514.56 501.696a385.92 385.92 0 0 1 385.728 374.528l0.192 11.392c0 47.36-38.4 85.76-85.76 85.76H214.4c-47.36 0-85.76-38.4-85.76-85.76l0.192-11.392A385.92 385.92 0 0 1 514.56 501.76z m0 42.88a342.976 342.976 0 0 0-342.4 321.664l-0.448 10.624-0.192 10.752a42.88 42.88 0 0 0 37.888 42.56l4.992 0.32h600.32a42.88 42.88 0 0 0 42.624-37.376l0.256-4.864-0.128-10.752A343.04 343.04 0 0 0 514.56 544.576z"
      p-id="2978"
      fill="#4c2e1e"
    ></path>
  </svg>
);
const Car = () => (
  <svg
    t="1598406177234"
    class="icon"
    viewBox="0 0 1025 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    p-id="23732"
    width="30"
    height="30"
  >
    <path
      d="M846.882053 1022.543945c-37.538589 0-68.078549-30.539959-68.078549-68.083863 0-13.290489 3.82613-25.704156 10.436833-36.19413L467.276788 918.265953c6.610703 10.489974 10.436833 22.903641 10.436833 36.19413 0 37.538589-30.539959 68.083863-68.078549 68.083863s-68.078549-30.539959-68.078549-68.083863c0-13.503051 3.953668-26.097397 10.755677-36.693652-32.761241-3.77299-60.112758-28.414331-66.728775-61.345622L175.273965 306.876905c-0.005314-0.031884-0.010628-0.058455-0.015942-0.090339l-19.120023-96.763898c-5.60103-27.123012-29.891643-46.90198-57.721426-46.90198L15.942209 163.120688c-8.805414 0-15.942209-7.136796-15.942209-15.942209s7.136796-15.942209 15.942209-15.942209l82.479678 0c42.879229 0 80.300909 30.47619 88.973471 72.478598l16.617096 84.084527 56.504505 0 133.186532-94.707353L393.703492 98.884211c0-8.805414 7.136796-15.942209 15.942209-15.942209l252.912525 0-4.495703-12.201104c-1.546394-4.187487-1.259435-8.82667 0.775854-12.79628s5.648856-6.902977 9.953253-8.0827l173.865737-47.826628c4.123718-1.137211 8.518454-0.568605 12.211732 1.572965 3.693279 2.136256 6.382198 5.670113 7.450326 9.804459l71.027857 274.391996 74.715822 0c4.756092 0 9.262424 2.120314 12.291444 5.792336 3.02902 3.666708 4.261884 8.497198 3.358492 13.168265l-70.964089 368.435089c-12.031054 62.450949-66.920081 107.779964-130.524183 107.779964L303.369618 782.980363l13.487109 67.169843c4.214057 21.001204 22.82393 36.241956 44.244945 36.241956l485.785694 0c37.538589 0 68.078549 30.539959 68.078549 68.078549C914.960601 992.003986 884.420642 1022.543945 846.882053 1022.543945zM846.882053 918.271267c-19.954332 0-36.19413 16.239797-36.19413 36.19413 0 19.959646 16.234483 36.199444 36.19413 36.199444 19.959646 0 36.19413-16.239797 36.19413-36.199444C883.076182 934.50575 866.841699 918.271267 846.882053 918.271267zM409.640387 918.271267c-19.954332 0-36.19413 16.239797-36.19413 36.19413 0 19.959646 16.239797 36.199444 36.19413 36.199444s36.19413-16.239797 36.19413-36.199444C445.829202 934.50575 429.594719 918.271267 409.640387 918.271267zM298.47536 751.09063l523.754722 0c48.342093 0 90.06817-34.451115 99.213684-81.927015l67.313323-349.479802-67.408976 0c-0.239133 0.005314-0.472952 0.005314-0.706771 0l-73.653008 0c-0.063769 0-0.132852 0-0.196621 0l-210.920746 0c-0.037198 0-0.063769 0-0.095653 0l-52.720887 0c-0.244447 0.010628-0.494208 0.010628-0.738656 0L446.658197 319.683813c-0.249761 0.010628-0.494208 0.010628-0.74397 0l-180.093827 0c-0.132852 0-0.271018 0-0.409183 0L210.431851 319.683813 298.47536 751.09063zM854.188899 287.799394l46.221779 0L835.504629 37.065637l-141.529622 38.930876 2.556068 6.945489 123.504297 0c8.805414 0 15.942209 7.136796 15.942209 15.942209l0 167.797069L854.188899 287.799394zM676.236642 287.799394l135.848881 0-3.937726-4.564786c-0.127538-0.14348-0.255075-0.292274-0.377299-0.441068l-56.286628-65.278034L676.236642 287.799394zM604.390418 287.799394l25.13555 0L741.844148 182.889027c3.1725-2.965251 7.439698-4.458505 11.73878-4.272512 4.330967 0.239133 8.380288 2.226595 11.212687 5.51069l39.297546 45.573463L804.093162 114.826421 685.780712 114.826421c-0.244447 0.010628-0.488894 0.010628-0.728028 0L425.582596 114.826421l0 86.26861c0 0.132852 0 0.271018 0 0.409183l0 86.289866 9.182713 0L478.973056 154.108025c1.339146-4.059949 4.25657-7.407813 8.093328-9.294308s8.268693-2.152198 12.302072-0.749284l120.730352 42.199029c8.125213 2.837713 12.525263 11.616557 9.953253 19.82148L604.390418 287.799394zM468.344916 287.799394l102.625317 0 24.030224-76.52792-90.849338-31.756881L468.344916 287.799394zM315.533524 287.799394l78.164653 0 0-55.58517L315.533524 287.799394z"
      p-id="23733"
      fill="#4c2e1e"
    ></path>
  </svg>
);
function Encabezado() {
  const [current, setCurrent] = useState();
  const [visible, setVisible] = useState(false);
  const handleClick = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
  };

  const onClick = (e) => {
    setVisible(false);
  };
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  if (isTabletOrMobile || isTabletOrMobileDevice) {
    return (
      <Row className="head-movil">
        <Col span={6}>
          <MenuOutlined
            onClick={() => {
              setVisible(!visible);
            }}
          />
          <Drawer
            style={{ marginTop: "92px" }}
            placement="left"
            closable={false}
            onClose={() => {
              setVisible(!visible);
            }}
            visible={visible}
            key="left"
          >
            <Menu onClick={onClick}>
              {/*<Menu.Item>
                <ImTruck
                  size={20}
                  color="var(--color-primario)"
                  style={{ marginRight: "10px" }}
                />
                <Text>PEDIDOS</Text>
              </Menu.Item>*/}
              <Menu.Item>
                <a href="#home">
                  <Text>INICIO</Text>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="#quienessomos">
                  <Text>QUIENES SOMOS</Text>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="#productos">
                  {" "}
                  <Text>PRODUCTOS</Text>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="#nuevo">
                  {" "}
                  <Text>NUEVO</Text>
                </a>
              </Menu.Item>
              <Menu.Item>
                <a href="#recomendaciones">
                  <Text>RECOMENDACIONES</Text>
                </a>
              </Menu.Item>
              <Menu.Item>
                <Text>CONTACTO</Text>
              </Menu.Item>
              <div className="botones">
                {" "}
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "var(--color-primario)",
                    fontSize: "20px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "0",
                    width: "100%",
                    margin: "20px 0 10px 0",
                  }}
                >
                  <Link to="/validacion"> INICIAR SESION</Link>
                </Button>
                <Button
                  style={{
                    color: "var(--color-primario)",
                    backgroundColor: "white",
                    border: "2px solid var(--color-terciario)",
                    fontSize: "15px",
                    borderRadius: "10px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "0",
                    width: "75%",
                  }}
                >
                  <Link to="/validacion">REGISTRARSE </Link>
                </Button>
              </div>
            </Menu>
          </Drawer>
        </Col>
        <Col span={12}>
          <img src="img/logo.png" alt="LOGO" width="100px" />
        </Col>
        <Col span={6}>
          <Car className="icons" />
        </Col>
      </Row>
    );
  }
  return (
    <div className="head">
      <Row align="middle" justify="center">
        <Col span={4} className="logo">
          <img src="img/logo.png" alt="logo.png" width="150px" />
        </Col>
        <Col span={17}>
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
          >
            <Menu.Item key="inicio">
              <Title level={3} className="items" code={true}>
                <a href="#home">INICIO</a>
              </Title>
            </Menu.Item>
            <Menu.Item key="quienes">
              <Title level={3} className="items" code={true}>
                <a href="#quienessomos"> QUIENES SOMOS</a>
              </Title>
            </Menu.Item>
            <Menu.Item key="productos">
              <Title level={3} className="items" code={true}>
                <a href="#productos">PRODUCTOS</a>
              </Title>
            </Menu.Item>
            <Menu.Item key="nuevo">
              <Title level={3} className="items" code={true}>
                <a href="#nuevo">NUEVO</a>
              </Title>
            </Menu.Item>
            <Menu.Item key="reco">
              <Title level={3} className="items" code={true}>
                <a href="#recomendaciones"> RECOMENDACIONES</a>
              </Title>
            </Menu.Item>
            <Menu.Item key="contacto">
              <Title level={3} className="items" code={true}>
                CONTACTO
              </Title>
            </Menu.Item>
          </Menu>
        </Col>
        <Col span={3}>
          {" "}
          <Menu
            onClick={handleClick}
            selectedKeys={[current]}
            mode="horizontal"
            style={{ alignItems: "flex-end" }}
          >
            <SubMenu icon={<Person className="icons" />}>
              {/*  <Menu.Item
                className="item-menu"
                key="1"
                icon={<ImTruck size={30} />}
              >
                <Text>Pedidos</Text>
            </Menu.Item>*/}
              <Menu.Item
                key="2"
                className="item-menu"
                icon={<ImExit size={30} />}
              >
                <Link to="/validacion">
                  <Text className="item-menu">Ingresar</Text>
                </Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu title="" icon={<Car className="icons" />}></SubMenu>
          </Menu>
        </Col>
      </Row>
    </div>
  );
}
export default Encabezado;
