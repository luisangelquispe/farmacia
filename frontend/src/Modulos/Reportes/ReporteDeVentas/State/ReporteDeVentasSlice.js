import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { URL_ } from "../../../../Helpers/urls";
import axios from "axios";
// import { URL } from "../../../Helpers/Urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    loadSearchDate: false,
    reporteDeVentas: [],
    modal: false,
    idDistribuidorEdit: null,

};

const ReporteDeVentasSlice = createSlice({
    name: "reporteDeVentas",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        changeIdDistribuidorEdit: (state, action) => {
            state.idDistribuidorEdit = action?.payload?.id;
        },

    },

    extraReducers(builder) {
        // add distribuidores
        builder.addCase(getRptVentas.pending, (state) => {
            state.status = 100
            state.loadSearchDate = true
        });
        builder.addCase(getRptVentas.fulfilled, (state, action) => {
            state.status = 200
            state.loadSearchDate = false
            console.log("action?.payload", action?.payload);

            state.reporteDeVentas = action?.payload;
        });
    },
});

// -------------------------------
export const {
    changeModal, changeIdDistribuidorEdit
} = ReporteDeVentasSlice.actions;
export default ReporteDeVentasSlice.reducer;



// -------------------------------

export const getRptVentas = createAsyncThunk(
    "rptVentas/get",
    async ({ dataForm, token }) => {
        const url = URL_ + `api/rptVentas`;

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