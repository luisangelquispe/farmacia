import React from 'react'
import { ChartBar } from './Components/Charts/ChartBar'
import { ChartCircle } from './Components/Charts/ChartCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faCashRegister, faMoneyBill, faUsersLine } from '@fortawesome/free-solid-svg-icons'

export const Tablero = () => {
    return (

        <>
            <div className="contend_seccion" style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>

                <div style={{ padding: "1rem", width: "100%", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                    <h2>Tablero</h2>
                </div>


                <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", flexGrow: "1", minWidth: "17rem", height: "6rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", color: "white", background: "#d74c4c", minWidth: "6rem", height: "100%", borderRadius: ".5rem 0rem 0rem .5rem" }}>
                            <FontAwesomeIcon style={{ width: "70%", height: "70%" }} icon={faMoneyBill} />
                        </div>
                        <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "start", padding: "1rem", gap: ".5rem" }}>
                            <strong>cantidad</strong>
                            <p>2</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexGrow: "1", minWidth: "17rem", height: "6rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: "#5caf47", minWidth: "6rem", height: "100%", borderRadius: ".5rem 0rem 0rem .5rem" }}>
                            <FontAwesomeIcon style={{ width: "70%", height: "70%" }} icon={faCashRegister} />
                        </div>
                        <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "start", padding: "1rem", gap: ".5rem" }}>
                            <strong>cantidad</strong>
                            <p>2</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexGrow: "1", minWidth: "17rem", height: "6rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: "#ffba00", minWidth: "6rem", height: "100%", borderRadius: ".5rem 0rem 0rem .5rem" }}>
                            <FontAwesomeIcon style={{ width: "70%", height: "70%" }} icon={faUsersLine} />
                        </div>
                        <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "start", padding: "1rem", gap: ".5rem" }}>
                            <strong>cantidad</strong>
                            <p>2</p>
                        </div>
                    </div>
                    <div style={{ display: "flex", flexGrow: "1", minWidth: "17rem", height: "6rem", background: "white", borderRadius: ".5rem", boxShadow: "#0000004d 0px 1px 7px -3px" }}>
                        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", color: "white", background: "#1cb3e2", minWidth: "6rem", height: "100%", borderRadius: ".5rem 0rem 0rem .5rem" }}>
                            <FontAwesomeIcon style={{ width: "70%", height: "70%" }} icon={faCartShopping} />
                        </div>
                        <div style={{ display: "flex", width: "100%", flexDirection: "column", justifyContent: "center", alignItems: "start", padding: "1rem", gap: ".5rem" }}>
                            <strong>cantidad</strong>
                            <p>2</p>
                        </div>
                    </div>
                </div>


                <div id='contenedor_grfica' style={{ display: "flex", width: "100%", height: "400px", flexWrap: "wrap", gap: "1rem" }}>
                    <div id='item_grafica' style={{ flex: 1, minWidth: "20rem" }}>
                        <ChartBar width="100%" height="100%" />
                    </div>
                    <div id='item_grafica2' style={{ flex: 1, minWidth: "20rem" }}>
                        <ChartCircle width="100%" height="100%" />


                    </div>
                </div>

            </div>
        </>

    )
}
