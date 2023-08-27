import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from 'react-router-dom';
import NavHeader from "../components/NavHeader";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import AuthUser from "../../model/authUser.js";
import {checkAccess} from "../../featurs/AuthAction/AuthSlice.js";
import {mainPath} from "../../lib/helper.js";

function Index(props) {
    const {isOpenBackendSideNav} = useSelector(state => state.menuAction)
    const {isAuthLoading, user, isAccess, errorMessage} = useSelector(state => state.authUser);
    const dispatch = useDispatch()
    const auth = new AuthUser();
    const navigate = useNavigate();
    const [authorise, setAuthorise] = useState(false);
    const [isLoading, setLoading] = useState(isAuthLoading);

    useEffect(() => {
        if (!auth.getAuthorisation()) {
            // navigate('/bsl/login')
            window.location.href = `${mainPath}/bsl/login`
        }
        dispatch(checkAccess())
    });

    useEffect(() => {
        //dispatch(refreshLoginData())
    }, []);

    return (
        <div id="main-wrapper" className={`show ${!isOpenBackendSideNav && 'menu-toggle'}`}>
            <NavHeader/>
            <Header/>
            <Sidebar/>
            <div className="content-body" style={{height:'90vh', overflow: "hidden"}}>
                <div className="container-fluid mt-3">
                    <Outlet/>
                </div>
            </div>
            <Footer/>
        </div>
    );
}

export default Index;
