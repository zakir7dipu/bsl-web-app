import React, {useEffect} from 'react';
import '../../frontend-assets/css/main.css';
import Header from "../frontend/components/Header/index.jsx";
import {Outlet} from "react-router-dom"
import Footer from "../frontend/components/Footer/index.jsx";
import ScrollUp from "../frontend/components/ScrollUp/index.jsx";
import "./Frontend.css"
import {useDispatch, useSelector} from "react-redux";
import {humburgerNavAction} from "../featurs/NavAction/NavSlice.js";
import VideoModule from "../frontend/components/VideoModule/index.jsx";

function Frontend(props) {
    const {videoModuleShow} = useSelector(state => state.navAction)
    const dispatch = useDispatch()
    useEffect(() => {
        const body = document.querySelector("body")
        body.className = "defult-home pointer-wrap"
        if (!document.querySelector(".offwrap")) {
            let newChild = document.createElement("div")
            newChild.classList.add("offwrap")
            const firstChild = body.firstChild;
            body.insertBefore(newChild, firstChild)
            newChild.addEventListener("click", (e)=>{
                e.preventDefault()
                dispatch(humburgerNavAction())
            })
        }
    }, [])

    return (
        <>
            {videoModuleShow && <VideoModule/>}
            <div className="main-content">
                <Header/>
                <Outlet/>
                <Footer/>
                {/*<ScrollUp/>*/}
            </div>
        </>
    );
}

export default Frontend;
