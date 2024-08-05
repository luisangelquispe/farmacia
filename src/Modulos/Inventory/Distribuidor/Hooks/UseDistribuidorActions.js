import { useAppDispatch } from "../../../../Redux/Hooks/UseStore";
import { changeModal } from "../State/DistribuidorSlice";



export const useDistribuidorActions = () => {
    const dispatch = useAppDispatch();

    const modalChange = () => {
        dispatch(changeModal());
    };

    return {
        modalChange
    };
};
