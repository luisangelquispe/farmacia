
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../Redux/Hooks/UseStore";
import { login_, logout } from "../State/LoginSlice";
import { useNavigate } from "react-router-dom";
import { INVENTARIO, LOGIN, TABLERO } from "../../../Helpers/paths";
import { toast } from "sonner";



export const useLoginActions = () => {

    const login = useAppSelector((state) => state.login);
    const token = login?.token;

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const log_in = (dataForm) => {
        console.log("dataForm", dataForm);

        return dispatch(login_({ dataForm: dataForm }));
    };


    const loginRedirect = () => {
        return useEffect(() => {
            login.status === 200 && navigate(TABLERO, { replace: "true" });
        }, [login?.status]);
    };
    const errorLogin = () => {
        return useEffect(() => {
            login.status === 500 && toast.error("Credenciales incorrectas");
        }, [login?.status]);
    };

    const logout_ = () => {

        console.log("token", token);

        return dispatch(logout({ token: token }))
    }


    const logout_redirect = () => {

        console.log("login.statusLogOut", login.statusLogOut);

        return useEffect(() => {
            login.statusLogOut === 200 && navigate(LOGIN, { replace: "true" });
        }, [login.statusLogOut]);
    };

    return {
        log_in,
        loginRedirect,
        errorLogin,
        logout_,
        logout_redirect
    };
};
