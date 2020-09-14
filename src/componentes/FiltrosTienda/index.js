import React, { useContext, useState } from "react";
import { Typography, Divider, Row, List } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { GlobalContext } from "../../Context/GlobalContext";
import "./styles.css";

const { Text, Title } = Typography;

const FiltrosTienda = () => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const { grupos, marcas, filtros, setFiltros } = useContext(GlobalContext);
  const [selectedGrupos, setSelectedGrupos] = useState([]);
  const [selectedMarcas, setSelectedMarcas] = useState([]);
  const onClickGrupos = async (e) => {
    const nombre = e.target.id;
    let guardar = true;
    await filtros.forEach((filtro) => {
      if (filtro.tipo === "GRUPO")
        if (filtro.nombre === nombre) {
          guardar = false;
          return;
        }
    });
    if (guardar) {
      setFiltros([...filtros, { nombre, tipo: "GRUPO" }]);
    }
  };

  const onClickMarcas = async (e) => {
    const nombre = e.target.id;
    let guardar = true;
    await filtros.forEach((filtro) => {
      if (filtro.tipo === "MARCA")
        if (filtro.nombre === nombre) {
          guardar = false;
          return;
        }
    });
    if (guardar) {
      setFiltros([...filtros, { nombre, tipo: "MARCA" }]);
    }
  };

  const eliminar = async (i) => {
    const filtrado = [...filtros.slice(0, i), ...filtros.slice(i + 1)];
    setFiltros(filtrado);
  };
  return (
    <div className="filtros-tienda">
      {!isTabletOrMobile && !isTabletOrMobileDevice && (
        <Title level={4}>FILTROS</Title>
      )}
      <Divider />
      <Row className="filtros">
        {filtros.map((filtro, i) => {
          return (
            <Text className="item" key={i}>
              {filtro.nombre} <CloseOutlined onClick={() => eliminar(i)} />
            </Text>
          );
        })}
      </Row>

      <Divider />
      <div className="agrupaciones">
        <Title level={4}>GRUPOS</Title>
        <Divider />
        <List
          dataSource={grupos}
          renderItem={(item, i) => (
            <List.Item id={item} key={i}>
              {item}
            </List.Item>
          )}
          onClick={onClickGrupos}
        />
        <Divider />
      </div>
      <div className="agrupaciones">
        <Title level={4}>MARCAS</Title>
        <Divider />
        <List
          dataSource={marcas}
          renderItem={(item, i) => (
            <List.Item id={item} key={i}>
              {item}
            </List.Item>
          )}
          onClick={onClickMarcas}
        />
        <Divider />
      </div>
    </div>
  );
};

export default FiltrosTienda;
