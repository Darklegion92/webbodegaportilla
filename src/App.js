import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
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
import Contactanos from "./componentes/Contactanos";
import CarShop from "./componentes/CarShop";
import { GlobalProvider } from "./Context/GlobalContext";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

const { Header, Footer, Content } = Layout;

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  let location = useLocation().pathname;

  const articulos = [
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
  ];
  const articulos2 = [
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
  ];
  
  const recomendaciones = [
    { imagen: "img/imgreco1.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco2.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco1.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco1.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco2.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco1.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco2.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco1.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco2.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco1.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco1.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco2.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
    { imagen: "img/imgreco1.jpeg",titulo:"ALGO",texto:"otra cosa mas larga" },
  ]
  return (
    <Layout>
      <ImWhatsapp size={70} className="whats-icon" />
      {location !== "/login" && (
        <Header id="home">
          <GlobalProvider>
            <Encabezado />
          </GlobalProvider>
        </Header>
      )}
      <Switch>
        <Route path="/login" exact>
          <Validacion />
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
                  articulos={articulos}
                />
              </div>
              <SeccionExtra
                items={isTabletOrMobile || isTabletOrMobileDevice ? 2 : 3}
                texto={{
                  texto: "REGALOS",
                  fondo: "invisible",
                  color: "var(--color-primario)",
                }}
                articulos={articulos2}
              />
              <div>
                {
                  <SeccionRecomendaciones
                    recomendaciones={recomendaciones}
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
