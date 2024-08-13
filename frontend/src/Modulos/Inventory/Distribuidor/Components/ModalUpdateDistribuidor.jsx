import React from 'react'
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDistribuidorActions } from '../Hooks/UseDistribuidorActions';

export const ModalUpdateDistribuidor = () => {

    const distribuidor = useAppSelector((state) => state.distribuidor);
    const idDistribuidorEdit = distribuidor?.idDistribuidorEdit;
    const { modalChangeEditDistribuidor, distribuidorUpdate } = useDistribuidorActions();

    const indexDistribuidorEdit = distribuidor?.distribuidores?.findIndex(distribuidor => distribuidor.id == idDistribuidorEdit)
    const dataDistribuidorEdit = distribuidor?.distribuidores?.[indexDistribuidorEdit];

    const submitUpdateMarca = (event) => {

        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get("inpDistribuidorEdit_name");
        const phone = formData.get("inpDistribuidorEdit_telefono");

        distribuidorUpdate(
            {
                name: name,
                phone: phone,
            }
        )
        modalChangeEditDistribuidor()
        form.reset();

    }

    return ( 
        distribuidor?.modalEditDistribuidor && (
            <>
                <Modal close={modalChangeEditDistribuidor} title={"Editar Distribuidor"} >

                    <form onSubmit={submitUpdateMarca} autoComplete="off">
                        <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

                            <label htmlFor="inpDistribuidorEdit_name" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}                                >
                                <p style={{ flex: 1 }}>Nombre</p>
                                <input required
                                    autoComplete="off"
                                    defaultValue={dataDistribuidorEdit?.name}
                                    id="inpDistribuidorEdit_name" className='inp_form' type="text" name="inpDistribuidorEdit_name" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpDistribuidorEdit_telefono" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}                                >
                                <p style={{ flex: 1 }}>Telefono</p>
                                <input required
                                    autoComplete="off"
                                    defaultValue={dataDistribuidorEdit?.phone}
                                    id="inpDistribuidorEdit_telefono" className='inp_form' type="text" name="inpDistribuidorEdit_telefono" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
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
