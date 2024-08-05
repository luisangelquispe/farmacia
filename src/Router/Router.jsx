import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,

} from "react-router-dom";
import { INVENTARIO, MARCA, PRODUCTOS } from "../Helpers/paths";
import { Login } from "../Modulos/Login/Login";
import { MainLayout} from "../Modulos/MainLayout";
import { Productos } from "../Modulos/Inventory/Inventario/Productos";
import { Inventario } from "../Modulos/Inventory/Inventario/Inventario";
import { Marca } from "../Modulos/Inventory/Marca/Marca";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>

            <Route index Component={Login} />
            {/* diseño principal = MainLayout*/}
            <Route Component={MainLayout} >
                <Route path={INVENTARIO} Component={Inventario} />
                <Route path={PRODUCTOS} Component={Productos} />
                <Route path={MARCA} Component={Marca} />

            </Route>
        </>
    )
)

export { router }