import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Card, Typography, Col, Row, Space } from "antd";
import { GlobalContext } from "../../Context/GlobalContext";

const { Text } = Typography;

function DetallesPedido() {
  const { credito, ordenCliente } = useContext(GlobalContext);

  const props = {
    style: {
      color: "var(--color-primario)",
      fontSize: "17px",
      fontWeight: "bold",
      textAlign: "center",
    },
  };
  return credito ? (
    <Row justify="center" align="middle">
      <Col span={8} align="center">
        <Card>
          <Space size={10} direction="vertical">
            <Row justify="center" align="middle">
              <img src="../img/logo.png" alt="logo" width="300px" />
            </Row>
            <Row justify="center" align="middle">
              <Text {...props}>PAGO ACEPTADO</Text>
            </Row>
            <Row justify="center" align="middle">
              <Text {...props}>
                TARJETA:{" "}
                <span style={{ fontSize: "20px", color: "green" }}>
                  *********{credito.card.number}
                </span>
              </Text>
            </Row>
            <Row justify="center" align="middle">
              <Text {...props}>
                AUTORIZACION:{" "}
                <span style={{ fontSize: "20px", color: "green" }}>
                  {credito.transaction.authorization_code}
                </span>
              </Text>
            </Row>
            <Row justify="center" align="middle">
              <Text {...props}>
                VALOR:{"    "}
                <span style={{ fontSize: "20px", color: "red" }}>
                  $ {credito.transaction.amount}
                </span>
              </Text>
            </Row>
            <Row justify="center" align="middle">
              <Text {...props}>
                ESTADO:{" "}
                <span
                  style={{
                    color:
                      credito.transaction.status === "success"
                        ? "green"
                        : "red",
                  }}
                >
                  {credito.transaction.status === "success"
                    ? "APROBADA"
                    : "RECHAZADA"}
                </span>
              </Text>
            </Row>
            <Row justify="center" align="middle">
              <Text {...props}>
                {credito.transaction.status === "success"
                  ? "SU PEDIDO YA SE ENCUENTRA EN PROCESO DE DESPACHO"
                  : "ESTAMOS A LA ESPERA DEL PAGO"}
              </Text>
            </Row>
            <Row justify="center" align="middle">
              <Text {...props}>
                {" "}
                SE DESPACHARA A LA DIRECCIÓN:
                <br />
                <span style={{ color: "red" }}>
                  {ordenCliente && ordenCliente.direccion}
                </span>
              </Text>
            </Row>
            <Row justify="center" align="middle">
              <Link
                to="/shop"
                style={{
                  backgroundColor: "var(--color-primario)",
                  height: "auto",
                  fontWeight: "bold",
                  color: "white",
                  fontSize: "20px",
                  padding: "10px",
                  borderRadius: "10px",
                }}
              >
                IR A LA TIENDA
              </Link>
            </Row>
          </Space>
        </Card>
      </Col>
    </Row>
  ) : (
    <></>
  );
}

export default DetallesPedido;
