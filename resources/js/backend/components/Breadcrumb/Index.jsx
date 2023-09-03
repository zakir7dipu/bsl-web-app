import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {TbArrowBack} from "react-icons/tb";
import {uid} from "../../../lib/helper.js";

function Index({list}) {
    const navigate = useNavigate();

    const navGoBack = () => {
        navigate(-1)
    }

    return (

            <div className="row page-titles mx-0 mb-3">
                <div className="col p-md-0">
                    <ol className="breadcrumb">
                        {list.map(item=>{
                            if(item.url) {
                                return (
                                    <li key={uid()} className={`breadcrumb-item`}>
                                        <Link to={item.url}>{item.name}</Link>
                                    </li>
                                )
                            } else {
                                return <li key={uid()} className={`breadcrumb-item active`}>{item.name}</li>
                            }
                        })}
                    </ol>
                    <button onClick={navGoBack} className={`btn btn-danger btn-sm`}><TbArrowBack/> &nbsp; Go Back
                    </button>
                </div>
            </div>

    );
}

export default Index;
