import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { URL } from "../../../Helpers/Urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    marca: [
        {id:1, name:"INTI"},
        {id:2, name:"VITA"},
        {id:3, name:"SAE"},
        {id:4, name:"3M INTI"},
        {id:5, name:"CAPULLO"},
        {id:6, name:"CREMER "},
        {id:7, name:"SANED "},
        {id:8, name:"RESFRIOL"},
        {id:9, name:"FORAMEN SL."},
        {id:10, name:"INDOCO"},
        {id:11, name:"BAGO"},
        {id:12, name:"TERBOL"}
    ],
    modal: false

};

const MarcaSlice = createSlice({
    name: "inventario",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        }

    },

    extraReducers(builder) {      

    },
});

// -------------------------------
export const {
    changeModal
} = MarcaSlice.actions;
export default MarcaSlice.reducer;



// -------------------------------

// export const tableZoneGet = createAsyncThunk(
//     "table/get",
//     async ({ token, companyId }) => {
//         const url = DS_URL + `api/booking/zone/gbl_company_id/${companyId}`;
//         return await axios
//             .get(url, {
//                 headers: {
//                     Authorization: token,
//                 },
//             })
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((err) => {
//                 //console.log(err);
//             });
//     }
// );


// export const tableShapePost = createAsyncThunk(
//     "table/shape/post",
//     async ({ token, dataShape }) => {
//         const url = DS_URL + "api/booking/table";

//         return await axios
//             .post(url, dataShape, {
//                 headers: {
//                     Authorization: token,
//                 },
//             })
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((err) => {
//                 //console.log(err);
//             });
//     }
// );
// export const tableZonePost = createAsyncThunk(
//     "table/zone/post",
//     async ({ token, dataZone }) => {
//         const url = DS_URL + "api/booking/zone";

//         return await axios
//             .post(url, dataZone, {
//                 headers: {
//                     Authorization: token,
//                 },
//             })
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((err) => {
//                 //console.log(err);
//             });
//     }
// );


// export const tablesPositionsUpdate = createAsyncThunk(
//     "tables/positions/put",
//     async ({ token, dataTablesPositions }) => {

//         const url = DS_URL + "api/booking/table/update_positions";
//         return await axios
//             .put(url, dataTablesPositions, {
//                 headers: {
//                     Authorization: token,
//                 },
//             })
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }
// );

// export const tableShapePut = createAsyncThunk(
//     "table/shape/put",
//     async ({ token, dataTable }) => {

//         const url = DS_URL + "api/booking/table";
//         return await axios
//             .put(url, dataTable, {
//                 headers: {
//                     Authorization: token,
//                 },
//             })
//             .then((response) => {
//                 return response.data;
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }
// );
