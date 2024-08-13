import React from 'react'
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useCategoriaActions } from '../Hooks/UseCategoriaActions';

export const ModalAddCategoria = () => {

  const categoria = useAppSelector((state) => state.categoria);
  const { modalChange, categoriaAdd } = useCategoriaActions();


  const submitCategoria = (event) => {

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("inpCat_name");



    categoriaAdd(
      {
        name: name,
      }
    )
    modalChange()
    form.reset();

  }

  return (
    categoria?.modal && (
      <>
        <Modal close={modalChange} title={"Agregar Categoria"} >

          <form onSubmit={submitCategoria}>
            <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

              <label htmlFor="inpCat_name" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                <p style={{ flex: 1 }}>Nombre</p>
                <input required
                  autoComplete="off"
                  id="inpCat_name" className='inp_form' type="text" name="inpCat_name" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
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
