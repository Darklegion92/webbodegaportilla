import React from "react";

import { Typography } from "antd";

const { Title } = Typography;

function Agrupaciones({ titulo, urlImage }) {
  return (
    <div className="agrupacion">
      <Title level={4}>{titulo}</Title>
      <img src={urlImage} alt={urlImage} />
    </div>
  );
}
export default Agrupaciones;
