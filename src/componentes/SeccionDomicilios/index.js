import React from "react";
import { Typography } from "antd";
import { FaTruck } from "react-icons/fa";
import { withGetScreen } from "react-getscreen";
import "./styles.css";

const { Title } = Typography;

function SeccionDomicilios(props) {
  return (
    <div className="secciondomicilios">
      {props.isMobile() ? (
        <Title level={2}>
          ENVIO GRATIS POR COMPRAS SUPERIORES A $ 50.000
        </Title>
      ) : (
        <Title level={2}>
          POR COMPRAS MAYORES A $ 50.000 EL DOMICILIO ES GRATIS
        </Title>
      )}
      <FaTruck size={props.isMobile() ? 15: props.isTablet() ? 30 : 50} />
    </div>
  );
}
export default withGetScreen(SeccionDomicilios);
