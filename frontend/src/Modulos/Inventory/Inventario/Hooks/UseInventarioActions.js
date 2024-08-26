import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks/UseStore";
import { getCategorias } from "../../Categoria/State/CategoriaSlice";
import { getDistribuidores } from "../../Distribuidor/State/DistribuidorSlice";
import { getMarcas } from "../../Marca/State/MarcaSlice";
import { getPaisesDeOrigen } from "../../PaisDeOrigen/State/PaisDeOrigenSlice";
import { addProduct, addProducto, changeIdProductSelect, changeModal, changeModalLote, getInventario } from "../State/InventarioSlice";



export const useInventarioActions = () => {
    const dispatch = useAppDispatch();
    const inventario = useAppSelector((state) => state.inventario);
    const token = useAppSelector((state) => state.login.token);
    const categoria = useAppSelector((state) => state.categoria);
    const marca = useAppSelector((state) => state.marca);
    const distribuidor = useAppSelector((state) => state.distribuidor);
    const paisDeOrigen = useAppSelector((state) => state.paisDeOrigen);

    const modalChange = () => {
        dispatch(changeModal());
    };
    const modalLoteChange = () => {
        console.log("vvdvd");

        dispatch(changeModalLote());
    };
    const productAdd = (dataForm) => {
        dispatch(addProduct({ dataForm: dataForm }));
    };

    // const loginRedirect = () => {
    //     return useEffect(() => {
    //         login.status === 200 && navigate(TABLERO, { replace: "true" });
    //     }, [login?.status]);
    // };

    const inventarioGet = () => {
        inventario?.productos?.length == 0 && dispatch(getInventario({ token: token }))

        categoria?.categorias?.length == 0 && dispatch(getCategorias({ token: token }))
        marca?.marcas?.length == 0 && dispatch(getMarcas({ token: token }))
        distribuidor?.distribuidores?.length == 0 && dispatch(getDistribuidores({ token: token }))
        paisDeOrigen?.paisesDeOrigen?.length == 0 && dispatch(getPaisesDeOrigen({ token: token }))
    }

    const productoAdd = (dataForm) => {

        dispatch(addProducto({ dataForm: dataForm }));
    }

    const selectIdProduct = (id) => {
        dispatch(changeIdProductSelect(id))
    }

    return {
        modalChange,
        modalLoteChange,
        productAdd,
        inventarioGet,
        productoAdd,
        selectIdProduct
    };
};
