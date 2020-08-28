import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { withGetScreen } from "react-getscreen";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import "./styles.css";

function Carrusel_principal(props) {
  return (
    <div className="carrousel">
      <Carousel
        prevIcon={
          <IoIosArrowDropleftCircle size={props.isMobile() ? 40:70} color="var(--color-secundario)" />
        }
        nextIcon={
          <IoIosArrowDroprightCircle
          size={props.isMobile() ? 40:70}
            color="var(--color-secundario)"
          />
        }
        interval={7000}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.isMobile() ? "img/movil/slider1.png":"img/slider1.png"}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.isMobile() ? "img/movil/slider2.png":"img/slider2.png"}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={props.isMobile() ? "img/movil/slider3.png":"img/slider3.png"}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
export default withGetScreen(Carrusel_principal);
