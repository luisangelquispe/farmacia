import React, { useEffect } from 'react'
import { useInventarioActions } from './Hooks/UseInventarioActions';
import { useAppSelector } from '../../../Redux/Hooks/UseStore';
import { faCalendarDays, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { useInventarioActions } from './Hooks/UseInventarioActions';

export const Inventario = () => {



    const inventario = useAppSelector((state) => state.inventario);

    const { modalChange, inventarioGet, modalLoteChange, selectIdProduct } = useInventarioActions();


    const modalLote = (id) => {
        selectIdProduct(id);
        modalLoteChange();
    }

    useEffect(() => {
        inventarioGet();
    }, [])
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
                                    <th>Producto</th>
                                    <th>Categoria</th>
                                    <th>Marca</th>
                                    <th>Distribuidor</th>
                                    <th>Pais de origen</th>
                                    <th>Precio compra</th>
                                    <th>Precio venta </th>
                                    <th>Precio competencia </th>
                                    <th>Stock </th>
                                    <th>Acciones </th>
                                </tr>
                            </thead>
                            <tbody>

                                {inventario?.productos?.map((obj, i) => (
                                    <tr key={i}>
                                        <td> {obj?.producto} </td>
                                        <td> {obj?.categoria} </td>
                                        <td> {obj?.marca} </td>
                                        <td> {obj?.proveedor} </td>
                                        <td> {obj?.pais_origen} </td>
                                        <td> {obj?.precio_compra} </td>
                                        <td> {obj?.precio_venta} </td>
                                        <td> {obj?.precio_competencia} </td>
                                        <td> {obj?.lotes?.reduce((acc, lote) => acc + lote.stock, 0)} </td>
                                        <td>
                                            <button className="btn_edit_small"
                                                onClick={() => { modalLote(obj?.id) }}
                                            >
                                                <FontAwesomeIcon icon={faCalendarDays} />
                                            </button>
                                        </td>
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
                                    <p>Producto</p>
                                    <p>Categoria</p>
                                    <p>Marca</p>
                                    <p>Distribuidor</p>
                                    <p>Pais de origen</p>
                                    <p>Precio compra</p>
                                    <p>Precio venta </p>
                                    <p>Precio competencia </p>
                                    <p>Stock </p>
                                    <p>Acciones </p>
                                </div>
                                <div className="row_mobile">
                                    <p> {obj?.producto} </p>
                                    <p> {obj?.categoria} </p>
                                    <p> {obj?.marca} </p>
                                    <p> {obj?.proveedor} </p>
                                    <p> {obj?.pais_origen} </p>
                                    <p> {obj?.precio_compra} </p>
                                    <p> {obj?.precio_venta} </p>
                                    <p> {obj?.precio_competencia} </p>
                                    <p> {obj?.lotes?.reduce((acc, lote) => acc + lote.stock, 0)} </p>
                                    <p>
                                        <button className="btn_edit_small"
                                            onClick={() => { modalLote(obj?.id) }}
                                        >
                                            <FontAwesomeIcon icon={faCalendarDays} />
                                        </button>
                                    </p>
                                </div>
                            </div>

                        ))}


                    </div>
                </div>
            </div>



        </>
    )
}