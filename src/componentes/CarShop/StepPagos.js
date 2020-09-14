import React, { useState, useContext } from "react";
import { Steps, Button } from "antd";
import { ShoppingCartOutlined, SolutionOutlined } from "@ant-design/icons";
import CarArticulos from "./CarArticulos";
import FormularioDatosEnvio from "./FormularioDatosEnvio";
import { GlobalContext } from "../../Context/GlobalContext";
const { Step } = Steps;

const StepPagos = () => {
  const [current, setCurrent] = useState(0);
  const { carrito, setCarrito } = useContext(GlobalContext);

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
