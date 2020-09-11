import React, { useContext } from "react";
import { Typography } from "antd";

import "./styles.css";
import { GlobalContext } from "../../Context/GlobalContext";

const { Title, Text } = Typography;

function SeccionEmpresa() {
  const { seccionEmpresa } = useContext(GlobalContext);

  return (
    <div className="seccionempresa">
      <Title>{seccionEmpresa.titulo}</Title>
      <Text>
        {seccionEmpresa.texto.p1}
        <br />
        <br />
        {seccionEmpresa.texto.p2}
      </Text>
    </div>
  );
}
export default SeccionEmpresa;
