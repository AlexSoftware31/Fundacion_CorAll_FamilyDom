import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "INICIO",
    newTab: false,
    path: "/",
  },
  {
    id: 2,
    title: "QUIÉNES SOMOS",
    newTab: false,
    path: "/fundacion",
    submenu: [
      {
        id: 2.1,
        title: "Fundación",
        newTab: false,
        path: "/fundacion",
      },
      {
        id: 2.2,
        title: "Nuestros Objetivos",
        newTab: false,
        path: "/objetivos",
      },
      {
        id: 2.3,
        title: "Estructura Organizacional",
        newTab: false,
        path: "/organizacional/0",
      },
    ],
  },
  {
    id: 3,
    title: "PROGRAMAS",
    newTab: false,
    submenu: [
      {
        id: 3.1,
        title: "Programas a Nivel Nacional",
        newTab: false,
        path: "/programas",
      },
      {
        id: 3.2,
        title: "Estatutos",
        newTab: false,
        path: "/transparencia",
      },
      {
        id: 3.2,
        title: "Transparencia",
        newTab: false,
        path: "/transparencia",
      },
    ],
  },
  {
    id: 4,
    title: "CARDIOPATÍA",
    newTab: false,
    path: "/docs",
  },
  {
    id: 5,
    title: "NOTICIAS",
    newTab: false,
    path: "/noticias",
  },

  {
    id: 6,
    title: "CONTACTO",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
