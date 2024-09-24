import { faCircleNotch, faMagnifyingGlass, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { useReporteDeVentasActions } from './Hooks/UseReporteDeVentasActions';
import { useAppSelector } from '../../../Redux/Hooks/UseStore';

export const ReporteDeVentas = () => {

    const marca = [];
    const dateNow = new Date().toJSON().split("T")[0];
    const reporteDeVentas = useAppSelector((state) => state.reporteDeVentas);
    // loadSearchDate
    const [valueDate, setvalueDate] = useState(dateNow)
    console.log("dateNow", dateNow);

    const { rptVentasGet } = useReporteDeVentasActions();

    useEffect(() => {
        rptVentasGet({ fecha: dateNow });
    }, [])

    return (
        <>
            <>
                <div className="contend_seccion" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                    <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                        <h2>Reporte de ventas</h2>
                    </div>



                    <div style={{ padding: "1rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>

                        <div style={{ display: "flex", justifyContent: "end", padding: "1rem", gap: ".5rem" }}>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                <input required
                                    defaultValue={valueDate}
                                    onChange={(event) => { setvalueDate(event.target.value) }}
                                    id="inpPdt_vcto" className='inp_form' type="date" name="inpPdt_vcto" style={{ width: "10rem" }} />
                                <small >Fecha de busqueda</small>
                            </div>
                            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                                <button className="btn_"
                                    onClick={() => { rptVentasGet({ fecha: valueDate }) }}
                                    style={{ display: "flex", gap: "5px", height: "100%" }}
                                >

                                    {reporteDeVentas?.loadSearchDate ?
                                        <FontAwesomeIcon icon={faCircleNotch} spin /> :
                                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                                    }
                                </button>
                                <small>Buscar</small>
                            </div>
                        </div>
                        <div className="table_desktop" style={{ overflowX: "auto" }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Cod. Recibo</th>
                                        <th>Responsable</th>
                                        <th>Cod. Producto</th>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Monto</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {reporteDeVentas?.reporteDeVentas?.map((obj, i) => (
                                        <tr key={i}>
                                            <td> {i + 1} </td>
                                            <td> {obj?.cod_recibo} </td>
                                            <td> {obj?.user_name} </td>
                                            <td> {obj?.cod_producto} </td>
                                            <td> {obj?.producto_name} </td>
                                            <td> {obj?.cantidad} </td>
                                            <td> {obj?.monto} </td>
                                        </tr>
                                    ))}
                                    {reporteDeVentas?.reporteDeVentas?.length == 0 &&
                                        <tr>
                                            <td colSpan={7} > Sin registros </td>
                                        </tr>

                                    }
                                </tbody>
                            </table>


                        </div>

                        <div className="table_mobile">


                            {reporteDeVentas?.reporteDeVentas?.map((obj, i) => (

                                <div key={i} className="ssss">
                                    <div className="colum_mobile">
                                        <p>#</p>
                                        <p>Cod. Recibo</p>
                                        <p>Responsable</p>
                                        <p>Cod. Producto</p>
                                        <p>Producto</p>
                                        <p>Cantidad</p>
                                        <p>Monto</p>

                                    </div>
                                    <div className="row_mobile">
                                        <p> {i + 1} </p>
                                        <p> {obj?.cod_recibo} </p>
                                        <p> {obj?.user_name} </p>
                                        <p> {obj?.cod_producto} </p>
                                        <p> {obj?.producto_name} </p>
                                        <p> {obj?.cantidad} </p>
                                        <p> {obj?.monto} </p>
                                    </div>
                                </div>

                            ))}


                        </div>
                    </div>
                </div>



            </>
        </>
    )
}
