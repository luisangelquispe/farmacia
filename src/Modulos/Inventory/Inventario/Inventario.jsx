import React from 'react'
import { useInventarioActions } from './Hooks/UseInventarioActions';
import { useAppSelector } from '../../../Redux/Hooks/UseStore';
// import { useInventarioActions } from './Hooks/UseInventarioActions';

export const Inventario = () => {

    const inventario = useAppSelector((state) => state.inventario);

    const { modalChange } = useInventarioActions();
    return (
        <>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                    <h2>Inventario</h2>
                </div>



                <div style={{ padding: "1rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>

                    <div style={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
                        <button onClick={() => { modalChange() }} className="btn_">Agregar</button>
                    </div>
                    <div style={{ overflowX: "auto" }}>
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
                                { inventario?.productos?.length == 0 &&
                                <tr>
                                    <td colSpan={9} > Sin registros </td>
                                </tr>

                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>



        </>
    )
}