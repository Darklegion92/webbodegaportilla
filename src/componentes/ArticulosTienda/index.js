import React, { useState } from "react";
import { Row, Col, Pagination } from "antd";
import { useMediaQuery } from "react-responsive";
import Head from "./Head";
import Item from "./Item";

import "./styles.css";
const ArticulosTienda = ({ articulos, onClick }) => {
  const [pagina, setPagina] = useState(1);
  const onChange = (e) => {
    setPagina(e);
  };
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  return (
    <Col className="articulos-tienda" span={24}>
      <Row>
        <Head />
      </Row>
      {isTabletOrMobile || isTabletOrMobileDevice ? (
        articulos.map((articulo, i) => {
          if (i < 20 * pagina && i >= 20 * (pagina - 1))
            return (
              <Row>
                <Item articulo={articulo} onClick={onClick} id={i} />
              </Row>
            );
        })
      ) : (
        <Row>
          {articulos.map((articulo, i) => {
            if (i < 20 * pagina && i >= 20 * (pagina - 1))
              return <Item articulo={articulo} onClick={onClick} id={i} />;
          })}
        </Row>
      )}
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
