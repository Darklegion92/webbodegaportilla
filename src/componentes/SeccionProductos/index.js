import React, { useContext } from "react";
import { Typography } from "antd";
import { Link } from "react-router-dom";

import Agrupaciones from "./Agrupaciones";
import { GlobalContext } from "../../Context/GlobalContext";
import "./styles.css";

const { Title } = Typography;

function SeccionEmpresa() {
  const { seccionProductos } = useContext(GlobalContext);
  return (
    <div
      className="seccionproductos"
      styles="padding-top: 40px; margin-top: -40px"
    >
      <Title lvl={1}>PRODUCTOS</Title>
      <div className="agrupaciones">
        {seccionProductos.map((item) => {
          return (
            <div>
              <Agrupaciones
                link={item.link1}
                titulo={item.titulo1}
                urlImage={item.img1}
              />
              <Agrupaciones
                link={item.link2}
                titulo={item.titulo2}
                urlImage={item.img2}
              />
            </div>
          );
        })}
      </div>
      <Link to="/shop">
        <Title level={2}>VER MAS</Title>
      </Link>
    </div>
  );
}
export default SeccionEmpresa;
