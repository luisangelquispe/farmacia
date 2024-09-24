import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks/UseStore";
import { getInventario } from "../../Inventory/Inventario/State/InventarioSlice";
import { changeiIVentaSelect, changeModal, changeModalAddVenta, getVentas, postVenta } from "../State/VentasSlice";



export const useVentasActions = () => {
    const dispatch = useAppDispatch();
    const token = useAppSelector((state) => state.login.token);
    const ventas = useAppSelector((state) => state.ventas.ventas);
    const productos = useAppSelector((state) => state.inventario.productos);

    const modalChange = () => {
        dispatch(changeModal());
    };

    const ventasGet = () => {
        productos?.length == 0 && dispatch(getInventario({ token: token }))
        ventas?.length == 0 && dispatch(getVentas({ token: token }))
    }

    const ventasPost = (dataForm) => {
        return dispatch(postVenta({ dataForm: dataForm, token: token }));
    };

    const idVentaSelectChange = (id) => {
        dispatch(changeiIVentaSelect({ id: id }));
    }

    const modalAddVentaChange = () => {
        dispatch(changeModalAddVenta());
    }

    return {
        modalChange,
        ventasGet,
        ventasPost,
        idVentaSelectChange,
        modalAddVentaChange        
    };
};
