import React, {createRef} from 'react';
import {Link} from "react-router-dom";
import {rightHeaderAction} from "../../../featurs/MenuAction/MenuSlice.js";
import {useDispatch} from "react-redux";

function DropdownNav({icon, menuName, badgeStyle, children, newMessageCount, addClass}) {
    const dispatch = useDispatch();

    const dropDownMenuAction = (e,btnName) => {
        e.preventDefault()
        dispatch(rightHeaderAction(btnName))
    }

    return (
        <li className={`icons dropdown ${addClass}`} onClick={e=>dropDownMenuAction(e, addClass)}>
            <Link to="#" data-toggle="dropdown">
                {icon}
                <span className={`badge badge-pill ${badgeStyle}`}>{newMessageCount}</span>
            </Link>
            <div className="drop-down animated fadeIn dropdown-menu" x-placement="top-start" style={{position: 'absolute', willChange: 'transform', top: '0px', left: '0px', transform: 'translate3d(-81px, 5px, 0px)'}}>
                <div className="dropdown-content-heading d-flex justify-content-between">
                    <span className="">{newMessageCount} New {menuName}</span>
                    <Link to="#" className="d-inline-block">
                        <span className={`badge badge-pill ${badgeStyle}`}>{newMessageCount}</span>
                    </Link>
                </div>
                {children}
            </div>
        </li>
    );
}

export default DropdownNav;
