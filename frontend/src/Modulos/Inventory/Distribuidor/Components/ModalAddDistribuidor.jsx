import React from 'react'
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useDistribuidorActions } from '../Hooks/UseDistribuidorActions';

export const ModalAddDistribuidor = () => {

  const distribuidor = useAppSelector((state) => state.distribuidor);
  const { modalChange, distribuidorAdd } = useDistribuidorActions();
  

  const submitDistribuidor = (event) => {

    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const name = formData.get("inpDistribuidor_name");
    const phone = formData.get("inpDistribuidor_phone");



    distribuidorAdd(
      {
        name: name,
        phone: phone,
      }
    )
    modalChange()
    form.reset();

  }

  return (
    distribuidor?.modal && (
      <>
        <Modal close={modalChange} title={"Agregar Distribuidor"} >

          <form onSubmit={submitDistribuidor}>
            <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

              <label htmlFor="inpDistribuidor_name" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                <p style={{ flex: 1 }}>Nombre</p>
                <input required
                  autoComplete="off"
                  id="inpDistribuidor_name" className='inp_form' type="text" name="inpDistribuidor_name" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
              </label>
              <label htmlFor="inpDistribuidor_phone" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                <p style={{ flex: 1 }}>Telefono</p>
                <input required
                  autoComplete="off"
                  id="inpDistribuidor_phone" className='inp_form' type="text" name="inpDistribuidor_phone" placeholder="Nombre" style={{ flex: 2, width: "100%" }} />
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
