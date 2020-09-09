import React, { useState } from "react";

const GlobalContext = React.createContext({});
const { Provider, Consumer } = GlobalContext;
const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState("ALGUIEN");
  const [carrito, setCarrito] = useState([
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

  const login = () => {
    setUser("ALGUIEN");
  };

  const logout = () => {
    setUser(null);
  };
  return (
    <Provider value={{ user, login, logout, carrito }}>{children}</Provider>
  );
};

export { GlobalProvider, Consumer as GlobalConsumer, GlobalContext };
