import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { useUsersActions } from '../Hooks/UseUsersActions';
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';

export const ModalPermisos = () => {

    const users = useAppSelector((state) => state.users);
    const { modalPermisosChange } = useUsersActions();

    return (
        users?.modalPermisos && (
            <>
                <Modal close={modalPermisosChange} title={"Permisos"} >

                    {/* <form onSubmit={submitUsuario}> */}
                    <form>
                        <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

                            <div className="checkbox-wrapper-64">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider"></span>
                                </label>
                            </div>

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
