import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks/UseStore";
import { changeIdPaisDeOrigenEdit, changeModal, changeModalEditPaidDeOrigen, getPaisesDeOrigen, postPaisesDeOrigen, putPaisesDeOrigen } from "../State/PaisDeOrigenSlice";




export const usePaisDeOrigenActions = () => {
    const dispatch = useAppDispatch();
    const paisDeOrigen = useAppSelector((state) => state.paisDeOrigen);
    const token = useAppSelector((state) => state.login.token);

    const modalChange = () => {
        dispatch(changeModal());
    };

    const paisesDeOrigenGet = () => {
        paisDeOrigen?.paisesDeOrigen?.length == 0 && dispatch(getPaisesDeOrigen({ token: token }))
    }
    const paisDeOrigenAdd = (dataForm) => {
        return dispatch(postPaisesDeOrigen({ dataForm: dataForm, token: token }));
    };

    const paisDeOrigenUpdate = (dataForm) => {
        return dispatch(putPaisesDeOrigen({ dataForm: { ...dataForm, id: paisDeOrigen?.idPaisDeOrigenEdit }, token: token }));
    };

    const IdPaisDeOrigenEditChange = (id) => {
        dispatch(changeIdPaisDeOrigenEdit({ id: id }));
    }
    const modalChangeEditPaisDeOrigen = () => {

        dispatch(changeModalEditPaidDeOrigen());
    }

    return {
        modalChange,
        paisesDeOrigenGet,
        paisDeOrigenAdd,
        paisDeOrigenUpdate,
        IdPaisDeOrigenEditChange,
        modalChangeEditPaisDeOrigen
    };
};
