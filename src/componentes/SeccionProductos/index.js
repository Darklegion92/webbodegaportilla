import React from "react";
import { Typography } from "antd";

import Agrupaciones from "./Agrupaciones";
import "./styles.css";

const { Title } = Typography;

function SeccionEmpresa() {
  return (
    <div className="seccionproductos">
      <Title>PRODUCTOS</Title>
      <div className="agrupaciones">
        <div>
          <Agrupaciones titulo="PANADERIA Y POSTRERIA" urlImage="" />
          <Agrupaciones titulo="SUPER ALIMENTOS" urlImage="" />
        </div>
        <div>
          <Agrupaciones titulo="UTENSILIOS" urlImage="" />
          <Agrupaciones titulo="FRUTOS SECOS" urlImage="" />
        </div>
        <div>
          <Agrupaciones titulo="FRUTOS DESHIDRATADOS" urlImage="" />
          <Agrupaciones titulo="SEMILLAS" urlImage="" />
        </div>
      </div>
    </div>
  );
}
export default SeccionEmpresa;
