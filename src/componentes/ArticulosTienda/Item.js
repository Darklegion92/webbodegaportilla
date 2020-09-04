import React from "react";
import { Typography, Button } from "antd";

const { Text, Title } = Typography;
const Item = ({ articulo }) => {
  return (
    <div className="item">
      <img src={articulo.img} />
      <Title level={4}>{articulo.nombre}</Title>
      <Text className="descripcion">{articulo.descripcion}</Text>
      <Text strong className="precio">{articulo.precio}</Text>
      <Text className="embalaje">{articulo.embalaje}</Text>
      <Button>AÑADIR AL CARRITO</Button>
    </div>
  );
};

export default Item;
