import React from "react";

import { Typography } from "antd";

const { Title } = Typography;

function Agrupaciones({ titulo, urlImg }) {
  return (
    <div className="agrupacion">
      <Title level={4}>{titulo}</Title>
      <img src={urlImg} alt={urlImg} />
    </div>
  );
}
export default Agrupaciones;
