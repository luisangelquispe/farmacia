import { faClipboard, faList, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { CATEGORIAS, DISTRIBUIDORES, INVENTARIO, MARCA, PAISESDEORIGEN, TABLERO, VENTAS, } from "./paths";
// import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

export const ItemMenuList = [
    { path: TABLERO, icon: faClipboard, title: "Tablero" },
    {path: false, icon: faClipboard, title: "Inventario",
        sub: [
            { path: MARCA, icon: faPenFancy, title: "Marca" },
            { path: CATEGORIAS, icon: faPenFancy, title: "Categorias" },
            { path: DISTRIBUIDORES, icon: faPenFancy, title: "Distribuidores" },
            { path: PAISESDEORIGEN, icon: faPenFancy, title: "Paises de Origen" },
            { path: INVENTARIO, icon: faClipboard, title: "Inventario" },
        ]
    },    
    { path: VENTAS, icon: faClipboard, title: "Ventas" }
]