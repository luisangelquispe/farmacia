import React from 'react'
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';
import { useUsersActions } from '../Hooks/UseUsersActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ModalAddUser = () => {

    const users = useAppSelector((state) => state.users);
    const { modalChange, userAdd } = useUsersActions();


    const submitUsuario = (event) => {

        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const email = formData.get("inpUs_email");
        const name = formData.get("inpUs_name");
        const lastname = formData.get("inpUs_lastName");
        const phone = formData.get("inpUs_phone");
        const password = formData.get("inpUs_password");


        userAdd(
            {
                email: email,
                name: name,
                lastname: lastname,
                phone: phone,
                password: password
            }
        )
        modalChange()
        form.reset();

    }

    return (
        users?.modal && (
            <>
                <Modal close={modalChange} title={"Agregar Usuario"} >

                    <form onSubmit={submitUsuario}>
                        <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

                            <label htmlFor="inpUs_email" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Email</p>
                                <input required
                                    autoComplete="off"
                                    id="inpUs_email" className='inp_form' type="text" name="inpUs_email" placeholder="email@gmail.com" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpUs_name" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Nombre</p>
                                <input required
                                    autoComplete="off"
                                    id="inpUs_name" className='inp_form' type="text" name="inpUs_name" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpUs_lastName" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Apellido</p>
                                <input required
                                    autoComplete="off"
                                    id="inpUs_lastName" className='inp_form' type="text" name="inpUs_lastName" placeholder="Apellido" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpUs_phone" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Telefono</p>
                                <input required
                                    autoComplete="off"
                                    id="inpUs_phone" className='inp_form' type="text" name="inpUs_phone" placeholder="Telefono" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpUs_password" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Password</p>
                                <input required
                                    autoComplete="off"
                                    id="inpUs_password" className='inp_form' type="password" name="inpUs_password" placeholder="Password" style={{ flex: 2, width: "100%" }} />
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
