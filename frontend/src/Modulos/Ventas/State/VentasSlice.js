import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_ } from "../../../Helpers/urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    ventas: [],
    modal: false,
    modalAddVenta: false,
    loadAddVenta: false,
    idVentaSelect: null,

};

const VentasSlice = createSlice({
    name: "ventas",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        changeModalAddVenta: (state) => {
            state.modalAddVenta = !state.modalAddVenta;
        },
        changeiIVentaSelect: (state, action) => {
            state.idVentaSelect = action.payload.id;
        }

    },

    extraReducers(builder) {
        // get Inventario
        builder.addCase(getVentas.pending, (state) => {
            state.status = 100
        });
        builder.addCase(getVentas.fulfilled, (state, action) => {
            state.status = 200
            state.ventas = action?.payload
        });
        // post producto Inventario
        builder.addCase(postVenta.pending, (state) => {
            state.status = 100
            state.loadAddVenta = true;
            state.modalAddVenta = false;
        });
        builder.addCase(postVenta.fulfilled, (state, action) => {
            state.status = 200;
            state.loadAddVenta = false;
            state.ventas = [...state.ventas, action?.payload];
        });
    },
});

// -------------------------------
export const {
    changeModal, changeiIVentaSelect, changeModalAddVenta
} = VentasSlice.actions;
export default VentasSlice.reducer;



// -------------------------------

export const getVentas = createAsyncThunk(
    "ventas/get",
    async ({ token }) => {
        console.log("token", token);

        const url = URL_ + `api/venta`;
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

export const postVenta = createAsyncThunk(
    "venta/post",
    async ({ dataForm, token }) => {
        const url = URL_ + `api/venta`;

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