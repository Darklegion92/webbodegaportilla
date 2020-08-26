import React from "react";
import { Typography } from "antd";

import Agrupaciones from "./Agrupaciones";
import "./styles.css";

const { Title } = Typography;

function SeccionEmpresa() {
  return (
    <div className="seccionproductos">
      <Title lvl={1}>PRODUCTOS</Title>
      <div className="agrupaciones">
        <div>
          <Agrupaciones titulo="FRUTOS SECOS" urlImage="img/frutossecos.jpeg" />
          <Agrupaciones
            titulo="PANADERIA Y POSTRERIA"
            urlImage="img/panaderiaypostreria.jpeg"
          />
        </div>
        <div>
          <Agrupaciones
            titulo="FRUTOS DESHIDRATADOS"
            urlImage="img/deshidratados.png"
          />
          <Agrupaciones
            titulo="SUPER ALIMENTOS"
            urlImage="img/superalimentos.jpeg"
          />
        </div>
        <div>
          <Agrupaciones titulo="SEMILLAS" urlImage="img/semillas.jpeg" />
          <Agrupaciones titulo="UTENSILIOS" urlImage="img/utencilios.jpeg" />
        </div>
        <div>
          <Agrupaciones titulo="ACEITES" urlImage="img/salsas.png" />
          <Agrupaciones
            titulo="TOPPINGS Y SPRINGLESS"
            urlImage="img/salsas.png"
          />
        </div>
      </div>
      <Title level={2}>VER MAS</Title>
    </div>
  );
}
export default SeccionEmpresa;
