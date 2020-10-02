import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { Typography, Modal } from "antd";
import { AiFillStar } from "react-icons/ai";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import Articulo from "../Articulo";
import Comprado from "../ArticuloComprado";
import "./styles.css";

const { Text } = Typography;
function SeccionExtra({ items, articulos, texto, tipo }) {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [modalArticulo, setModalArticulo] = useState(false);
  const [modalComprado, setModalComprado] = useState(false);
  const [articuloSeleccionado, setArticuloSeleccionado] = useState();

  const estrellas = (cantidad) => {
    const estrellas = [];

    for (let i = 0; i < cantidad; i++) {
      estrellas.push(<AiFillStar size="20" />);
    }

    return estrellas;
  };

  const cerrarArticulo = () => {
    setModalArticulo(false);
  };

  const agregarArticulo = (e) => {
    const i = parseInt(e.target.id);
    console.log(e.target);
    setArticuloSeleccionado(articulos[i]);
    setModalArticulo(true);
  };
  const agregarCantidad = () => {
    setModalArticulo(false);
    setModalComprado(true);
  };
  const cerrarComprado = () => {
    setModalComprado(false);
  };
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: items,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
  };
  let slider = useRef();

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <div className="seccion-extra">
      <div
        style={{
          backgroundColor: texto.fondo,
          color: texto.color,
          textAlign: "center",
          display: "flex",
          "justify-content": "center",
          alignItems: "center",
          "font-size":
            isTabletOrMobile || isTabletOrMobileDevice ? "25px" : "50px",
          marginLeft: "3%",
          marginRight: "3%",
          fontWeight: "bold",
          marginBottom:
            isTabletOrMobile || isTabletOrMobileDevice ? "20px" : "50px",
          borderBottom: "1px solid var(--color-primario) ",
          borderTop: "1px solid var(--color-primario)",
          padding:
            isTabletOrMobile || isTabletOrMobileDevice ? "5px 0" : "20px 0",
        }}
      >
        {texto.texto}
      </div>
      <div className="carrousel">
        {isTabletOrMobile || isTabletOrMobileDevice ? (
          <></>
        ) : (
          <LeftOutlined onClick={next} className="icons-left" />
        )}
        <div className="multi-carrousel">
          <Slider ref={(c) => (slider = c)} {...settings}>
            {articulos.map((articulo, i) => {
              if (tipo === articulo.categoria)
                return (
                  <>
                    <div
                      className="item"
                      style={
                        articulo.categoria == "NUEVO"
                          ? {}
                          : { padding: "0", boxShadow: "none" }
                      }
                    >
                      <div className="estrellas-item">
                        {articulo.clasificacion > 0 && (
                          <div
                            className="estrellas-cantidad"
                            style={
                              articulo.categoria == "NUEVO"
                                ? {
                                    top: "-9%",
                                    left: "0",
                                    borderTopLeftRadius: "10px",
                                  }
                                : { top: "0", left: "0" }
                            }
                          >
                            {estrellas(articulo.clasificacion)}
                          </div>
                        )}
                        <img
                          src={articulo.img}
                          alt={articulo.codigo}
                          width={
                            articulo.categoria == "NUEVO"
                              ? "80%!important"
                              : isTabletOrMobile || isTabletOrMobileDevice ?"100%!important" :"145%!important"
                          }
                          id={i}
                          onClick={agregarArticulo}
                        />
                        {articulo.categoria == "NUEVO" && (
                          <Text>{articulo.nombre}</Text>
                        )}
                      </div>
                    </div>
                  </>
                );
            })}
          </Slider>
        </div>
        {isTabletOrMobile || isTabletOrMobileDevice ? (
          <></>
        ) : (
          <RightOutlined
            color="black"
            onClick={previous}
            className="icons-right"
          />
        )}
      </div>
      <Modal
        width={isTabletOrMobile || isTabletOrMobileDevice ? 450 : 900}
        visible={modalArticulo}
        onCancel={cerrarArticulo}
        footer={null}
        style={{ borderRadius: "50px" }}
        centered
      >
        <Articulo articulo={articuloSeleccionado} onOk={agregarCantidad} />
      </Modal>
      <Modal
        width={isTabletOrMobile || isTabletOrMobileDevice ? 450 : 500}
        visible={modalComprado}
        onCancel={cerrarComprado}
        footer={null}
        style={{ borderRadius: "50px" }}
        centered
      >
        <Comprado articulo={articuloSeleccionado} onOk={setModalComprado} />
      </Modal>
    </div>
  );
}
export default SeccionExtra;
