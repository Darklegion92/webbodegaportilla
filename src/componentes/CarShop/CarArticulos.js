import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";

import Item from "./Item";

const CarArticulos = ({ carrito }) => {
  const [pagina, setPagina] = useState(1);
  const pageSize = 3;
  const onChange = (e) => {
    setPagina(e);
  };
  return (
    <Col span={22} className="car-articulos">
      {carrito.map((articulo, i) => {
        if (i < pageSize * pagina && i >= pageSize * (pagina - 1))
          return (
            <Row>
              <Item articulo={articulo} />
            </Row>
          );
      })}
      <Pagination
        size="default"
        onChange={onChange}
        total={carrito.length}
        hideOnSinglePage
        pageSize={pageSize}
      />
    </Col>
  );
};

export default CarArticulos;
