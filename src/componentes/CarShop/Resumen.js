import React, { useContext, useEffect, useState } from "react";
import { Row, Col, Typography, Divider, Button, Input, Collapse } from "antd";
import { GlobalContext } from "../../Context/GlobalContext";
import { useMediaQuery } from "react-responsive";

import Alerta from "../Alerta";

import "./styles.css";
import numeral from "numeral";

const { Text, Title } = Typography;
const { Panel } = Collapse;
const Resumen = ({ next, current }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const [valorCupon, setValorCupon] = useState();
  const [ahorro, setAhorro] = useState(0);
  const [total, setTotal] = useState(0);
  const [modal, setModal] = useState({
    visible: false,
  });

  const { carrito, enviarOrden, cupon, validarCupon, tipoPago } = useContext(
    GlobalContext
  );

  const Shield = () => (
    <svg
      t="1598801065009"
      class="icon"
      viewBox="0 0 1024 1024"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      p-id="8842"
      width={isTabletOrMobile || isTabletOrMobileDevice ? "90" : "90"}
      height={isTabletOrMobile || isTabletOrMobileDevice ? "100" : "100"}
    >
      <path
        d="M511.780571 944.859429c6.857143 0 18.011429-2.56 29.147429-8.576 243.437714-136.704 327.424-194.56 327.424-350.994286v-327.862857c0-44.982857-19.712-59.136-55.716571-74.569143-50.56-20.992-214.272-79.725714-264.850286-97.28-11.574857-3.858286-23.570286-6.436571-36.004572-6.436572-11.995429 0-23.990857 3.437714-35.565714 6.436572-50.578286 15.414857-214.290286 76.708571-264.850286 97.28-36.022857 14.994286-55.716571 29.568-55.716571 74.569143v327.862857c0 156.416 84.425143 213.851429 327.424 350.994286 11.154286 5.997714 21.851429 8.576 28.708571 8.576z m0-78.006858c-6.418286 0-13.714286-2.56-26.569142-10.276571-197.997714-120.009143-261.430857-155.154286-261.430858-287.140571V270.262857c0-14.573714 2.998857-20.132571 14.573715-24.868571 65.152-25.691429 190.72-70.272 256.731428-93.842286 6.4-2.56 11.977143-3.84 16.694857-3.84 5.156571 0 10.294857 1.28 17.152 3.84 66.011429 23.588571 190.281143 71.131429 256.713143 93.860571 11.574857 4.278857 14.573714 10.276571 14.573715 24.868572V569.417143c0 131.986286-63.853714 166.710857-261.430858 287.140571-12.854857 7.716571-20.150857 10.276571-27.008 10.276572z m-106.715428-166.272h213.430857c29.988571 0 44.141714-14.994286 44.141714-47.158857v-166.272c0-28.288-11.154286-43.300571-33.846857-46.299428V389.851429c0-78.848-47.140571-131.986286-117.010286-131.986286-69.430857 0-116.992 53.138286-116.992 131.986286v51.437714c-22.290286 2.998857-33.426286 17.993143-33.426285 45.860571v166.272c0 32.146286 14.134857 47.140571 43.702857 47.140572z m34.285714-315.428571c0-50.578286 29.147429-84.004571 72.429714-84.004571 43.702857 0 72.429714 33.426286 72.429715 83.986285v54.857143l-144.859429 0.438857z"
        p-id="8843"
        fill="#4c2e1e"
      />
    </svg>
  );

  const calcular = (car) => {
    let desc = 0;
    let tot = 0;
    car.forEach((item) => {
      if (
        item.cant_dcto3 !== null && item.cant_dcto3 !== 0 &&
        parseInt(item.cantidad) >= parseInt(item.cant_dcto3)
      ) {
        tot += item.cantidad * item.dcto3;
        desc += item.cantidad * (item.precio - item.dcto3);
      } else if (
        item.cant_dcto2 !== null && item.cant_dcto2 !== 0 &&
        parseInt(item.cantidad) >= parseInt(item.cant_dcto2)
      ) {
        tot += item.cantidad * item.dcto2;
        desc += item.cantidad * (item.precio - item.dcto2);
      } else if (
        item.cant_dcto1 !== null && item.cant_dcto1 !== 0 &&
        parseInt(item.cantidad) >= parseInt(item.cant_dcto1)
      ) {
        tot += item.cantidad * item.dcto1;
        desc += item.cantidad * (item.precio - item.dcto1);
      } else {
        tot += item.cantidad * item.precio;
      }
    });
    setAhorro(desc);
    setTotal(tot);
  };

  useEffect(() => {
    calcular(carrito);
  });

  const onChange = (e) => {
    setValorCupon(e.target.value);
  };

  const validacionCupon = async () => {
    if (valorCupon) {
      const resp = await validarCupon(valorCupon);

      if (resp === true) {
        setModal({
          visible: true,
          tipo: "SUCCESS",
          mensaje:
            "Su Cupón ha sido Validado Correctamente, para redimirlo debe estar inscrito en nuestra plataforma",
          titulo: "Cupón Correcto",
          link: "",
        });
      } else if (resp === false) {
        setModal({
          visible: true,
          tipo: "WARNIN",
          mensaje: "Cupón No Válido, o Ya Vencido",
          titulo: "Error Al Validar Cupón",
          link: "",
        });
      } else {
        setModal({
          visible: true,
          tipo: "ERROR",
          mensaje: "Error al conectar con el servidor, intentalo mas tarde",
          titulo: "Error Interno",
          link: "",
        });
      }
    }
  };

  const enviar = async () => {
    if (tipoPago) {
      const resp = await enviarOrden();
      if (resp.ok === true) {
        if (tipoPago === "debito")
          setModal({
            visible: true,
            tipo: "SUCCESS",
            mensaje: "Su pedido ha sido guardado, Ahora Realiza el pago",
            titulo: "Pedido Guardado Correctamente",

            web: resp.datos.url,
          });
        else if (tipoPago === "efecty")
          setModal({
            visible: true,
            tipo: "SUCCESS",
            mensaje: "Su pedido ha sido guardado, Ahora Realiza el pago",
            titulo: "Pedido Guardado Correctamente",
            link: resp.datos.url,
          });
        else if (tipoPago === "credito")
          setModal({
            visible: true,
            tipo: "SUCCESS",
            mensaje: "Su pedido ha sido guardado, su pago sera",
            titulo: "Pedido Guardado Correctamente",
            link: resp.datos.url,
          });
      } else if (resp.ok === false) {
        setModal({
          visible: true,
          tipo: "WARNIN",
          mensaje: "No se ha podido grabar su pedido, debe llenar los datos",
          titulo: "Error Al Validar Pedido",
          link: "",
        });
      } else {
        setModal({
          visible: true,
          tipo: "ERROR",
          mensaje: "Error al conectar con el servidor, intentalo mas tarde",
          titulo: "Error Interno",
          link: "",
        });
      }
    } else {
      setModal({
        visible: true,
        tipo: "WARNIN",
        mensaje: "Debe Elegir Un Medio de Pago",
        titulo: "Error Medio de Pago",
        link: "",
      });
    }
  };
  return (
    <>
      <Col span={24} className="resumen">
        <Row>
          <Title level={3}>RESUMEN DEL PEDIDO</Title>
        </Row>
        <Divider />
        <Row>
          <Col span={11}>
            <Text>SUB-TOTAL</Text>
          </Col>
          <Col span={13}>
            <Text>{numeral(total).format('$ 0,0')}</Text>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={10}>
            <Text>AHORRO</Text>
          </Col>
          <Col span={14}>
            <Text>{numeral(ahorro).format('$ 0,0')}</Text>
          </Col>
        </Row>
        <Divider />
        <Row>
          <Col span={10}>
            <Text>ENVÍO</Text>
          </Col>
          <Col span={14}>
            <Text>{numeral(0).format('$ 0,0')}</Text>
          </Col>
        </Row>
        <Divider />
        <Row style={{ padding: "0" }}>
          <Col span={24}>
            <Collapse
              defaultActiveKey={["0"]}
              ghost
              expandIconPosition="right"
              style={{
                width: "100%",
                padding: "0",
                margin: "0",
                fontSize: "23px",
                color: "var(--color-primario)",
                alignItems: "left",
              }}
            >
              <Panel header="CALCULAR ENVÍO" key="1" style={{ margin: "0" }}>
                <Col span={24}>
                  <Text>Se Acordará Con El Cliente</Text>
                </Col>
              </Panel>
              <Divider style={{ borderColor: "var(--color-primario)" }} />
              <Panel header="APLICAR CUPÓN" key="2">
                <Col span={24}>
                  <Input placeholder="Cupón" onChange={onChange} />
                  <Col span={9}>
                    <Button onClick={validacionCupon}>APLICAR</Button>
                  </Col>
                </Col>
              </Panel>
            </Collapse>
          </Col>
        </Row>
        <Divider />
        {!isTabletOrMobile && !isTabletOrMobileDevice ? (
          <Row>
            <Title level={2}>TOTAL</Title>
            <Title>

            {numeral(
              total > 50000
                ? Math.round(
                    total -
                      (cupon.descuento ? (total * cupon.descuento) / 100 : 0)
                  )
                : Math.round(
                    total -
                      (cupon.descuento ? (total * cupon.descuento) / 100 : 0)
                  )
              ).format('$ 0,0')}
            </Title>
          </Row>
        ) : (
          <Row>
            <Col span={24}>
              <Row justify="center" align="middle" gutter={5}>
                <Col span={8}>
                  <Shield />
                </Col>
                <Col span={12}>
                  <Title level={2}>COMPRA SEGURA</Title>
                </Col>
              </Row>
            </Col>
          </Row>
        )}
        <Row>
          {!isTabletOrMobile && !isTabletOrMobileDevice && carrito.length > 0 && (
            <Button
              style={{
                backgroundColor: "var(--color-naranja)",
                boxShadow: "none",
                fontWeight: "bold",
                color: "white",
                borderRadius: "10px",
                height: "auto",
                width: "100%",
                fontSize: "23px",
              }}
              onClick={current === 0 ? next : enviar}
            >
              {current === 0 ? "PROCESAR COMPRA" : "FINALIZAR COMPRA"}
            </Button>
          )}
        </Row>
        {!isTabletOrMobile && !isTabletOrMobileDevice ? (
          <Row>
            <Col span={24} style={{ margin: "30px 0" }}>
              <Row justify="center" align="middle" gutter={10}>
                <Col span={8}>
                  <Shield />
                </Col>
                <Col span={16}>
                  <Title level={2}>COMPRA SEGURA</Title>
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          <>
            <Divider />
            <Row>
              <Title level={2}>TOTAL</Title>
              <Title>
                {numeral(total).format('$ 0,0')}
              </Title>
            </Row>
          </>
        )}
      </Col>
      <Col span={24}>
        <Row align="middle" justify="center">
          {(isTabletOrMobile || isTabletOrMobileDevice) && carrito.length > 0 && (
            <a href="#home" width="100%">
              <Button
                style={{
                  backgroundColor: "var(--color-naranja)",
                  boxShadow: "none",
                  color: "white",
                  height: "auto",
                  width: "100%",
                  fontSize: "35.5px",
                  fontWeight: "bold",
                  border: "none",
                  padding: current === 0 ? "10px" : "0 50px",
                }}
                onClick={current === 0 ? next : enviar}
              >
                {current === 0 ? "PROCESAR COMPRA" : "PAGAR PEDIDO"}
              </Button>
            </a>
          )}
        </Row>
      </Col>
      <Alerta modal={modal} setModal={setModal} />
    </>
  );
};

export default Resumen;
