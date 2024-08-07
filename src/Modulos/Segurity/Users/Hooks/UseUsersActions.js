
import { useAppDispatch } from "../../../../Redux/Hooks/UseStore";
import { addUser, changeModal } from "../State/UsersSlice";



export const useUsersActions = () => {
    const dispatch = useAppDispatch();

    const modalChange = () => {
        dispatch(changeModal());
    };
    const userAdd = (dataForm) => {
        dispatch(addUser({ dataForm: dataForm }));
    };

    return {
        modalChange,
        userAdd
    };
};
