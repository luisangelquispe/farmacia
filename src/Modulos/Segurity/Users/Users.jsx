import { faPenToSquare, faPlus, faUserLock, faUserSlash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useAppSelector } from '../../../Redux/Hooks/UseStore';

export const Users = () => {

  const users = useAppSelector((state) => state.users);
  return (
    <div className="contend_seccion" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

      <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
        <h2>Usuarios</h2>
      </div>
      <div style={{ padding: "1rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>

        <div style={{ display: "flex", justifyContent: "end", padding: "1rem" }}>
          <button className="btn_"
            onClick={() => { modalChange() }}
            style={{ display: "flex", gap: "5px" }}
          >

            <FontAwesomeIcon icon={faPlus} />
            <p>Usuario </p>
          </button>
        </div>
        <div className="table_desktop" style={{ overflowX: "auto" }}>
          <table>
            <thead>
              <tr>
                <th>Usuario</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>telefono</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>

              {users?.users?.map((obj, i) => (
                <tr key={i}>
                  <td> {obj?.nameUser} </td>
                  <td> {obj?.name} </td>
                  <td> {obj?.lastname} </td>
                  <td> {obj?.telefono} </td>
                  <td style={{display:"flex", justifyContent:"center", gap:"5px"}}>
                    <button className="btn_edit_small">
                      <FontAwesomeIcon icon={faPenToSquare} />
                    </button>
                    <button className="btn_edit_small">
                      <FontAwesomeIcon icon={faUserLock} />
                    </button>
                    <button className="btn_edit_small">
                      <FontAwesomeIcon icon={faUserSlash} />
                    </button>
                  </td>
                </tr>
              ))}
              {users?.users?.length == 0 &&
                <tr>
                  <td colSpan={4} > Sin registros </td>
                </tr>

              }
            </tbody>
          </table>


        </div>

        <div className="table_mobile">


          {users?.users?.map((obj, i) => (

            <div key={i} className="ssss">
              <div className="colum_mobile">
                <p>Usuario</p>
                <p>Nombre</p>
                <p>Apellido</p>
                <p>telefono</p>
                <p>Acciones</p>
              </div>
              <div className="row_mobile">
                <p> {obj?.nameUser} </p>
                <p> {obj?.name} </p>
                <p> {obj?.lastname} </p>
                <p> {obj?.telefono} </p>
                <p style={{display:"flex", gap:"5px"}} >
                  <button className="btn_edit_small">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button className="btn_edit_small">
                    <FontAwesomeIcon icon={faUserLock} />
                  </button>
                  <button className="btn_edit_small">
                    <FontAwesomeIcon icon={faUserSlash} />
                  </button>
                </p>
              </div>
            </div>

          ))}


        </div>
      </div>

    </div>
  )
}
