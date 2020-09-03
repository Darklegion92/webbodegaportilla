import React from "react";
import { Typography } from "antd";
const Item = ({ articulo }) => {
  return (
    <div className="item">
      <img src={articulo.img} />
      <Text></Text>
    </div>
  );
};

export default Item;
