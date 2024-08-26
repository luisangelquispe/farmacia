import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,

} from "react-router-dom";
import { CATEGORIAS, DISTRIBUIDORES, INVENTARIO, MARCA, PAISESDEORIGEN, TABLERO, USERS, VENTAS } from "../Helpers/paths";
import { Login } from "../Modulos/Login/Login";
import { MainLayout} from "../Modulos/MainLayout";
import { Productos } from "../Modulos/Inventory/Inventario/Productos";
import { Inventario } from "../Modulos/Inventory/Inventario/Inventario";
import { Marca } from "../Modulos/Inventory/Marca/Marca";
import { Users } from "../Modulos/Segurity/Users/Users";
import { Categorias } from "../Modulos/Inventory/Categoria/Categoria";
import { Tablero } from "../Modulos/Tablero/Tablero";
import { Distribuidor } from "../Modulos/Inventory/Distribuidor/Distribuidor";
import { PaisDeOrigen } from "../Modulos/Inventory/PaisDeOrigen/PaisDeOrigen";
import { Ventas } from "../Modulos/Ventas/Ventas";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route index Component={Login} />
            {/* diseño principal = MainLayout*/}
            <Route Component={MainLayout} >
                <Route path={TABLERO} Component={Tablero} />
                <Route path={INVENTARIO} Component={Inventario} />                
                <Route path={MARCA} Component={Marca} />
                <Route path={USERS} Component={Users} />
                <Route path={CATEGORIAS} Component={Categorias} />
                <Route path={DISTRIBUIDORES} Component={Distribuidor} />
                <Route path={PAISESDEORIGEN} Component={PaisDeOrigen} />
                <Route path={VENTAS} Component={Ventas} />

            </Route>
        </>
    )
)

export { router }