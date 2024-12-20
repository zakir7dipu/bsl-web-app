import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {createCourseData, getServices} from "../../../featurs/Courses/CourseSlice.js";
import {infoMessage, uid, warningMessage} from "../../../lib/helper.js";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import {Col, Row} from "react-bootstrap";
import {TfiReload} from "react-icons/tfi";
import {MdStar} from "react-icons/md";
import FileInput from "../../components/inputFile/Index.jsx";
import 'ckeditor5/ckeditor5.css';
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


function Create(props) {
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
    const {
        isLoading,
        services,
        errorMess,
        metaInfo
    } = useSelector((state) => state.coursesReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navGoBack = () => {
        navigate(-1)
    }
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Courses",
            url: "/bsl/admin/courses"
        },
        {
            name: "Courses Create",
            url: null
        }
    ];

    const [cName, setName] = useState("");
    const [cServiceId, setServiceId] = useState("");
    const [cVideoId, setVideoId] = useState("");
    const [cDescription, setDescription] = useState("");
    const [cPrice, setPrice] = useState("");
    const [cDiscount, setDiscount] = useState("");
    const [cClassCount, setClassCount] = useState("");
    const [cDuration, setDuration] = useState("");
    const [cClassPerWeek, setClassPerWeek] = useState("");
    const [cClassDuration, setClassDuration] = useState("");
    const [cLanguage, setLanguage] = useState("");
    const [cDeliveryMood, setDeliveryMood] = useState("");
    const [cCurriculumText, setCurriculumText] = useState("");
    const [cThumbnail, setThumbnail] = useState("");
    const [cBanner, setBanner] = useState("");
    const [cCourseType, setCourseType] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

    const inputFileHandler = (file) => {
        setThumbnail(file[0])
    }

    const inputBannerHandler = (file) => {
        setBanner(file[0])
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!cName) {
            warningMessage("Name is required.")
        } else {
            formData.append("name", cName);
        }

        if (!cServiceId) {
            warningMessage("Category is required.")
        } else {
            formData.append("service_id", cServiceId);
        }

        if (startDate) {
            formData.append("start_date", startDate);
        }

        if (endDate) {
            formData.append("end_date", endDate);
        }

        if (!cCourseType) {
            warningMessage("Course Type is required.")
        } else {
            formData.append("course_type", cCourseType);
        }

        if (cVideoId) {
            formData.append("video_id", cVideoId);
        }

        if (!cDescription) {
            warningMessage("Description id is required.")
        } else {
            formData.append("description", cDescription);
        }

        if (!cPrice) {
            warningMessage("Price id is required.")
        } else {
            formData.append("price", cPrice);
        }

        if (cDiscount) {
            formData.append("discount", cDiscount);
        }

        if (!cClassCount) {
            warningMessage("Class count is required.")
        } else {
            formData.append("class_count", cClassCount);
        }

        if (!cDuration) {
            warningMessage("Duration is required.")
        } else {
            formData.append("duration", cDuration);
        }

        if (!cClassPerWeek) {
            warningMessage("Class Per Week is required.")
        } else {
            formData.append("class_per_week", cClassPerWeek);
        }
        if (!cClassDuration) {
            warningMessage("Class duration is required.")
        } else {
            formData.append("class_duration", cClassDuration);
        }
        if (!cLanguage) {
            warningMessage("Language  is required.")
        } else {
            formData.append("language", cLanguage);
        }

        if (!cDeliveryMood) {
            warningMessage("Delivery Mode  is required.")
        } else {
            formData.append("delivery_mode", cDeliveryMood);
        }
        if (!cCurriculumText) {
            warningMessage("Curriculum text  is required.")
        } else {
            formData.append("curriculum_text", cCurriculumText);
        }

        if (cThumbnail) {
            formData.append("thumbnail", cThumbnail);
        }

        if (cBanner) {
            formData.append("banner", cBanner);
        }
        formData.append("slug", cName);

        if (cName && cServiceId && cDescription && cCourseType && cClassCount && cDuration && cClassPerWeek && cClassDuration && cLanguage && cDeliveryMood && cCurriculumText && cPrice) {
            infoMessage("Please wait a while, We are processing your request.");
            dispatch(createCourseData(formData));
            resetHandler();
            navGoBack();
        }
    }

    const resetHandler = () => {
        setName(''),
            setVideoId(''),
            setServiceId(''),
            setDescription(''),
            setPrice(''),
            setDiscount(''),
            setClassCount(''),
            setDuration(''),
            setClassPerWeek(''),
            setClassDuration(''),
            setLanguage(''),
            setDeliveryMood(''),
            setCurriculumText(''),
            setThumbnail(''),
            setBanner(''),
            setCourseType(''),
            setStartDate(''),
            setEndDate('')
    }


    useEffect(() => {
        dispatch(getServices());
    }, [dispatch]);

    return (
        <>
            <HeaderMeta
                title="Courses Create"
                url="/bsl/admin/courses/create"
            />
            <Breadcrumb list={breadcrumb}/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="card-header">
                                <h4 className="card-title">Courses Create</h4>
                            </div>
                            <div className="card-body">
                                <form className="form-profile" onSubmit={requestHandler}>
                                    <Row>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Select Services <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <select className="form-control" name="service_id" value={cServiceId}
                                                        onChange={event => setServiceId(event.target.value)}>
                                                    <option value={null}>-- Select One--</option>

                                                    {services && Array.from(services).map(model => {
                                                        return (
                                                            <option key={uid()}
                                                                    value={model?.id}>{model?.title}</option>
                                                        )
                                                    })}
                                                </select>
                                            </div>
                                        </div>
                                        <Col lg={6}>
                                            <div className="form-group">
                                                <label>Name <sup className="text-danger"><MdStar/></sup></label>
                                                <input
                                                    type={`text`}
                                                    className={`form-control`}
                                                    value={cName}
                                                    onChange={e => setName(e.target.value)}
                                                    placeholder={`Course Name`}
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label>Video Id </label>
                                                <input type="text" className={`form-control`} id="video_id"
                                                       placeholder="Enter video id"
                                                       value={cVideoId}
                                                       onChange={(e) => {
                                                           setVideoId(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="duration">Duration <sup
                                                    className="text-danger"><MdStar/></sup> </label>
                                                <input type="text"
                                                       id="duration"
                                                       className="form-control"
                                                       placeholder="Enter duration"
                                                       value={cDuration}
                                                       onChange={(e) => {
                                                           setDuration(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="price">Price <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <input type="number" id="price" className="form-control"
                                                       placeholder="Enter price"
                                                       value={cPrice}
                                                       onChange={(e) => {
                                                           setPrice(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="discount">Discount </label>
                                                <input type="number" id="discount" className="form-control"
                                                       placeholder="Enter discount"
                                                       value={cDiscount}
                                                       onChange={(e) => {
                                                           setDiscount(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="class_count">Class Count <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <input type="number" id="class_count" className="form-control"
                                                       placeholder="Enter class count"
                                                       value={cClassCount}
                                                       onChange={(e) => {
                                                           setClassCount(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="class_per_week">Class Per Week <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <input type="text" id="class_per_week"
                                                       placeholder="Enter class per week"
                                                       className="form-control"
                                                       value={cClassPerWeek}
                                                       onChange={(e) => {
                                                           setClassPerWeek(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="class_duration">Class Duration <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <input type="text" id="class_duration"
                                                       placeholder="Enter class duration"
                                                       className="form-control"
                                                       value={cClassDuration}
                                                       onChange={(e) => {
                                                           setClassDuration(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>

                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="language">Language <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <input type="text" id="language" placeholder="Enter language"
                                                       value={cLanguage}
                                                       className="form-control"
                                                       onChange={(e) => {
                                                           setLanguage(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="start_date">Start Date </label>
                                                <input type="date" id="start_date" placeholder="Enter date"
                                                       value={startDate}
                                                       className="form-control"
                                                       onChange={(e) => {
                                                           setStartDate(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="end_date">End Date </label>
                                                <input type="date" id="end_date" placeholder="Enter date"
                                                       className="form-control"
                                                       value={endDate}
                                                       onChange={(e) => {
                                                           setEndDate(e.target.value)
                                                       }}/>
                                            </div>
                                        </Col>


                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="delivery_mode">Delivery Mode <sup
                                                    className="text-danger"><MdStar/></sup></label>
                                                <select className="form-control" name="delivery_mode"
                                                        value={cDeliveryMood}
                                                        onChange={event => setDeliveryMood(event.target.value)}>
                                                    <option value={null}>--Select One--</option>
                                                    <option value="online">Online</option>
                                                    <option value="off_line">Off Line</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={4}>
                                            <div className="form-group">
                                                <label htmlFor="course_type">Course Type <sup
                                                    className="text-danger"><MdStar/></sup>
                                                </label>

                                                <select className="form-control" name="course_type" value={cCourseType}
                                                        onChange={event => setCourseType(event.target.value)}>
                                                    <option value={null}>--Select One--</option>
                                                    <option value="admission">Admission</option>
                                                    <option value="going_on">On Going</option>
                                                </select>
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <div className="form-group">
                                                <FileInput
                                                    label={"Thumbnail"}
                                                    file={cThumbnail}
                                                    id={`siteLogo`}
                                                    handler={inputFileHandler}
                                                    required={`required`}
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={6}>
                                            <FileInput
                                                label={"Banner"}
                                                file={cBanner}
                                                id={`siteLogo`}
                                                handler={inputBannerHandler}
                                            />
                                        </Col>

                                        <Col lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="description">Description <sup
                                                    className="text-danger"><MdStar/></sup></label>

                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={cDescription}
                                                    config={editorConfig}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setDescription(data)
                                                    }}

                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="curriculum_text">Curriculum <sup
                                                    className="text-danger"><MdStar/></sup></label>

                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={cCurriculumText}
                                                    config={editorConfig}
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setCurriculumText(data)
                                                    }}

                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <Col lg={12}>
                                                <div className="form-group">
                                                    <button type={"submit"} className="btn btn-primary float-right">Save
                                                    </button>
                                                    <button className="btn btn-danger ml----2" onClick={resetHandler}>
                                                        <TfiReload/>
                                                    </button>
                                                </div>
                                            </Col>
                                        </Col>
                                    </Row>
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
