import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import axios from "axios";
// import { URL } from "../../../Helpers/Urls";


const defautValues = {
    status: null,
    error: null,
    loading: null,
    productos: [

        {
            nombre: "item",
            marca: "item",
            distribuidor: "item",
            paisDeOrigen: "item",
            precioCompra: "item",
            precioVenta: "item",
            precioCompetencia: "item",
            stock: "item",
            vcto: "13-45-3042",
        },

        {
            nombre: "item",
            marca: "item",
            distribuidor: "item",
            paisDeOrigen: "item",
            precioCompra: "item",
            precioVenta: "item",
            precioCompetencia: "item",
            stock: "item",
            vcto: "13-45-3042",
        },
        {
            nombre: "item",
            marca: "item",
            distribuidor: "item",
            paisDeOrigen: "item",
            precioCompra: "item",
            precioVenta: "item",
            precioCompetencia: "item",
            stock: "item",
            vcto: "13-45-3042",
        }
    ],
    modal: false

};

const InventarioSlice = createSlice({
    name: "inventario",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        addProduct: (state, action) => {
            state.productos = [...state.productos, action.payload.dataForm];
        }

    },

    extraReducers(builder) {

    },
});

// -------------------------------
export const {
    changeModal, addProduct
} = InventarioSlice.actions;
export default InventarioSlice.reducer;



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
