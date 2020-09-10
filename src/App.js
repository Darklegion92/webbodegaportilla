import React, { useEffect, useContext } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { Layout } from "antd";
import { useMediaQuery } from "react-responsive";
import { ImWhatsapp } from "react-icons/im";

import Encabezado from "./componentes/Encabezado";
import Carrusel_principal from "./componentes/Carrusel_principal";
import SeccionDomicilios from "./componentes/SeccionDomicilios";
import SeccionEmpresa from "./componentes/SeccionEmpresa";
import SeccionProductos from "./componentes/SeccionProductos";
import SeccionExtra from "./componentes/SeccionExtra";
import SeccionRecomendaciones from "./componentes/SeccionRecomendaciones";
import Pie from "./componentes/Pie";
import Validacion from "./componentes/Validacion";
import Tienda from "./componentes/Tienda";
import Contactanos from "./componentes/Contactanos";
import CarShop from "./componentes/CarShop";
import { GlobalContext } from "./Context/GlobalContext";

import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

const { Header, Footer, Content } = Layout;

function App() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  let location = useLocation().pathname;
  const { articulos } = useContext(GlobalContext);

  const recomendaciones = [
    {
      imagen: "img/imgreco1.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco2.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco1.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco1.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco2.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco1.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco2.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco1.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco2.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco1.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco1.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco2.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
    {
      imagen: "img/imgreco1.jpeg",
      titulo: "ALGO",
      texto:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
    },
  ];
  return (
    <Layout>
      <ImWhatsapp size={70} className="whats-icon" />
      {location !== "/login" && (
        <Header id="home">
          <Encabezado />
        </Header>
      )}
      <Switch>
        <Route path="/login" exact>
          <Validacion />
        </Route>
        <Route path="/">
          <Route path="/carshop" exact>
            <Content>
              <CarShop />
            </Content>
          </Route>
          <Route path="/contacto" exact>
            <Content>
              <Contactanos />
            </Content>
          </Route>
          <Route path="/shop" exact>
            <ImWhatsapp size={70} className="whats-icon" />
            <Content>
              <Tienda />
            </Content>
          </Route>
          <Route path="/" exact>
            <div
              id="quienessomos"
              style={{
                minHeight: "40px",
                width: "100%",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "300px"
                    : "550px",
              }}
            />
            <div
              id="productos"
              style={{
                minHeight: "118px",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "620px"
                    : "960px",
              }}
            />

            <div
              id="nuevo"
              style={{
                minHeight: "118px",
                backgroundColor: "black",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "1600px"
                    : "2030px",
                zIndex: 1,
              }}
            />

            <div
              id="recomendaciones"
              style={{
                minHeight: "118px",
                width: "100%",
                marginBottom: "118px",
                position: "absolute",
                top:
                  isTabletOrMobile || isTabletOrMobileDevice
                    ? "2150px"
                    : "3130px",
              }}
            />
            <Content>
              <div>
                <Carrusel_principal />
              </div>
              <SeccionDomicilios />
              <div>
                <SeccionEmpresa />
              </div>
              <div>
                <SeccionProductos />
              </div>
              <div>
                <SeccionExtra
                  items={isTabletOrMobile || isTabletOrMobileDevice ? 3 : 4}
                  texto={{
                    texto: "PRODUCTOS NUEVOS",
                    fondo: "invisible",
                    color: "var(--color-primario)",
                  }}
                  articulos={articulos}
                  tipo="NUEVO"
                />
              </div>
              <SeccionExtra
                items={isTabletOrMobile || isTabletOrMobileDevice ? 2 : 3}
                texto={{
                  texto: "REGALOS",
                  fondo: "invisible",
                  color: "var(--color-primario)",
                }}
                articulos={articulos}
                tipo="REGALO"
              />
              <div>
                {<SeccionRecomendaciones recomendaciones={recomendaciones} />}
              </div>
            </Content>
          </Route>
        </Route>
      </Switch>
      {location !== "/login" && (
        <Footer>
          <Pie />
        </Footer>
      )}
    </Layout>
  );
}

export default App;
