import React from 'react'
import farma from "./farmacia.jpg"
import "./login.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import { INVENTARIO } from '../../Helpers/paths'
export const Login = () => {
  const navigate = useNavigate();
  const irMainLayout = () => { navigate(INVENTARIO) }
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", padding: "0rem 2rem 0rem 2rem", background: "#edf2f9", overflow: "hidden" }}>
      <div className="fadeLogin" style={{ width: "min(100%, 25rem)", display: "flex", flexDirection: "column", boxShadow: "0 30px 60px 0 #0000004d", borderRadius: ".5rem", background: "white" }}>
        <img src={farma} alt="farmacia" style={{ borderRadius: ".5rem .5rem 0 0" }} />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <form className="" onSubmit={irMainLayout} style={{ display: "flex", flexDirection: "column", padding: "2rem 1rem 2rem 1rem", borderRadius: "0 0 .5rem .5rem", gap: ".8rem", alignItems: "center", width: "min(16rem, 100%)" }} >
            <label htmlFor="inputName" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }}>
              <FontAwesomeIcon icon={faUser} style={{ position: "absolute", zIndex: "1", padding: "0 0 0 1rem" }} />
              <input required id="inputName" className='inp' type="text" name="user" placeholder='Usuario' style={{ width: "100%" }} />
            </label>
            <label htmlFor="inputPassword" style={{ display: "flex", alignItems: "center", gap: "1rem", width: "100%", color: "#5e6e82" }} >
              <FontAwesomeIcon icon={faLock} style={{ position: "absolute", zIndex: "1", padding: "0 0 0 1rem" }} />
              <input required id="inputPassword" className='inp' type="password" name="password" placeholder='Contraseña' style={{ width: "100%" }} />
            </label>
            <button className='btn' type="submit" style={{ width: "100%" }}>
              <p>{"Ingresar"}</p>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
