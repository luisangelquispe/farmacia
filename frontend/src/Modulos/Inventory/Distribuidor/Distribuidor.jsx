import { faCircleNotch, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../../Redux/Hooks/UseStore';
import { useDistribuidorActions } from './Hooks/UseDistribuidorActions';

export const Distribuidor = () => {

  const distribuidor = useAppSelector((state) => state.distribuidor);

  const { modalChange, distribuidorGet, modalChangeEditDistribuidor , IdDistribuidorEditChange } = useDistribuidorActions();

  const editDistribuidor = (id) => {
    modalChangeEditDistribuidor();
    IdDistribuidorEditChange(id)
  }

  useEffect(() => {
    distribuidorGet();
  }, [])
  return (
    <>
      <>
        <div className="contend_seccion" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
            <h2>Distribuidores</h2>
          </div>



          <div style={{ padding: "1rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>

            <div style={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
              <button className="btn_"
                onClick={() => { modalChange() }}
                style={{ display: "flex", gap: "5px" }}
              >

                {distribuidor?.loadAddDistribuidor ?
                  <FontAwesomeIcon icon={faCircleNotch} spin /> :
                  <FontAwesomeIcon icon={faPlus} />
                }
                <p>Distribuidor </p>
              </button>
            </div>
            <div className="table_desktop" style={{ overflowX: "auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Distribuidor</th>
                    <th>Telefono</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>

                  {distribuidor?.distribuidores?.map((obj, i) => (
                    <tr key={i}>
                      <td> {i + 1} </td>
                      <td> {obj?.name} </td>
                      <td> {obj?.phone} </td>
                      <td>
                        <button className="btn_edit_small"
                          onClick={() => { editDistribuidor(obj?.id) }}
                        >
                          <FontAwesomeIcon icon={faPenToSquare}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {distribuidor?.distribuidores?.length == 0 &&
                    <tr>
                      <td colSpan={3} > Sin registros </td>
                    </tr>

                  }
                </tbody>
              </table>


            </div>

            <div className="table_mobile">


              {distribuidor?.distribuidores?.map((obj, i) => (

                <div key={i} className="ssss">
                  <div className="colum_mobile">
                    <p>#</p>
                    <p>Distribuidor</p>
                    <p>Telefono</p>
                    <p>Acciones</p>

                  </div>
                  <div className="row_mobile">
                    <p> {i + 1} </p>
                    <p> {obj?.name} </p>
                    <p> {obj?.phone} </p>
                    <p>
                      <button className="btn_edit_small"
                        onClick={() => { editDistribuidor(obj?.id) }}
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
    </>
  )
}
