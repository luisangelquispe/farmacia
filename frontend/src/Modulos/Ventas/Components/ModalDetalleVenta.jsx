import React, { useRef } from 'react'
import { Modal } from '../../Modal';
import { useVentasActions } from '../Hooks/UseVentasActions';
import { useAppSelector } from '../../../Redux/Hooks/UseStore';
import { useReactToPrint } from 'react-to-print';





export const ModalDetalleVenta = () => {

    const ventas = useAppSelector((state) => state.ventas);
    const idVentaSelect = ventas?.idVentaSelect;
    const indexVenta = ventas?.ventas?.findIndex(venta => venta.id == idVentaSelect)
    const venta = ventas?.ventas[indexVenta];
    const ventaDetalles = venta?.detalles;

    console.log("venta", venta);
    console.log("ventaDetalles", ventaDetalles);
    // cod_recibo


    const { modalChange } = useVentasActions();

    const Recibo = React.forwardRef((props, ref) => (
        <div ref={ref}
            style={{ display: "flex", flexDirection: "column", width: "300px", padding: "10px", fontSize: "10px" }}>
            <p style={{ textAlign: "center", fontWeight: "700" }}>Farmacia Test</p>
            <hr style={{ margin: "5px 0px 5px 0px", borderTop: "1px dashed #000" }} />
            <p style={{ textAlign: "center", fontWeight: "700" }}>FACTURA</p>
            <hr style={{ margin: "5px 0px 5px 0px", borderTop: "1px dashed #000" }} />
            <div style={{ display: "flex", gap: "10px" }}>
                <p style={{ fontWeight: "700" }}>Nro de factura: </p> <p>{venta?.cod_recibo}</p>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
                <p style={{ fontWeight: "700" }}>Fecha  : </p> <p>{venta?.fecha_venta}</p>
            </div>

            <hr style={{ margin: "5px 0px 5px 0px", borderTop: "1px dashed #000" }} />
            <p style={{ textAlign: "center" }}>
                Venta al por menor de productos
                farmaceuticos medicinales, cosmeticos y articulos de tocador</p>
            <div className="" style={{ overflowX: "auto", marginTop: "5px" }}>
                <table className="tableRecibo" >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Monto</th>
                        </tr>
                    </thead>
                    <tbody>

                        {ventaDetalles?.map((obj, i) => (
                            <tr key={i}>
                                <td> {i + 1} </td>
                                <td> {obj?.producto} </td>
                                <td> {obj?.cantidad} </td>
                                <td> {obj?.monto} bs</td>
                            </tr>
                        ))}
                        <tr >
                            <td style={{ fontWeight: "700" }} colSpan={2} > Total </td>
                            <td style={{ fontWeight: "700" }}> {ventaDetalles?.reduce((acc, venta) => acc + venta.cantidad, 0)} </td>
                            <td style={{ fontWeight: "700" }}  > {ventaDetalles?.reduce((acc, venta) => acc + parseFloat(venta.monto), 0)} bs </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    ));


    const reciboRef = useRef();

    const handlePrint = useReactToPrint({
        content: () => reciboRef.current,
    });

    return (
        ventas?.modal && (
            <>
                <Modal close={modalChange} title={"Detalle de venta"} >

                    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem", alignItems: "center" }}>


                        {/* <div className="" style={{ overflowX: "auto" }}>
                            <table>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Producto</th>
                                        <th>Cantidad</th>
                                        <th>Monto</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {ventaDetalles?.map((obj, i) => (
                                        <tr key={i}>
                                            <td> {i + 1} </td>
                                            <td> {obj?.producto} </td>
                                            <td> {obj?.cantidad} </td>
                                            <td> {obj?.monto} bs</td>
                                        </tr>
                                    ))}
                                    <tr >
                                        <td colSpan={2} > Total </td>                                        
                                        <td style={{ fontWeight: "700" }}> {ventaDetalles?.reduce((acc, venta) => acc + venta.cantidad, 0)} </td>
                                        <td style={{ fontWeight: "700" }}  > {ventaDetalles?.reduce((acc, venta) => acc + parseFloat(venta.monto), 0)} bs </td>
                                    </tr>
                                </tbody>
                            </table>


                        </div> */}
                        <Recibo ref={reciboRef} />
                        <button onClick={handlePrint}>Imprimir Recibo</button>
                    </div>



                </Modal>
            </>
        )
    )
}
