import React, {createRef, useEffect} from 'react';
import {PiDotsThreeOutlineVerticalBold} from "react-icons/pi";
import {uid} from "../lib/helper.js";

function RowDropDown({children}) {
    const groupRef = createRef()
    const dropDownRef = createRef()
    const handelDropdownMenu = () => {
        let allBtnGroup =document.querySelectorAll('.btn-group')
        Array.from(allBtnGroup).map(item=>{
            if(item.id !== groupRef.current.id) {
                item.classList.remove('show')
                item.querySelector('.dropdown-menu').classList.remove('show')
            }
        })
        groupRef.current.classList.toggle("show")
        dropDownRef.current.classList.toggle("show")
    }

    return (
        <div id={uid()} ref={groupRef} role="group" className="btn-group">
            <button data-toggle="dropdown" className="btn btn-primary dropdown-toggle" type="button" onClick={handelDropdownMenu}><PiDotsThreeOutlineVerticalBold/></button>
            <div ref={dropDownRef} className="dropdown-menu">
                {children}
            </div>
        </div>
    );
}

export default RowDropDown;

