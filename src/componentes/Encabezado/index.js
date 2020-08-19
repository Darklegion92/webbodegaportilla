import React from "react";
import { Layout } from "antd";

const { Header, Footer, Sider, Content } = Layout;

function Encabezado() {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
export default Encabezado;
