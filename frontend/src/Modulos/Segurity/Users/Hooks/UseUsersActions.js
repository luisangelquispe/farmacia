
import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks/UseStore";
import { changeIdUserEdit, changeModal, changeModalEditUser, changeModalPermisos, getUser, postUser, putUser } from "../State/UsersSlice";



export const useUsersActions = () => {
    const dispatch = useAppDispatch();
    const users = useAppSelector((state) => state.users);
    const token = useAppSelector((state) => state.login.token);

    const modalChange = () => {
        dispatch(changeModal());
    };
    const modalChangeEditUser = () => {
        dispatch(changeModalEditUser());
    };
    const modalPermisosChange = () => {
        dispatch(changeModalPermisos());
    };

    const userGet = () => {
        return dispatch(getUser({ token: token }));
    }

    const userAdd = (dataForm) => {
        return dispatch(postUser({ dataForm: dataForm, token: token }));
    };
    const userUpdate = (dataForm) => {
        return dispatch(putUser({ dataForm: { ...dataForm, id: users?.idUserEdit }, token: token }));
    };
    const IdUserEditChange = (id) => {

        dispatch(changeIdUserEdit({ id: id }));

    }
    return {
        modalChange,
        modalPermisosChange,
        userAdd,
        userGet,
        userUpdate,
        modalChangeEditUser,
        IdUserEditChange
    };
};
