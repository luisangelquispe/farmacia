import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"

import { useNavigate } from "react-router-dom";
import { INVENTARIO } from "../../../Helpers/paths";
import { URL_ } from "../../../Helpers/urls";

const defautValues = {
    status: null,
    statusLogOut: null,
    error: null,
    user: [],
    token: localStorage.getItem("authToken") || null,
    modal: false
};

const LoginSlice = createSlice({
    name: "login",
    initialState: defautValues,
    reducers: {},

    extraReducers(builder) {

        // const navigate = useNavigate();
        // add Usuario
        builder.addCase(login_.pending, (state) => {
            state.status = 100;
        });
        builder.addCase(login_.fulfilled, (state, action) => {
            state.status = action?.payload?.status;
            state.user = action?.payload?.data;
            state.token = action?.payload?.access_token;
            state.statusLogOut = null;

            if (action?.payload?.status == 200) {
                localStorage.setItem("authToken", action?.payload?.access_token);
            }
        });
        builder.addCase(logout.pending, (state) => {
            state.statusLogOut = 100;
        });
        builder.addCase(logout.fulfilled, (state, action) => {


            if (action?.payload?.status == 200) {
                localStorage.setItem("authToken", "");
                state.statusLogOut = action?.payload?.status;
                state.status = null;
                state.user = null;
                state.token = null;
            }
        });
    },
});

// -------------------------------
export const { } = LoginSlice.actions;
export default LoginSlice.reducer;



// -------------------------------

export const login_ = createAsyncThunk(
    "login/user",
    async ({ dataForm }) => {
        const url = URL_ + `api/login`;

        return await axios
            .post(url, dataForm, {
                // headers: {
                //     Authorization: token,
                // },
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
);

export const logout = createAsyncThunk(
    "logout/user",
    async ({ token }) => {
        const url = URL_ + `api/logout`;
        console.log(token);
        

        return await axios
            .post(url, token, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                return response.data;
            })
            .catch((err) => {
                console.log(err);
            });
    }
);
