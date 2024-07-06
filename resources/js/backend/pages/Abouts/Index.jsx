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
import {MdStar} from "react-icons/md";
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

function Index(props) {

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
                                                    <label>About Description <sup
                                                        className="text-danger"><MdStar/></sup></label>
                                                    <CKEditor
                                                        editor={ClassicEditor}
                                                        config={editorConfig}
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
