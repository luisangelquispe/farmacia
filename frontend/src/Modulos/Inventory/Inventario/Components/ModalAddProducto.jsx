import React from 'react'
import { useInventarioActions } from '../Hooks/UseInventarioActions';
import { useAppSelector } from '../../../../Redux/Hooks/UseStore';
import { Modal } from '../../../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ModalAddProducto = () => {

    const inventario = useAppSelector((state) => state.inventario);
    const marca = useAppSelector((state) => state.marca);
    const distribuidor = useAppSelector((state) => state.distribuidor);
    const paisDeOrigen = useAppSelector((state) => state.paisDeOrigen);

    const { modalChange, productAdd } = useInventarioActions();

    const submitProduct = (event) => {

        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);

        const nombre = formData.get("inpPdt_nombre");
        const marca = formData.get("selectPdt_marca");
        const distribuidor = formData.get("selectPdt_distribuidor");
        const paisDeOrigen = formData.get("selectPdt_paisDeOrigen");
        const precioCompra = formData.get("inpPdt_precioCompra");
        const precioVenta = formData.get("inpPdt_precioVenta");
        const precioCompetencia = formData.get("inpPdt_precioCompetencia");
        const stock = formData.get("inpPdt_stock");
        const vcto = formData.get("inpPdt_vcto");


        productAdd(
            {
                nombre: nombre,
                marca: marca,
                distribuidor: distribuidor,
                paisDeOrigen: paisDeOrigen,
                precioCompra: precioCompra,
                precioVenta: precioVenta,
                precioCompetencia: precioCompetencia,
                stock: stock,
                vcto: vcto
            }
        )
        modalChange()
        form.reset();

    }
    return (


        inventario?.modal && (
            <>
                <Modal close={modalChange} title={"Agregar Producto"} >

                    <form onSubmit={submitProduct}>
                        <div style={{ display: "flex", gap: ".5rem", flexDirection: "column", padding: "1rem" }}>

                            <label htmlFor="inpPdt_nombre" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Nombre</p>
                                <input required id="inpPdt_nombre" className='inp_form' type="text" name="inpPdt_nombre" placeholder='Nombre' style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="selectPdt_marca" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Marca</p>
                                <select required
                                    id="selectPdt_marca"
                                    className="inp_form"
                                    name="selectPdt_marca"
                                    style={{ flex: 2, width: "100%" }}
                                    defaultValue={""}
                                >
                                    <option value="" hidden >- - -</option>

                                    {marca?.marcas?.map((obj, i) => (
                                        <option key={i} value={obj.name}>{obj.name} </option>
                                    ))}
                                </select>
                            </label>
                            <label htmlFor="selectPdt_distribuidor" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Distribuidor</p>
                                <select required
                                    id="selectPdt_distribuidor"
                                    className="inp_form"
                                    name="selectPdt_distribuidor"
                                    style={{ flex: 2, width: "100%" }}
                                    defaultValue={""}
                                >
                                    <option value="" hidden >- - -</option>

                                    {distribuidor.distribuidores.map((obj, i) => (
                                        <option key={i} value={obj.name}>{obj.name} </option>
                                    ))}
                                </select>
                            </label>
                            <label htmlFor="selectPdt_paisDeOrigen" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Pais de orgen</p>
                                <select required
                                    id="selectPdt_paisDeOrigen"
                                    className="inp_form"
                                    name="selectPdt_paisDeOrigen"
                                    style={{ flex: 2, width: "100%" }}
                                    defaultValue={""}
                                >
                                    <option value="" hidden >- - -</option>

                                    {paisDeOrigen.paises.map((obj, i) => (
                                        <option key={i} value={obj.name}>{obj.name} </option>
                                    ))}
                                </select>
                            </label>

                            <label htmlFor="inpPdt_precioCompra" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Precio compra</p>
                                <input required id="inpPdt_precioCompra" className='inp_form' step="0.01" min="0" type="number" name="inpPdt_precioCompra" placeholder='Precio compra' style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpPdt_precioVenta" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }}>Precio venta</p>
                                <input required id="inpPdt_precioVenta" className='inp_form' step="0.01" min="0" type="number" name="inpPdt_precioVenta" placeholder='Precio venta' style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpPdt_precioCompetencia" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }} >Precio competencia</p>
                                <input required id="inpPdt_precioCompetencia" className='inp_form' step="0.01" min="0" type="number" name="inpPdt_precioCompetencia" placeholder='Precio competencia' style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpPdt_stock" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }} >Stock</p>
                                <input required id="inpPdt_stock" className='inp_form' type="number" min="0" name="inpPdt_stock" placeholder='Stock' style={{ flex: 2, width: "100%" }} />
                            </label>
                            <label htmlFor="inpPdt_vcto" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
                                <p style={{ flex: 1 }} >Vencimiento</p>
                                <input required id="inpPdt_vcto" className='inp_form' type="date" name="inpPdt_vcto" style={{ flex: 2, width: "100%" }} />
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
