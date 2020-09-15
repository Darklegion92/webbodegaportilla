import React, { useContext, useEffect, useState } from "react";
import { Col, Row, Typography, InputNumber } from "antd";
import { GoTrashcan } from "react-icons/go";

import { GlobalContext } from "../../Context/GlobalContext";
const { Title } = Typography;

const Item = ({ articulo }) => {
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
        console.log(carrito);
        return;
      }
    });
  };
  return (
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
          <Col span={9}>
            <Title level={3}>$ {articulo.precio}</Title>
          </Col>
          <Col span={6}>
            <Title level={4}>CANTIDAD</Title>
          </Col>
          <Col span={6}>
            <InputNumber min={1} onChange={onChange} value={cantidad} />
          </Col>
          <Col span={2}>
            <GoTrashcan color="red" size={30} onClick={eliminar} />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Item;
