import React, { useContext, useState } from "react";
import { Typography, Modal } from "antd";

import Recomendacion from "./Recomendacion";
import { GlobalContext } from "../../Context/GlobalContext";
import "./styles.css";
const { Title } = Typography;

function SeccionRecomendaciones() {
  const { SeccionRecomendaciones } = useContext(GlobalContext);
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
    setRecomendacion(SeccionRecomendaciones[i]);
    setModal(true);
  };

  return (
    <div className="recomendaciones">
      <Title>RECOMENDACIONES</Title>
      {SeccionRecomendaciones[0] && (
        <>
          <div className="row">
            <img
              src={SeccionRecomendaciones[0].imagen}
              alt={SeccionRecomendaciones[0].imagen}
              className="cuadrado"
              id={0}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[1].imagen}
              alt={SeccionRecomendaciones[1].imagen}
              className="rectangular"
              id={1}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[2].imagen}
              alt={SeccionRecomendaciones[2].imagen}
              className="cuadrado"
              id={2}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[3].imagen}
              alt={SeccionRecomendaciones[3].imagen}
              className="cuadrado"
              id={3}
              onClick={onClick}
            />
          </div>
          <div className="row">
            <img
              src={SeccionRecomendaciones[4].imagen}
              alt={SeccionRecomendaciones[4].imagen}
              className="rectangular"
              id={4}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[5].imagen}
              alt={SeccionRecomendaciones[5].imagen}
              className="cuadrado"
              id={5}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[6].imagen}
              alt={SeccionRecomendaciones[6].imagen}
              className="rectangular"
              id={6}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[7].imagen}
              alt={SeccionRecomendaciones[7].imagen}
              className="cuadrado"
              id={7}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[8].imagen}
              alt={SeccionRecomendaciones[8].imagen}
              className="rectangular"
              id={8}
              onClick={onClick}
            />
          </div>
          <div className="row">
            <img
              src={SeccionRecomendaciones[9].imagen}
              alt={SeccionRecomendaciones[9].imagen}
              className="cuadrado"
              id={9}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[10].imagen}
              alt={SeccionRecomendaciones[10].imagen}
              className="cuadrado"
              id={10}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[11].imagen}
              alt={SeccionRecomendaciones[11].imagen}
              className="rectangular"
              id={11}
              onClick={onClick}
            />
            <img
              src={SeccionRecomendaciones[12].imagen}
              alt={SeccionRecomendaciones[12].imagen}
              className="cuadrado"
              id={12}
              onClick={onClick}
            />
          </div>
        </>
      )}
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
