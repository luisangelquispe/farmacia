import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_ } from "../../../../Helpers/urls";
import axios from "axios";
// import { URL } from "../../../Helpers/Urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    loadAddDistribuidor: null,
    distribuidores: [],
    modal: false,
    modalEditDistribuidor: false,
    idDistribuidorEdit: null,

};

const DistribuidorSlice = createSlice({
    name: "distribuidor",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        changeModalEditDistribuidor: (state) => {
            state.modalEditDistribuidor = !state.modalEditDistribuidor;
        },
        changeIdDistribuidorEdit: (state, action) => {
            state.idDistribuidorEdit = action?.payload?.id;
        },

    },

    extraReducers(builder) {
        // get distribuidores
        builder.addCase(getDistribuidores.pending, (state) => {
            state.status = 100
        });
        builder.addCase(getDistribuidores.fulfilled, (state, action) => {
            state.status = 200
            state.distribuidores = action?.payload
        });
        // add distribuidores
        builder.addCase(postDistribuidores.pending, (state) => {
            state.status = 100
            state.loadAddDistribuidor = true
        });
        builder.addCase(postDistribuidores.fulfilled, (state, action) => {
            state.status = 200
            state.loadAddDistribuidor = false;
            state.distribuidores = [...state.distribuidores, action?.payload];
        });
        // update distribuidores
        builder.addCase(putDistribuidores.pending, (state) => {
            state.status = 100
        });
        builder.addCase(putDistribuidores.fulfilled, (state, action) => {
            state.status = 200
            const idDistribuidores = action?.payload?.id;
            const indexDistribuidor = state?.distribuidores?.findIndex(distribuidor => distribuidor?.id == idDistribuidores)
            state.distribuidores[indexDistribuidor] = action?.payload;
        });
    },
});

// -------------------------------
export const {
    changeModal, changeModalEditDistribuidor, changeIdDistribuidorEdit
} = DistribuidorSlice.actions;
export default DistribuidorSlice.reducer;



// -------------------------------

export const getDistribuidores = createAsyncThunk(
    "proveedores/get",
    async ({ token }) => {
        console.log("token", token);

        const url = URL_ + `api/proveedores`;
        return await axios
            .get(url, {
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

export const postDistribuidores = createAsyncThunk(
    "proveedores/post",
    async ({ dataForm, token }) => {
        const url = URL_ + `api/proveedores`;

        return await axios
            .post(url, dataForm, {
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

export const putDistribuidores= createAsyncThunk(
    "proveedores/put",
    async ({ dataForm, token }) => {

        const url = URL_ + `api/proveedores/${dataForm?.id}`;
        return await axios
            .put(url, dataForm, {
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