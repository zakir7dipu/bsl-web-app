import React, {createRef, useEffect, useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import bizzLogo from '../../../image/bizz-logo.png'
import {useDispatch, useSelector} from "react-redux";
import {mainPath, warningMessage} from "../../lib/helper.js";
import {fetchLogin} from "../../featurs/AuthAction/AuthSlice.js";
import AuthUser from "../../model/authUser.js";
import HeaderMeta from "../../ui/HeaderMeta.jsx";

function Login(props) {
    const {isAccess} = useSelector(state => state.authUser)
    const auth = new AuthUser();
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const emailRef = createRef()
    const [password, setPassword] = useState("")
    const passwordRef = createRef()
    const dispatch = useDispatch()

    const fromController = (e) => {
        e.preventDefault()
        let formData = new FormData()
        if(!email) {
            let errorEmail = 'Email field is required'
            warningMessage(errorEmail)
            emailRef.current.querySelector('code').innerText = errorEmail
            emailRef.current.focus()
        } else {
            emailRef.current.querySelector('code').innerText = ""
            formData.append('email', email)
        }

        if(!password) {
            let passwordEmail = 'Password field is required'
            warningMessage(passwordEmail)
            passwordRef.current.querySelector('code').innerText = passwordEmail
            passwordRef.current.focus()
        } else {
            passwordRef.current.querySelector('code').innerText = ""
            formData.append('password', password)
        }

        if(email && password) {
            dispatch(fetchLogin(formData))
        }
    }

    useEffect(() => {
        if (auth.getAuthorisation()) {
            // navigate('/bsl/admin')
            window.location.href = `${mainPath}/bsl/admin`
        }
        // dispatch(checkAccess())
    });

    return (
        <>
            <HeaderMeta
                title="Login"
                url="/bsl/login"
            />
            <div style={{height: '100vh'}}>
                <div className="h-100">
                    <div className="login-form-bg h-100" style={{background:'#1e9b9b'}}>
                        <div className="container h-100">
                            <div className="row justify-content-center h-100">
                                <div className="col-xl-6">
                                    <div className="form-input-content">
                                        <div className="card login-form mb-0">
                                            <div className="card-body pt-5">
                                                <Link className="text-center d-flex justify-content-center" to="/">
                                                    <img style={{width:'120px'}} src={bizzLogo} alt=""/>
                                                </Link>

                                                <form className="mt-5 mb-5 login-input" onSubmit={fromController}>
                                                    <div ref={emailRef} className="form-group">
                                                        <input type="email" className="form-control" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)}/>
                                                        <code></code>
                                                    </div>
                                                    <div ref={passwordRef} className="form-group">
                                                        <input type="password" className="form-control"
                                                               placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                                                        <code></code>
                                                    </div>
                                                    <button type='submit' className="btn login-form__btn submit w-100">Sign In</button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
