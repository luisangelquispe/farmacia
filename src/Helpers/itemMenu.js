import { faClipboard, faList, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import { INVENTARIO, MARCA, PRODUCTOS } from "./paths";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

export const ItemMenuList = [
    { path: INVENTARIO, icon: faClipboard, title:"Inventario" },
    { path: MARCA, icon: faPenFancy, title:"Marca" }     
]