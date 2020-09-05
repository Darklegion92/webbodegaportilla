import React, { useState } from "react";
import { Steps, Button, message } from "antd";
import { ShoppingCartOutlined, SolutionOutlined } from "@ant-design/icons";
import CarArticulos from "./CarArticulos";
import FormularioDatosEnvio from "./FormularioDatosEnvio";

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
    icon: <ShoppingCartOutlined />,
  },
  {
    title: "DATOS DE ENVIO Y PAGO",
    content: <FormularioDatosEnvio />,
    icon: <SolutionOutlined />,
  },
];

const StepPagos = () => {
  const [current, setCurrent] = useState(1);
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
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            DATOS
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            CARRITO
          </Button>
        )}
      </div>
    </>
  );
};

export default StepPagos;
