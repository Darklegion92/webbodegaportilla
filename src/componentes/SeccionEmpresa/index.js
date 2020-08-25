import React from "react";
import { Typography } from "antd";
import "./styles.css";

const { Title, Text } = Typography;

function SeccionEmpresa() {
  return (
    <div className="seccionempresa">
      <Title>EL CAMINO DE BODEGA PORTILLA</Title>
      <Text>
        Somos una empresa dedicada al bienestar en general de nuestros clientes
        , brindándole nuestro mejor servicio y conocimientos en panadería y
        repostería , además de ofrecerle nuestro lema principal " Bienestar y
        salud " esto es lo que la humanidad busca y prefiere hoy en día .!
        <br />
        Las condiciones , bondades y beneficios que tiene de productos secos ,
        semillas , súper alimentos y sus derivados harán que en muy poco tiempo
        sea la revolución alimenticia del mundo ya que dichos productos no
        tienen ni un solo químico , son productos 100% naturales!
      </Text>
    </div>
  );
}
export default SeccionEmpresa;
