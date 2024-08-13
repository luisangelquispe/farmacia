import { faCircleNotch, faPenToSquare, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useAppSelector } from '../../../Redux/Hooks/UseStore';
import { usePaisDeOrigenActions } from './Hooks/UsePaisDeOrigenActions';

export const PaisDeOrigen = () => {

  const paisDeOrigen = useAppSelector((state) => state.paisDeOrigen);

  const { modalChange, paisesDeOrigenGet, modalChangeEditPaisDeOrigen , IdPaisDeOrigenEditChange } = usePaisDeOrigenActions();
  
  const editPaisDeOrigen = (id) => {
    modalChangeEditPaisDeOrigen();
    IdPaisDeOrigenEditChange(id)
  }

  useEffect(() => {
    paisesDeOrigenGet();
  }, [])
  return (
    <>
      <>
        <div className="contend_seccion" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

          <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
            <h2>Paises de Origen</h2>
          </div>



          <div style={{ padding: "1rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>

            <div style={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
              <button className="btn_"
                onClick={() => { modalChange() }}
                style={{ display: "flex", gap: "5px" }}
              >

                {paisDeOrigen?.loadAddMarca ?
                  <FontAwesomeIcon icon={faCircleNotch} spin /> :
                  <FontAwesomeIcon icon={faPlus} />
                }
                <p>Pais De Origen </p>
              </button>
            </div>
            <div className="table_desktop" style={{ overflowX: "auto" }}>
              <table>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Pais de Origen</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>

                  {paisDeOrigen?.paisesDeOrigen?.map((obj, i) => (
                    <tr key={i}>
                      <td> {i + 1} </td>
                      <td> {obj?.name} </td>
                      <td>
                        <button className="btn_edit_small"
                          onClick={() => { editPaisDeOrigen(obj?.id) }}
                        >
                          <FontAwesomeIcon icon={faPenToSquare}
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                  {paisDeOrigen?.paisesDeOrigen?.length == 0 &&
                    <tr>
                      <td colSpan={3} > Sin registros </td>
                    </tr>

                  }
                </tbody>
              </table>


            </div>

            <div className="table_mobile">
            

              {paisDeOrigen?.paisesDeOrigen?.map((obj, i) => (

                <div key={i} className="ssss">
                  <div className="colum_mobile">
                    <p>#</p>
                    <p>Pais de Origen</p>
                    <p>Acciones</p>

                  </div>
                  <div className="row_mobile">
                    <p> {i + 1} </p>
                    <p> {obj?.name} </p>
                    <p>
                      <button className="btn_edit_small"
                        onClick={() => { editPaisDeOrigen(obj?.id) }}
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
