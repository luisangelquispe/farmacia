import React from 'react'
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { useInventarioActions } from '../Hooks/UseInventarioActions';
import { Modal } from '../../../Modal';

export const ModalLotes = () => {

    const inventario = useAppSelector((state) => state.inventario);
    const idProductoSelect = inventario?.idProductoSelect;
    const indexProducto = inventario?.productos?.findIndex(producto => producto?.id == idProductoSelect);
    const lotes = inventario?.productos?.[indexProducto]?.lotes;
    console.log("lotes", lotes);

    const { modalLoteChange } = useInventarioActions();
    return (
        inventario?.modalLote && (
            <>
                <Modal close={modalLoteChange} title={"Lotes"} >

                    <div style={{ padding: "1rem" }}>

                        {lotes?.map((obj, i) => (
                            <div key={i} style={{ display: "flex", gap: ".5rem" }}>
                                <label htmlFor="inpPdt_cantidadInicial" style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: ".5rem", width: "100%", color: "#5e6e82" }}>
                                    <p style={{ flex: 1 }} >Stock</p>
                                    <input required id="inpPdt_cantidadInicial"
                                        defaultValue={obj?.stock}
                                        className='inp_form' type="number" min="0" name="inpPdt_cantidadInicial" placeholder='0' style={{ flex: 2, width: "100%" }} />
                                </label>
                                <label htmlFor="inpPdt_cantidadInicial" style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: ".5rem", width: "100%", color: "#5e6e82" }}>
                                    <p style={{ flex: 1 }} >Cantidad inicial</p>
                                    <input required id="inpPdt_cantidadInicial"
                                        defaultValue={obj?.cantidad_inicial}
                                        className='inp_form' type="number" min="0" name="inpPdt_cantidadInicial" placeholder='0' style={{ flex: 2, width: "100%" }} />
                                </label>
                                <label htmlFor="inpPdt_vcto" style={{ display: "flex", flexDirection: "column", alignItems: "start", gap: ".5rem", width: "100%", color: "#5e6e82" }}>
                                    <p style={{ flex: 1 }} >Vencimiento</p>
                                    <input required id="inpPdt_vcto"
                                        defaultValue={obj?.fecha_vencimiento}
                                        className='inp_form' type="date" name="inpPdt_vcto" style={{ flex: 2, width: "100%" }} />
                                </label>
                            </div>
                        ))}


                    </div>



                </Modal>
            </>
        )
    )
}
