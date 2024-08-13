
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

import { useNavigate } from 'react-router-dom';

export const ItemMenu = ({  path, icon, title }) => {


    const navigate = useNavigate();
    return (
        <>

            <ul className="menu_items">
                <li className="item_menu" onClick={() => { navigate(path) }} style={{ display: "grid", gap: ".5rem", gridTemplateColumns: "1fr 9fr", padding: "1rem" }}>
                    <i style={{ justifySelf: "center" }}>
                        <FontAwesomeIcon icon={icon} />
                    </i>
                    <span>{title} </span>
                </li>
            </ul>
        </>
    )
}
