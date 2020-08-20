import React from "react";
import { Layout } from "antd";
import Encabezado from "./componentes/Encabezado";
import "antd/dist/antd.css";

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Layout>
      <Header>
        <Encabezado />
      </Header>
      <Content></Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
