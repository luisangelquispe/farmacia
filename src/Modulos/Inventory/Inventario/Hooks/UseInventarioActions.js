import { useAppDispatch } from "../../../../Redux/Hooks/UseStore";
import { addProduct, changeModal } from "../State/InventarioSlice";



export const useInventarioActions = () => {
    const dispatch = useAppDispatch();

    const modalChange = () => {
        dispatch(changeModal());
    };
    const productAdd = (dataForm) => {
        dispatch(addProduct({ dataForm: dataForm }));
    };

    return {
        modalChange,
        productAdd
    };
};
