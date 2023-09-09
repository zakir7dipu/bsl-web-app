import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {infoMessage, useInternalLink, warningMessage} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import DataTableComponent from "../../../ui/DataTableComponent.jsx";
import BizModal from "../../../ui/BizzModal.jsx";
import {MdStar} from "react-icons/md";
import FileInput from "../../components/inputFile/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import Preloader from "../../components/Preloader/Index.jsx";
import {
    createPageData,
    deletePageData,
    fetchAllPageData,
    fetchSearchPageData,
    updatePageData
} from "../../../featurs/Pages/PageSlice.js";

function Index(props) {
    const {
        isLoading,
        pages,
        apiUrl,
        metaInfo
    } = useSelector((state) => state.pagesReducer);

    const dispatch = useDispatch();

    const bizAlert = new BizAlert();

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Pages",
            url: null
        }
    ];

    const columns = [
        {
            name: 'ID',
            selector: row => row?.id,
            sortable: true,
        },
        {
            name: 'Page Name',
            selector: row => row?.title,
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
                    <Link to="#" onClick={(e) => handelPageEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => pageDeleteHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedPage, setSelectedPage] = useState("");

    const [name, setName] = useState("");
    const [descriptions, setDescription] = useState("");
    const [imageFile, setImageFile] = useState("");
    const [searchText, setSearchText] = useState("");

    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }

    const inputFileHandler = (file) => {
        setImageFile(file[0])
    }

    const resetHandler = () => {
        setName('');
        setDescription('');
        setImageFile('');
        setSearchText('');
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!name) {
            warningMessage("Title is required.")
        } else {
            formData.append("title", name);
        }

        if (!descriptions) {
            warningMessage("Description is required.")
        } else {
            formData.append("description", descriptions);
        }

        formData.append("slug", '');

        if (imageFile) {
            formData.append("image_link", imageFile);
        }


        if (name && descriptions) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createPageData(formData))
            } else {
                let data = {
                    dataset: formData,
                    id: selectedPage
                }
                dispatch(updatePageData(data))
            }
        }
        handleModalClose()
    }

    const handelPageEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedPage(id)
        let model = pages.filter((ts) => ts.id === id)
        model = model[0]
        setTitle(`Edit ${model?.title}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(model?.title)
        setDescription(model?.description)
        setImageFile(model?.image_link)
    }

    const pageDeleteHandler = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deletePageData(data))
        }
    }

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
        let formData = new FormData();
        formData.append("search_text", searchText);
        dispatch(fetchSearchPageData(formData))
    }

    useEffect(() => {
        dispatch(fetchAllPageData());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Pages"
                    url="/bsl/admin/pages"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Pages</h4>
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
                                    data={pages}
                                    isLoading={isLoading}
                                    itemPerPage={10}
                                    handleSearchText={handleSearchText}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <BizModal isShow={isShow} title={title} handleClose={handleModalClose} large={'xl'}>
                    <form className="form-profile" onSubmit={requestHandler}>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Title <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={name}
                                           onChange={(e) => {
                                               setName(e.target.value)
                                           }} placeholder="Title" type="text"/>
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

                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Description <sup
                                        className="text-danger"><MdStar/></sup></label>
                                    <CKEditor
                                        editor={ClassicEditor}
                                        data={descriptions}
                                        onChange={(event, editor) => {
                                            const data = editor.getData();
                                            setDescription(data)
                                        }}
                                    />
                                </div>
                            </div>

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
