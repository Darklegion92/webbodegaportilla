import React,{useState} from "react";
import { Typography, Row, Col } from "antd";
import { useMediaQuery } from "react-responsive";
import { BANCO } from "../../config";
const { Text, Title } = Typography;

const ItemMenu = ({ articulo }) => {
  const letras = articulo.nombre.split("");
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [img, setImg] = useState(BANCO.URL + articulo.img);
  const numero = 13;
  let texto = "";
  let texto2 = "";
  
  const onError = () => {
    setImg("img/articulodefecto.png");
  };

  return (
    <Row className="item-menu" gutter={6} align="middle">
      <Col span={6}>
        <img src={img} width="100%" onError={onError}/>
      </Col>
      <Col span={18}>
        {!isTabletOrMobile || !isTabletOrMobileDevice ? (
          letras.length >= numero ? (
            <Title level={4} style={{ marginTop: "10px" }}>
              {letras.map((letra, i) => {
                texto += letra;
                if (i == numero) {
                  return texto;
                }
              })}
            </Title>
          ) : (
            <Title level={4} style={{ marginTop: "10px" }}>
              {articulo.nombre}
            </Title>
          )
        ) : (
          <Title level={4}>{articulo.nombre}</Title>
        )}
        {(!isTabletOrMobile || !isTabletOrMobileDevice) && letras.length > numero && (
          <Title level={4}>
            {letras.map((letra, i) => {
              if (i > numero && i <= 32) {
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
