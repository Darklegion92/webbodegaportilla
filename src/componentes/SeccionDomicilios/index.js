import React from "react";
import { Typography } from "antd";
import { FaTruck } from "react-icons/fa";
import "./styles.css";

const { Title } = Typography;

function SeccionDomicilios() {
  return (
    <div className="secciondomicilios">
     
      <Title level={1}>
        POR COMPRAS MAYORES A $ 50.000 EL DOMICILIO ES GRATIS
      </Title> <FaTruck size={70} />
    </div>
  );
}
export default SeccionDomicilios;
