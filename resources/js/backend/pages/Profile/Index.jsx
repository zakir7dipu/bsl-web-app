import React, {useEffect, useState} from 'react';
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {useDispatch, useSelector} from "react-redux";
import {getAuthUser} from "../../../featurs/AuthAction/AuthSlice.js";
import Preloader from "../../components/Preloader/Index.jsx";
import MainProfile from "./MainProfile.jsx";
import About from "./About.jsx";
import ResetPassword from "./ResetPassword.jsx";

function Index() {
    const {isAuthLoading, user, token, isAccess, errorMessage} = useSelector(state => state.authUser);

    const dispatch = useDispatch()
    const [isLoading, setLoading] = useState(isAuthLoading);

    const checkLoading = (status) => {
        setTimeout(() => setLoading(status), 500);
    }
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Profile",
            url: null
        }
    ]

    useEffect(() => {
        dispatch(getAuthUser())
    }, [])

    return (
        <>
            {isLoading && <Preloader/>}
            {!isLoading &&
                <>
                    <Breadcrumb list={breadcrumb}/>
                    <div className="container-fluid">
                        <div className="row">
                            <MainProfile user={user}/>
                            <div className="col-lg-7 col-xl-8">
                                <About/>
                                <ResetPassword/>
                            </div>
                        </div>
                    </div>
                </>
            }
        </>
    );
}

export default Index;
