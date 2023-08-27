import React from 'react';
import {useDispatch} from "react-redux";
import {backendSideNaAction} from "../../../featurs/MenuAction/MenuSlice.js";

function NavControl(props) {
    const dispatch = useDispatch()
    const SideMenuAction = () => {
        dispatch(backendSideNaAction())
    }
    return (
        <div className="nav-control">
            <div className="hamburger" onClick={SideMenuAction}>
                <span className="toggle-icon"><i className="icon-menu"></i></span>
            </div>
        </div>
    );
}

export default NavControl;
