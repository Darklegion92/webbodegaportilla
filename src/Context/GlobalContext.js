import React, { useState } from "react";

const GlobalContext = React.createContext({});
const { Provider, Consumer } = GlobalContext;
const GlobalProvider = ({ children }) => {
  /**parametros estaticos */

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
  const [user, setUser] = useState("");
  const [modalCarga, setModalCarga] = useState();
  const [carrusel, setCarrusel] = useState([
    { img: "img/slider1.png", imgMovil: "img/movil/slider1.png", filtro: "" },
  ]);
  const [carrito, setCarrito] = useState([]);
  const [articulos, setArticulos] = useState([]);
  const [SeccionRecomendaciones, setSeccionRecomendaciones] = useState([]);
  /** se cargan todos los datos iniciales para cargar la pagina */
  const cargarDatos = () => {
    setModalCarga(true);

    /*cargar parametros iniciales*/

    //cargando carrusel
    setCarrusel([
      { img: "img/slider1.png", imgMovil: "img/movil/slider1.png", filtro: "" },
      { img: "img/slider2.png", imgMovil: "img/movil/slider2.png", filtro: "" },
      { img: "img/slider3.png", imgMovil: "img/movil/slider3.png", filtro: "" },
    ]);

    //cargando recomendaciones
    setSeccionRecomendaciones([
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
    ]);

    //cargando carrito
    setCarrito([
      {
        img: "img/articulodefecto.jpeg",
        nombre: "Articulo Unico",
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        precio: 1000,
        cantidad: 10,
        embalaje: "Gr",
        clasificacion: "1",
      },
      {
        img: "img/articulodefecto.jpeg",
        nombre: "Articulo Unico",
        precio: 1000,
        cantidad: 10,
        embalaje: "Gr",
        clasificacion: "1",
      },
      {
        img: "img/articulodefecto.jpeg",
        nombre: "Articulo Unico",
        precio: 1000,
        cantidad: 10,
        embalaje: "Gr",
        clasificacion: "1",
      },
      {
        img: "img/articulodefecto.jpeg",
        nombre: "Articulo Unico",
        precio: 1000,
        cantidad: 10,
        embalaje: "Gr",
        clasificacion: "1",
      },
      {
        img: "img/articulodefecto.jpeg",
        nombre: "Articulo Unico",
        precio: 1000,
        cantidad: 10,
        embalaje: "Gr",
        clasificacion: "1",
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
      {
        img: "img/articulodefecto.jpeg",
        nombre: "Articulo Unico",
        precio: 1000,
        cantidad: 10,
        embalaje: "Gr",
      },
    ]);
    
    //cargando articulos
    setArticulos([
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (1).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        precio: 1000,
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "NUEVO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (2).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        precio: 1000,
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "NUEVO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (3).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        precio: 1000,
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "NUEVO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (5).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        precio: 1000,
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "NUEVO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (5).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "NUEVO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (6).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "NUEVO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (7).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "NUEVO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (8).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "REGALO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (9).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "REGALO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (10).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "REGALO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (11).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "REGALO",
      },
      {
        codigo: "15151",
        img: "img/nuevos/nuevo (12).png",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "",
      },
      {
        codigo: "15151",
        img: "img/articulodefecto.jpeg",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "",
      },
      {
        codigo: "15151",
        img: "img/articulodefecto.jpeg",
        nombre: "Articulo Unico",
        descripcionLarga:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        precio: 1000,
        descripcion:
          "producto hecho par algo y tiene algo mas por ti para ti y para todos lso ademas",
        embalaje: "Gr",
        clasificacion: "1",
        categoria: "",
      },
    ])
    
    setModalCarga(false);
  };

  const login = () => {
    setUser("ALGUIEN");
  };

  const logout = () => {
    setUser(null);
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
      }}
    >
      {children}
    </Provider>
  );
};

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext };
