import React, { useContext, useState } from "react";
import { Typography, Modal } from "antd";
import { useMediaQuery } from "react-responsive";
import { BANCO } from "../../config";
import Recomendacion from "./Recomendacion";
import { GlobalContext } from "../../Context/GlobalContext";
import "./styles.css";
const { Title } = Typography;

function SeccionRecomendaciones() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
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
    SeccionRecomendaciones.length > 0 && (
      <div className="recomendaciones">
        <Title>RECOMENDACION</Title>
        {BANCO.URL + SeccionRecomendaciones[0] && (
          <>
            <div className="row">
              <img
                src={BANCO.URL + SeccionRecomendaciones[0].img}
                alt={BANCO.URL + SeccionRecomendaciones[0].img}
                className="cuadrado"
                id={0}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[1].img}
                alt={BANCO.URL + SeccionRecomendaciones[1].img}
                className="rectangular"
                id={1}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[2].img}
                alt={BANCO.URL + SeccionRecomendaciones[2].img}
                className="cuadrado"
                id={2}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[3].img}
                alt={BANCO.URL + SeccionRecomendaciones[3].img}
                className="cuadrado"
                id={3}
                onClick={onClick}
              />
            </div>
            <div className="row">
              <img
                src={BANCO.URL + SeccionRecomendaciones[4].img}
                alt={BANCO.URL + SeccionRecomendaciones[4].img}
                className="rectangular"
                id={4}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[5].img}
                alt={BANCO.URL + SeccionRecomendaciones[5].img}
                className="cuadrado"
                id={5}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[6].img}
                alt={BANCO.URL + SeccionRecomendaciones[6].img}
                className="rectangular"
                id={6}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[7].img}
                alt={BANCO.URL + SeccionRecomendaciones[7].img}
                className="cuadrado"
                id={7}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[8].img}
                alt={BANCO.URL + SeccionRecomendaciones[8].img}
                className="rectangular"
                id={8}
                onClick={onClick}
              />
            </div>
            <div className="row">
              <img
                src={BANCO.URL + SeccionRecomendaciones[9].img}
                alt={BANCO.URL + SeccionRecomendaciones[9].img}
                className="cuadrado"
                id={9}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[10].img}
                alt={BANCO.URL + SeccionRecomendaciones[10].img}
                className="cuadrado"
                id={10}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[11].img}
                alt={BANCO.URL + SeccionRecomendaciones[11].img}
                className="rectangular"
                id={11}
                onClick={onClick}
              />
              <img
                src={BANCO.URL + SeccionRecomendaciones[12].img}
                alt={BANCO.URL + SeccionRecomendaciones[12].img}
                className="cuadrado"
                id={12}
                onClick={onClick}
              />
            </div>
          </>
        )}
        <Modal
          width={
            isTabletOrMobile || isTabletOrMobileDevice
              ? 350
              : tipo === "CUADRADO"
              ? 900
              : 600
          }
          visible={modal}
          onCancel={cerrarModal}
          footer={null}
          style={{ borderRadius: "50px" }}
        >
          <Recomendacion recomendacion={recomendacion} tipo={tipo} />
        </Modal>
      </div>
    )
  );
}
export default SeccionRecomendaciones;
