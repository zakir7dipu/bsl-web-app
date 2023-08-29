import React, {createRef, useState} from 'react';
import {useDispatch} from "react-redux";
import {warningMessage} from "../../../lib/helper.js";
import {changePasswordData} from "../../../featurs/AuthAction/AuthSlice.js";

function ResetPassword() {

    const [password, setPassword] = useState("")
    const passwordRef = createRef()
    const [confirmPassword, setConfirmPassword] = useState("")
    const confirmPasswordRef = createRef()

    const dispatch = useDispatch()

    const resetHandler = () => {
        setPassword('')
        setConfirmPassword('')
    }

    const fromController = (e) => {
        e.preventDefault()
        let formData = new FormData()

        if(!password) {
            let passwordEmail = 'Password field is required'
            warningMessage(passwordEmail)
            passwordRef.current.querySelector('code').innerText = passwordEmail
            passwordRef.current.focus()
        } else {
            passwordRef.current.querySelector('code').innerText = ""
            formData.append('password', password)
        }

        if(!confirmPassword) {
            let errorConfirmPassword = 'Confirm Password field is required'
            warningMessage(errorConfirmPassword)
            confirmPasswordRef.current.querySelector('code').innerText = errorConfirmPassword
            confirmPasswordRef.current.focus()
        } else {
            if (password===confirmPassword){
                confirmPasswordRef.current.querySelector('code').innerText = ""
                formData.append('confirm_password', confirmPassword)
            }else{
                let errorConfirmPassword = 'Password and Confirm Password is not match.'
                warningMessage(errorConfirmPassword)
                confirmPasswordRef.current.querySelector('code').innerText = errorConfirmPassword
                confirmPasswordRef.current.focus()
            }
        }

        if(confirmPassword && password) {
            dispatch(changePasswordData(formData))
            //resetHandler()
        }
    }

    return (
        <div className="card">
            <div className="card-header">
                <h4>Password Reset</h4>
            </div>
            <div className="card-body">
                <form onSubmit={fromController} className="form-profile">
                    <div ref={passwordRef} className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control"
                               placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                        <code></code>
                    </div>
                    <div ref={confirmPasswordRef} className="form-group">
                        <label>Confirm Password</label>
                        <input type="password" className="form-control"
                               placeholder="Password" value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)}/>
                        <code></code>
                    </div>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-primary px-3" type='submit'>Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ResetPassword;
