import React from "react";
import { Typography } from "antd";
import { Row, Col, Divider } from "antd";
import "./styles.css";
const { Title } = Typography;

function SeccionRecomendaciones({ imagenes }) {
  return (
    <div className="recomendaciones">
      <Title>RECOMENDACIONES</Title>
      <Divider
        style={{
          backgroundColor: "var(--color-primario)",
          width: "1250px",
          height: "0.15rem",
        }}
      />
      <div className="imagenes">
        <Row gutter={16}>
          <Col span={12}>
            <img src={imagenes[0].imagen} alt={imagenes[0].imagen} />
          </Col>
          <Col span={8}>
            <img src={imagenes[1].imagen} alt={imagenes[1].imagen} />
          </Col>
          <Col span={4}>
            <img src={imagenes[0].imagen} alt={imagenes[0].imagen} />
          </Col>
        </Row>
        <Row gutter={16}>
          <Col span={2}>
            <img src={imagenes[3].imagen} alt={imagenes[3].imagen} />
          </Col>
          <Col span={6}>
            <img src={imagenes[4].imagen} alt={imagenes[4].imagen} />
          </Col>
          <Col span={12}>
            <img src={imagenes[5].imagen} alt={imagenes[5].imagen} />
          </Col>
          <Col span={4}>
            <img src={imagenes[6].imagen} alt={imagenes[6].imagen}></img>
          </Col>
        </Row>
        <Row gutter={16}>
          {" "}
          <Col span={8}>
            <img src={imagenes[7].imagen} alt={imagenes[7].imagen}></img>
          </Col>{" "}
          <Col span={12}>
            <img src={imagenes[8].imagen} alt={imagenes[8].imagen}></img>
          </Col>{" "}
          <Col span={4}>
            <img src={imagenes[9].imagen} alt={imagenes[9].imagen}></img>
          </Col>
        </Row>
      </div>
    </div>
  );
}
export default SeccionRecomendaciones;
