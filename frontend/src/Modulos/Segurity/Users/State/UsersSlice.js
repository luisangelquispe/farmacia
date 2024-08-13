import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios"
import { URL_ } from "../../../../Helpers/urls";

const defautValues = {
    status: null,
    error: null,
    idUserEdit: null,
    loadAddUser: false,
    loadGetUser: false,
    users: [
        // {
        //     nameUser: "Luis23",
        //     name: "Luis Angel",
        //     lastname: "Quispe Abendaño",
        //     telefono: "75382649",
        //     permissions: [
        //         { id: 1, permission: "Inventario" },
        //         { id: 2, permission: "Marca" },
        //         { id: 3, permission: "Distribuidor" },
        //         { id: 4, permission: "Pais de origen" }
        //     ]
        // },
        // {
        //     nameUser: "Luis23",
        //     name: "Luis Angel",
        //     lastname: "Quispe Abendaño",
        //     telefono: "75382649",
        //     permissions: [
        //         { id: 1, permission: "Inventario" },
        //         { id: 2, permission: "Marca" },
        //         { id: 3, permission: "Distribuidor" },
        //         { id: 4, permission: "Pais de origen" }
        //     ]
        // },
        // {
        //     nameUser: "Luis23",
        //     name: "Luis Angel",
        //     lastname: "Quispe Abendaño",
        //     telefono: "75382649",
        //     permissions: [
        //         { id: 1, permission: "Inventario" },
        //         { id: 2, permission: "Marca" },
        //         { id: 3, permission: "Distribuidor" },
        //         { id: 4, permission: "Pais de origen" }
        //     ]
        // },
    ],
    modal: false,
    modalEditUser: false,
    modalPermisos: false,

};

const UsersSlice = createSlice({
    name: "users",
    initialState: defautValues,
    reducers: {
        changeModal: (state) => {
            state.modal = !state.modal;
        },
        changeModalEditUser: (state) => {
            state.modalEditUser = !state.modalEditUser;
        },
        changeModalPermisos: (state) => {
            state.modalPermisos = !state.modalPermisos;
        },
        changeIdUserEdit: (state, action) => {
            state.idUserEdit = action?.payload?.id;
        },
    },

    extraReducers(builder) {
        // get Usuario
        builder.addCase(getUser.pending, (state) => {
            state.loadGetUser = false;
        });
        builder.addCase(getUser.fulfilled, (state, action) => {
            state.loadGetUser = true;
            state.users = action?.payload
        });
        // add Usuario
        builder.addCase(postUser.pending, (state) => {
            state.loadAddUser = true;
        });
        builder.addCase(postUser.fulfilled, (state, action) => {
            state.loadAddUser = false;
            state.users = [...state.users, action?.payload];
        });
        // update Usuario
        builder.addCase(putUser.pending, (state) => {
            // state.loadAddUser = true;
        });
        builder.addCase(putUser.fulfilled, (state, action) => {
            // state.loadAddUser = false;            
            const idUser = action?.payload?.id;
            const indexUser = state?.users?.findIndex(user => user?.id == idUser)
            state.users[indexUser] = action?.payload;
        });
    },
});

// -------------------------------
export const {
    changeModal, changeModalPermisos, changeModalEditUser, changeIdUserEdit
} = UsersSlice.actions;
export default UsersSlice.reducer;



// -------------------------------

export const getUser = createAsyncThunk(
    "user/get",
    async ({ token }) => {
        console.log("token", token);

        const url = URL_ + `api/user`;
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


export const postUser = createAsyncThunk(
    "user/post",
    async ({ dataForm, token }) => {
        const url = URL_ + `api/user`;

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



export const putUser = createAsyncThunk(
    "user/put",
    async ({ dataForm, token }) => {

        const url = URL_ + `api/user/${dataForm?.id}`;
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
