import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";

function Errors({code, errorMessage}) {
    const [currentYear, setCurrentYear] = useState("")
    useEffect(()=>{
        let date = new Date()
        let year = date.getFullYear()
        setCurrentYear(year);
    },[])
    return (
        <div style={{height:'100vh'}}>
            <div className="login-form-bg h-100">
                <div className="container h-100">
                    <div className="row justify-content-center h-100">
                        <div className="col-xl-6">
                            <div className="error-content">
                                <div className="card mb-0">
                                    <div className="card-body text-center pt-5">
                                        <h1 className="error-text text-primary">{!code ? '404':code}</h1>
                                        <h4 className="mt-4"><i className="fa fa-thumbs-down text-danger"></i> Bad
                                            Request</h4>
                                        <p>{!errorMessage ? 'Page is not available.':''}</p>
                                        <form className="mt-5 mb-5">

                                            <div className="text-center mb-4 mt-4"><Link to="/"
                                                                                      className="btn btn-primary">Go to
                                                Homepage</Link>
                                            </div>
                                        </form>
                                        <div className="text-center">
                                            <p>Copyright © Designed & Developed by <Link
                                                to="/">Bizz Solutions Plc</Link>,  {currentYear}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Errors;
