import React, { useEffect } from 'react'

import { useAppSelector } from '../../../Redux/Hooks/UseStore';
import { faCircleNotch, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCategoriaActions } from './Hooks/UseCategoriaActions';


export const Categorias = () => {

    const categoria = useAppSelector((state) => state.categoria);

    const { modalChange, categoriasGet, modalChangeEditCategoria, IdCategoriaEditChange } = useCategoriaActions();


    const editCategoria = (id) => {
        modalChangeEditCategoria();
        IdCategoriaEditChange(id)

    }

    useEffect(() => {
        categoriasGet();
    }, [])

    return (
        <>
            <div className="contend_seccion" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                    <h2>Categorias</h2>
                </div>



                <div style={{ padding: "1rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>

                    <div style={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
                        <button className="btn_"
                            onClick={() => { modalChange() }}
                            style={{ display: "flex", gap: "5px" }}
                        >

                            {categoria?.loadAddCategoria ?
                                <FontAwesomeIcon icon={faCircleNotch} spin /> :
                                <FontAwesomeIcon icon={faPlus} />
                            }
                            <p>Categoria </p>
                        </button>
                    </div>
                    <div className="table_desktop" style={{ overflowX: "auto" }}>
                        <table>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Categoria</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>

                                {categoria?.categorias?.map((obj, i) => (
                                    <tr key={i}>
                                        <td> {i + 1} </td>
                                        <td> {obj?.name} </td>
                                        <td>
                                            <button className="btn_edit_small"
                                                onClick={() => { editCategoria(obj?.id) }}
                                            >
                                                <FontAwesomeIcon icon={faPenToSquare}
                                                />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                {categoria?.categorias?.length == 0 &&
                                    <tr>
                                        <td colSpan={3} > Sin registros </td>
                                    </tr>

                                }
                            </tbody>
                        </table>


                    </div>

                    <div className="table_mobile">


                        {categoria?.categorias?.map((obj, i) => (

                            <div key={i} className="ssss">
                                <div className="colum_mobile">
                                    <p>#</p>
                                    <p>Categoria</p>
                                    <p>Acciones</p>

                                </div>
                                <div className="row_mobile">
                                    <p> {i+1} </p>
                                    <p> {obj?.name} </p>
                                    <p>
                                        <button className="btn_edit_small"
                                            onClick={() => { editCategoria(obj?.id) }}
                                        >
                                            <FontAwesomeIcon icon={faPenToSquare}
                                            />
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