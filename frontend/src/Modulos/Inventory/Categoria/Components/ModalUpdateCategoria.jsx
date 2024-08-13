import React from 'react'
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useCategoriaActions } from '../Hooks/UseCategoriaActions';

export const ModalUpdateCategoria = () => {

    const categoria = useAppSelector((state) => state.categoria);
    const idCategoriaEdit = useAppSelector((state) => state.categoria.idCategoriaEdit);
    const { modalChangeEditCategoria, categoriaUpdate } = useCategoriaActions();

    const indexCategoriaEdit = categoria?.categorias?.findIndex(categoria => categoria.id == idCategoriaEdit)
    const dataCategoriaEdit = categoria?.categorias?.[indexCategoriaEdit];

    const submitUpdateCategoria = (event) => {

        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        const name = formData.get("inpCatEdit_name");

        categoriaUpdate(
            {
                name: name,
            }
        )
        modalChangeEditCategoria()
        form.reset();

    }

    return (
        categoria?.modalEditCategoria && (
            <>
                <Modal close={modalChangeEditCategoria} title={"Editar Categoria"} >

                    <form onSubmit={submitUpdateCategoria} autoComplete="off">
                        <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

                            <label htmlFor="inpCatEdit_name" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}                                >
                                <p style={{ flex: 1 }}>Nombre</p>
                                <input required
                                    autoComplete="off"
                                    defaultValue={dataCategoriaEdit?.name}
                                    id="inpCatEdit_name" className='inp_form' type="text" name="inpCatEdit_name" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
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
