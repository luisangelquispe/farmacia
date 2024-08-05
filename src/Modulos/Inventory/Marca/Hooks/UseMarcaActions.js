import { useAppDispatch } from "../../../../Redux/Hooks/UseStore";
import { changeModal } from "../State/MarcaSlice";



export const useMarcaActions = () => {
    const dispatch = useAppDispatch();

    const modalChange = () => {
        dispatch(changeModal());
    };

    return {
        modalChange
    };
};
