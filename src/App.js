import React from "react";
import {
  Switch,
  Route,
  useLocation,
} from "react-router-dom";
import { Layout } from "antd";
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

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

const { Header, Footer, Content } = Layout;

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  let location = useLocation().pathname;
  return (
    <Layout>
      <ImWhatsapp size={70} className="whats-icon" />
      {location !== "/login" && (
        <Header id="home">
          <Encabezado />
        </Header>
      )}
      <Switch>
        <Route path="/login" exact>
          <Validacion />
        </Route>
        <Route path="/">
          <Route path="/shop" exact>
            <ImWhatsapp size={70} className="whats-icon" />
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
                  articulos={[
                    {
                      imagen: "img/nuevos/nuevo (1).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "PERLAS ARCOIRIS",
                    },
                    {
                      imagen: "img/nuevos/nuevo (2).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "PERLAS MORADA",
                    },
                    {
                      imagen: "img/nuevos/nuevo (3).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "PERLAS X",
                    },
                    {
                      imagen: "img/nuevos/nuevo (5).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "CHIPS CHOCOLATE",
                    },
                    {
                      imagen: "img/nuevos/nuevo (6).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "CHISPAS",
                    },
                    {
                      imagen: "img/nuevos/nuevo (7).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "COLORES",
                    },
                    {
                      imagen: "img/nuevos/nuevo (8).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "CORAZONES",
                    },
                    {
                      imagen: "img/nuevos/nuevo (9).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "ESCARCHA",
                    },
                    {
                      imagen: "img/nuevos/nuevo (10).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "ESTRELLAS",
                    },
                    {
                      imagen: "img/nuevos/nuevo (11).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "GUSANITOS",
                    },
                    {
                      imagen: "img/nuevos/nuevo (12).png",
                      codigo: "0",
                      enlace: "##",
                      nombre: "COLORES",
                    },
                  ]}
                />
              </div>
              <SeccionExtra
                items={isTabletOrMobile || isTabletOrMobileDevice ? 2 : 3}
                texto={{
                  texto: "REGALOS",
                  fondo: "invisible",
                  color: "var(--color-primario)",
                }}
                articulos={[
                  {
                    imagen: "img/articulodefecto.jpeg",
                    codigo: "0",
                    enlace: "##",
                  },
                  {
                    imagen: "img/articulodefecto.jpeg",
                    codigo: "0",
                    enlace: "##",
                  },
                  {
                    imagen: "img/articulodefecto.jpeg",
                    codigo: "0",
                    enlace: "##",
                  },
                  {
                    imagen: "img/articulodefecto.jpeg",
                    codigo: "0",
                    enlace: "##",
                  },
                  {
                    imagen: "img/articulodefecto.jpeg",
                    codigo: "0",
                    enlace: "##",
                  },
                  {
                    imagen: "img/articulodefecto.jpeg",
                    codigo: "0",
                    enlace: "##",
                  },
                  {
                    imagen: "img/articulodefecto.jpeg",
                    codigo: "0",
                    enlace: "##",
                  },
                  {
                    imagen: "img/articulodefecto.jpeg",
                    codigo: "0",
                    enlace: "##",
                  },
                ]}
              />
              <div>
                {
                  <SeccionRecomendaciones
                    imagenes={[
                      { imagen: "img/articulodefecto.jpeg" },
                      { imagen: "img/imgreco1.jpeg" },
                      { imagen: "img/imgreco2.jpeg" },
                      { imagen: "img/logo.png" },
                      { imagen: "img/panaderiaypostreria.jpeg" },
                      { imagen: "img/semillas.jpeg" },
                      { imagen: "img/slider1.jpeg" },
                      { imagen: "img/slider2.jpeg" },
                      { imagen: "img/superalimentos.jpeg" },
                      { imagen: "img/utencilios.jpeg" },
                    ]}
                  />
                }
              </div>
            </Content>
          </Route>
        </Route>
      </Switch>
      {location !== "/login" && (
        <Footer>
          <Pie />
        </Footer>
      )}
    </Layout>
  );
}

export default App;
