import React from "react";
import { Layout } from "antd";
import Encabezado from "./componentes/Encabezado";
import "antd/dist/antd.css";
import Carrusel_principal from "./componentes/Carrusel_principal";
import SeccionDomicilios from "./componentes/SeccionDomicilios";
import SeccionEmpresa from "./componentes/SeccionEmpresa";
import SeccionProductos from "./componentes/SeccionProductos";
import SeccionExtra from "./componentes/SeccionExtra";
import "bootstrap/dist/css/bootstrap.min.css";
const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Encabezado />
      </Header>
      <Content>
        <Carrusel_principal />
        <SeccionDomicilios />
        <SeccionEmpresa />
        <SeccionProductos />
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
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
