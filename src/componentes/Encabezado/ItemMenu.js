import React from "react";
import { Typography, Row, Col } from "antd";

const { Text, Title } = Typography;

const ItemMenu = ({ articulo }) => {
  const letras = articulo.nombre.split("");
  let texto = "";
  let texto2 = "";
  console.log("letras cantidad " + letras);
  return (
    <Row className="item-menu" gutter={6} align="middle">
      <Col span={6}>
        <img src={articulo.img} width="100%" />
      </Col>
      <Col span={18}>
        {letras.length >= 16 ? (
          <Title level={4} style={{ marginTop: "10px" }}>
            {letras.map((letra, i) => {
              texto += letra;
              if (i == 16) {
                return texto;
              }
            })}
          </Title>
        ) : (
          <Title level={4} style={{ marginTop: "10px" }}>
            {articulo.nombre}
          </Title>
        )}
        {letras.length > 16 && (
          <Title level={4}>
            {letras.map((letra, i) => {
              if (i > 16 && i <= 32) {
                texto2 += letra;
              }
              if (i == letras.length - 1) {
                return texto2;
              }
            })}
          </Title>
        )}
        <Text>$ {articulo.cantidad * articulo.precio} COP</Text>
      </Col>
    </Row>
  );
};

export default ItemMenu;
