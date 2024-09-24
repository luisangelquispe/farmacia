
import { configureStore } from "@reduxjs/toolkit";
import InventarioSlice from "../Modulos/Inventory/Inventario/State/InventarioSlice";
import MarcaSlice from "../Modulos/Inventory/Marca/State/MarcaSlice";
import DistribuidorSlice from "../Modulos/Inventory/Distribuidor/State/DistribuidorSlice";
import PaisDeOrigenSlice from "../Modulos/Inventory/PaisDeOrigen/State/PaisDeOrigenSlice";
import UsersSlice from "../Modulos/Segurity/Users/State/UsersSlice";
import LoginSlice from "../Modulos/Login/State/LoginSlice";
import CategoriaSlice from "../Modulos/Inventory/Categoria/State/CategoriaSlice";
import VentasSlice from "../Modulos/Ventas/State/VentasSlice";
import ReporteDeVentasSlice from "../Modulos/Reportes/ReporteDeVentas/State/ReporteDeVentasSlice";

export const store = configureStore({
  reducer: {
    inventario: InventarioSlice,
    marca: MarcaSlice,
    distribuidor: DistribuidorSlice,
    paisDeOrigen: PaisDeOrigenSlice,
    users: UsersSlice,
    login: LoginSlice,
    categoria: CategoriaSlice,
    ventas: VentasSlice,
    reporteDeVentas: ReporteDeVentasSlice,
  },
});
