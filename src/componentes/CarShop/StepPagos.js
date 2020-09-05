import React, { useState } from "react";
import { Steps, Button, message } from "antd";

import CarArticulos from "./CarArticulos";

const { Step } = Steps;

const carrito = [
  {
    img: "img/articulodefecto.jpeg",
    nombre: "Articulo Unico",
    precio: 1000,
    cantidad: 10,
    embalaje: "Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "Articulo Unico",
    precio: 1000,
    cantidad: 10,
    embalaje: "Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "Articulo Unico",
    precio: 1000,
    cantidad: 10,
    embalaje: "Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "Articulo Unico",
    precio: 1000,
    cantidad: 10,
    embalaje: "Gr",
  },
  {
    img: "img/articulodefecto.jpeg",
    nombre: "Articulo Unico",
    precio: 1000,
    cantidad: 10,
    embalaje: "Gr",
  },
];

const steps = [
  {
    title: "CARRITO DE COMPRAS",
    content: <CarArticulos carrito={carrito} />,
  },
  {
    title: "DATOS DE ENVIO Y PAGO",
    content: "Second-content",
  },
];

const StepPagos = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    const current1 = current + 1;
    setCurrent(current1);
  };

  const prev = () => {
    const current1 = current - 1;
    setCurrent(current1);
  };
  return (
    <>
      <Steps
        current={current}
        className="site-navigation-steps"
        type="navigation"
      >
        {steps.map((item) => (
          <Step key={item.title} title={item.title} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            SIGUIENTE
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            ENVIAR
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            ANTERIOR
          </Button>
        )}
      </div>
    </>
  );
};

export default StepPagos;
