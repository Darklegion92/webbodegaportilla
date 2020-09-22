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
  const { carrusel } = useContext(GlobalContext);

  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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
        {carrusel.map((item) => {
          return (
            <Carousel.Item>
              <Link to={"/shop"}>
                <img
                  className="d-block w-100"
                  src={
                    isTabletOrMobile || isTabletOrMobileDevice
                      ? BANCO.URL + item.imgmovil
                      : BANCO.URL + item.img
                  }
                  alt={item.filtro}
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
