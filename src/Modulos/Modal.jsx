import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Modal = ({ children, close, title }) => {
    return (
        <>
            <div className="modal fade" >
                <div style={{ background: "white", borderRadius: ".5rem" , width: "min(30rem,100%)"}}>
                    <div style={{ background: "#12a9df", color: "white", borderRadius: ".5rem .5rem 0 0", padding: ".8rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <p> {title} </p>
                        <button
                            className="btn_close_modal"
                            onClick={() => { close() }}
                            style={{}}>
                            <FontAwesomeIcon icon={faXmark} />

                        </button>

                    </div>
                    <div>
                    
                        {children}

                    </div>



                </div>
            </div>
        </>
    )
}
