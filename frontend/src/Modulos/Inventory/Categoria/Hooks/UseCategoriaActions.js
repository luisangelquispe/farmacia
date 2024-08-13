import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks/UseStore";
import { changeIdCategoriaEdit, changeModal, changeModalEditCategoria, getCategorias, postCategoria, putCategoria } from "../State/CategoriaSlice";




export const useCategoriaActions = () => {
    const dispatch = useAppDispatch();
    const categoria = useAppSelector((state) => state.categoria);
    const token = useAppSelector((state) => state.login.token);

    const modalChange = () => {
        dispatch(changeModal());
    };

    const categoriasGet = () => {
        return dispatch(getCategorias({ token: token }));
    }
    const categoriaAdd = (dataForm) => {
        return dispatch(postCategoria({ dataForm: dataForm, token: token }));
    };

    const categoriaUpdate = (dataForm) => {
        return dispatch(putCategoria({ dataForm: { ...dataForm, id: categoria?.idCategoriaEdit }, token: token }));
    };

    const IdCategoriaEditChange = (id) => {
        dispatch(changeIdCategoriaEdit({ id: id }));
    }
    const modalChangeEditCategoria = () => { 

        dispatch(changeModalEditCategoria());
     }

    return {
        modalChange,
        categoriasGet,
        categoriaAdd,
        categoriaUpdate,
        IdCategoriaEditChange,
        modalChangeEditCategoria
    };
};
