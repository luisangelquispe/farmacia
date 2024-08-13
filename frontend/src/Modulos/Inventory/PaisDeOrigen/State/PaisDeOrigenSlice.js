import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_ } from "../../../../Helpers/urls";
import axios from "axios";
// import { URL } from "../../../Helpers/Urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    loadAddPaisDeOrigen: null,
    paisesDeOrigen: [],
    modal: false,
    modalEditPaisDeOrigen: false,
    idPaisDeOrigenEdit: null,

};

const PaisDeOrigenSlice = createSlice({
    name: "paisDeOrigen",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        changeModalEditPaidDeOrigen: (state) => {
            state.modalEditPaisDeOrigen = !state.modalEditPaisDeOrigen;
        },
        changeIdPaisDeOrigenEdit: (state, action) => {
            state.idPaisDeOrigenEdit = action?.payload?.id;
        },

    },

    extraReducers(builder) {
        // get Marcas
        builder.addCase(getPaisesDeOrigen.pending, (state) => {
            state.status = 100
        });
        builder.addCase(getPaisesDeOrigen.fulfilled, (state, action) => {
            state.status = 200
            state.paisesDeOrigen = action?.payload
        });
        // add Marcas
        builder.addCase(postPaisesDeOrigen.pending, (state) => {
            state.status = 100
            state.loadAddPaisDeOrigen = true
        });
        builder.addCase(postPaisesDeOrigen.fulfilled, (state, action) => {
            state.status = 200
            state.loadAddPaisDeOrigen = false;
            state.paisesDeOrigen = [...state.paisesDeOrigen, action?.payload];
        });
        // update Marcas
        builder.addCase(putPaisesDeOrigen.pending, (state) => {
            state.status = 100
        });
        builder.addCase(putPaisesDeOrigen.fulfilled, (state, action) => {
            state.status = 200
            const idPaisDeOrigen = action?.payload?.id;
            const indexPaisDeOrigen = state?.paisesDeOrigen?.findIndex(marca => marca?.id == idPaisDeOrigen)
            state.paisesDeOrigen[indexPaisDeOrigen] = action?.payload;
        });
    },
});

// -------------------------------
export const {
    changeModal, changeModalEditPaidDeOrigen, changeIdPaisDeOrigenEdit
} = PaisDeOrigenSlice.actions;
export default PaisDeOrigenSlice.reducer;



// -------------------------------

export const getPaisesDeOrigen = createAsyncThunk(
    "pais_origen/get",
    async ({ token }) => {
        console.log("token", token);

        const url = URL_ + `api/pais_origen`;
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

export const postPaisesDeOrigen = createAsyncThunk(
    "pais_origen/post",
    async ({ dataForm, token }) => {
        const url = URL_ + `api/pais_origen`;

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

export const putPaisesDeOrigen = createAsyncThunk(
    "pais_origen/put",
    async ({ dataForm, token }) => {

        const url = URL_ + `api/pais_origen/${dataForm?.id}`;
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