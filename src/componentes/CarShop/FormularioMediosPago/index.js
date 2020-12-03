import React, { useState } from "react";
import { Row, Col, Typography, Collapse } from "antd";
import {
  IdcardOutlined,
  BankOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";
import DatosPersonales from "./DatosPersonales";
import TarjetaCredito from "./TarjetaCredito";
import TarjetaDebito from "./TarjetaDebito";
import { useMediaQuery } from "react-responsive";
import Efecty from "./Efecty";
import Alerta from "../../Alerta";

const EfectyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="70px"
    viewBox="0 0 180.97 66.206"
  >
    <path
      d="M210.531,306.531c-3.444,18.284-21.057,33.1-39.341,33.1s-30.307-14.819-26.865-33.1,21.057-33.1,39.341-33.1,30.312,14.819,26.865,33.1m-17.684-28.182c9.64,4.063,15.1,14.184,12.869,26.024a31.529,31.529,0,0,1-2.335,7.29,1.12,1.12,0,0,0-.1.172,34.945,34.945,0,0,1-4.225,6.874c-.061.074-.119.149-.18.223-.083.109-.172.215-.261.324A36.537,36.537,0,0,1,183.284,330.3a0,0,0,0,1,0,0c-.149.056-.3.109-.451.162-.134.048-.271.1-.4.141-.061.02-.122.041-.183.064h-.02a.16.16,0,0,1-.147-.158v-.025a1.137,1.137,0,0,0,0-.131.041.041,0,0,0,0-.013l.14-2.908a16.217,16.217,0,0,0,7.758-3.888,11.685,11.685,0,0,0,3.6-9.807,10.472,10.472,0,0,0-3.736-7.654,35.013,35.013,0,0,0-7.882-4.944l-.423-.208a40.5,40.5,0,0,1-6.033-3.4,4.755,4.755,0,0,1-2.156-3.07,2.373,2.373,0,0,1,.633-1.8,5.4,5.4,0,0,1,3.86-1.251l.03,0a21.517,21.517,0,0,1,7.685,1.986,1.263,1.263,0,0,0,.618.1,4.2,4.2,0,0,0,3.191-2.345,7.593,7.593,0,0,0,.942-3.024,1.24,1.24,0,0,0-.473-1.074,17.019,17.019,0,0,0-7.9-3,.488.488,0,0,1-.253-.149.515.515,0,0,1-.086-.124c0-.035.218-3.617.327-4.832a4.648,4.648,0,0,0-.094-1.507,1.249,1.249,0,0,0-1.238-.874.628.628,0,0,0-.071.005,34.387,34.387,0,0,0-11.881,3.277l0,0c-10.544,5.015-18.993,15.064-21.174,26.647-2.454,13.029,3.746,24.117,14.558,28.281-9.637-4.063-15.1-14.181-12.869-26.019a31.661,31.661,0,0,1,2.409-7.444.937.937,0,0,0,.078-.139,34.089,34.089,0,0,1,1.71-3.209,36.785,36.785,0,0,1,16.3-14.351l0-.013a33.654,33.654,0,0,1,3.609-1.353,1.172,1.172,0,0,0,.157-.056h.008l.018-.005a.156.156,0,0,1,.139.157v.031a.573.573,0,0,0,0,.119l-.2,1.952a14.342,14.342,0,0,0-6.945,3.387,12.141,12.141,0,0,0-.821,16.769,22.3,22.3,0,0,0,7.6,5.511l.2.094a54.919,54.919,0,0,1,6.975,3.556c1.662,1.17,2.052,2.049,2.156,3.148,0,0,0,.017,0,.028a2.717,2.717,0,0,1-.856,2.214,5.789,5.789,0,0,1-3.906,1.284h-.035a18.554,18.554,0,0,1-9.746-2.811l-.056-.035a.086.086,0,0,1-.025-.018,3.237,3.237,0,0,0-1.659-.532h-.058a2.262,2.262,0,0,0-1.472.62,3.814,3.814,0,0,0-.914,1.37,6.942,6.942,0,0,0-.737,3.781,6.54,6.54,0,0,0,.109.78,1.244,1.244,0,0,0,.519.785,20.479,20.479,0,0,0,9.738,3.72.436.436,0,0,1,.223.117.385.385,0,0,1,.116.172,35.528,35.528,0,0,1-.172,5.417,4.915,4.915,0,0,0,.149,1.786,1.267,1.267,0,0,0,.271.481,1.247,1.247,0,0,0,.851.41c.03,0,.063.005.1.005a1.27,1.27,0,0,0,.238-.023c.593-.066,1.185-.155,1.773-.253l.005.01a34.648,34.648,0,0,0,6.468-1.76c.036-.016.071-.028.107-.041.347-.131.691-.273,1.036-.415.051-.023.1-.043.154-.066.345-.147.691-.3,1.033-.453a.949.949,0,0,1,.094-.043c10.714-4.957,19.33-15.1,21.536-26.817,2.457-13.026-3.748-24.117-14.558-28.281"
      transform="translate(-138 -273.428)"
    />
  </svg>
);

const { Title } = Typography;
const { Panel } = Collapse;
const styleTitle = {
  color: "var(--color-primario)",
  borderTop: "solid 1px var(--color-primario)",
  borderBottom: "solid 1px var(--color-primario)",
  padding: "10px 0px",
};
const styleHead = {
  color: "var(--color-primario)",
};

function FormularioMediosPago({
  datosOrden,
  setEditar,
  bancosPSE,
  tiposDocumento,
  guardarMedio,
}) {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [selected, setSelected] = useState();
  const [modal, setModal] = useState({
    visible: false,
  });
  const [open, setOpen] = useState();
  const onClick = (e) => {
    console.log(e);
  };
  return (
    <Col
      span={24}
      style={{
        marginLeft: isTabletOrMobile || isTabletOrMobileDevice ? "0px" : "60px",
        marginTop: "40px",
      }}
    >
      <DatosPersonales setEditar={setEditar} datos={datosOrden} />
      <Title style={styleTitle} level={3}>
        METODO DE PAGO
      </Title>
      <Collapse bordered={false} ghost activeKey={open}>
        <Panel
          showArrow={false}
          key="credito"
          header={
            <Row
              gutter={18}
              onClick={() => {
                setOpen("credito");
              }}
            >
              {selected == "credito" && (
                <Col>
                  <CheckCircleTwoTone
                    twoToneColor="orange"
                    style={{ fontSize: "30px" }}
                  />
                </Col>
              )}
              <Col>
                <IdcardOutlined style={{ fontSize: "30px" }} />
              </Col>
              <Col>
                <Title level={4} style={styleHead}>
                  Tarjeta de Crédito
                </Title>
              </Col>
            </Row>
          }
        >
          <TarjetaCredito
            setModal={setModal}
            tiposDocumento={tiposDocumento}
            setSelected={setSelected}
            guardarMedio={guardarMedio}
            setOpen={setOpen}
          />
        </Panel>
        <Panel
          showArrow={false}
          key="debito"
          header={
            <Row
              gutter={18}
              onClick={() => {
                setOpen("debito");
              }}
            >
              {selected == "debito" && (
                <Col>
                  <CheckCircleTwoTone
                    twoToneColor="orange"
                    style={{ fontSize: "30px" }}
                  />
                </Col>
              )}
              <Col>
                <BankOutlined style={{ fontSize: "30px" }} />
              </Col>
              <Col>
                <Title level={4} style={styleHead}>
                  Tarjeta de Débito
                </Title>
              </Col>
            </Row>
          }
        >
          <TarjetaDebito
            setModal={setModal}
            bancosPSE={bancosPSE}
            tiposDocumento={tiposDocumento}
            setSelected={setSelected}
            setOpen={setOpen}
            guardarMedio={guardarMedio}
          />
        </Panel>
        <Panel
          showArrow={false}
          key="efecty"
          header={
            <Row
              gutter={18}
              onClick={() => {
                setOpen("efecty");
              }}
            >
              {selected == "efecty" && (
                <Col>
                  <CheckCircleTwoTone
                    twoToneColor="orange"
                    style={{ fontSize: "30px" }}
                  />
                </Col>
              )}
              <Col>
                <EfectyIcon
                  style={{ color: "var(--color-primario)" }}
                  setSelected={setSelected}
                  setOpen={setOpen}
                />
              </Col>
              <Col>
                <Title
                  level={4}
                  style={{
                    marginLeft: "-37px",
                    color: "var(--color-primario)",
                  }}
                >
                  Efecty
                </Title>
              </Col>
            </Row>
          }
        >
          <Efecty
            setModal={setModal}
            setSelected={setSelected}
            guardarMedio={guardarMedio}
          />
        </Panel>
      </Collapse>
      <Alerta modal={modal} setModal={setModal} />
    </Col>
  );
}

export default FormularioMediosPago;
