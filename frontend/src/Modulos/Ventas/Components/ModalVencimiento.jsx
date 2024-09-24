import React from 'react'
import { useAppSelector } from '../../../Redux/Hooks/UseStore';
import { Modal } from '../../Modal';
import { useInventarioActions } from '../../Inventory/Inventario/Hooks/UseInventarioActions';

export const ModalVencimiento = () => {

    const inventario = useAppSelector((state) => state.inventario);
    const productosVencidos = inventario.productosVencidos;
    const { modalVencimientoChange } = useInventarioActions();

    return (
        inventario?.modalVencimiento && (
            <>
                <Modal close={modalVencimientoChange} title={"Tienes productos vencidos"} >

                    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>


                        <div className="table_desktop" style={{ overflowX: "auto" }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>fecha de vencimieto</th>
                                        <th>Dias vencidos</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {productosVencidos?.map((obj, i) => (
                                        <tr key={i}>
                                            <td> {i + 1} </td>
                                            <td> {obj?.name} </td>
                                            <td> {obj?.stock} </td>
                                            <td style={{ color: "#f58383" }}> {obj?.fecha_vencimiento}</td>
                                            <td style={{ color: "#f58383" }}> {obj?.dias_diferencia}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>


                        </div>

                        <div className="table_mobile" style={{width:"100%"}}>


                            {productosVencidos?.map((obj, i) => (

                                <div key={i} className="ssss">
                                    <div className="colum_mobile">
                                        <p>#</p>
                                        <p>Producto</p>
                                        <p>Cantidad</p>
                                        <p>fecha de vencimieto</p>
                                        <p>Dias vencidos</p>

                                    </div>
                                    <div className="row_mobile">
                                        <p> {i + 1} </p>
                                        <p> {obj?.name} </p>
                                        <p> {obj?.stock} </p>
                                        <p style={{ color: "#f58383" }}> {obj?.fecha_vencimiento}</p>
                                        <p style={{ color: "#f58383" }}> {obj?.dias_diferencia}</p>
                                    </div>
                                </div>

                            ))}


                        </div>
                    </div>



                </Modal>
            </>
        )
    )
}
