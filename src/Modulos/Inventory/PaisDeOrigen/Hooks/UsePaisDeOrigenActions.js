import { useAppDispatch } from "../../../../Redux/Hooks/UseStore";
import { changeModal } from "../State/PaisDeOrigenSlice";



export const usePaisDeOrigenActions = () => {
    const dispatch = useAppDispatch();

    const modalChange = () => {
        dispatch(changeModal());
    };

    return {
        modalChange
    };
};
