import React, {createRef, useEffect} from 'react';
import Style from "./ScrollUp.module.css"
import {RiArrowUpSLine} from "react-icons/ri";

function Index(props) {
    const totop = createRef()

    useEffect(()=>{
        window.addEventListener('scroll', (e)=>{
            if(window.pageYOffset > 100) {
                totop.current.style = 'display: block;'
            } else {
                totop.current.removeAttribute('style')
            }
        })

    },[window.pageYOffset])

    return (
        <div ref={totop} className={Style.scrollUp} onClick={e=>{
            e.preventDefault();
            window.scrollTo({top: 0, behavior: 'smooth'});
        }}>
            <RiArrowUpSLine className={Style.icon}/>
        </div>
    );
}

export default Index;
