import React, {createRef, useEffect} from 'react';
import style from "./Index.module.css";
import {Link} from "react-router-dom";
import {goToInternalLink} from "../../../lib/helper.js";

function Index({label, id, fileName, file, handler}) {

    const inputFileRef = createRef();

    const onFileChangeCapture = (e) => {
        handler(inputFileRef.current.files);
    };

    const buttonOnClick = (e) => {
        e.preventDefault();
        inputFileRef.current.click();
    }

    return (
        <>
            <label htmlFor={id}>{label}  <small>{fileName?(<Link to="#" onClick={(e)=>{
                e.preventDefault();
                goToInternalLink(fileName)
            }} className={style.anchor}>See File</Link>):''}</small></label>
            <div className="row">
                <div className="col-6">
                    <input type="text" className={`${style.controller} form-file-show`}
                           placeholder="select file" value={file ? file.name:" "} readOnly={true}/>
                </div>
                <div className="col-6">
                    <button onClick={buttonOnClick} type="button" className={`${style.btn} form-file-cover`}>
                        upload
                    </button>
                    <input type="file" className={`form-file ${style.file}`} id={id} ref={inputFileRef} onChangeCapture={onFileChangeCapture}/>
                </div>
            </div>
        </>
    );
}

export default Index;
