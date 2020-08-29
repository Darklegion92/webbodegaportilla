import React from "react";
import { Layout } from "antd";
import Encabezado from "./componentes/Encabezado";
import Carrusel_principal from "./componentes/Carrusel_principal";
import SeccionDomicilios from "./componentes/SeccionDomicilios";
import SeccionEmpresa from "./componentes/SeccionEmpresa";
import SeccionProductos from "./componentes/SeccionProductos";
import SeccionExtra from "./componentes/SeccionExtra";
import { useMediaQuery } from "react-responsive";

import SeccionRecomendaciones from "./componentes/SeccionRecomendaciones";
import Pie from "./componentes/Pie";
import { ImWhatsapp } from "react-icons/im";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";
const { Header, Footer, Content } = Layout;

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  return (
    <Layout>
      <ImWhatsapp color="white" size={70} className="whats-icon" />{" "}
      <div
        id="quienessomos"
        style={{
          minHeight: "40px",
          width: "100%",
          position: "absolute",
          top: isTabletOrMobile || isTabletOrMobileDevice ? "300px" : "550px",
        }}
      />
      <div
        id="productos"
        style={{
          minHeight: "118px",
          width: "100%",
          marginBottom: "118px",
          position: "absolute",
          top: isTabletOrMobile || isTabletOrMobileDevice ? "620px":"960px",
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
          top: isTabletOrMobile || isTabletOrMobileDevice ? "1600px" :"2030px",
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
          top: isTabletOrMobile || isTabletOrMobileDevice ? "2150px" : "3130px",
        }}
      />
      <Header id="home">
        <Encabezado />
      </Header>
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
                imagen: "img/articulodefecto.jpeg",
                codigo: "0",
                enlace: "##",
                nombre: "ARTICULO UNO DE LOS UNOS UNOS",
              },
              {
                imagen: "img/articulodefecto.jpeg",
                codigo: "0",
                enlace: "##",
                nombre: "ARTICULO UNO DE LOS UNOS UNOS",
              },
              {
                imagen: "img/articulodefecto.jpeg",
                codigo: "0",
                enlace: "##",
                nombre: "ARTICULO UNO DE LOS UNOS UNOS",
              },
              {
                imagen: "img/articulodefecto.jpeg",
                codigo: "0",
                enlace: "##",
                nombre: "ARTICULO UNO DE LOS UNOS UNOS",
              },
              {
                imagen: "img/articulodefecto.jpeg",
                codigo: "0",
                enlace: "##",
                nombre: "ARTICULO UNO DE LOS UNOS UNOS",
              },
              {
                imagen: "img/articulodefecto.jpeg",
                codigo: "0",
                enlace: "##",
                nombre: "ARTICULO UNO DE LOS UNOS UNOS",
              },
              {
                imagen: "img/articulodefecto.jpeg",
                codigo: "0",
                enlace: "##",
                nombre: "ARTICULO UNO DE LOS UNOS UNOS",
              },
              {
                imagen: "img/articulodefecto.jpeg",
                codigo: "0",
                enlace: "##",
                nombre: "ARTICULO UNO DE LOS UNOS UNOS",
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
      <Footer>
        <Pie />
      </Footer>
    </Layout>
  );
}

export default App;
