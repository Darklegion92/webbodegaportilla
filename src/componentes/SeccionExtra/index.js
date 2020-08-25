import React, { useRef } from "react";
import Slider from "react-slick";
import { Typography } from "antd";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
import "./styles.css";

const { Text } = Typography;
function SeccionExtra({ items, articulos, texto }) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: items,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
  };
  let slider = useRef();

  const next = () => {
    slider.slickNext();
  };
  const previous = () => {
    slider.slickPrev();
  };
  return (
    <div className="seccion-extra">
      <div
        style={{
          backgroundColor: texto.fondo,
          color: texto.color,
          textAlign: "center",
          display: "flex",
          "justify-content": "center",
          alignItems: "center",
          "font-size": "50px",
          marginLeft: "3%",
          marginRight: "3%",
          fontWeight: "bold",
          marginBottom: "50px",
          borderBottom: "1px solid var(--color-primario) ",
          borderTop: "1px solid var(--color-primario)",
          paddingTop:"20px",
          paddingBottom:"20px"
        }}
      >
        {texto.texto}
      </div>
      <div className="carrousel">
        <LeftCircleOutlined onClick={next} />
        <div className="multi-carrousel">
          <Slider ref={(c) => (slider = c)} {...settings}>
            {articulos.map((articulo, i) => {
              return (
                <div>
                  <div
                    className="item"
                    style={
                      articulo.nombre ? {} : { padding: "0", boxShadow: "none" }
                    }
                  >
                    <img
                      src={articulo.imagen}
                      alt={articulo.codigo}
                      href={articulo.enlace}
                      width={
                        articulo.nombre ? "80%!important" : "100%!important"
                      }
                    />
                    {articulo.nombre && <Text>{articulo.nombre}</Text>}
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        <RightCircleOutlined color="black" onClick={previous} />
      </div>
    </div>
  );
}
export default SeccionExtra;
