import React, { useState } from "react";
import { Typography, Modal } from "antd";

import Recomendacion from "./Recomendacion";
import "./styles.css";
const { Title } = Typography;

function SeccionRecomendaciones({ recomendaciones }) {
  const [modal, setModal] = useState(false);
  const [recomendacion, setRecomendacion] = useState({});
  const [tipo, setTipo] = useState("CUADRADO");
  const cerrarModal = () => {
    setModal(false);
  };

  const onClick = (e) => {
    const i = parseInt(e.target.id);

    if (i === 1 || i === 4 || i === 6 || i === 8 || i === 11) {
      setTipo("RECTANGULO");
    } else {
      setTipo("CUADRADO");
    }
    setRecomendacion(recomendaciones[i]);
    setModal(true);
  };

  return (
    <div className="recomendaciones">
      <Title>RECOMENDACIONES</Title>
      <div className="row">
        <img
          src={recomendaciones[0].imagen}
          alt={recomendaciones[0].imagen}
          className="cuadrado"
          id={0}
          onClick={onClick}
        />
        <img
          src={recomendaciones[1].imagen}
          alt={recomendaciones[1].imagen}
          className="rectangular"
          id={1}
          onClick={onClick}
        />
        <img
          src={recomendaciones[2].imagen}
          alt={recomendaciones[2].imagen}
          className="cuadrado"
          id={2}
          onClick={onClick}
        />
        <img
          src={recomendaciones[3].imagen}
          alt={recomendaciones[3].imagen}
          className="cuadrado"
          id={3}
          onClick={onClick}
        />
      </div>
      <div className="row">
        <img
          src={recomendaciones[4].imagen}
          alt={recomendaciones[4].imagen}
          className="rectangular"
          id={4}
          onClick={onClick}
        />
        <img
          src={recomendaciones[5].imagen}
          alt={recomendaciones[5].imagen}
          className="cuadrado"
          id={5}
          onClick={onClick}
        />
        <img
          src={recomendaciones[6].imagen}
          alt={recomendaciones[6].imagen}
          className="rectangular"
          id={6}
          onClick={onClick}
        />
        <img
          src={recomendaciones[7].imagen}
          alt={recomendaciones[7].imagen}
          className="cuadrado"
          id={7}
          onClick={onClick}
        />
        <img
          src={recomendaciones[8].imagen}
          alt={recomendaciones[8].imagen}
          className="rectangular"
          id={8}
          onClick={onClick}
        />
      </div>
      <div className="row">
        <img
          src={recomendaciones[9].imagen}
          alt={recomendaciones[9].imagen}
          className="cuadrado"
          id={9}
          onClick={onClick}
        />
        <img
          src={recomendaciones[10].imagen}
          alt={recomendaciones[10].imagen}
          className="cuadrado"
          id={10}
          onClick={onClick}
        />
        <img
          src={recomendaciones[11].imagen}
          alt={recomendaciones[11].imagen}
          className="rectangular"
          id={11}
          onClick={onClick}
        />
        <img
          src={recomendaciones[12].imagen}
          alt={recomendaciones[12].imagen}
          className="cuadrado"
          id={12}
          onClick={onClick}
        />
      </div>
      <Modal
        width={tipo === "CUADRADO" ? 900 : 600}
        visible={modal}
        onCancel={cerrarModal}
        footer={null}
        style={{ borderRadius: "50px" }}
      >
        <Recomendacion recomendacion={recomendacion} tipo={tipo} />
      </Modal>
    </div>
  );
}
export default SeccionRecomendaciones;
