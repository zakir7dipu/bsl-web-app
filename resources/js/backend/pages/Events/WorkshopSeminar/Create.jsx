import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {MdStar} from "react-icons/md";
import {Col, Row} from "react-bootstrap";
import FileInput from "../../../components/inputFile/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import {infoMessage, warningMessage} from "../../../../lib/helper.js";
import {useDispatch} from "react-redux";
import {createWorkshopSeminarData} from "@/featurs/WorkshopSeminar/WorkshopSlice.js";

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
    const [imageLink, setImageLink] = useState("");
    const [slots, setSlots] = useState([])
    const [eventDays, setEventDays] = useState([])
    let submitCount = 0;

    //calculations
    const [totalDays, setTotalDay] = useState([]);

    const inputFileHandler = (file) => {
        setImageLink(file[0])
    }

    // const calculateDate = (endDate) => {
    //
    //     let date1 = new Date(formDate);
    //     let date2 = new Date(endDate);
    //
    //     const dateArray = [];
    //     let currentDate = new Date(date1);
    //     while (currentDate <= date2) {
    //         dateArray.push(currentDate.toISOString().split('T')[0]);
    //         currentDate.setDate(currentDate.getDate() + 1);
    //     }
    //     setTotalDay(dateArray);
    // }

    const requestHandler = (e) => {
        e.preventDefault()
        // slotDaysDifferentiator()
        dataSubmit()
    }

    const dataSubmit = () => {
        // submitCount++
        // if (submitCount > 1) {
        //     resetHandler();
        //     navGoBack();
        //     return
        // }

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
        setImageLink("")
        setEventDays([])
    }

    // const slotHandler = (data) => {
    //     setSlots(slots => [...slots, data])
    // }

    // const slotDeleteHandler = (data) => {
    //     let newSlots = slots.filter(slot => slot.tempId !== data)
    //     setSlots(newSlots)
    // }

    // const slotDaysDifferentiator = () => {
    //     totalDays.map((dayItem, index) => {
    //         console.log(dayItem)
    //         let indexIdentifire = index + 1
    //         let newDayItem = {
    //             title: `Day #${indexIdentifire} (${dayItem})`,
    //             date: dayItem,
    //             sessions: slots.filter(slot => slot.index === indexIdentifire)
    //         }
    //         setEventDays(eventDays => [...eventDays, newDayItem])
    //     })
    // }

    // useEffect(() => {
    //     if(eventDays.length > 0 && submitCount === 0) {
    //         dataSubmit()
    //     }
    //     console.log(eventDays)
    // }, [eventDays])

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

                                    {/*<Col lg={12}>*/}
                                    {/*    <div className="card">*/}
                                    {/*        <div className="card-body">*/}
                                    {/*            <h4 className="card-title">Workshop/Seminar Wise Sessions*/}
                                    {/*                Details</h4>*/}
                                    {/*            <p className="text-muted"><code></code>*/}
                                    {/*            </p>*/}
                                    {/*            {Array.from(totalDays).map((day, index) => <Sessions*/}
                                    {/*                index={index + 1}*/}
                                    {/*                day={day}*/}
                                    {/*                key={uid()}*/}
                                    {/*                slotsInfo={slots}*/}
                                    {/*                deleteHandler={slotDeleteHandler}*/}
                                    {/*            />)}*/}
                                    {/*        </div>*/}
                                    {/*    </div>*/}
                                    {/*</Col>*/}

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

        {/*<SlotCreate*/}
        {/*    slotHandler={slotHandler}*/}
        {/*/>*/}

    </>);
}

export default Create;
