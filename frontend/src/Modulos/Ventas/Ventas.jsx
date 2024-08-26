import { faCartShopping, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useVentasActions } from './Hooks/UseVentasActions';
import { useAppSelector } from '../../Redux/Hooks/UseStore';

import { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';




export const Ventas = () => {




    const ventas = useAppSelector((state) => state.ventas.ventas);

    const { ventasGet, modalChange, idVentaSelectChange, modalAddVentaChange } = useVentasActions();

    const selectVenta = (id) => {
        idVentaSelectChange(id);
        modalChange();
    }

    useEffect(() => {
        ventasGet();
    }, [])





    return (
        <div className="contend_seccion" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

            <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                <h2>Venta</h2>
            </div>



            <div style={{ padding: "1rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>

                <div style={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
                    <button className="btn_"
                        onClick={() => { modalAddVentaChange() }}
                        style={{ display: "flex", gap: "5px" }}
                    >

                        <FontAwesomeIcon icon={faPlus} />
                        <p>Ventas </p>
                    </button>
                </div>
                <div className="table_desktop" style={{ overflowX: "auto" }}>
                    <table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Cod. recibo</th>
                                <th>Responsable</th>
                                <th>Cantidad</th>
                                <th>Monto total</th>
                                <th>Fecha de venta</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>

                            {ventas?.map((obj, i) => (
                                <tr key={i}>

                                    <td> {i + 1} </td>
                                    <td> {obj?.cod_recibo} </td>
                                    <td> {obj?.name} </td>
                                    <td> {obj?.detalles?.reduce((acc, venta) => acc + venta.cantidad, 0)} </td>
                                    <td> {obj?.detalles?.reduce((acc, venta) => acc + parseFloat(venta.monto), 0)} </td>
                                    <td> {obj?.fecha_venta} </td>
                                    <td style={{ display: "flex", justifyContent: "center" }} >
                                        <button className="btn_edit_small"
                                            style={{ display: "flex", gap: ".5rem" }}
                                            onClick={() => { selectVenta(obj?.id) }}
                                        >
                                            <FontAwesomeIcon icon={faCartShopping} />
                                            <p>Detalles</p>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            {ventas?.length == 0 &&
                                <tr>
                                    <td colSpan={5} > Sin registros </td>
                                </tr>

                            }
                        </tbody>
                    </table>


                </div>

                <div className="table_mobile">


                    {ventas?.map((obj, i) => (

                        <div key={i} className="ssss">
                            <div className="colum_mobile">

                                <p>#</p>
                                <p>Cod. recibo</p>
                                <p>Responsable</p>
                                <p>Cantidad</p>
                                <p>Monto total</p>
                                <p>Fecha de venta</p>
                                <p>Acciones</p>
                            </div>
                            <div className="row_mobile">

                                <p> {i + 1} </p>
                                <p> {obj?.cod_recibo} </p>
                                <p> {obj?.name} </p>
                                <p> {obj?.detalles?.reduce((acc, venta) => acc + venta.cantidad, 0)} </p>
                                <p> {obj?.detalles?.reduce((acc, venta) => acc + parseFloat(venta.monto), 0)} </p>
                                <p> {obj?.fecha_venta} </p>
                                <p style={{ display: "flex", justifyContent: "center" }} >
                                    <button className="btn_edit_small"
                                        style={{ display: "flex", gap: ".5rem" }}
                                        onClick={() => { selectVenta(obj?.id) }}
                                    >
                                        <FontAwesomeIcon icon={faCartShopping} />
                                        <p>Detalles</p>
                                    </button>
                                </p>
                            </div>
                        </div>

                    ))}


                </div>
            </div>
        </div>
    )
}
