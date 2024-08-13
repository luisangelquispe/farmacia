import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_ } from "../../../../Helpers/urls";
import axios from "axios";
// import { URL } from "../../../Helpers/Urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    categorias: [],
    modal: false,
    modalEditCategoria: false,
    idCategoriaEdit: null,
    loadAddCategoria: false,
};

const CategoriaSlice = createSlice({
    name: "categoria",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        changeModalEditCategoria: (state) => {
            state.modalEditCategoria = !state.modalEditCategoria;
        },
        changeIdCategoriaEdit: (state, action) => {
            state.idCategoriaEdit = action?.payload?.id;
        },

    },

    extraReducers(builder) {
        // get Categorias
        builder.addCase(getCategorias.pending, (state) => {
            state.status = 100
        });
        builder.addCase(getCategorias.fulfilled, (state, action) => {
            state.status = 200
            state.categorias = action?.payload
        });
        // add Categoria
        builder.addCase(postCategoria.pending, (state) => {
            state.status = 100
            state.loadAddCategoria = true
        });
        builder.addCase(postCategoria.fulfilled, (state, action) => {
            state.status = 200
            state.loadAddCategoria = false;
            state.categorias = [...state.categorias, action?.payload];
        });
        // update Categoria
        builder.addCase(putCategoria.pending, (state) => {
            state.status = 100
        });
        builder.addCase(putCategoria.fulfilled, (state, action) => {
            state.status = 200
            const idCategoria = action?.payload?.id;
            const indexUser = state?.categorias?.findIndex(categoria => categoria?.id == idCategoria)
            state.categorias[indexUser] = action?.payload;
        });

    },
});

// -------------------------------
export const {
    changeModal, changeIdCategoriaEdit, changeModalEditCategoria
} = CategoriaSlice.actions;
export default CategoriaSlice.reducer;
// -------------------------------

export const getCategorias = createAsyncThunk(
    "categorias/get",
    async ({ token }) => {
        console.log("token", token);

        const url = URL_ + `api/categorias`;
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

export const postCategoria = createAsyncThunk(
    "categorias/post",
    async ({ dataForm, token }) => {
        const url = URL_ + `api/categorias`;

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

export const putCategoria = createAsyncThunk(
    "categorias/put",
    async ({ dataForm, token }) => {
        console.log("dataForm", dataForm);
        console.log("token", token);


        const url = URL_ + `api/categorias/${dataForm?.id}`;
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