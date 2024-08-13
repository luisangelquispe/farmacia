import { faClipboard, faList, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { CATEGORIAS, DISTRIBUIDORES, INVENTARIO, MARCA, PAISESDEORIGEN, TABLERO, } from "./paths";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

export const ItemMenuList = [
    { path: TABLERO, icon: faClipboard, title: "Tablero" },
    { path: INVENTARIO, icon: faClipboard, title: "Inventario" },
    { path: MARCA, icon: faPenFancy, title: "Marca" },
    { path: CATEGORIAS, icon: faPenFancy, title: "Categorias" },
    { path: DISTRIBUIDORES, icon: faPenFancy, title: "Distribuidores" },
    { path: PAISESDEORIGEN, icon: faPenFancy, title: "Paises de Origen" }
]