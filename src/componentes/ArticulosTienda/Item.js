import React, { useState,useEffect } from "react";
import { Typography, Button, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import { AiFillStar } from "react-icons/ai";
import { BANCO } from "../../config";

const { Text, Title } = Typography;
const Item = ({ articulo, id, onClick, enCarrito }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [img, setImg] = useState();
  useEffect(() => {
    console.log(articulo.img);
    setImg(BANCO.URL + articulo.img)
   }, [articulo])
  const estrellas = (cantidad) => {
    const estrellas = [];
    for (let i = 0; i < cantidad; i++) {
      estrellas.push(
        <AiFillStar
          size={isTabletOrMobile || isTabletOrMobileDevice ? "10" : "20"}
        />
      );
    }

    return estrellas;
  };

  const onError = () => {
    setImg("img/articulodefecto.png");
  };

  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Row className="item" onClick={() => onClick(id)} gutter={16}>
      <Col span={8}>
        <div className="estrellas-item">
          {articulo.clasificacion > 0 && (
            <div className="estrellas-cantidad">
              {estrellas(articulo.clasificacion)}
            </div>
          )}
          <img src={img} width="100%" onError={onError} />
        </div>
      </Col>
      <Col span={16}>
        <Row>
          <Title level={3}>{articulo.nombre}</Title>
        </Row>
        <Row
          align="middle"
          style={{
            visibility: articulo.descuento > 0 ? "visible" : "hidden",
            marginLeft: "10px",
          }}
        >
          <Text className="descuento">$ {articulo.precio + " COP"}</Text>
        </Row>
        <Row gutter={5} justify="start">
          <Text strong className="precio">
            ${" "}
            {articulo.descuento > 0
              ? articulo.precio - (articulo.precio * articulo.descuento) / 100
              : articulo.precio}{" "}
            COP
          </Text>
        </Row>

        <Row justify="start">
          <Button>{enCarrito ? "YA AGREGADO" : "AÑADIR AL CARRITO"}</Button>
        </Row>
      </Col>
    </Row>
  ) : (
    <Col
      className="item"
      onClick={() => onClick(id)}
      style={{ maxHeight: "290px" }}
    >
      <div className="estrellas-item">
        {articulo.clasificacion > 0 && (
          <div className="estrellas-cantidad">
            {estrellas(articulo.clasificacion)}
          </div>
        )}
        <Row gutter={8} justify="center">
          <img src={img} width="80%" onError={onError}  />
        </Row>
        <Row justify="center">
          <Title level={3}>{articulo.nombre}</Title>
        </Row>
        <Row
          justify="center"
          align="middle"
          style={{ visibility: articulo.descuento > 0 ? "visible" : "hidden" }}
        >
          <Text className="descuento">$ {articulo.precio + " COP"}</Text>
        </Row>
        <Row justify="center" align="middle">
          <Text className="precio">
            ${" "}
            {articulo.descuento > 0
              ? articulo.precio - (articulo.precio * articulo.descuento) / 100
              : articulo.precio}{" "}
            COP
          </Text>
        </Row>
        <Row justify="center">
          <Button>{enCarrito ? "YA AGREGADO" : "AÑADIR AL CARRITO"}</Button>
        </Row>
      </div>
    </Col>
  );
};

export default Item;
