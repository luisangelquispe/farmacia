import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_ } from "../../../../Helpers/urls";
import axios from "axios";
// import { URL } from "../../../Helpers/Urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    loadAddMarca: null,
    marcas: [],
    modal: false,
    modalEditMarca: false,
    idMarcaEdit: null,

};

const MarcaSlice = createSlice({
    name: "marca",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        changeModalEditMarca: (state) => {
            state.modalEditMarca = !state.modalEditMarca;
        },
        changeIdMarcaEdit: (state, action) => {
            state.idMarcaEdit = action?.payload?.id;
        },

    },

    extraReducers(builder) {
        // get Marcas
        builder.addCase(getMarcas.pending, (state) => {
            state.status = 100
        });
        builder.addCase(getMarcas.fulfilled, (state, action) => {
            state.status = 200
            state.marcas = action?.payload
        });
        // add Marcas
        builder.addCase(postMarcas.pending, (state) => {
            state.status = 100
            state.loadAddMarca = true
        });
        builder.addCase(postMarcas.fulfilled, (state, action) => {
            state.status = 200
            state.loadAddMarca = false;
            state.marcas = [...state.marcas, action?.payload];
        });
        // update Marcas
        builder.addCase(putMarcas.pending, (state) => {
            state.status = 100
        });
        builder.addCase(putMarcas.fulfilled, (state, action) => {
            state.status = 200
            const idMarca = action?.payload?.id;
            const indexMarca = state?.marcas?.findIndex(marca => marca?.id == idMarca)
            state.marcas[indexMarca] = action?.payload;
        });
    },
});

// -------------------------------
export const {
    changeModal, changeModalEditMarca, changeIdMarcaEdit
} = MarcaSlice.actions;
export default MarcaSlice.reducer;



// -------------------------------

export const getMarcas = createAsyncThunk(
    "marcas/get",
    async ({ token }) => {
        console.log("token", token);

        const url = URL_ + `api/marcas`;
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

export const postMarcas = createAsyncThunk(
    "marcas/post",
    async ({ dataForm, token }) => {
        const url = URL_ + `api/marcas`;

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

export const putMarcas = createAsyncThunk(
    "marcas/put",
    async ({ dataForm, token }) => {

        const url = URL_ + `api/marcas/${dataForm?.id}`;
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