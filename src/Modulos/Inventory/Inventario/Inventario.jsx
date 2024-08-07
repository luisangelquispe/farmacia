import React from 'react'
import { useInventarioActions } from './Hooks/UseInventarioActions';
import { useAppSelector } from '../../../Redux/Hooks/UseStore';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useInventarioActions } from './Hooks/UseInventarioActions';

export const Inventario = () => {



    const inventario = useAppSelector((state) => state.inventario);

    const { modalChange } = useInventarioActions();
    return (
        <>
            <div className="contend_seccion" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                    <h2>Inventario</h2>
                </div>



                <div style={{ padding: "1rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>

                    <div style={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
                        <button className="btn_"
                            onClick={() => { modalChange() }}
                            style={{ display: "flex", gap: "5px" }}
                        >

                            <FontAwesomeIcon icon={faPlus} />
                            <p>Producto </p>
                        </button>
                    </div>
                    <div className="table_desktop" style={{ overflowX: "auto" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Marca</th>
                                    <th>Distribuidor</th>
                                    <th>Pais de origen</th>
                                    <th>Precio compra</th>
                                    <th>Precio venta </th>
                                    <th>Precio competencia </th>
                                    <th>Stock </th>
                                    <th>Vcto </th>
                                </tr>
                            </thead>
                            <tbody>

                                {inventario?.productos?.map((obj, i) => (
                                    <tr key={i}>
                                        <td> {obj?.nombre} </td>
                                        <td> {obj?.marca} </td>
                                        <td> {obj?.distribuidor} </td>
                                        <td> {obj?.paisDeOrigen} </td>
                                        <td> {obj?.precioCompra} </td>
                                        <td> {obj?.precioVenta} </td>
                                        <td> {obj?.precioCompetencia} </td>
                                        <td> {obj?.stock} </td>
                                        <td> {obj?.vcto} </td>
                                    </tr>
                                ))}
                                {inventario?.productos?.length == 0 &&
                                    <tr>
                                        <td colSpan={9} > Sin registros </td>
                                    </tr>

                                }
                            </tbody>
                        </table>


                    </div>

                    <div className="table_mobile">


                        {inventario?.productos?.map((obj, i) => (

                            <div key={i} className="ssss">
                                <div className="colum_mobile">
                                    <p>Nombre</p>
                                    <p>Marca</p>
                                    <p>Distribuidor</p>
                                    <p>Pais de origen</p>
                                    <p>Precio compra</p>
                                    <p>Precio venta </p>
                                    <p>Precio competencia </p>
                                    <p>Stock </p>
                                    <p>Vcto </p>
                                </div>
                                <div className="row_mobile">
                                    <p> {obj?.nombre} </p>
                                    <p> {obj?.marca} </p>
                                    <p> {obj?.distribuidor} </p>
                                    <p> {obj?.paisDeOrigen} </p>
                                    <p> {obj?.precioCompra} </p>
                                    <p> {obj?.precioVenta} </p>
                                    <p> {obj?.precioCompetencia} </p>
                                    <p> {obj?.stock} </p>
                                    <p> {obj?.vcto} </p>
                                </div>
                            </div>

                        ))}


                    </div>
                </div>
            </div>



        </>
    )
}