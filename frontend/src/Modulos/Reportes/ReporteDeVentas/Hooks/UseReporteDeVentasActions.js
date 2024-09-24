import { useAppDispatch, useAppSelector } from "../../../../Redux/Hooks/UseStore";
import { getRptVentas } from "../State/ReporteDeVentasSlice";
// import { changeIdMarcaEdit, changeModal, changeModalEditMarca, getMarcas, postMarcas, putMarcas } from "../State/MarcaSlice";




export const useReporteDeVentasActions = () => {
    const dispatch = useAppDispatch();
    const reporteDeVentas = useAppSelector((state) => state.reporteDeVentas);
    const token = useAppSelector((state) => state.login.token);

    const rptVentasGet = (dataForm) => {
        console.log("dataForm",dataForm);        
        dispatch(getRptVentas({ dataForm: dataForm, token: token }))
    }


    return {
        rptVentasGet
    };
};
