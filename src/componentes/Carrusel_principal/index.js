import React from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "./styles.css";

function Carrusel_principal() {
  return (
    <div className="carrousel">
      <Carousel
        prevIcon={
          <IoIosArrowDropleftCircle size={70} color="var(--color-secundario)" />
        }
        nextIcon={
          <IoIosArrowDroprightCircle
            size={70}
            color="var(--color-secundario)"
          />
        }
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slider1.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slider2.png"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slider3.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Carrusel_principal;
