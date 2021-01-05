import React, { useState } from "react";
import axios from "axios";

import { API } from "../config";

const GlobalContext = React.createContext({});
const { Provider, Consumer } = GlobalContext;

const GlobalProvider = ({ children }) => {
  /**parametros estaticos */
  const [loading, setLoading] = useState(false);

  const seccionProductos = [
    {
      img1: "img/frutossecos.jpeg",
      titulo1: "FRUTOS SECOS",
      link1: "30",
      link2: "26",
      img2: "img/panaderiaypostreria.jpeg",
      titulo2: "PANADERÍA Y REPOSTERÍA",
    },
    {
      img1: "img/deshidratados.png",
      link1: "31",
      link2: "29",
      titulo1: "FRUTOS DESHIDRATADOS",
      img2: "img/superalimentos.jpeg",
      titulo2: "SÚPER ALIMENTOS",
    },
    {
      img1: "img/semillas.jpeg",
      link1: "27",
      link2: "22",
      titulo1: "SEMILLAS",
      img2: "img/utencilios.jpeg",
      titulo2: "UTENSILIOS Y ACCESORIOS",
    },
    {
      img1: "img/salsas.png",
      link1: "14",
      link2: "18",
      titulo1: "ACEITES 100% NATURALES Y VINAGRES",
      img2: "img/topping.png",
      titulo2: "TOPPINGS Y DULCES",
    },
  ];

  /**parametros dinamicos */

  //Consultados
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [barrios, setBarrios] = useState([]);
  const [carrusel, setCarrusel] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const [articulosTienda, setArticulosTienda] = useState([]);
  const [SeccionRecomendaciones, setSeccionRecomendaciones] = useState([]);
  const [subgrupos, setSubgrupos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [bancosPSE, setBancosPSE] = useState([]);
  const [ordenCliente, setOrdenCliente] = useState();
  const [efecty, setEfecty] = useState();
  const [credito, setCredito] = useState();
  //uso local
  const [cupon, setCupon] = useState({});
  const [user, setUser] = useState(null);
  const [modalCarga, setModalCarga] = useState();
  const [filtros, setFiltros] = useState([]);
  const [orden, setOrden] = useState();
  const [nombreBusqueda, setNombreBusqueda] = useState("");
  const [datosOrden, setDatosOrden] = useState();
  const [datosPago, setDatosPago] = useState();
  const [tipoPago, setTipoPago] = useState();
  /** se cargan todos los datos iniciales para cargar la pagina */

  const cargarDatosLocales = async () => {
    try {
      const token = localStorage.getItem("Token");
      if (token) {
        const resp = await axios.get(API.URL + "clientes/validar", {
          headers: { authorization: token },
        });
        setUser(resp.data.usuario);
        if (resp.data.carrito) {
          setCarrito(resp.data.carrito);
          localStorage.setItem("carrito", JSON.stringify(resp.data.carrito));
        }
      } else {
        const carrito = JSON.parse(localStorage.getItem("carrito"));

        if (carrito) setCarrito(carrito);
      }
    } catch (e) {
      console.log(e);
    }
  };

  const cargarDatos = async () => {
    setModalCarga(true);
    cargarDatosLocales();
    /*cargar parametros iniciales*/
    try {
      //cargando barrrios
      const datosBarrios = await axios.get(API.URL + "parametros/barrios");
      if (datosBarrios.status === 200) {
        setBarrios(datosBarrios.data);
      }

      //cargando tiposDocumento
      const datosTiposDocumento = await axios.get(
        API.URL + "parametros/tiposdocumento"
      );
      if (datosTiposDocumento.status === 200) {
        setTiposDocumento(datosTiposDocumento.data);
      }

      //cargando carrusel
      const datosCarusel = await axios.get(API.URL + "parametros/carusel");
      if (datosCarusel.status === 200) {
        setCarrusel(datosCarusel.data);
      }

      //cargando recomendaciones
      const datosRecomendaciones = await axios.get(
        API.URL + "parametros/recomendaciones"
      );

      if (datosRecomendaciones.status === 200) {
        setSeccionRecomendaciones(datosRecomendaciones.data);
      }

      //cargando agrupaciones
      const datosGrupos = await axios.get(API.URL + "parametros/grupos");
      if (datosGrupos.status === 200) {
        setGrupos(datosGrupos.data);
      }
      const datosMarcas = await axios.get(API.URL + "parametros/marcas");
      if (datosMarcas.status === 200) {
        setMarcas(datosMarcas.data);
      }

      //cargando articulos tienda
      consultarArticulosTienda();

      const datosArticulos = await axios.get(API.URL + "articulos/categoria");
      if (datosArticulos.status === 200) {
        setArticulos(datosArticulos.data);
      }
    } catch (e) {}
    setModalCarga(false);
  };

  /**Funciones Globales*/

  //Registrar Contacto
  const contactar = async (contacto) => {
    try {
      const resp = await axios.post(API.URL + "contactenos", contacto);

      if (resp.status === 200) {
        return true;
      } else {
        return resp;
      }
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const login = async (datos) => {
    try {
      const resp = await axios.post(API.URL + "clientes/login", datos);
      if (resp.status === 200) {
        setUser(resp.data.usuario);
        if (resp.data.carrito.length > 0) {
          localStorage.setItem("carrito", JSON.stringify(resp.data.carrito));
          setCarrito(resp.data.carrito);
        } else {
          const localCarrito = JSON.parse(localStorage.getItem("carrito"));

          if (localCarrito) {
            try {
              setCarrito(localCarrito);
              const token = resp.data.token;
              await localCarrito.forEach(async (item, i) => {
                await axios.put(
                  API.URL + "carrito/item",
                  { item },
                  {
                    headers: { authorization: token },
                  }
                );
              });
            } catch (e) {
              console.log(e);
            }
          }
        }
        localStorage.setItem("Token", resp.data.token);
        return true;
      } else if (resp.status === 201) {
        console.log("usuario o contraseña erroneos");
        return false;
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const consultarBancosPSE = async () => {
    const json = await axios.get(API.URL + "parametros/bancosPSE");

    if (json.status === 200) {
      setBancosPSE(json.data);
    }
  };

  const consultarOrden = async (idorden) => {
    try {
      const json = await axios.get(API.URL + "carrito/consultar/" + idorden);

      if (json.status === 200) {
        setOrdenCliente(json.data);
      } else if (json.status === 202) {
        console.log("Se encuentra en despacho o fue rechazado");
        setOrdenCliente();
      } else {
        console.log("algo pasa");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const guardarMedio = (values, tipo) => {
    setDatosPago(values);
    setTipoPago(tipo);
  };

  const loginFacebook = async (datos) => {
    try {
      const resp = await axios.post(API.URL + "clientes/loginfacebook", datos);
      if (resp.status === 200) {
        setUser(resp.data.usuario);

        localStorage.setItem("carrito", JSON.stringify(resp.data.carrito));
        if (resp.data.carrito) setCarrito(resp.data.carrito);
        //pasar a cookies
        localStorage.setItem("Token", resp.data.token);
        return true;
      } else if (resp.status === 201) {
        console.log("usuario o contraseña erroneos");
        return false;
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const loginGoogle = async (datos) => {
    try {
      const resp = await axios.post(API.URL + "clientes/logingoogle", datos);
      if (resp.status === 200) {
        setUser(resp.data.usuario);

        localStorage.setItem("carrito", JSON.stringify(resp.data.carrito));
        if (resp.data.carrito) setCarrito(resp.data.carrito);
        //pasar a cookies
        localStorage.setItem("Token", resp.data.token);
        return true;
      } else if (resp.status === 201) {
        console.log("usuario o contraseña erroneos");
        return false;
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
    setCarrito([]);
  };

  const register = async (datos) => {
    try {
      const resp = await axios.post(API.URL + "clientes/register", datos);
      if (resp.status === 200) {
        setUser(resp.data.usuario);
        localStorage.setItem("user", JSON.stringify(resp.data.usuario));

        //pasar a cookies
        localStorage.setItem("Token", resp.data.token);
        return true;
      } else if (resp.status === 201) {
        console.log("usuario ya existe en la database");
        return false;
      }
    } catch (e) {
      console.log(e);
      return e;
    }
  };

  const cargarSubgrupos = async (idgrupo) => {
    try {
      const datosSubgrupos = await axios.get(
        API.URL + "parametros/subgrupos/" + idgrupo
      );
      if (datosSubgrupos.status === 200) {
        setSubgrupos(datosSubgrupos.data);
      }
    } catch (e) {}
  };

  const consultarArticulosTienda = async (newFiltros, nombre, newOrden) => {
    let idgrupo = "";
    let idsubgrupo = "";
    let idmarca = "";
    let orden1 = orden;
    if (newOrden) {
      orden1 = newOrden;
    }
    if (nombre) {
      setNombreBusqueda(nombre);
    } else {
      setNombreBusqueda("");
    }
    if (newFiltros) {
      await newFiltros.forEach((filtro) => {
        if (filtro.tipo === "GRUPO") {
          idgrupo = filtro.id;
        }
        if (filtro.tipo === "SUBGRUPO") {
          idsubgrupo = filtro.id;
        }
        if (filtro.tipo === "MARCA") {
          idmarca = filtro.id;
        }
      });
      setFiltros(newFiltros);
    }
    const articulos = await axios.get(API.URL + "articulos", {
      params: { idgrupo, idsubgrupo, idmarca, orden: orden1, nombre },
    });
    setArticulosTienda(articulos.data);
  };

  const validarCarrito = async () => {
    try {
      const validacion = await axios.post(API.URL + "carrito/validar", {
        carrito,
      });
      return validacion.data.resp;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const cambiarOrden = (newOrden) => {
    consultarArticulosTienda(filtros, nombreBusqueda, newOrden);
    setOrden(newOrden);
  };

  const validarCupon = async (cupon) => {
    setModalCarga(true);
    try {
      const cuponValidado = await axios(API.URL + "cupon/validar/" + cupon);
      if (cuponValidado.status === 200) {
        setCupon(cuponValidado.data);
        setModalCarga(false);
        return true;
      } else if (cuponValidado.status === 201) {
        setModalCarga(false);
        return false;
      }
    } catch (e) {
      setModalCarga(false);
      return e;
    }
  };

  const agregarCarrito = async (carrito, item) => {
    try {
      localStorage.setItem("carrito", JSON.stringify(carrito));
      setCarrito(carrito);
      const token = localStorage.getItem("Token");
      if (token) {
        await axios.put(
          API.URL + "carrito/item",
          { item },
          {
            headers: { authorization: token },
          }
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const eliminarCarrito = async (carrito, item) => {
    try {
      localStorage.setItem("carrito", JSON.stringify(carrito));
      setCarrito(carrito);
      const token = localStorage.getItem("Token");
      if (token) {
        await axios.post(
          API.URL + "carrito/item/delete",
          { item },
          {
            headers: { authorization: token },
          }
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const actualizarCarrito = async (carrito, item) => {
    try {
      localStorage.setItem("carrito", JSON.stringify(carrito));
      setCarrito(carrito);
      const token = localStorage.getItem("Token");
      if (token) {
        await axios.post(
          API.URL + "carrito/item/update",
          { item },
          {
            headers: { authorization: token },
          }
        );
      }
    } catch (e) {
      console.log(e);
    }
  };

  const guardarDatosCliente = (d) => {
    try {
      setDatosOrden(d);
      setUser(d);
      return true;
    } catch (e) {
      return false;
    }
  };

  const enviarOrden = async () => {
    try {
      setModalCarga(true);
      if (datosOrden.nombres && datosOrden.documento) {
        console.log(tipoPago);
        try {
          const resp = await axios.put(API.URL + "carrito/guardar", {
            user,
            datosOrden,
            carrito,
            datosPago,
            tipoPago,
          });

          if (resp.status === 200) {
            setCarrito([]);
            setUser({});
            setEfecty(resp.data.datos);
            setCredito(resp.data);
            setOrdenCliente(resp.data.orden);
            setModalCarga(false);
            return { ok: true, datos: resp.data };
          } else {
            setModalCarga(false);
            return { ok: false };
          }
        } catch (e) {
          setModalCarga(false);
          return { ok: e };
        }
      } else {
        setModalCarga(false);
        return false;
      }
    } catch (e) {
      setModalCarga(false);
      console.log(e);
      return false;
    }
  };

  return (
    <Provider
      value={{
        user,
        efecty,
        login,
        loginFacebook,
        datosOrden,
        loginGoogle,
        register,
        logout,
        carrito,
        articulos,
        agregarCarrito,
        eliminarCarrito,
        actualizarCarrito,
        guardarDatosCliente,
        carrusel,
        cargarDatos,
        enviarOrden,
        seccionProductos,
        SeccionRecomendaciones,
        grupos,
        marcas,
        filtros,
        consultarArticulosTienda,
        articulosTienda,
        setLoading,
        loading,
        subgrupos,
        cargarSubgrupos,
        tiposDocumento,
        barrios,
        cupon,
        validarCupon,
        validarCarrito,
        contactar,
        modalCarga,
        cambiarOrden,
        consultarBancosPSE,
        bancosPSE,
        guardarMedio,
        tipoPago,
        ordenCliente,
        consultarOrden,
        credito,
      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext };
