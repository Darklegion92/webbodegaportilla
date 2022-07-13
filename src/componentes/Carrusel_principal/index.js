import React, { useEffect, useContext } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../Context/GlobalContext";
import { BANCO } from "../../config";

import "./styles.css";

function Carrusel_principal() {
  const { carrusel, grupos, consultarArticulosTienda } = useContext(GlobalContext);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const onClick = async (e) => {
    const id = e.target.id;

    await grupos.forEach((grupo, i) => {
      if (grupo.id == id) {
        consultarArticulosTienda([{ nombre: grupo.nombre, tipo: "GRUPO", id }]);
        return;
      }
    });

  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const movile = carrusel.filter(item => item.imgmovil !== null)
  const desktop = carrusel.filter(item => item.img !== null)

  return (
    <div className="carrousel">
      <Carousel
        prevIcon={
          <IoIosArrowDropleftCircle
            size={isTabletOrMobile || isTabletOrMobileDevice ? 40 : 70}
            color="var(--color-secundario)"
          />
        }
        nextIcon={
          <IoIosArrowDroprightCircle
            size={isTabletOrMobile || isTabletOrMobileDevice ? 40 : 70}
            color="var(--color-secundario)"
          />
        }
        interval={7000}
      >
        {isTabletOrMobile || isTabletOrMobileDevice ? movile.map((item) => {
          return (
            <Carousel.Item>
              <Link to={"/shop"} >

                <img
                  className="d-block w-100"
                  src={

                    `${BANCO.URL}img/carusel/movil/${item.imgmovil}`

                  }
                  onClick={onClick}
                  alt={item.idgrupo}
                  id={item.idgrupo}
                />
              </Link>
            </Carousel.Item>
          );
        }):desktop.map((item) => {
          console.log(item);
          return (
            <Carousel.Item>
              <Link to={"/shop"} >

                <img
                  className="d-block w-100"
                  src={

                    `${BANCO.URL}img/carusel/${item.img}`

                  }
                  onClick={onClick}
                  alt={item.idgrupo}
                  id={item.idgrupo}
                />
              </Link>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default Carrusel_principal;
