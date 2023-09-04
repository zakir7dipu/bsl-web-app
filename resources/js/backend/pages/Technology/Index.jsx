import React, {useEffect, useState} from 'react';
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import {useDispatch, useSelector} from "react-redux";
import {createData, deleteData, fetchAllTechnology, updateData} from "../../../featurs/Technology/TechnologySlice.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {errorMessage, infoMessage, useInternalLink} from "../../../lib/helper.js";
import DataTableComponent from "../../../ui/DataTableComponent.jsx";
import {GrFormAdd} from "react-icons/gr";
import BizAlert from "../../../lib/BizAlert.js";
import BizModal from "../../../ui/BizzModal.jsx";
import FileInput from "../../components/inputFile/Index.jsx";
import Preloader from "../../components/Preloader/Index.jsx";
import {MdStar} from "react-icons/md";

function Index() {
    const {
        isLoading,
        technologies,
        errorMess
    } = useSelector((state) => state.technologyReducer);

    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Technology",
            url: null
        }
    ];

    const columns = [
        {
            name: 'ID',
            selector: row => row.id,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Indexing',
            selector: row => row.order_by,
            sortable: true,
        },
        {
            name: 'Image',
            cell: row => (
                <img style={{height: "40px", width: "40px"}} src={useInternalLink(row.image_link)}/>
            )
        },
        {
            name: 'Actions',
            cell: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelEdit(row?.slug)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => technologyDeleteHandler(row?.slug)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Technology");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedTech, setSelectedTech] = useState("");

    const [name, setName] = useState("");
    const [indexing, setIndexing] = useState("");
    const [imageFile, setImageFile] = useState("");

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const inputFileHandler = (file) => {
        setImageFile(file[0])
    }

    const resetHandler = () => {
        setName('');
        setIndexing('');
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!name) {
            errorMessage("Name is required.")
        } else {
            formData.append("name", name);
        }

        if (!indexing) {
            errorMessage("Indexing is required.")
        } else {
            formData.append("order_by", indexing);
        }

        if (imageFile) {
            formData.append("image_link", imageFile);
        }

        if (name && indexing) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createData(formData))
            } else {
                let data = {
                    dataset: formData,
                    slug: selectedTech
                }
                dispatch(updateData(data))
            }
        }
        handleModalClose()
    }

    const handelEdit = (slug) => {
        getTechnologyMeta(slug)
    }

    const getTechnologyMeta = (slug) => {
        setSelectedTech(slug)
        let technologyMeta = technologies.filter((technology) => technology.slug === slug)
        technologyMeta = technologyMeta[0]
        setTitle(`Edit ${technologyMeta?.name}`)
        setIsEdit(true)
        setName(technologyMeta?.name)
        setIndexing(technologyMeta?.order_by)
        setImageFile(technologyMeta?.image_link)
        setIsShow(!isShow);
    }

    const technologyDeleteHandler = async (slug) => {
        //console.log(slug)
        setSelectedTech(slug)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                slug: slug
            }
            dispatch(deleteData(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllTechnology(0));
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Technology Settings"
                    url="/bsl/admin/page-settings/technology"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Technology Lists</h4>
                                    <button className="btn btn-info btn-mini float-right" onClick={() => {
                                        setIsShow(!isShow);
                                        setIsEdit(false)
                                        setTitle('Add New Technology')
                                    }}>
                                        <GrFormAdd/>&nbsp;Add New Technology
                                    </button>
                                </div>
                                <div className="card-body">
                                    <DataTableComponent
                                        columns={columns}
                                        data={technologies}
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
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Name <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={name}
                                           onChange={(e) => {
                                               setName(e.target.value)
                                           }} placeholder="name" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Short Order <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={indexing}
                                           onChange={(e) => {
                                               setIndexing(e.target.value)
                                           }} placeholder="short order" type="number"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <FileInput
                                        label={"Image"}
                                        file={imageFile}
                                        id={"imageFile"}
                                        handler={inputFileHandler}
                                        required="required"
                                    />
                                </div>
                            </div>
                            <hr/>
                            <div className="col-md-12 mt-3">
                                <button className="btn btn-primary px-3 float-right" type={"submit"}>Save</button>
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
