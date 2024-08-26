import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_ } from "../../../../Helpers/urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    productos: [],
    modal: false,
    modalLote: false,
    loadAddProducto: false,
    idProductoSelect: null

};

const InventarioSlice = createSlice({
    name: "inventario",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        changeModalLote: (state) => {
            state.modalLote = !state.modalLote;
        },
        addProduct: (state, action) => {
            state.productos = [...state.productos, action.payload.dataForm];
        },
        changeIdProductSelect: (state, action) => {
            state.idProductoSelect = action.payload;
        }

    },

    extraReducers(builder) {
        // get Inventario
        builder.addCase(getInventario.pending, (state) => {
            state.status = 100
        });
        builder.addCase(getInventario.fulfilled, (state, action) => {
            state.status = 200
            state.productos = action?.payload
        });
        // post producto Inventario
        builder.addCase(addProducto.pending, (state) => {
            state.status = 100
        });
        builder.addCase(addProducto.fulfilled, (state, action) => {
            state.status = 200
            state.loadAddProducto = false;
            state.productos = [...state.productos, action?.payload];
        });
    },
});

// -------------------------------
export const {
    changeModal, changeModalLote, addProduct, changeIdProductSelect
} = InventarioSlice.actions;
export default InventarioSlice.reducer;



// -------------------------------

export const getInventario = createAsyncThunk(
    "inventario/get",
    async ({ token }) => {
        console.log("token", token);

        const url = URL_ + `api/producto`;
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

export const addProducto = createAsyncThunk(
    "inventario/post",
    async ({ dataForm, token }) => {
        const url = URL_ + `api/producto`;

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