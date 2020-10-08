import React, { useEffect, useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Layout,Modal } from "antd";
import { useMediaQuery } from "react-responsive";
import { ImWhatsapp } from "react-icons/im";

import Encabezado from "./componentes/Encabezado";
import Carrusel_principal from "./componentes/Carrusel_principal";
import SeccionDomicilios from "./componentes/SeccionDomicilios";
import SeccionEmpresa from "./componentes/SeccionEmpresa";
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

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

const { Header, Footer, Content } = Layout;

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  let location = useLocation().pathname;
  const { articulos, cargarDatos, modalCarga } = useContext(GlobalContext);
  useEffect(() => {
    cargarDatos();
  }, []);
  return (
    <Layout>
      <a href="https://wa.link/q2dusb" target="_blank" className="whats-icon">
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
          <Route path="/" exact>
            <div
              id="quienessomos"
              style={{
                minHeight: "40px",
                width: "100%",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "300px"
                    : "550px",
              }}
            />
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
              <SeccionDomicilios />
              <div>
                <SeccionEmpresa />
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
                  texto: "REGALOS",
                  fondo: "invisible",
                  color: "var(--color-primario)",
                }}
                articulos={articulos}
                tipo="REGALO"
              />
              <div>{<SeccionRecomendaciones />}</div>
            </Content>
          </Route>
        </Route>
      </Switch>
      {location !== "/login" && (
        <Footer>
          <Pie />
        </Footer>
      )}
      <Modal centered footer={null} closable={false} destroyOnClose visible={modalCarga}>
        <VentanaCarga />
      </Modal>
    </Layout>
  );
}

export default App;
