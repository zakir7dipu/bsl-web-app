import {createWorkshopSeminarData} from "@/featurs/WorkshopSeminar/WorkshopSlice.js";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import React, {useState} from 'react';
import {Col, Row} from "react-bootstrap";
import {MdStar} from "react-icons/md";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {infoMessage, warningMessage} from "../../../../lib/helper.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import FileInput from "../../../components/inputFile/Index.jsx";

function Create(props) {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const navGoBack = () => {
        navigate(-1)
    }

    const breadcrumb = [{
        name: "Dashboard", url: "/bsl/admin"
    }, {
        name: "Workshop/Seminar", url: "/bsl/admin/workshops"
    }, {
        name: "Workshop/Seminar Create", url: null
    }];

    const [cName, setName] = useState("");
    const [formDate, setFormDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [sponsors, setSponsor] = useState("");
    const [objective, setObjective] = useState("");
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [subtext, setSubtext] = useState("");
    const [promo_video, setPromo] = useState("");


    const [imageLink, setImageLink] = useState("");
    const [slots, setSlots] = useState([])
    const [eventDays, setEventDays] = useState([])

    const inputFileHandler = (file) => {
        setImageLink(file[0])
    }


    const requestHandler = (e) => {
        e.preventDefault()
        // slotDaysDifferentiator()
        dataSubmit()
    }

    const dataSubmit = () => {

        let formData = new FormData()

        if (!cName) {
            warningMessage("Name is required.")
        } else {
            formData.append("name", cName)
        }

        if (!formDate) {
            warningMessage("Form date is required.")
        } else {
            formData.append("form_date", formDate)
        }
        if (!toDate) {
            warningMessage("To date is required.")
        } else {
            formData.append("to_date", toDate)
        }
        if (!type) {
            warningMessage("Type is required.")
        } else {
            formData.append("type", type)
        }

        if (price) {
            formData.append("price", price)
        }
        if (sponsors) {
            formData.append("sponsors", sponsors)
        }

        if (objective) {
            formData.append("objective", objective)
        }

        if (!description) {
            warningMessage("Details is required.")
        } else {
            formData.append("description", description)
        }

        if (!location) {
            warningMessage("Location is required.")
        } else {
            formData.append("location", location)
        }

        if (subtext) {
            formData.append("subtext", subtext)
        }
        if (promo_video) {
            formData.append("promo_video", promo_video)
        }

        if (imageLink) {
            formData.append("image_link", imageLink)
        }
        if (!eventDays) {
            warningMessage("Event days information is required.")
        } else {
            formData.append("days", JSON.stringify(eventDays))
        }

        if (cName && formDate && toDate && type && price && description && eventDays) {
            infoMessage("Please wait a while, We are processing your request.");
            dispatch(createWorkshopSeminarData(formData))
            resetHandler();
            navGoBack();
        }
    }

    const resetHandler = (e) => {
        setName("")
        setFormDate("")
        setToDate("")
        setType("")
        setPrice("")
        setSponsor("")
        setObjective("")
        setDescription("")
        setLocation("")
        setSubtext("")
        setPromo("")
        setImageLink("")
    }

    return (<>
        <HeaderMeta
            title="Workshop/Seminar Create"
            url="/bsl/admin/workshops/create"
        />
        <Breadcrumb list={breadcrumb}/>

        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-header">
                            <h4 className="card-title">Workshop/Seminar Create</h4>
                        </div>
                        <div className="card-body">
                            <form className="form-profile" onSubmit={requestHandler}>
                                <Row>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Name <sup
                                                className="text-danger"><MdStar/></sup></label>
                                            <input type="text" className={`form-control`} id="name"
                                                   placeholder="Enter name"
                                                   value={cName}
                                                   onChange={(e) => {
                                                       setName(e.target.value)
                                                   }}/>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group">
                                            <label>Select Type <sup
                                                className="text-danger"><MdStar/></sup></label>

                                            <select className="form-control" id="type" value={type}
                                                    onChange={e => {
                                                        setType(e.target.value)
                                                    }}>
                                                <option value={null}>--Select One--</option>
                                                <option value="workshop">Workshop</option>
                                                <option value="seminar">Seminar</option>
                                            </select>
                                        </div>
                                    </div>
                                    <Col lg={4}>
                                        <div className="form-group">
                                            <label htmlFor="form_date">Start Date </label>
                                            <input type="date" id="form_date" placeholder="Enter date"
                                                   value={formDate}
                                                   className="form-control"
                                                   onChange={(e) => {
                                                       setFormDate(e.target.value)
                                                   }}/>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-group">
                                            <label htmlFor="to_date">End Date </label>
                                            <input type="date" id="to_date" placeholder="Enter date"
                                                   className="form-control"
                                                   value={toDate}
                                                   onChange={(e) => {
                                                       setToDate(e.target.value), calculateDate(e.target.value)
                                                   }}/>

                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-group">
                                            <label htmlFor="price">Register Amount </label>
                                            <input type="number" id="price" placeholder="Enter price"
                                                   className="form-control"
                                                   value={price}
                                                   onChange={(e) => {
                                                       setPrice(e.target.value)
                                                   }}/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="form-group">
                                            <label htmlFor="sponsors">Sponsor Name </label>
                                            <input type="text" id="sponsors" placeholder="Enter Sponsor Name"
                                                   className="form-control"
                                                   value={sponsors}
                                                   onChange={(e) => {
                                                       setSponsor(e.target.value)
                                                   }}/>
                                        </div>
                                    </Col>
                                    <Col lg={6}>
                                        <div className="form-group">
                                            <FileInput
                                                label={"Thumbnail"}
                                                file={imageLink}
                                                id={`image_file`}
                                                handler={inputFileHandler}
                                                required={`required`}
                                            />
                                        </div>
                                    </Col>

                                    <Col lg={4}>
                                        <div className="form-group">
                                            <label htmlFor="location">Location</label>
                                            <input type="text" id="location" placeholder="Enter Location Name"
                                                   className="form-control"
                                                   value={location}
                                                   onChange={(e) => {
                                                       setLocation(e.target.value)
                                                   }}/>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-group">
                                            <label htmlFor="location">Subtext</label>
                                            <input type="text" id="location" placeholder="Enter Subtext"
                                                   className="form-control"
                                                   value={subtext}
                                                   onChange={(e) => {
                                                       setSubtext(e.target.value)
                                                   }}/>
                                        </div>
                                    </Col>
                                    <Col lg={4}>
                                        <div className="form-group">
                                            <label htmlFor="location">Promo Video (Youtube video code)</label>
                                            <input type="text" id="location" placeholder="Ex: 3ee35derwer34"
                                                   className="form-control"
                                                   value={promo_video}
                                                   onChange={(e) => {
                                                       setPromo(e.target.value)
                                                   }}/>
                                        </div>
                                    </Col>

                                    <Col lg={12}>
                                        <div className="form-group">
                                            <label htmlFor="description">Object <sup
                                                className="text-danger"><MdStar/></sup></label>

                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={objective}
                                                id="objective"
                                                onChange={(e, editor) => {
                                                    const data = editor.getData();
                                                    setObjective(data)
                                                }}

                                            />
                                        </div>
                                    </Col>

                                    <Col lg={12}>
                                        <div className="form-group">
                                            <label htmlFor="description">Description <sup
                                                className="text-danger"><MdStar/></sup></label>

                                            <CKEditor
                                                editor={ClassicEditor}
                                                data={description}
                                                id="description"
                                                onChange={(e, editor) => {
                                                    const data = editor.getData();
                                                    setDescription(data)
                                                }}
                                            />
                                        </div>
                                    </Col>

                                    <div className="col-md-12 mt-3">
                                        <button className="btn btn-primary px-3 float-right" type={"submit"}>Save
                                        </button>
                                    </div>
                                </Row>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default Create;
