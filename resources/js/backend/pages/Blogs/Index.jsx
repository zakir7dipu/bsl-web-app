import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {infoMessage, useInternalLink, warningMessage} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {createBlogsData, deleteBlogsData, fetchAllBlogs, updateBlogsData} from "../../../featurs/Blogs/BlogSlice.js";
import Preloader from "../../components/Preloader/Index.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import BizModal from "../../../ui/BizzModal.jsx";
import {MdStar} from "react-icons/md";
import FileInput from "../../components/inputFile/Index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";

function Index(props) {
    const {
        isLoading,
        blogs,
        apiUrl,
        errorMess
    } = useSelector((state) => state.blogsReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Blogs",
            url: null
        }
    ];

    const columns = [
        {
            name: 'SL',
            selector: (row, index) => index + 1,
            sortable: false,
        },
        {
            name: 'Title',
            selector: row => row?.title,
            sortable: true,
            sortableKey: "title",
            searchableKey: 'title',
        },
        {
            name: 'Tag',
            selector: row => row?.tag,
            sortable: true,
            sortableKey: "tag",
            searchableKey: 'tag',
        },
        {
            name: 'Image',
            selector: row => (
                <img style={{height: "40px", width: "40px"}} src={useInternalLink(row.image_link)}/>
            ),
            sortable: false
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelBlogEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => blogDeleteHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedBlogs, setSelectedBlogs] = useState("");

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [tag, setTag] = useState("");
    const [metaTitle, setMetaTitle] = useState("");

    const [metaDescription, setMetaDescription] = useState("");
    const [metaKeywords, setMetaKeywords] = useState("");
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
        setTag('');
        setDescription('');
        setMetaTitle('');
        setMetaKeywords('');
        setMetaDescription('');
        setImageFile('');
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!name) {
            warningMessage("Name is required.")
        } else {
            formData.append("title", name);
        }

        if (!indexing) {
            warningMessage("Indexing is required.")
        } else {
            formData.append("short_order", indexing);
        }
        if (!tag) {
            warningMessage("Tag is required.")
        } else {
            formData.append("tag", tag);
        }

        if (!description) {
            warningMessage("Description is required.")
        } else {
            formData.append("description", description);
        }

        if (metaTitle) {
            formData.append("meta_title", metaTitle);
        }
        if (metaDescription) {
            formData.append("meta_description", metaDescription);
        }
        if (metaKeywords) {
            formData.append("meta_keywords", metaKeywords);
        }

        if (imageFile) {
            formData.append("image_link", imageFile);
            formData.append("meta_image_link", imageFile);
        }


        if (name && indexing && tag && description) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createBlogsData(formData))
            } else {
                let data = {
                    dataset: formData,
                    id: selectedBlogs
                }
                dispatch(updateBlogsData(data))
            }
        }
        handleModalClose()
    }

    const handelBlogEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedBlogs(id)
        let model = blogs.filter((blog) => blog.id === id)
        model = model[0]
        setTitle(`Edit ${model?.title}`)
        setIsEdit(true)
        setName(model?.title)
        setIndexing(model?.short_order)
        setTag(model?.tag)
        setDescription(model?.description)
        setMetaTitle(model?.meta_title)
        setMetaDescription(model?.meta_description)
        setMetaKeywords(model?.meta_keywords)
        setImageFile(model?.image_link)
        setIsShow(!isShow);
    }

    const blogDeleteHandler = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteBlogsData(data))
        }
    }
    useEffect(() => {
        dispatch(fetchAllBlogs(0));
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Blogs"
                    url="/bsl/admin/blogs"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Blogs Lists
                                    <button className="btn btn-info btn-mini float-right" onClick={() => {
                                        setIsShow(!isShow);
                                        setIsEdit(false)
                                        setTitle('Add New BLogs')
                                    }}>
                                        <GrFormAdd/>&nbsp;Add New Blogs
                                    </button>
                                </h4>
                            </div>
                            <div className="card-body">

                                <VirtualDataTable
                                    name="Blogs Data"
                                    columns={columns}
                                    data={blogs}
                                    dataViewRangeArray={[10, 20, 30, 50, 100]}
                                    itemPerPage={10}
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
                                           }} placeholder="title" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <div className="form-group">
                                    <label>Short Order <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={indexing}
                                           onChange={(e) => {
                                               setIndexing(e.target.value)
                                           }} placeholder="short order" type="number"/>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="form-group">
                                    <label>Tag <sup className="text-danger"><MdStar/></sup></label>
                                    <input
                                        type={`text`}
                                        className={`form-control`}
                                        value={tag}
                                        onChange={e => setTag(e.target.value)}
                                        placeholder={`Ex: Software. Please Do not put comma.`}
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
                                    <FileInput
                                        label={"Image"}
                                        file={imageFile}
                                        id={"imageFile"}
                                        handler={inputFileHandler}
                                        required="required"
                                    />
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Meta Title <sup className="text-danger"><MdStar/></sup></label>
                                    <input
                                        type={`text`}
                                        className={`form-control`}
                                        value={metaTitle}
                                        onChange={e => setMetaTitle(e.target.value)}
                                        placeholder={`Meta Title`}
                                    />
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="form-group">
                                    <label>Meta Keywords <sup
                                        className="text-danger"><MdStar/></sup></label>
                                    <textarea
                                        className="form-control"
                                        name="textarea"
                                        id="textarea" cols="30"
                                        rows="2"
                                        placeholder="Meta Keywords"
                                        value={metaKeywords}
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
                                        value={metaDescription}
                                        onChange={e => setMetaDescription(e.target.value)}
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
