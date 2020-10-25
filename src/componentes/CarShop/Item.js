import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import NumericInput from "react-numeric-input";
import { useMediaQuery } from "react-responsive";
import { BsTrash } from "react-icons/bs";
import { BANCO } from "../../config";

import { GlobalContext } from "../../Context/GlobalContext";
const { Title, Text } = Typography;

const Item = ({ articulo }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [cantidad, setCantidad] = useState();
  const [img, setImg] = useState(BANCO.URL + articulo.img);
  const {
    carrito,
    eliminarCarrito,
    actualizarCarrito,
    loading,
    setLoading,
  } = useContext(GlobalContext);

  useEffect(() => {
    setCantidad(articulo.cantidad);
  });

  const onError = () => {
    setImg("img/articulodefecto.png");
  };

  const onChange = async (e) => {
    setCantidad(articulo.cantidad);
    articulo.cantidad = e;
    await carrito.forEach((item, i) => {
      if (item.codigo === articulo.codigo) {
        carrito[i] = articulo;
        return;
      }
    });
    actualizarCarrito(carrito, articulo);
    setLoading(!loading);
  };

  const eliminar = () => {
    carrito.forEach((item, i) => {
      if (item.codigo === articulo.codigo) {
        const newCar = [...carrito.slice(0, i), ...carrito.slice(i + 1)];
        eliminarCarrito(newCar, item);
        return;
      }
    });
  };
  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Row className="item" gutter={10}>
      <Col span={8}>
        <img src={img} width="100%" onError={onError} />
      </Col>
      <Col span={14}>
        <Row>
          <Title level={2}>{articulo.nombre}</Title>
        </Row>
        <Row>
          <Title level={3} style={{ color: "var(--color-naranja)" }}>
            $ {articulo.precio}
          </Title>
        </Row>
        <Row align="center" justify="center">
          <Col span={7}>
            <Title level={4}>CANTIDAD</Title>
          </Col>
          <Col span={17}>
            <NumericInput
              min={1}
              value={cantidad}
              onChange={onChange}
              mobile={false}
              className="input-edit"
            />
          </Col>
        </Row>
      </Col>
      <Col span={2}>
        <BsTrash color="var(--color-naranja)" size={25} onClick={eliminar} />
      </Col>
    </Row>
  ) : (
    <Row className="item" gutter={30} justify="center" align="middle">
      <Col span={11}>
        <Row gutter={20} style={{ width: "100%" }}>
          <Col span={6}>
            <img src={img} width="100px" onError={onError} />
          </Col>
          <Col span={18}>
            <Title level={3}>{articulo.nombre}</Title>
          </Col>
        </Row>
      </Col>
      <Col span={13}>
        <Row gutter={10} align="middle" justify="center">
          <Col span={8}>
            <Title level={3}>
              ${" "}
              {articulo.descuento > 0
                ? (articulo.precio -
                    (articulo.precio * articulo.descuento) / 100) *
                  articulo.cantidad
                : articulo.precio * articulo.cantidad}
            </Title>
          </Col>
          <Col span={4}>
            <Text className="embalaje">CANTIDAD</Text>
          </Col>
          <Col span={10}>
            <Row>
              <NumericInput
                min={1}
                value={cantidad}
                onChange={onChange}
                className="input-edit"
                mobile={false}
              />
              <Text className="embalaje">{articulo.embalaje}</Text>
            </Row>
          </Col>
          <Col span={2}>
            <BsTrash color="var(--color-naranja)" size={20} onClick={eliminar} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Item;
