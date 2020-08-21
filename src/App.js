import React from "react";
import { Layout } from "antd";
import Encabezado from "./componentes/Encabezado";
import "antd/dist/antd.css";
import Carrusel_principal from "./componentes/Carrusel_principal";
import SeccionDomicilios from "./componentes/SeccionDomicilios";
import SeccionEmpresa from "./componentes/SeccionEmpresa";
import SeccionProductos from "./componentes/SeccionProductos";
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
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
