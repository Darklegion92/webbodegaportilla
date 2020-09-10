import React, { useState } from "react";

const GlobalContext = React.createContext({});
const { Provider, Consumer } = GlobalContext;
const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("ALGUIEN");
  const [carrito, setCarrito] = useState([
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
  const [articulos, setArticulos] = useState([
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
  ]);

  const login = () => {
    setUser("ALGUIEN");
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <Provider value={{ user, login, logout, carrito, articulos, setCarrito }}>
      {children}
    </Provider>
  );
};

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext };
