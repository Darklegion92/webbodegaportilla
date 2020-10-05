import React, { useContext, useState, useEffect } from "react";
import { Row, Col, Typography } from "antd";
import Paginacion from "../Paginacion";
import { useMediaQuery } from "react-responsive";
import { GlobalContext } from "../../Context/GlobalContext";
import Head from "./Head";
import Item from "./Item";

import "./styles.css";
const { Title } = Typography;

const ArticulosTienda = ({ articulos, onClick, paginacion, subirScroll }) => {
  const [pagina, setPagina] = useState(1);

  const { carrito } = useContext(GlobalContext);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });

  useEffect(() => {
    console.log("se ejecuta articulo");
    subirScroll();
  }, [pagina]);
  return (
    <Col className="articulos-tienda" span={24}>
      <Row>
        <Head />
      </Row>
      {isTabletOrMobile || isTabletOrMobileDevice ? (
        articulos.mensaje ? (
          <Title style={{ color: "var(--color-primario)" }}>
            No hay coincidencias en la busqueda
          </Title>
        ) : (
          articulos.map((articulo, i) => {
            let enCarrito = false;
            carrito.forEach((item) => {
              if (articulo.codigo === item.codigo) {
                enCarrito = true;
                return;
              }
            });

            if (i < paginacion * pagina && i >= paginacion * (pagina - 1))
              return (
                <Row>
                  <Item
                    articulo={articulo}
                    onClick={onClick}
                    id={i}
                    enCarrito={enCarrito}
                  />
                </Row>
              );
          })
        )
      ) : (
        <Row style={{ height: "1200px" }}>
          {articulos.mensaje ? (
            <Title style={{ color: "var(--color-primario)" }}>
              No hay coincidencias en la busqueda
            </Title>
          ) : (
            articulos.map((articulo, i) => {
              let enCarrito = false;
              carrito.forEach((item) => {
                if (articulo.codigo === item.codigo) {
                  enCarrito = true;
                  return;
                }
              });
              if (i < paginacion * pagina && i >= paginacion * (pagina - 1))
                return (
                  <Item
                    articulo={articulo}
                    onClick={onClick}
                    id={i}
                    enCarrito={enCarrito}
                  />
                );
            })
          )}
        </Row>
      )}
      <Row className="paginacion">
        <Paginacion
          cantidad={articulos.length}
          cantidadItems={paginacion}
          style={{
            fontSize: "30px",
            color: "gainsboro",
          }}
          pagina={pagina}
          setPagina={setPagina}
        />
      </Row>
    </Col>
  );
};

export default ArticulosTienda;
