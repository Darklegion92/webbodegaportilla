import React, { useContext, useEffect, useState } from "react";
import { Typography, Divider, Row, List } from "antd";
import { useHistory, useParams } from "react-router-dom";
import { CloseOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { GlobalContext } from "../../Context/GlobalContext";
import { useQuery } from "../../customHooks/useQuery";

import "./styles.css";

const { Text, Title } = Typography;

const FiltrosTienda = ({ setPagina }) => {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });
  const isTabletOrMobileDevice = useMediaQuery({ maxDeviceWidth: 1224 });
  const {
    grupos,
    filtros,
    consultarArticulosTienda,
    subgrupos,
    cargarSubgrupos,
  } = useContext(GlobalContext);

  const [subgrupo, setSubgrupo] = useState(false);

  const { group, subgroup } = useParams();

  const query = useQuery();

  const history = useHistory();

  const getDataFilter = () => {
    const groupId = query.get("groupId");
    const subgroupId = query.get("subgroupId");

    if (subgroup) {
      setSubgrupo(true);
      cargarSubgrupos(groupId);
      consultarArticulosTienda([
        { nombre: group, tipo: "GRUPO", id: groupId },
        { nombre: subgroup, tipo: "SUBGRUPO", id: subgroupId },
      ]);
    } else if (group) {
      setSubgrupo(true);
      cargarSubgrupos(groupId);
      consultarArticulosTienda([{ nombre: group, tipo: "GRUPO", id: groupId }]);
    }
  };

  const onClickGrupos = async (e) => {
    const nombre = e.target.id;
    const value = e.target.value;
    let guardar = true;
    await filtros.forEach((filtro) => {
      if (filtro.tipo === "GRUPO")
        if (filtro.nombre === nombre) {
          guardar = false;
          return;
        }
    });
    if (guardar) {
      setPagina(1);
      cargarSubgrupos(value);
      setSubgrupo(true);
      history.replace(`/shop/${nombre}?groupId=${value}`);
      consultarArticulosTienda([
        ...filtros,
        { nombre, tipo: "GRUPO", id: value },
      ]);
    }
  };

  const onClickSubgrupos = async (e) => {
    const nombre = e.target.id;
    const value = e.target.value;
    let guardar = true;
    await filtros.forEach((filtro) => {
      if (filtro.tipo === "SUBGRUPO")
        if (filtro.nombre === nombre) {
          guardar = false;
          return;
        }
    });

    if (guardar) {
      const groupId = query.get("groupId");
      setPagina(1);
      history.replace(
        `/shop/${group}/${nombre}?groupId=${groupId}&subgroupId=${value}`
      );
      consultarArticulosTienda([
        ...filtros,
        { nombre, tipo: "SUBGRUPO", id: value },
      ]);
    }
  };

  const eliminar = (i) => {
    console.log(i);
    let filtrado = [];
    filtrado = [...filtros.slice(0, i), ...filtros.slice(i + 1)];
    consultarArticulosTienda(filtrado);
    const groupId = query.get("groupId");
    history.replace(`/shop/${group}?groupId=${groupId}`);
    if (filtros[i].tipo === "GRUPO") {
      setSubgrupo(false);
      let eliminado = [];
      filtrado.forEach((filtro, i) => {
        if (filtro.tipo === "SUBGRUPO") {
          eliminado = [...filtrado.slice(0, i), ...filtrado.slice(i + 1)];
        }
      });
      setPagina(1);
      history.replace(`/shop`);
      consultarArticulosTienda(eliminado);
    }
  };

  useEffect(() => {
    getDataFilter();
  }, [group, subgroup]);

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
        {subgrupo ? (
          <>
            <Title level={4}>SUBCATEGORIAS</Title>
            <Divider />
            <List
              dataSource={subgrupos}
              renderItem={(item, i) => (
                <List.Item id={item.nombre} key={i} value={item.id}>
                  {item.nombre}
                </List.Item>
              )}
              onClick={onClickSubgrupos}
            />
          </>
        ) : (
          <>
            <Title level={4}>CATEGORIAS</Title>
            <Divider />
            <List
              dataSource={grupos}
              renderItem={(item, i) => (
                <List.Item id={item.nombre} key={i} value={item.id}>
                  {item.nombre}
                </List.Item>
              )}
              onClick={onClickGrupos}
            />
          </>
        )}
        <Divider />
      </div>
      {/*    <div className="agrupaciones">
        <Title level={4}>MARCAS</Title>
        <Divider />
        <List
          dataSource={marcas}
          renderItem={(item, i) => (
            <List.Item id={item.nombre} key={i} value={item.id}>
              {item.nombre}
            </List.Item>
          )}
          onClick={onClickMarcas}
        />
        <Divider />
      </div>*/}
    </div>
  );
};

export default FiltrosTienda;
