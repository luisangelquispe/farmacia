
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

import { useNavigate } from 'react-router-dom';

export const ItemMenu = ({ path, icon, title, sub }) => {

    const navigate = useNavigate();

    const [desploy, setdesploy] = useState(false)

    const action = (path) => {
        if (path) {
            navigate(path)
        } else {
            setdesploy(!desploy);
        }
    }
    return (
        <>

            <ul className="menu_items">
                <li className="item_menu" onClick={() => { action(path) }} style={{ display: "flex", gap: ".6rem", padding: "1rem" }}>
                    <i style={{ justifySelf: "center" }}>
                        <FontAwesomeIcon icon={icon} />
                    </i>
                    <span>{title} </span>

                    {!path &&
                        <button style={{ position: "absolute", right: "1rem" }} className="boton_invisible">
                            <FontAwesomeIcon icon={desploy ? faAngleDown : faAngleRight} />
                        </button>
                    }
                </li>

                {
                    desploy && sub?.map((obj, i) => (
                        <li key={i} className="item_menu" onClick={() => { navigate(obj?.path) }} style={{ display: "flex", gap: ".6rem", padding: "1rem 1rem 1rem 2rem" }}>
                            <i style={{ justifySelf: "center" }}>
                                <FontAwesomeIcon icon={icon} />
                            </i>
                            <span>{obj.title} </span>
                        </li>
                    ))
                }
            </ul>
        </>
    )
}
