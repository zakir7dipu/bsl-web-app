import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {createAboutData, fetchAboutUs, updateAboutData} from "../../../featurs/AboutUs/AboutUsSlice.js";
import BizAlert from "../../../lib/BizAlert.js";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import Preloader from "../../components/Preloader/Index.jsx";
import {infoMessage, warningMessage} from "../../../lib/helper.js";
import FileInput from "../../components/inputFile/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {MdStar} from "react-icons/md";

function Index(props) {

    const {isLoading, abouts, errorMess, metaInfo,} = useSelector((state) => state.aboutsReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Abouts",
            url: null
        }
    ];

    const [selectedAbout, setSelectedAbout] = useState("");
    const [isEdit, setIsEdit] = useState(false);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [btn_text, setBtnText] = useState("");
    const [btn_url, setBtnUrl] = useState("");

    const [imageFile, setImageFile] = useState("");

    const inputFileHandler = (file) => {
        setImageFile(file[0])
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!title) {
            warningMessage("Title is required.")
        } else {
            formData.append("title", title);
        }

        if (!description) {
            warningMessage("Description is required.")
        } else {
            formData.append("description", description);
        }

        if (!btn_text) {
            warningMessage("Btn text required.")
        } else {
            formData.append("btn_text", btn_text);
        }

        if (btn_url) {
            formData.append("btn_url", btn_url);
        }

        if (imageFile) {
            formData.append("image", imageFile);
        }

        formData.append("type", 'general');

        if (title && description) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createAboutData(formData))
            } else {
                let data = {
                    dataset: formData,
                    slug: selectedAbout
                }
                dispatch(updateAboutData(data))
            }
        }
    }

    useEffect(() => {
        if (Object.keys(abouts).length) {
            setTitle(abouts?.title || '');
            setDescription(abouts?.description || '');
            setBtnText(abouts?.btn_text || '');
            setBtnUrl(abouts?.btn_url || '');
            setSelectedAbout(abouts?.slug);
            setIsEdit(true)
        }
    }, [abouts]);

    useEffect(() => {
        dispatch(fetchAboutUs());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Abouts"
                    url="/bsl/admin/abouts"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Abouts</h4>
                                </div>
                                <div className="card-body">
                                    <form className="form-profile" onSubmit={requestHandler}>
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Title <sup className="text-danger"><MdStar/></sup></label>
                                                    <input
                                                        type={`text`}
                                                        className={`form-control`}
                                                        value={title}
                                                        onChange={e => setTitle(e.target.value)}
                                                        placeholder={`Website Name`}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Btn Text</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        value={btn_text}
                                                        onChange={e => setBtnText(e.target.value)}
                                                        placeholder="Btn Text"
                                                    />
                                                </div>
                                            </div>


                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <FileInput
                                                        label={"About Image"}
                                                        file={imageFile}
                                                        id={`siteLogo`}
                                                        handler={inputFileHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>About Description <sup className="text-danger"><MdStar/></sup></label>
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        data={description}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            setDescription(data)
                                                        }}

                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="d-flex align-items-center">
                                                    <button className="btn btn-primary px-3 float-right"
                                                            type={"submit"}>Save
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    } else {
        return <Preloader/>
    }

}

export default Index;
