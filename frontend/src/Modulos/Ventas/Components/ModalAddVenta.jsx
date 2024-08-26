import React, { useState } from 'react'
import { Modal } from '../../Modal';
import { useAppSelector } from '../../../Redux/Hooks/UseStore';
import { useVentasActions } from '../Hooks/UseVentasActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCartShopping, faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { toast } from 'sonner';

export const ModalAddVenta = () => {
    const { modalAddVentaChange, ventasPost } = useVentasActions();

    const ventas = useAppSelector((state) => state.ventas);
    const productos = useAppSelector((state) => state.inventario.productos);
    // console.log("productos", productos);

    const [productoSelect, setproductoSelect] = useState("")
    const [listVentaProducto, setlistVentaProducto] = useState([])


    // const idVentaSelect = ventas?.idVentaSelect;
    // const indexVenta = ventas?.ventas?.findIndex(venta => venta.id == idVentaSelect)
    // const ventaDetalles = ventas?.ventas[indexVenta]?.detalles;

    const closeModalVenta = () => {
        modalAddVentaChange();
        setlistVentaProducto([]);
    }

    const handleDataList = (event) => {
        setproductoSelect(event.target.value);
    }

    const addProductoVenta = () => {
        const productExist = productos.some(producto => producto.producto === productoSelect);
        if (productExist) {
            const objProducto = productos.find(producto => producto.producto === productoSelect);
            const productoEnListVenta = listVentaProducto.some(producto => producto.id === objProducto.id);
            if (productoEnListVenta) {
                toast.error("ya fue seleccionado");
                return;
            }
            setlistVentaProducto([...listVentaProducto,
            {
                id: objProducto?.id,
                name: objProducto?.producto,
                cantidad: 1,
                monto: parseFloat(objProducto?.precio_venta),
            }])
            setproductoSelect("");

        } else {
            toast.error("no existe");
        }

    }


    const changeCantidad = (event, obj) => {

        const indexProducto = productos?.findIndex(producto => producto?.id == obj.id);
        console.log("indexProducto", indexProducto);
        const montoProducto = productos[indexProducto].precio_venta;
        console.log("montoProducto", montoProducto);

        const newCantidad = event.target.value;
        const indexProductVenta = listVentaProducto?.findIndex(producto => producto?.id == obj.id);

        const newListVenta = [...listVentaProducto];
        newListVenta[indexProductVenta].cantidad = parseInt(newCantidad);
        newListVenta[indexProductVenta].monto = parseFloat(montoProducto) * newCantidad;

        setlistVentaProducto(newListVenta);

    }

    const enviarVenta = () => {
        console.log("listVentaProducto", listVentaProducto);

        ventasPost({ productos: listVentaProducto });

    }

    return (
        ventas?.modalAddVenta && (
            <>
                <Modal close={closeModalVenta} title={"Registrar Venta"} >

                    <div style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}>

                        <div style={{ display: "flex", gap: "1rem" }}>
                            <div>
                                <input
                                    value={productoSelect}
                                    onChange={(event) => { handleDataList(event) }}
                                    className="inp_form" list="fruits" id="fruit" name="fruit" placeholder="Seleccione producto..." />
                                <datalist id="fruits">

                                    {productos.map((obj, i) => (
                                        <option key={i} value={obj?.producto} />
                                    ))}
                                </datalist>
                            </div>
                            <button className="btn_"
                                style={{ display: "flex", gap: ".5rem" }}
                                onClick={() => { addProductoVenta() }}
                            >
                                <FontAwesomeIcon icon={faCartPlus} />
                                <p>Producto</p>
                            </button>
                        </div>

                        <div className="" style={{ overflowX: "auto" }}>
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

                                    {listVentaProducto?.map((obj, i) => (
                                        <tr key={i}>
                                            <td> {i + 1} </td>
                                            <td> {obj?.name} </td>
                                            <td>
                                                <input className="inp_form" onChange={(event) => { changeCantidad(event, obj) }} min="1" defaultValue={obj?.cantidad} style={{ width: "5rem" }} type="number" />
                                            </td>
                                            <td>
                                                {obj?.monto}
                                                {/* <input className="inp_form" step="0.01" min="1" defaultValue={obj?.monto} style={{ width: "5rem" }} type="number" /> */}
                                            </td>
                                        </tr>
                                    ))}



                                    {listVentaProducto.length == 0 &&
                                        <tr >
                                            <td colSpan={4} > Seleccione producto </td>
                                        </tr>
                                    }
                                    {listVentaProducto.length > 0 &&
                                        <tr >
                                            <td colSpan={2} > Total </td>
                                            <td style={{ fontWeight: "700" }}> {listVentaProducto?.reduce((acc, producto) => acc + producto.cantidad, 0)} </td>
                                            <td style={{ fontWeight: "700" }}  > {listVentaProducto?.reduce((acc, producto) => acc + producto.monto, 0)} </td>
                                        </tr>
                                    }
                                </tbody>
                            </table>


                        </div>


                    </div>

                    <div style={{ background: "#edf2f9", borderRadius: "0 0 .5rem .5rem", padding: ".5rem", display: "flex", justifyContent: "end" }}>

                        <button className="btn_show_modal"
                            onClick={() => { enviarVenta() }}
                        >
                            <FontAwesomeIcon icon={faCheck} />
                        </button>

                    </div>


                </Modal>
            </>
        )
    )
}
