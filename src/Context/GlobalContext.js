import React, { useState } from "react";
import axios from "axios";
import { API } from "../config";
const GlobalContext = React.createContext({});
const { Provider, Consumer } = GlobalContext;
const GlobalProvider = ({ children }) => {
  /**parametros estaticos */
  const [loading, setLoading] = useState(false);

  const seccionDomicilio = {
    texto: "POR COMPRAS MAYORES A $ 50.000 EL DOMICILIO ES GRATIS",
  };

  const seccionEmpresa = {
    titulo: "EL CAMINO DE BODEGA PORTILLA",
    texto: {
      p1:
        ' Somos una empresa dedicada al bienestar en general de nuestros clientes , brindándole nuestro mejor servicio y conocimientos en panadería y repostería , además de ofrecerle nuestro lema principal " Bienestar y \n salud " esto es lo que la humanidad busca y prefiere hoy en día .!',
      p2:
        "Las condiciones , bondades y beneficios que tiene de productos secos , semillas , súper alimentos y sus derivados harán que en muy poco tiempo sea la revolución alimenticia del mundo ya que dichos productos no tienen ni un solo químico , son productos 100% naturales!",
    },
  };

  const seccionProductos = [
    {
      img1: "img/frutossecos.jpeg",
      titulo1: "FRUTOS SECOS",
      link1: "",
      link2: "",
      img2: "img/panaderiaypostreria.jpeg",
      titulo2: "PANADERIA Y POSTRERIA",
    },
    {
      img1: "img/deshidratados.png",
      link1: "",
      link2: "",
      titulo1: "FRUTOS DESHIDRATADOS",
      img2: "img/superalimentos.jpeg",
      titulo2: "SUPER ALIMENTOS",
    },
    {
      img1: "img/semillas.jpeg",
      link1: "",
      link2: "",
      titulo1: "SEMILLAS",
      img2: "img/utencilios.jpeg",
      titulo2: "UTENSILIOS",
    },
    {
      img1: "img/salsas.png",
      link1: "",
      link2: "",
      titulo1: "ACEITES",
      img2: "img/topping.png",
      titulo2: "TOPPINGS Y SPRINGLESS",
    },
  ];

  /**parametros dinamicos */
  const [tiposDocumento, setTiposDocumento] = useState([]);
  const [barrios, setBarrios] = useState([]);
  const [barrio, setBarrio] = useState({});
  const [user, setUser] = useState(null);
  const [modalCarga, setModalCarga] = useState();
  const [carrusel, setCarrusel] = useState([
    { img: "img/slider1.png", imgMovil: "img/movil/slider1.png", filtro: "" },
  ]);
  const [carrito, setCarrito] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const [articulosTienda, setArticulosTienda] = useState([]);
  const [SeccionRecomendaciones, setSeccionRecomendaciones] = useState([]);
  const [subgrupos, setSubgrupos] = useState([]);
  const [grupos, setGrupos] = useState([]);
  const [marcas, setMarcas] = useState([]);
  const [filtros, setFiltros] = useState([]);

  /** se cargan todos los datos iniciales para cargar la pagina */
  const cargarDatos = async () => {
    setModalCarga(true);

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
        console.log("si entro");
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
      //cargando articulos
      const datosArticulos = await axios.get(API.URL + "articulos");
      if (datosArticulos.status === 200) {
        setArticulos(datosArticulos.data);
        setArticulosTienda(datosArticulos.data);
      }
    } catch (e) {
      /*Temporal*/
      setCarrusel([
        {
          img: "img/slider1.png",
          imgmovil: "img/movil/slider1.png",
          filtro: "",
        },
        {
          img: "img/slider2.png",
          imgmovil: "img/movil/slider2.png",
          filtro: "",
        },
        {
          img: "img/slider3.png",
          imgmovil: "img/movil/slider3.png",
          filtro: "",
        },
      ]);

      setSeccionRecomendaciones([
        {
          img: "img/imgreco1.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco2.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco1.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco1.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco2.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco1.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco2.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco1.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco2.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco1.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco1.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco2.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
        {
          img: "img/imgreco1.jpeg",
          titulo: "ALGO",
          texto:
            'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
        },
      ]);

      setGrupos([
        { id: 1, nombre: "GRUPO 1" },
        { id: 4, nombre: "GRUPO 4" },
        { id: 2, nombre: "GRUPO 2" },
        { id: 3, nombre: "GRUPO 3" },
      ]);

      setMarcas([
        { id: 1, nombre: "MARCA 1" },
        { id: 4, nombre: "MARCA 4" },
        { id: 2, nombre: "MARCA 2" },
        { id: 3, nombre: "MARCA 3" },
      ]);

      setArticulos([
        {
          codigo: "12151",
          img: "img/nuevos/nuevo (1).png",
          nombre: "Articulo Descuento",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          precio: 1000,
          cantidad: 0,
          descuento:10,
          embalaje: "Gr",
          clasificacion: 3,
          categoria: "NUEVO",
        },
        {
          codigo: "12151",
          img: "img/nuevos/nuevo (2).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          precio: 1000,
          cantidad: 0,
          embalaje: "Gr",
          clasificacion: 2,
          categoria: "NUEVO",
        },
        {
          codigo: "12101",
          img: "img/nuevos/nuevo (3).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          precio: 1000,
          cantidad: 0,
          embalaje: "Gr",
          clasificacion: 5,
          categoria: "NUEVO",
        },
        {
          codigo: "12181",
          img: "img/nuevos/nuevo (5).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          precio: 1000,
          cantidad: 0,
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "NUEVO",
        },
        {
          codigo: "12157",
          cantidad: 0,
          img: "img/nuevos/nuevo (5).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "NUEVO",
        },
        {
          codigo: "125151",
          cantidad: 0,
          img: "img/nuevos/nuevo (6).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "NUEVO",
        },
        {
          codigo: "15171",
          cantidad: 0,
          img: "img/nuevos/nuevo (7).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "NUEVO",
        },
        {
          codigo: "19151",
          cantidad: 0,
          img: "img/nuevos/nuevo (8).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "REGALO",
        },
        {
          codigo: "15191",
          cantidad: 0,
          img: "img/nuevos/nuevo (9).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "REGALO",
        },
        {
          codigo: "151510",
          cantidad: 0,
          img: "img/nuevos/nuevo (10).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "REGALO",
        },
        {
          codigo: "1515100",
          img: "img/nuevos/nuevo (11).png",
          nombre: "Articulo Unico",
          cantidad: 0,
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 100000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "REGALO",
        },
        {
          codigo: "15251000",
          cantidad: 0,
          img: "img/nuevos/nuevo (12).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 10000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          cantidad: 0,
          categoria: "",
        },
      ]);

      setArticulosTienda([
        {
          codigo: "121751",
          img: "img/nuevos/nuevo (1).png",
          nombre: "Articulo 3 ESTRELLAS nuevo siempre",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          precio: 1000,
          cantidad: 0,
          embalaje: "Gr",
          clasificacion: 3,
          categoria: "NUEVO",
        },
        {
          codigo: "12151",
          img: "img/nuevos/nuevo (2).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          precio: 1000,
          cantidad: 0,
          embalaje: "Gr",
          clasificacion: 2,
          categoria: "NUEVO",
        },
        {
          codigo: "12101",
          img: "img/nuevos/nuevo (3).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          precio: 1000,
          cantidad: 0,
          embalaje: "Gr",
          clasificacion: 5,
          categoria: "NUEVO",
        },
        {
          codigo: "12181",
          img: "img/nuevos/nuevo (5).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          precio: 1000,
          cantidad: 0,
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "NUEVO",
        },
        {
          codigo: "12157",
          cantidad: 0,
          img: "img/nuevos/nuevo (5).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "NUEVO",
        },
        {
          codigo: "125151",
          cantidad: 0,
          img: "img/nuevos/nuevo (6).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "NUEVO",
        },
        {
          codigo: "15171",
          cantidad: 0,
          img: "img/nuevos/nuevo (7).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "NUEVO",
        },
        {
          codigo: "19151",
          cantidad: 0,
          img: "img/nuevos/nuevo (8).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "REGALO",
        },
        {
          codigo: "15191",
          cantidad: 0,
          img: "img/nuevos/nuevo (9).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "REGALO",
        },
        {
          codigo: "151510",
          cantidad: 0,
          img: "img/nuevos/nuevo (10).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 1000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "REGALO",
        },
        {
          codigo: "1515100",
          img: "img/nuevos/nuevo (11).png",
          nombre: "Articulo Unico",
          cantidad: 0,
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 100000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          categoria: "REGALO",
        },
        {
          codigo: "15251000",
          cantidad: 0,
          img: "img/nuevos/nuevo (12).png",
          nombre: "Articulo Unico",
          descripcionLarga:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          precio: 10000,
          descripcion:
            "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
          embalaje: "Gr",
          clasificacion: 1,
          cantidad: 0,
          categoria: "",
        },
      ]);
    }

    setModalCarga(false);
  };

  /**Funciones Globales*/
  const login = () => {
    //setUser("ALGUIEN");
  };

  const logout = () => {
    setUser(null);
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

  const filtrar = async (newFiltros) => {
    let idgrupo = "";
    let idsubgrupo = "";
    let idmarca = "";
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
    const articulos = await axios.get(API.URL + "articulos", {
      params: { idgrupo, idsubgrupo, idmarca },
    });
    setArticulosTienda(articulos.data);
    setFiltros(newFiltros);
  };

  const articulosNombre = async (nombre) => {
    const articulos = await axios.get(
      API.URL + "articulos/" + nombre.toUpperCase()
    );
    setArticulosTienda(articulos.data);
  };

  const validarCarrito = async () => {
    try {
      const validacion = await axios.post(API.URL + "carrito/validar", {
        carrito,
      });
      console.log(validacion);
      return validacion.data.resp;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  return (
    <Provider
      value={{
        user,
        login,
        logout,
        carrito,
        articulos,
        setCarrito,
        carrusel,
        cargarDatos,
        seccionDomicilio,
        seccionEmpresa,
        seccionProductos,
        SeccionRecomendaciones,
        grupos,
        marcas,
        filtros,
        filtrar,
        articulosTienda,
        setLoading,
        loading,
        subgrupos,
        cargarSubgrupos,
        articulosNombre,
        tiposDocumento,
        barrios,
        barrio,
        setBarrio,
        validarCarrito,
      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext };
