import React, { useContext, useState } from "react";
import { Typography, Button, Row, Col } from "antd";
import NumericInput from "react-numeric-input";
import { AiFillStar } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";
import "./styles.css";
import { GlobalContext } from "../../Context/GlobalContext";

const { Text } = Typography;

const Articulo = ({ articulo, onOk }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const { setCarrito, carrito } = useContext(GlobalContext);
  const [cantidad, setCantidad] = useState(1);

  let enCarrito = false;
  carrito.forEach((item) => {
    if (articulo.codigo === item.codigo) {
      enCarrito = true;
      return;
    }
  });

  const estrellas = (cantidad) => {
    const estrellas = [];

    for (let i = 0; i < cantidad; i++) {
      estrellas.push(<AiFillStar size={isTabletOrMobile || isTabletOrMobileDevice ? "30":"60"} style={{ margin: "5px" }} />);
    }

    return estrellas;
  };
  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <div className="estrellas-item-articulo">
      {articulo.clasificacion > 0 && (
        <div className="estrellas-cantidad-articulo">
          {estrellas(articulo.clasificacion)}
        </div>
      )}
      <Col span={24} className="articulo-tag">
        <Row justify="center">
          <img src={articulo.img} width="60%" />
        </Row>
        <Row justify="center" className="fila2">
          <Text className="nombre">{articulo.nombre}</Text>
          <Text className="titulo">BENEFICIOS</Text>
          <Text className="cuerpo">{articulo.descripcion}</Text>
        </Row>
        <Row justify="center" className="fila3">
          <Text>$ {articulo.precio} COP</Text>
        </Row>
        <Row justify="center" className="fila4">
          <Text>$ {articulo.precio} COP</Text>
        </Row>
        <Row className="fila5" align="middle" justify="center" gutter={5}>
          <Col span={8} align="middle">
            <NumericInput
              min={1}
              value={cantidad}
              onChange={(e) => {
                setCantidad(e);
              }}
              mobile={false}
              className="input-edit"
              disabled={enCarrito}
            />
          </Col>
          <Col span={5}>
            <Text>{articulo.embalaje}</Text>
          </Col>
        </Row>
        <Row justify="center" className="fila5">
          <Button
            onClick={() => {
              if (!enCarrito) {
                const nuevoArticulo = articulo;
                nuevoArticulo.cantidad = cantidad;
                setCarrito([...carrito, nuevoArticulo]);
                onOk();
              }
            }}
          >
            {enCarrito ? "YA AGREGADO" : "AÑADIR AL CARRITO"}
          </Button>
        </Row>
      </Col>
    </div>
  ) : (
    <div className="estrellas-item-articulo">
      {articulo.clasificacion > 0 && (
        <div className="estrellas-cantidad-articulo">
          {estrellas(articulo.clasificacion)}
        </div>
      )}
      <Row className="articulo-tag" gutter={25}>
        <Col span={14}>
          <img src={articulo.img} width="100%" />
        </Col>
        <Col span={10}>
          <Row className="fila1">
            <Text>{articulo.nombre}</Text>
          </Row>
          <Row className="fila2">
            <Text className="titulo">BENEFICIOS</Text>
            <Text className="cuerpo">{articulo.descripcion}</Text>
          </Row>
          <Row className="fila3">
            <Text>$ {articulo.precio} COP</Text>
          </Row>
          <Row className="fila4">
            <Text>$ {articulo.precio} COP</Text>
          </Row>
          <Row className="fila5" gutter={20}>
            <Col span={12}>
              <Row>
                <Col span={20}>
                  <NumericInput
                    min={1}
                    value={cantidad}
                    onChange={(e) => {
                      setCantidad(e);
                    }}
                    mobile={false}
                    className="input-edit"
                    disabled={enCarrito}
                  />
                </Col>
                <Col span={4}>
                  <Text
                    style={{ fontSize: "30px", color: "var(--color-primario)" }}
                  >
                    {articulo.embalaje}
                  </Text>
                </Col>
              </Row>
            </Col>
            <Col span={10}>
              <Button
                onClick={() => {
                  if (!enCarrito) {
                    const nuevoArticulo = articulo;
                    nuevoArticulo.cantidad = cantidad;
                    setCarrito([...carrito, nuevoArticulo]);
                    onOk();
                  }
                }}
              >
                {enCarrito ? "YA AGREGADO" : "AÑADIR AL CARRITO"}
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Articulo;
