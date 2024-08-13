import React from 'react'
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useMarcaActions } from '../Hooks/UseMarcaActions';

export const ModalUpdateMarca = () => {

    const marca = useAppSelector((state) => state.marca);
    const idMarcaEdit = marca?.idMarcaEdit;
    const { modalChangeEditMarca, marcasUpdate } = useMarcaActions();

    const indexMarcaEdit = marca?.marcas?.findIndex(marca => marca.id == idMarcaEdit)
    const dataMarcaEdit = marca?.marcas?.[indexMarcaEdit];

    const submitUpdateMarca = (event) => {

        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get("inpMarcaEdit_name");

        marcasUpdate(
            {
                name: name,
            }
        )
        modalChangeEditMarca()
        form.reset();

    }

    return (
        marca?.modalEditMarca && (
            <>
                <Modal close={modalChangeEditMarca} title={"Editar Marca"} >

                    <form onSubmit={submitUpdateMarca} autoComplete="off">
                        <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

                            <label htmlFor="inpMarcaEdit_name" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}                                >
                                <p style={{ flex: 1 }}>Nombre</p>
                                <input required
                                    autoComplete="off"
                                    defaultValue={dataMarcaEdit?.name}
                                    id="inpMarcaEdit_name" className='inp_form' type="text" name="inpMarcaEdit_name" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
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
