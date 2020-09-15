import React, { useContext } from "react";
import { Steps } from "antd";
import { ShoppingCartOutlined, SolutionOutlined } from "@ant-design/icons";
import CarArticulos from "./CarArticulos";
import FormularioDatosEnvio from "./FormularioDatosEnvio";
import { GlobalContext } from "../../Context/GlobalContext";
const { Step } = Steps;

const StepPagos = ({ current }) => {
  const { carrito } = useContext(GlobalContext);

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
    </>
  );
};

export default StepPagos;
