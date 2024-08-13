import React from 'react'
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';
import { useUsersActions } from '../Hooks/UseUsersActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ModalUpdateUser = () => {

    const users = useAppSelector((state) => state.users);
    const { modalChangeEditUser, userUpdate } = useUsersActions();

    const indexUserEdit = users?.users?.findIndex(user => user.id == users?.idUserEdit)
    const dataUserEdit = users?.users?.[indexUserEdit];

    const submitUpdateUsuario = (event) => {

        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const email = formData.get("inpUsEdit_email");
        const name = formData.get("inpUsEdit_name");
        const lastname = formData.get("inpUsEdit_lastName");
        const phone = formData.get("inpUsEdit_phone");
        const password = formData.get("inpUsEdit_password");


        userUpdate(
            {
                email: email,
                name: name,
                lastname: lastname,
                phone: phone,
                password: password
            }
        )
        modalChangeEditUser()
        form.reset();

    }

    return (
        users?.modalEditUser && (
            <>
                <Modal close={modalChangeEditUser} title={"Editar Usuario"} >

                    <form onSubmit={submitUpdateUsuario} autoComplete="off">
                        <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

                            <label htmlFor="inpUsEdit_email" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Email</p>
                                <input required
                                    autoComplete="off"
                                    defaultValue={dataUserEdit?.email}
                                    id="inpUsEdit_email" className='inp_form' type="text" name="inpUsEdit_email" placeholder="email@gmail.com" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpUsEdit_name" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}                                >
                                <p style={{ flex: 1 }}>Nombre</p>
                                <input required
                                    autoComplete="off"
                                    defaultValue={dataUserEdit?.name}
                                    id="inpUsEdit_name" className='inp_form' type="text" name="inpUsEdit_name" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpUsEdit_lastName" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Apellido</p>
                                <input required
                                    autoComplete="off"
                                    defaultValue={dataUserEdit?.lastname}
                                    id="inpUsEdit_lastName" className='inp_form' type="text" name="inpUsEdit_lastName" placeholder="Apellido" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpUsEdit_phone" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Telefono</p>
                                <input required
                                    autoComplete="off"
                                    defaultValue={dataUserEdit?.phone}
                                    id="inpUsEdit_phone" className='inp_form' type="text" name="inpUsEdit_phone" placeholder="Telefono" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpUsEdit_password" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}
                            >
                                <p style={{ flex: 1 }}>Password</p>
                                <input 
                                    autoComplete="off"
                                    defaultValue={""}
                                    id="inpUsEdit_password" className='inp_form' type="password" name="inpUsEdit_password" placeholder="Password" style={{ flex: 2, width: "100%" }} />
                            </label>

                        </div>


                        <div style={{ background: "#edf2f9", borderRadius: "0 0 .5rem .5rem", padding: ".5rem", display: "flex", justifyContent: "end" }}>

                            <button className="btn_show_modal">
                                <FontAwesomeIcon icon={faCheck} />
                            </button>

                        </div>

                    </form>

                </Modal>
            </>
        )
    )
}
