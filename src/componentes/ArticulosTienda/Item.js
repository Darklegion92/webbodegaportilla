import React from "react";
import { Typography, Button } from "antd";

const { Text, Title } = Typography;
const Item = ({ articulo, id, onClick }) => {
  return (
    <div className="item">
      <div onClick={() => onClick(id)}>
        <img src={articulo.img} />
        <Title level={4}>{articulo.nombre}</Title>
        <Text className="descripcion">{articulo.descripcion}</Text>
        <Text strong className="precio">
          {articulo.precio}
          <br />
        </Text>
        <Text className="embalaje">{articulo.embalaje}</Text>
      </div>
      <Button>AÑADIR AL CARRITO</Button>
    </div>
  );
};

export default Item;
