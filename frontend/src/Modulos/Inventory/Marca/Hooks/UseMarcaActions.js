import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks/UseStore";
import { changeIdMarcaEdit, changeModal, changeModalEditMarca, getMarcas, postMarcas, putMarcas } from "../State/MarcaSlice";




export const useMarcaActions = () => {
    const dispatch = useAppDispatch();
    const marca = useAppSelector((state) => state.marca);
    const token = useAppSelector((state) => state.login.token);

    const modalChange = () => {
        dispatch(changeModal());
    };

    const marcasGet = () => {
        return dispatch(getMarcas({ token: token }));
    }
    const marcasAdd = (dataForm) => {
        return dispatch(postMarcas({ dataForm: dataForm, token: token }));
    };

    const marcasUpdate = (dataForm) => {
        return dispatch(putMarcas({ dataForm: { ...dataForm, id: marca?.idMarcaEdit }, token: token }));
    };

    const IdMarcaEditChange = (id) => {
        dispatch(changeIdMarcaEdit({ id: id }));
    }
    const modalChangeEditMarca = () => { 

        dispatch(changeModalEditMarca());
     }

    return {
        modalChange,
        marcasGet,
        marcasAdd,
        marcasUpdate,
        IdMarcaEditChange,
        modalChangeEditMarca
    };
};
