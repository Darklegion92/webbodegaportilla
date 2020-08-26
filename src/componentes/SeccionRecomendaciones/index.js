import React from "react";
import { Typography } from "antd";
import { Row, Col, Divider } from "antd";
import "./styles.css";
const { Title } = Typography;

function SeccionRecomendaciones({ imagenes }) {
  return (
    <div className="recomendaciones">
      <Title>RECOMENDACIONES</Title>
      <div className="row">
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="cuadrado"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="rectangular"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="cuadrado"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="cuadrado"/>
      </div>
      <div className="row">
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="rectangular"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="cuadrado"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="rectangular"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="cuadrado"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="rectangular"/>
      </div>
      <div className="row">
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="cuadrado"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="cuadrado"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="rectangular"/>
        <img src={imagenes[0].imagen} alt={imagenes[0].imagen} className="cuadrado"/>
      </div>
    </div>
  );
}
export default SeccionRecomendaciones;
