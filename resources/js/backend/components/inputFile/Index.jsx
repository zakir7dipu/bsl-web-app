import React, {createRef, useEffect, useState} from 'react';
import style from "./Index.module.css";
import {Link} from "react-router-dom";
import {goToInternalLink} from "../../../lib/helper.js";
import {MdStar} from "react-icons/md";

function Index({label, id, file, handler, required}) {
    const [fileName, setFileName] = useState('')

    const inputFileRef = createRef();

    const onFileChangeCapture = (e) => {
        handler(inputFileRef.current.files);
    };

    const buttonOnClick = (e) => {
        e.preventDefault();
        inputFileRef.current.click();
    }

    useEffect(()=>{
        setFileName(file?.name || "")
    },[file])

    return (
        <>
            <label htmlFor={id}>{label} {required && <sup className="text-danger"><MdStar/></sup>} <small>{file ? (<Link to="#" onClick={(e) => {
                e.preventDefault();
                goToInternalLink(file)
            }} className={style.anchor}>See File</Link>) : ''}</small></label>
            <div className="row">
                <div className="col-6">
                    <input
                        type="text"
                        className={`${style.controller} form-file-show`}
                        placeholder="select file"
                        value={fileName}
                        readOnly={true}
                    />
                </div>
                <div className="col-6">
                    <button onClick={buttonOnClick} type="button" className={`${style.btn} form-file-cover`}>
                        upload
                    </button>
                    <input
                        type="file"
                        className={`form-file ${style.file}`}
                        id={id}
                        ref={inputFileRef}
                        onChangeCapture={onFileChangeCapture}
                    />
                </div>
            </div>
        </>
    );
}

export default Index;
