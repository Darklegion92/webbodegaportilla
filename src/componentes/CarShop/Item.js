import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Typography } from "antd";
import NumericInput from "react-numeric-input";
import { useMediaQuery } from "react-responsive";
import { BsTrash } from "react-icons/bs";

import { GlobalContext } from "../../Context/GlobalContext";
const { Title } = Typography;

const Item = ({ articulo }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [cantidad, setCantidad] = useState();
  const { carrito, setCarrito, loading, setLoading } = useContext(
    GlobalContext
  );

  useEffect(() => {
    setCantidad(articulo.cantidad);
  });

  const onChange = async (e) => {
    setCantidad(articulo.cantidad);
    articulo.cantidad = e;
    await carrito.forEach((item, i) => {
      if (item.codigo === articulo.codigo) {
        carrito[i] = articulo;
        return;
      }
    });
    setCarrito(carrito);
    setLoading(!loading);
  };

  const eliminar = () => {
    carrito.forEach((item, i) => {
      if (item.codigo === articulo.codigo) {
        const newCar = [...carrito.slice(0, i), ...carrito.slice(i + 1)];
        setCarrito(newCar);
        return;
      }
    });
  };
  return isTabletOrMobile || isTabletOrMobileDevice ? (
    <Row className="item" gutter={10}>
      <Col span={8}>
        <img src={articulo.img} width="100%" />
      </Col>
      <Col span={12}>
        <Row>
          <Title level={2}>{articulo.nombre}</Title>
        </Row>
        <Row>
          <Title level={3}>$ {articulo.precio}</Title>
        </Row>
        <Row align="center" justify="center">
          <Col span={15}>
            <Title level={4}>CANTIDAD</Title>
          </Col>
          <Col span={9}>
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
      <Col span={4}>
        <BsTrash color="red" size={25} onClick={eliminar} />
      </Col>
    </Row>
  ) : (
    <Row className="item" gutter={30}>
      <Col span={13}>
        <Row gutter={8}>
          <Col span={6}>
            <img src={articulo.img} width="100%" />
          </Col>
          <Col span={18}>
            <Title level={3}>{articulo.nombre}</Title>
          </Col>
        </Row>
      </Col>
      <Col span={11}>
        <Row gutter={2}>
          <Col span={10}>
            <Title level={3}>$ {articulo.precio}</Title>
          </Col>
          <Col span={6}>
            <Title level={4}>CANTIDAD</Title>
          </Col>
          <Col span={6}>
            <NumericInput
              min={1}
              value={cantidad}
              onChange={onChange}
              className="input-edit"
            />
          </Col>
          <Col span={2}>
            <BsTrash color="red" size={30} onClick={eliminar} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Item;
