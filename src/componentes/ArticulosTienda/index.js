import React from "react";
import { Row, Col } from "antd";
import Head from "./Head";
import Item from "./Item";

import "./styles.css";
const ArticulosTienda = () => {
  return (
    <Col className="articulos-tienda">
      <Row>
        <Head />
      </Row>
      <Row></Row>
    </Col>
  );
};

export default ArticulosTienda;
