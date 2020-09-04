import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import Head from "./Head";
import Item from "./Item";

import "./styles.css";
const ArticulosTienda = ({ articulos }) => {
  const [pagina, setPagina] = useState(1);
  const onChange = (e) => {
    setPagina(e);
  };

  return (
    <Col className="articulos-tienda" span={24}>
      <Row>
        <Head />
      </Row>
      <Row>
        {articulos.map((articulo, i) => {
          if (i < 20 * pagina && i >= 20 * (pagina - 1))
            return <Item articulo={articulo} />;
        })}
      </Row>
      <Row className="paginacion">
        <Pagination
          size="small"
          onChange={onChange}
          total={articulos.length}
          hideOnSinglePage
          pageSize={20}
        />
      </Row>
    </Col>
  );
};

export default ArticulosTienda;
