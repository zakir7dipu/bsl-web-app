import React, {useEffect, useState} from 'react';
import {errorMessage, infoMessage, uid, warningMessage} from "../../../../lib/helper.js";
import {createServiceData, fetchParentServices} from "../../../../featurs/Service/ServiceSlice.js";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {MdStar} from "react-icons/md";
import FileInput from "../../../components/inputFile/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

function Create(props) {

    const {
        isLoading,
        parentServices,
        errorMess
    } = useSelector((state) => state.serviceReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [parentName, setParentName] = useState("");
    const [brief, setBrief] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [meta_title, setMetaTitle] = useState("");
    const [meta_keywords, setMetaKeywords] = useState("");
    const [meta_description, setMetaDescription] = useState("");
    const [image_link, setImageFile] = useState("");

    const inputFileHandler = (file) => {
        setImageFile(file[0])
    }

    const resetHandler = () => {
        setName("");
        setParentName("");
        setBrief("");
        setDescription("");
        setType("");
        setMetaTitle("");
        setMetaKeywords("");
        setMetaDescription("");
        setImageFile("");
    }

    const navGoBack = () => {
        navigate(-1)
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!name) {
            warningMessage("Name is required.")
        } else {
            formData.append("title", name);
        }

        if (parentName) {
            formData.append("parent_id", parentName);
        }

        if (brief) {
            formData.append("brief", brief);
        }

        if (type) {
            formData.append("type", type);
        }

        if (!description) {
            warningMessage("Description is required.")
        } else {
            formData.append("description", description);
        }

        if (!meta_title) {
            warningMessage("Meta Title is required.")
        } else {
            formData.append("meta_title", meta_title);
        }

        if (!meta_keywords) {
            warningMessage("Meta Keywords is required.")
        } else {
            formData.append("meta_keywords", meta_keywords);
        }

        if (!meta_description) {
            warningMessage("Meta Description is required.")
        } else {
            formData.append("meta_description", meta_description);
        }

        if (!image_link) {
            warningMessage("Image is required.")
        } else {
            formData.append("image_link", image_link);
        }

        if (name && description && meta_title && meta_keywords && meta_description && image_link) {
            infoMessage("Please wait a while, We are processing your request.");
            dispatch(createServiceData(formData))
            resetHandler();
            navGoBack();
        }

    }

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Services",
            url: "/bsl/admin/services"
        },
        {
            name: "Service Create",
            url: null
        }
    ];

    useEffect(() => {
        dispatch(fetchParentServices(0));
    }, [dispatch]);

    return (
        <>
            <HeaderMeta
                title="Service Create"
                url="/bsl/admin/services/create"
            />
            <Breadcrumb list={breadcrumb}/>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Service Create</h4>
                            </div>
                            <div className="card-body">
                                <form className="form-profile" onSubmit={requestHandler}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Select Parent Services <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <select className="form-control" name="parent_id" value={parentName}
                                                        onChange={event => setParentName(event.target.value)}>
                                                    <option value={null}>-- Select One--</option>

                                                    {parentServices && Array.from(parentServices).map(model => {
                                                        return (
                                                            <option key={uid()} value={model?.id}>{model?.title}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Title <sup className="text-danger"><MdStar/></sup></label>
                                                <input
                                                    type={`text`}
                                                    className={`form-control`}
                                                    value={name}
                                                    onChange={e => setName(e.target.value)}
                                                    placeholder={`Services Name`}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Content Type <sup className="text-danger"><MdStar/></sup></label>
                                                <select className="form-control" name="type" value={type}
                                                        onChange={event => setType(event.target.value)}>
                                                    <option value={null}>--Select One--</option>
                                                    <option value="product">Product</option>
                                                    <option value="content">Content</option>
                                                    <option value="training">Training</option>
                                                </select>
                                            </div>
                                        </div>

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <FileInput
                                                    label={"Service Image"}
                                                    file={image_link}
                                                    id={`siteLogo`}
                                                    handler={inputFileHandler}
                                                    required={`required`}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Short Brief </label>
                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={brief}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setBrief(data)
                                                    }}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Description <sup
                                                    className="text-danger"><MdStar/></sup></label>
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

                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Meta Title <sup className="text-danger"><MdStar/></sup></label>
                                                <input
                                                    type={`text`}
                                                    className={`form-control`}
                                                    value={meta_title}
                                                    onChange={e => setMetaTitle(e.target.value)}
                                                    placeholder={`Meta Title`}
                                                />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Meta Keywords <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <textarea
                                                    className="form-control"
                                                    name="textarea"
                                                    id="textarea" cols="30"
                                                    rows="2"
                                                    placeholder="Meta Keywords"
                                                    value={meta_keywords}
                                                    onChange={e => setMetaKeywords(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12">
                                            <div className="form-group">
                                                <label>Meta Description <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <textarea
                                                    className="form-control"
                                                    name="textarea"
                                                    id="textarea" cols="30"
                                                    rows="2"
                                                    placeholder="Meta Description"
                                                    value={meta_description}
                                                    onChange={e => setMetaDescription(e.target.value)}
                                                />
                                            </div>
                                        </div>

                                        <div className="col-md-12 card-footer">
                                            <button className="btn btn-primary px-3 float-right"
                                                    type={"submit"}>Save
                                            </button>
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
}

export default Create;
