import React, { useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import { useMediaQuery } from "react-responsive";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "./styles.css";

function Carrusel_principal() {
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
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              isTabletOrMobile || isTabletOrMobileDevice
                ? "img/movil/slider1.png"
                : "img/slider1.png"
            }
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              isTabletOrMobile || isTabletOrMobileDevice
                ? "img/movil/slider2.png"
                : "img/slider2.png"
            }
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={
              isTabletOrMobile || isTabletOrMobileDevice
                ? "img/movil/slider3.png"
                : "img/slider3.png"
            }
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Carrusel_principal;
