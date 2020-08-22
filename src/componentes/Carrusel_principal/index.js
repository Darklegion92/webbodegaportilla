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
          <IoIosArrowDropleftCircle size={70} color="var(--color-primario)" />
        }
        nextIcon={
          <IoIosArrowDroprightCircle size={70} color="var(--color-primario)" />
        }
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slider1.jpeg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slider2.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="img/slider3.jpeg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default Carrusel_principal;
