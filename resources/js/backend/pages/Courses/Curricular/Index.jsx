import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {infoMessage, warningMessage} from "../../../../lib/helper.js";
import RowDropDown from "../../../../ui/RowDropDown.jsx";
import {showCourseData} from "../../../../featurs/Courses/CourseSlice.js";
import {
    createCurricular,
    deleteCurricular,
    fetchAllCurricular,
    updateCurricular
} from "../../../../featurs/Curricular/CurricularSlice.js";
import BizAlert from "../../../../lib/BizAlert.js";
import Preloader from "../../../components/Preloader/Index.jsx";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import DataTableComponent from "../../../../ui/DataTableComponent.jsx";
import {MdStar} from "react-icons/md";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import BizModal from "../../../../ui/BizzModal.jsx";

function Index() {
    const {id} = useParams();

    const {isLoading, curriculars} = useSelector((state) => state.curricularReducer);
    const {metaInfo} = useSelector((state) => state.coursesReducer);

    const dispatch = useDispatch();
    const bizAlert = new BizAlert();
    const [courseName, setCourseName] = useState("");

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: `${courseName} Course`,
            url: "/bsl/admin/courses"
        },
        {
            name: "Curricular List",
            url: null
        }
    ];

    const columns = [
        {
            name: 'SL',
            cell: (row, index) => index + 1,
            sortable: false,
        },
        {
            name: 'Name',
            selector: row => row?.name,
            sortable: true,
        },
        {
            name: 'Actions',
            cell: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelCurricularEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteCurricularHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState("Add New Curricular");

    const [selectedCurricular, setSelectedCurricular] = useState("");
    const [cName, setName] = useState("");
    const [cDescription, setDescription] = useState("");
    const [cCourseId, setCourseId] = useState("");


    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }
    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();
        if (!cName) {
            warningMessage("Name is required.")
        } else {
            formData.append("name", cName);
        }
        if (!cDescription) {
            warningMessage("Description is required.")
        } else {
            formData.append("description", cDescription);
        }
        formData.append("course_id", id);

        if (cName && cDescription) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createCurricular(formData))
            } else {
                let data = {
                    dataset: formData,
                    item: selectedCurricular
                }
                dispatch(updateCurricular(data))
            }
        }
        handleModalClose()
    }

    const resetHandler = () => {
        setName("");
        setDescription("");
        setTitle("");
    }

    const handelCurricularEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedCurricular(id)
        let curricularMeta = curriculars.filter((curricular) => curricular.id === id)
        curricularMeta = curricularMeta[0]
        setTitle(`Edit ${curricularMeta.name}`)

        setName(curricularMeta?.name || '')
        setDescription(curricularMeta?.description || '')
        setCourseId(curricularMeta.course_id)

        setIsShow(!isShow);
        setIsEdit(!isEdit);
    }

    const deleteCurricularHandler = async (id) => {
        setSelectedCurricular(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                item: id
            }
            dispatch(deleteCurricular(data))
        }
    }

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setCourseName(metaInfo?.name || "");
            }, 500)
        }
    }, [isLoading])

    useEffect(() => {
        dispatch(showCourseData(id));
    }, [dispatch])

    useEffect(() => {
        dispatch(fetchAllCurricular(id));
    }, [dispatch])

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Curricular List"
                    url=""
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Curricular Lists</h4>
                                    <button className="btn btn-info btn-mini float-right" onClick={() => {
                                        setIsShow(!isShow);
                                        setIsEdit(false)
                                        setTitle('Add New')
                                    }}>
                                        <GrFormAdd/>&nbsp;Add New
                                    </button>
                                </div>
                                <div className="card-body">
                                    <DataTableComponent
                                        columns={columns}
                                        data={curriculars}
                                        isLoading={isLoading}
                                        itemPerPage={10}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BizModal isShow={isShow} title={title} handleClose={handleModalClose} large={'lg'}>
                    <form className="form-profile" onSubmit={requestHandler}>
                        <div className="row">

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Name <sup className="text-danger"><MdStar/></sup></label>
                                    <input
                                        type={`text`}
                                        className={`form-control`}
                                        value={cName}
                                        onChange={e => setName(e.target.value)}
                                        placeholder={`Curricular Name`}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Description <sup
                                        className="text-danger"><MdStar/></sup></label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={cDescription}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDescription(data)
                                        }}
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
                </BizModal>
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
