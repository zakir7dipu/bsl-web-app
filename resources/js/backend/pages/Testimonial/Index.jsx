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
import Preloader from "../../components/Preloader/Index.jsx";
import {
    createTestimonial,
    deleteTestimonial, fetchAllTestimonial, fetchSearchTestimonial,
    updateTestimonial
} from "../../../featurs/Testimonial/TestimonialSlice.js";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";
import {CKEditor} from "@ckeditor/ckeditor5-react";
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

    const {
        isLoading,
        testimonials,
        apiUrl,
        metaInfo
    } = useSelector((state) => state.testimonialReducer);

    const dispatch = useDispatch();

    const bizAlert = new BizAlert();

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Testimonial",
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
            name: 'Name',
            selector: row => row?.name,
            sortable: true,
            sortableKey: "name",
            searchableKey: 'name',
        },
        {
            name: 'Designation',
            selector: row => row?.designation,
            sortable: true,
            sortableKey: "designation",
            searchableKey: 'designation',
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
                    <Link to="#" onClick={(e) => handelTestimonialEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => testimonialDeleteHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedTestimonial, setSelectedTestimonial] = useState("");

    const [name, setName] = useState("");
    const [descriptions, setDescription] = useState("");
    const [designation, setDesignation] = useState("");
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
        setDesignation('');
        setImageFile('');
        setSearchText('');
    }

    const requestHandler = (e) => {
        e.preventDefault();
        let formData = new FormData();

        if (!name) {
            warningMessage("Name is required.")
        } else {
            formData.append("name", name);
        }

        if (!descriptions) {
            warningMessage("Description is required.")
        } else {
            formData.append("description", descriptions);
        }

        if (!designation) {
            warningMessage("Designation is required.")
        } else {
            formData.append("designation", designation);
        }

        if (imageFile) {
            formData.append("image_link", imageFile);
        }


        if (name && designation && descriptions) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createTestimonial(formData))
            } else {
                let data = {
                    dataset: formData,
                    id: selectedTestimonial
                }
                dispatch(updateTestimonial(data))
            }
        }
        handleModalClose()
    }

    const handelTestimonialEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedTestimonial(id)
        let model = testimonials.filter((ts) => ts.id === id)
        model = model[0]
        setTitle(`Edit ${model?.name}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(model?.name)
        setDescription(model?.description)
        setDesignation(model?.designation)
        setImageFile(model?.image_link)
    }

    const testimonialDeleteHandler = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteTestimonial(data))
        }
    }

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
        let formData = new FormData();
        formData.append("search_text", searchText);
        dispatch(fetchSearchTestimonial(formData))
    }

    useEffect(() => {
        dispatch(fetchAllTestimonial(0));
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Testimonial"
                    url="/bsl/admin/testimonial"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Testimonial</h4>
                                <button className="btn btn-info btn-mini float-right" onClick={() => {
                                    setIsShow(!isShow);
                                    setIsEdit(false)
                                    setTitle('Add New')
                                }}>
                                    <GrFormAdd/>&nbsp;Add New
                                </button>
                            </div>
                            <div className="card-body">
                                <VirtualDataTable
                                    name="Testimonial Data"
                                    columns={columns}
                                    data={testimonials}
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
                                    <label>Name <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={name}
                                           onChange={(e) => {
                                               setName(e.target.value)
                                           }} placeholder="Name" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Designation <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={designation}
                                           onChange={(e) => {
                                               setDesignation(e.target.value)
                                           }} placeholder="Designation" type="text"/>
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
                                        config={editorConfig}
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
