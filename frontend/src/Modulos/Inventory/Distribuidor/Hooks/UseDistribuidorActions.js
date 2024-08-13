import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks/UseStore";
import { changeIdDistribuidorEdit, changeModal, changeModalEditDistribuidor, getDistribuidores, postDistribuidores, putDistribuidores } from "../State/DistribuidorSlice";
// import { changeIdMarcaEdit, changeModal, changeModalEditMarca, getMarcas, postMarcas, putMarcas } from "../State/MarcaSlice";




export const useDistribuidorActions = () => {
    const dispatch = useAppDispatch();
    const distribuidor = useAppSelector((state) => state.distribuidor);
    const token = useAppSelector((state) => state.login.token);

    const modalChange = () => {
        dispatch(changeModal());
    };

    const distribuidorGet = () => {
        return dispatch(getDistribuidores({ token: token }));
    }
    const distribuidorAdd = (dataForm) => {
        return dispatch(postDistribuidores({ dataForm: dataForm, token: token }));
    };

    const distribuidorUpdate = (dataForm) => {
        return dispatch(putDistribuidores({ dataForm: { ...dataForm, id: distribuidor?.idDistribuidorEdit }, token: token }));
    };

    const IdDistribuidorEditChange = (id) => {
        dispatch(changeIdDistribuidorEdit({ id: id }));
    }
    const modalChangeEditDistribuidor = () => { 

        dispatch(changeModalEditDistribuidor());
     }

    return {
        modalChange,
        distribuidorGet,
        distribuidorAdd,
        distribuidorUpdate,
        IdDistribuidorEditChange,
        modalChangeEditDistribuidor
    };
};
