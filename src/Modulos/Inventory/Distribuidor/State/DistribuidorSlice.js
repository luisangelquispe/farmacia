import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { URL } from "../../../Helpers/Urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    distribuidores:[
        {id:1, name:"ALCOS"},
        {id:2, name:"SOUHT AMERICAN "},
        {id:3, name:"INAXTEX LTDA"},
        {id:4, name:"SAN FERNANDO SRL"},
        {id:5, name:"TECNOFARMA"},
        {id:6, name:"ABD "}
    ],
    modal: false

};

const DistribuidorSlice = createSlice({
    name: "distribuidor",
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
} = DistribuidorSlice.actions;
export default DistribuidorSlice.reducer;



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
