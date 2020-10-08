import React from "react";
import { Modal, Typography, Row, Col } from "antd";
import { Link } from "react-router-dom";
import {
  CheckCircleTwoTone,
  CloseCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

import "./styles.css";

const { Title, Text } = Typography;

const Alerta = ({ modal, setModal }) => {
  return (
    <Modal
      closable={false}
      centered
      visible={modal.visible}
      destroyOnClose={true}
      title={
        <Title level={3} style={{ color: "var(--color-primario)" }}>
          {modal.titulo}
        </Title>
      }
      footer={
        <Link
          to={modal.link !== "" && modal.link}
          onClick={() => {
            if (modal.link === "") {
              setModal({ visible: false });
            }
          }}
          style={{
            border: "solid 1px var(--color-primario)",
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "var(--color-primario)",
            color: "white",
            margin: "10px",
          }}
        >
          ACEPTAR
        </Link>
      }
    >
      <Row gutter={16} align="middle" justify="center">
        <Col span={8}>
          {modal.tipo === "SUCCESS" ? (
            <CheckCircleTwoTone
              twoToneColor="#52c41a"
              style={{ width: "100%", fontSize: "100px", margin: "10px" }}
            />
          ) : modal.tipo === "ERROR" ? (
            <CloseCircleOutlined
              style={{
                width: "100%",
                fontSize: "100px",
                margin: "10px",
                color: "#fa0202",
              }}
            />
          ) : (
            <WarningOutlined
              style={{
                width: "100%",
                fontSize: "100px",
                margin: "10px",
                color: "#faab02",
              }}
            />
          )}
        </Col>
        <Col span={16}>
          <Text style={{ color: "var(--color-primario)", fontSize: "20px" }}>
            {modal.mensaje}
          </Text>
        </Col>
      </Row>
    </Modal>
  );
};

export default Alerta;
