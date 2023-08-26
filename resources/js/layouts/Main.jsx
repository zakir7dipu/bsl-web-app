import React, {useEffect, useState} from 'react';
import {Route, Routes, useNavigate} from "react-router-dom";
import Home from "../frontend/pages/Home.jsx";
import Login from "../auth/pages/Login.jsx";

import Backend from "./Backend.jsx";
import Admin from "../backend/pages";
import Dashboard from "../backend/pages/Dashboard.jsx";
import Errors from "../auth/pages/Errors.jsx";
import {useDispatch, useSelector} from "react-redux";
import {refreshLoginData} from "../featurs/AuthAction/AuthSlice.js";
import AuthUser from "../model/authUser.js";

function Main(props) {

    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="bsl" element={<Backend/>}>
                <Route path="login" element={<Login/>}/>
                <Route path="admin" element={<Admin/>}>
                    <Route index element={<Dashboard/>}/>
                </Route>
            </Route>
            <Route path="*" element={<Errors/>}/>
        </Routes>
    );
}

export default Main;
