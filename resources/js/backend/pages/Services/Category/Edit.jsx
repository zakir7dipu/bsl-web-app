import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {infoMessage, uid, warningMessage} from "../../../../lib/helper.js";
import {editServiceData, fetchParentServices, updateServiceData} from "../../../../featurs/Service/ServiceSlice.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {MdStar} from "react-icons/md";
import FileInput from "../../../components/inputFile/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import Preloader from "../../../components/Preloader/Index.jsx";
import {
    ClassicEditor,
    AccessibilityHelp,
    Autoformat,
    Autosave,
    Bold,
    Essentials,
    FindAndReplace,
    FullPage,
    GeneralHtmlSupport,
    Heading,
    HtmlComment,
    HtmlEmbed,
    Italic,
    List,
    ListProperties,
    Mention,
    PageBreak,
    Paragraph,
    PasteFromOffice,
    SelectAll,
    ShowBlocks,
    SourceEditing,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    TodoList,
    Undo
} from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';

function Edit() {
    const editorConfig = {
        toolbar: {
            items: ['undo', 'redo', '|', 'sourceEditing', 'showBlocks', 'findAndReplace', 'selectAll', '|', 'heading', '|', 'bold', 'italic', '|', 'pageBreak', 'insertTable', 'htmlEmbed', '|', 'bulletedList', 'numberedList', 'multiLevelList', 'todoList', '|', 'accessibilityHelp'],
            shouldNotGroupWhenFull: false
        },
        plugins: [AccessibilityHelp, Autoformat, Autosave, Bold, Essentials, FindAndReplace, FullPage, GeneralHtmlSupport, Heading, HtmlComment, HtmlEmbed, Italic, List, ListProperties, Mention, PageBreak, Paragraph, PasteFromOffice, SelectAll, ShowBlocks, SourceEditing, Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar, TextTransformation, TodoList, Undo],
        heading: {
            options: [{
                model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph'
            }, {
                model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1'
            }, {
                model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2'
            }, {
                model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3'
            }, {
                model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4'
            }, {
                model: 'heading5', view: 'h5', title: 'Heading 5', class: 'ck-heading_heading5'
            }, {
                model: 'heading6', view: 'h6', title: 'Heading 6', class: 'ck-heading_heading6'
            }]
        },
        htmlSupport: {
            allow: [{
                name: /^.*$/, styles: true, attributes: true, classes: true
            }]
        },
        list: {
            properties: {
                styles: true, startIndex: true, reversed: true
            }
        },
        mention: {
            feeds: [{
                marker: '@', feed: [/* See: https://ckeditor.com/docs/ckeditor5/latest/features/mentions.html */]
            }]
        },
        menuBar: {
            isVisible: true
        },
        placeholder: 'Type or paste your content here!',
        table: {
            contentToolbar: ['tableColumn', 'tableRow', 'mergeTableCells', 'tableProperties', 'tableCellProperties']
        }
    };


    const {id} = useParams();
    const {
        isLoading,
        parentServices,
        errorMess,
        metaInfo,
    } = useSelector((state) => state.serviceReducer);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [selectedId, setSelectedId] = useState("");
    const [name, setName] = useState("");
    const [parentName, setParentName] = useState("");
    const [brief, setBrief] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [meta_title, setMetaTitle] = useState("");
    const [meta_keywords, setMetaKeywords] = useState("");
    const [meta_description, setMetaDescription] = useState("");
    const [image_link, setImageFile] = useState("");
    const [icons, setIconFile] = useState("");

    const inputIconHandler = (file) => {
        setIconFile(file[0])
    }

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
        setIconFile("");
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

        if (image_link) {
            formData.append("image_link", image_link);
        }

        if (icons) {
            formData.append("icons", icons);
        }

        if (name && description && meta_title && meta_keywords && meta_description) {
            infoMessage("Please wait a while, We are processing your request.");
            let data = {
                dataset: formData,
                id: selectedId
            }
            dispatch(updateServiceData(data))
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
        dispatch(editServiceData(id));
    }, [dispatch])

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setSelectedId(id)
                setName(metaInfo?.title || "");
                setParentName(metaInfo?.parent_id || "");
                setBrief(metaInfo?.brief || "");
                setDescription(metaInfo?.description || "");
                setType(metaInfo?.type || "");
                setMetaTitle(metaInfo?.meta_title || "");
                setMetaKeywords(metaInfo?.meta_keywords || "");
                setMetaDescription(metaInfo?.meta_description || "");
                setImageFile("");
            }, 500)
        }
    }, [isLoading])

    useEffect(() => {
        dispatch(fetchParentServices(0));
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Service Edit"
                    url="/bsl/admin/services/edit"
                />
                <Breadcrumb list={breadcrumb}/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="card-title">Service Edit</h4>
                                </div>
                                <div className="card-body">
                                    <form className="form-profile" onSubmit={requestHandler}>
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="form-group">
                                                    <label>Select Parent Services <sup
                                                        className="text-danger"><MdStar/></sup></label>
                                                    <select className="form-control" name="parent_id" value={parentName}
                                                            onChange={event => setParentName(event.target.value)}>
                                                        <option value={null}>-- Select One--</option>

                                                        {parentServices && Array.from(parentServices).map(model => {
                                                            return (
                                                                <option key={uid()}
                                                                        value={model?.id}>{model?.title}</option>
                                                            )
                                                        })}
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="form-group">
                                                    <label>Content Type <sup
                                                        className="text-danger"><MdStar/></sup></label>
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
                                                    <FileInput
                                                        label={"Service Image"}
                                                        file={image_link}
                                                        id={`siteLogo`}
                                                        handler={inputFileHandler}
                                                        required={`required`}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <FileInput
                                                        label={"Service Icons"}
                                                        file={icons}
                                                        id={`siteIcon`}
                                                        handler={inputIconHandler}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-12">
                                                <div className="form-group">
                                                    <label>Short Brief </label>
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        config={editorConfig}
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
                                                        config={editorConfig}
                                                        onChange={(event, editor) => {
                                                            const data = editor.getData();
                                                            setDescription(data)
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className="col-md-6">
                                                <div className="form-group">
                                                    <label>Meta Title <sup
                                                        className="text-danger"><MdStar/></sup></label>
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
    } else {
        return <Preloader/>
    }
}

export default Edit;
