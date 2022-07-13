import React, { useEffect, useContext, useState } from "react";
import { Switch, Route, useLocation, Link } from "react-router-dom";
import { Button, Layout, Modal } from "antd";
import { useMediaQuery } from "react-responsive";
import { ImWhatsapp } from "react-icons/im";

import Encabezado from "./componentes/Encabezado";
import Carrusel_principal from "./componentes/Carrusel_principal";
import SeccionProductos from "./componentes/SeccionProductos";
import SeccionExtra from "./componentes/SeccionExtra";
import SeccionRecomendaciones from "./componentes/SeccionRecomendaciones";
import Pie from "./componentes/Pie";
import Validacion from "./componentes/Validacion";
import Tienda from "./componentes/Tienda";
import Contactanos from "./componentes/Contactanos";
import CarShop from "./componentes/CarShop";
import { GlobalContext } from "./Context/GlobalContext";
import Politicas from "./componentes/Politicas";
import Terminos from "./componentes/Terminos";
import VentanaCarga from "./componentes/VentanaCarga";
import DetallesPedido from "./componentes/DetallesPedido";
import DetallesPedidoEfectivo from "./componentes/DetallesPedidoEfecty";
import DetallesPedidoCredito from "./componentes/DetallesPedidoCredito";
import { BANCO } from "./config";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

const { Header, Footer, Content } = Layout;

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [visible, setVisible] = useState(true);
  let location = useLocation().pathname;
  const { articulos, cargarDatos, modalCarga, ordenCliente } =
    useContext(GlobalContext);
  useEffect(() => {
    cargarDatos();
  }, []);
  return (
    <Layout>
      <a
        href="https://wa.me/573173752073"
        target="_blank"
        className="whats-icon"
      >
        <ImWhatsapp size={40} />
      </a>
      {location !== "/login" && (
        <Header id="home">
          <Encabezado />
        </Header>
      )}
      <Switch>
        <Route path="/politicas" exact>
          <Content>
            <Politicas />
          </Content>
        </Route>
        <Route path="/terminos" exact>
          <Content>
            <Terminos />
          </Content>
        </Route>
        <Route path="/login" exact>
          <Content>
            <Validacion />
          </Content>
        </Route>
        <Route path="/">
          <Route path="/carshop" exact>
            <Content>
              <CarShop />
            </Content>
          </Route>
          <Route path="/contacto" exact>
            <Content>
              <Contactanos />
            </Content>
          </Route>
          <Route path="/shop" exact>
            <Content>
              <Tienda />
            </Content>
          </Route>
          <Route path="/pagoefectivo" exact>
            <Content>
              <DetallesPedidoEfectivo />
            </Content>
          </Route>
          <Route path="/pagocredito" exact>
            <Content>
              <DetallesPedidoCredito />
            </Content>
          </Route>
          <Route path="/orden/:idorden" exact>
            <Content>
              <DetallesPedido />
            </Content>
          </Route>
          <Route path="/" exact>
            <div
              id="productos"
              style={{
                minHeight: "118px",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "620px"
                    : "960px",
              }}
            />

            <div
              id="nuevo"
              style={{
                minHeight: "118px",
                backgroundColor: "black",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "1600px"
                    : "2030px",
                zIndex: 1,
              }}
            />

            <div
              id="recomendaciones"
              style={{
                minHeight: "118px",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "2150px"
                    : "3130px",
              }}
            />
            <Content>
              <div>
                <Carrusel_principal />
              </div>
              <div>
                <SeccionProductos />
              </div>
              <div>
                <SeccionExtra
                  items={isTabletOrMobile || isTabletOrMobileDevice ? 3 : 4}
                  texto={{
                    texto: "PRODUCTOS NUEVOS",
                    fondo: "invisible",
                    color: "var(--color-primario)",
                  }}
                  articulos={articulos}
                  tipo="NUEVO"
                />
              </div>
              <SeccionExtra
                items={isTabletOrMobile || isTabletOrMobileDevice ? 2 : 3}
                texto={{
                  texto: "PRODUCTOS EN PROMOCIÓN",
                  fondo: "invisible",
                  color: "var(--color-primario)",
                }}
                articulos={articulos}
                tipo="REGALO"
              />
              <div>{<SeccionRecomendaciones />}</div>
            </Content>
          </Route>
          <Route path="/index" exact>
            <div
              id="productos"
              style={{
                minHeight: "118px",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "620px"
                    : "960px",
              }}
            />

            <div
              id="nuevo"
              style={{
                minHeight: "118px",
                backgroundColor: "black",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "1600px"
                    : "2030px",
                zIndex: 1,
              }}
            />

            <div
              id="recomendaciones"
              style={{
                minHeight: "118px",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "2150px"
                    : "3130px",
              }}
            />
            <Content>
              <div>
                <Carrusel_principal />
              </div>
              <div>
                <SeccionProductos />
              </div>
              <div>
                <SeccionExtra
                  items={isTabletOrMobile || isTabletOrMobileDevice ? 3 : 4}
                  texto={{
                    texto: "PRODUCTOS NUEVOS",
                    fondo: "invisible",
                    color: "var(--color-primario)",
                  }}
                  articulos={articulos}
                  tipo="NUEVO"
                />
              </div>
              <SeccionExtra
                items={isTabletOrMobile || isTabletOrMobileDevice ? 2 : 3}
                texto={{
                  texto: "PRODUCTOS EN PROMOCIÓN",
                  fondo: "invisible",
                  color: "var(--color-primario)",
                }}
                articulos={articulos}
                tipo="REGALO"
              />
              <div>{<SeccionRecomendaciones />}</div>
            </Content>
          </Route>
          <Modal
            visible={visible && !modalCarga}
            footer={null}
            centered
            onCancel={() => setVisible(false)}
            bodyStyle={{
              width: "100%",
              height: "100%",
              padding:0
            }}
          >
            <Link
            to="/login"
            
          >
        <img
                  className="d-block w-100"
                  width="100%"
                  src={
                    "../img/prom.jpg"

                  }
                  alt="prom"
                />
          </Link>
          </Modal>
        </Route>
      </Switch>
      {location !== "/login" && (
        <Footer>
          <Pie />
        </Footer>
      )}
      <Modal
        centered
        footer={null}
        closable={false}
        destroyOnClose
        visible={modalCarga}
      >
        <VentanaCarga />
      </Modal>
    </Layout>
  );
}

export default App;
