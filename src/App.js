import React from "react";
import { Layout } from "antd";
import Encabezado from "./componentes/Encabezado";
import "antd/dist/antd.css";
import Carrusel_principal from "./componentes/Carrusel_principal";
import SeccionDomicilios from "./componentes/SeccionDomicilios";
import SeccionEmpresa from "./componentes/SeccionEmpresa";
import SeccionProductos from "./componentes/SeccionProductos";
import SeccionExtra from "./componentes/SeccionExtra";
import SeccionRecomendaciones from "./componentes/SeccionRecomendaciones";
import Pie from "./componentes/Pie";
import "bootstrap/dist/css/bootstrap.min.css";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Encabezado />
      </Header>
      <Content>
        <div id="home">
          <Carrusel_principal />
        </div>
        <SeccionDomicilios />
        <div id="quienessomos">
          <SeccionEmpresa />
        </div>
        <div id="productos">
          <SeccionProductos />
        </div>
        <div id="nuevo">
          <SeccionExtra
            items={4}
            texto={{
              texto: "PRODUCTOS NUEVOS",
              fondo: "var(--color-primario)",
              color: "white",
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
        <div id="regalos"></div>
        <SeccionExtra
          items={3}
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
        <div id="recomendaciones">
          <SeccionRecomendaciones
            imagenes={[
              { imagen: "img/articulodefecto.jpeg" },
              { imagen: "img/deshidratados.jpeg" },
              { imagen: "img/frutossecos.jpeg" },
              { imagen: "img/logo.png" },
              { imagen: "img/panaderiaypostreria.jpeg" },
              { imagen: "img/semillas.jpeg" },
              { imagen: "img/slider1.jpeg" },
              { imagen: "img/slider2.jpeg" },
              { imagen: "img/superalimentos.jpeg" },
              { imagen: "img/utencilios.jpeg" },
            ]}
          />
        </div>
      </Content>
      <Footer>
        <Pie />
      </Footer>
    </Layout>
  );
}

export default App;
