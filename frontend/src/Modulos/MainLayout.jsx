import React, { useState } from 'react'
import './menu.css'
import { faBars, faChevronDown, faChevronUp, faList, faPenToSquare, faRightToBracket, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboard } from '@fortawesome/free-regular-svg-icons'
import { faTruckFast } from '@fortawesome/free-solid-svg-icons/faTruckFast'
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile'
import { faGear } from '@fortawesome/free-solid-svg-icons/faGear'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'
import { faXmark } from '@fortawesome/free-solid-svg-icons/faXmark'
import { Outlet, useNavigate } from 'react-router-dom'
import { ItemMenu } from './ItemMenu'
import { ItemMenuList } from '../Helpers/itemMenu'
import { Modals } from './Modals'
import { LOGIN, USERS } from '../Helpers/paths'
import { toast } from "sonner";
import { useLoginActions } from './Login/Hooks/UseLoginActions'


export const MainLayout = () => {

    const [modal, setmodal] = useState(true);
    const [contendCfgActive, setcontendCfgActive] = useState(false);
    const navigate = useNavigate();

    const { logout_, logout_redirect } = useLoginActions();

    const log_out = () => {
        logout_();
    }



    const toggleMenu = () => {
        let menu = document.getElementById('responsive_menu');
        menu.classList.toggle('active_menu');

        let containerShadow = document.getElementById('shadow_container');
        containerShadow.classList.toggle('active_ahdow');

        let menuItems = document.querySelectorAll('.menu_items');
        menuItems.forEach(item => item.classList.toggle('show'));

    }
    // cerrar sesion    
    const irUsers = () => {
        navigate(USERS)
    }

    logout_redirect();

    return (
        <>
            <div style={{ width: "100vw", height: "100vh", display: "flex", flexDirection: "column" }} onClick={() => (contendCfgActive && setcontendCfgActive(false))} >

                <div style={{ zIndex: "4", background: "#12a9df", width: "100%", height: "3rem", display: "flex", alignItems: "center", position: "fixed", boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 5px 0px" }}>

                    <FontAwesomeIcon icon={faBars} style={{ padding: "1rem", cursor: "pointer", display: "none" }} id='icon_bars' onClick={toggleMenu} />

                    <button
                        className="btn_two"
                        style={{ cursor: "pointer", display: "flex", gap: "5px", position: "absolute", right: "30px" }}
                        onClick={() => (setcontendCfgActive(!contendCfgActive)
                        )}
                    >
                        <FontAwesomeIcon icon={faGear} />
                        <FontAwesomeIcon icon={contendCfgActive ? faChevronDown : faChevronUp} />
                        {/* <FontAwesomeIcon icon={faChevronDown} /> */}
                    </button>
                </div>

                <div style={{ width: "100%", height: "100%", display: "flex", background: "#edf2f9", overflow: "hidden", padding: "3rem 0rem 0rem 0rem" }}>
                    <div id='responsive_menu' style={{ zIndex: "3", background: "#edf2f9", width: "15rem", height: "100%", boxShadow: "#0000004d 0px 1px 7px 0px", position: "fixed" }}>
                        <div >

                            {ItemMenuList.map((obj, i) => (


                                <ItemMenu
                                    key={i}
                                    path={obj.path}
                                    icon={obj.icon}
                                    title={obj.title}
                                />

                            ))}

                        </div>
                    </div>

                    <div id="container_menu" style={{ zIndex: "1", width: "100%", height: "100%", padding: "2rem 2rem 2rem 17rem", overflowY: "auto" }}>


                        {/* <Inventariwo /> */}
                        <Outlet />



                    </div>

                </div>
                <div id='shadow_container' style={{ zIndex: "2", width: "100%", height: "100vh", position: "absolute", background: "#00000045", opacity: "0", transition: "opacity 0.2s", display: "none", overflow: "hidden" }}></div>

                {contendCfgActive &&
                    (

                        <div className="contend_cfg">
                            <div className="itemCfg" style={{ display: "flex", gap: "10px" }}
                                onClick={() => { irUsers() }}
                            >
                                <FontAwesomeIcon icon={faPenToSquare} />
                                <p style={{ fontSize: "12px" }}>Users</p>
                            </div>

                            <div className="itemCfg" style={{ display: "flex", gap: "10px" }}
                                onClick={() => { log_out() }}
                            >
                                <FontAwesomeIcon icon={faRightToBracket} />
                                <p style={{ fontSize: "12px" }}>Cerrar sesion</p>
                            </div>
                        </div>

                    )}
            </div>



            <Modals />

        </>
    )
}
