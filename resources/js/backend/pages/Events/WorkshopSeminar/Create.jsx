import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {MdStar} from "react-icons/md";
import {Col, Row} from "react-bootstrap";
import FileInput from "../../../components/inputFile/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Sessions from "./Sessions.jsx";
import {uid} from "../../../../lib/helper.js";
import SlotCreate from "@/backend/pages/Events/WorkshopSeminar/SlotCreateModal.jsx";

function Create(props) {
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
            name: "Workshop/Seminar",
            url: "/bsl/admin/workshops"
        },
        {
            name: "Workshop/Seminar Create",
            url: null
        }
    ];

    const [cName, setName] = useState("");
    const [formDate, setFormDate] = useState("");
    const [toDate, setToDate] = useState("");
    const [type, setType] = useState("");
    const [price, setPrice] = useState("");
    const [sponsors, setSponsor] = useState("");
    const [objective, setObjective] = useState("");
    const [description, setDescription] = useState("");
    const [imageLink, setImageLink] = useState("");
    const [showModal, setShowModal] = useState(false)

    //calculations
    const [totalDays, setTotalDay] = useState([]);

    const inputFileHandler = (file) => {
        setImageLink(file[0])
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
    }

    const calculateDate = (endDate) => {

        let date1 = new Date(formDate);
        let date2 = new Date(endDate);
        // To calculate the time difference of two dates
        // let Difference_In_Time = date2.getTime() - date1.getTime();
        // To calculate the no. of days between two dates
        // let Difference_In_Days = (Difference_In_Time / (1000 * 3600 * 24)) + 1;

        const dateArray = [];

        // Generate dates in the range and push them to the array
        let currentDate = new Date(date1);
        while (currentDate <= date2) {
            dateArray.push(currentDate.toISOString().split('T')[0]);
            currentDate.setDate(currentDate.getDate() + 1);
        }

        setTotalDay(dateArray);

        // setTotalDay(Difference_In_Days)
    }

    const handleModalClose = () => {
        setShowModal(!showModal);
        // resetHandler()
    }

    const resetHandler = () => {

    }

    return (
        <>
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

                                                <select className="form-control" name="type" value={type}
                                                        onChange={event => setType(event.target.value)}>
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
                                                           setToDate(e.target.value),
                                                               calculateDate(e.target.value)
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
                                                    id={`siteLogo`}
                                                    handler={inputFileHandler}
                                                    required={`required`}
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="form-group">
                                                <label htmlFor="description">Object <sup
                                                    className="text-danger"><MdStar/></sup></label>

                                                <CKEditor
                                                    editor={ClassicEditor}
                                                    data={objective}
                                                    onChange={(event, editor) => {
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
                                                    onChange={(event, editor) => {
                                                        const data = editor.getData();
                                                        setDescription(data)
                                                    }}
                                                />
                                            </div>
                                        </Col>

                                        <Col lg={12}>
                                            <div className="card">
                                                <div className="card-body">
                                                    <h4 className="card-title">Workshop/Seminar Wise Sessions Details</h4>
                                                    <p className="text-muted"><code></code>
                                                    </p>
                                                    {
                                                        Array.from(totalDays).map((day, index) =>
                                                            <Sessions
                                                                index={index + 1}
                                                                day={day}
                                                                key={uid()}
                                                                // date={}
                                                            />
                                                        )
                                                    }
                                                </div>
                                            </div>
                                        </Col>

                                        <div className="col-md-12 mt-3">
                                            <button className="btn btn-primary px-3 float-right" type={"submit"}>Save</button>
                                        </div>
                                    </Row>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SlotCreate
                isShow={showModal}
                title="Create New Slot"
                handleModalAction={handleModalClose}
            />

        </>
    );
}

export default Create;
