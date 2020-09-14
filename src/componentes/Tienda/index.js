import React, { useState, useEffect, useContext } from "react";
import { Row, Col, Modal } from "antd";
import { useMediaQuery } from "react-responsive";
import FiltrosTienda from "../FiltrosTienda";
import ArticulosTienda from "../ArticulosTienda";
import Articulo from "../Articulo";
import {GlobalContext} from "../../Context/GlobalContext";

import "./styles.css";
import Comprado from "../ArticuloComprado";

const Tienda = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const { articulosTienda } = useContext(GlobalContext);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [modalArticulo, setModalArticulo] = useState(false);
  const [modalComprado, setModalComprado] = useState(false);
  const [articuloSeleccionado, setArticuloSeleccionado] = useState();
  const cerrarArticulo = () => {
    setModalArticulo(false);
  };

  const agregarArticulo = (e) => {
    setArticuloSeleccionado(articulosTienda[e]);
    setModalArticulo(true);
  };
  const agregarCantidad = () => {
    setModalArticulo(false);
    setModalComprado(true);
  };
  const cerrarComprado = () => {
    setModalComprado(false);
  };
  return (
    <Row>
      {(!isTabletOrMobile || !isTabletOrMobileDevice) && (
        <Col span={5}>
          <FiltrosTienda />
        </Col>
      )}
      <Col span={isTabletOrMobile || isTabletOrMobileDevice ? 24 : 19}>
        <ArticulosTienda articulos={articulosTienda} onClick={agregarArticulo} />
      </Col>
      <Modal
        width={isTabletOrMobile || isTabletOrMobileDevice ? 450 : 900}
        visible={modalArticulo}
        onCancel={cerrarArticulo}
        footer={null}
        style={{ borderRadius: "50px" }}
      >
        <Articulo articulo={articuloSeleccionado} onOk={agregarCantidad} />
      </Modal>
      <Modal
        width={isTabletOrMobile || isTabletOrMobileDevice ? 450 : 700}
        visible={modalComprado}
        onCancel={cerrarComprado}
        footer={null}
        style={{ borderRadius: "50px" }}
      >
        <Comprado articulo={articuloSeleccionado} onOk={setModalComprado} />
      </Modal>
    </Row>
  );
};
export default Tienda;
