import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "antd";

const { Title } = Typography;

function Agrupaciones({ titulo, urlImage }) {
  return (
    <Link to="/shop">
      <div className="agrupacion">
        <Title level={4}>{titulo}</Title>
        <img src={urlImage} alt={urlImage} />
      </div>
    </Link>
  );
}
export default Agrupaciones;
