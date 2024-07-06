import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {infoMessage, useInternalLink, warningMessage} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {
    createCaseStudy,
    deleteCaseStudy,
    fetchAllCaseStudy,
    updateCaseStudy
} from "../../../featurs/CaseStudy/CaseStudySlice.js";
import Preloader from "../../components/Preloader/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import {MdStar} from "react-icons/md";
import {CKEditor} from "@ckeditor/ckeditor5-react";
import FileInput from "../../components/inputFile/Index.jsx";
import BizModal from "../../../ui/BizzModal.jsx";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";
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
        caseStudies,
        apiUrl,
        metaInfo
    } = useSelector((state) => state.caseStudyReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Case Study",
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
            name: 'Project Name',
            selector: row => row?.name,
            sortable: true,
            sortableKey: "name",
            searchableKey: 'name',
        },
        {
            name: 'Clients',
            selector: row => row?.clients,
            sortable: true,
            sortableKey: "clients",
            searchableKey: 'clients',
        },
        {
            name: 'Location',
            selector: row => row?.location,
            sortable: true,
            sortableKey: "location",
            searchableKey: 'location',
        },
        {
            name: 'Complete Date',
            selector: row => row?.complete_date,
            sortable: true,
            sortableKey: "complete_date",
            searchableKey: 'complete_date',
        },
        {
            name: 'Link',
            selector: row => row?.links,
            sortable: true,
            sortableKey: "links",
            searchableKey: 'links',
        },
        {
            name: 'Tags',
            selector: row => row?.tags,
            sortable: true,
            sortableKey: "tags",
            searchableKey: 'tags',
        },
        {
            name: 'Technologies',
            selector: row => row?.technologies,
            sortable: true,
            sortableKey: "technologies",
            searchableKey: 'technologies',
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
                    <Link to="#" onClick={(e) => handelCaseEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => caseDeleteHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedCase, setSelectedCase] = useState("");

    const [name, setName] = useState("");
    const [descriptions, setDescription] = useState("");
    const [clients, setClients] = useState("");
    const [location, setLocation] = useState("");
    const [completeDate, setCompleteDate] = useState("");
    const [technologies, setTechnologies] = useState("");
    const [links, setLinks] = useState("");
    const [files, setFiles] = useState("");
    const [tags, setTags] = useState("");
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
        setDescription('');
        setClients('');
        setLocation('');
        setCompleteDate('');
        setTechnologies('');
        setLinks('');
        setTags('');
        setFiles('');
        setImageFile('');
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
            formData.append("descriptions", descriptions);
        }

        if (!clients) {
            warningMessage("Clients is required.")
        } else {
            formData.append("clients", clients);
        }

        if (location) {
            formData.append("location", location);
        }

        if (completeDate) {
            formData.append("complete_date", completeDate);
        }
        if (technologies) {
            formData.append("technologies", technologies);
        }
        if (links) {
            formData.append("links", links);
        }
        if (files) {
            formData.append("files", files);
        }
        if (tags) {
            formData.append("tags", tags);
        }

        if (imageFile) {
            formData.append("image_link", imageFile);
        }


        if (name && clients && descriptions) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createCaseStudy(formData))
            } else {
                let data = {
                    dataset: formData,
                    id: selectedCase
                }
                dispatch(updateCaseStudy(data))
            }
        }
        handleModalClose()
    }

    const handelCaseEdit = (id) => {
        getMeta(id)
    }

    const getMeta = (id) => {
        setSelectedCase(id)
        let model = caseStudies.filter((cs) => cs.id === id)
        model = model[0]
        setTitle(`Edit ${model?.name}`)
        setIsEdit(true)
        setIsShow(!isShow);

        setName(model?.name)
        setDescription(model?.descriptions)
        setClients(model?.clients)
        setLocation(model?.location)
        setCompleteDate(model?.complete_date)
        setTechnologies(model?.technologies)
        setLinks(model?.links)
        setFiles(model?.files)
        setTags(model?.tags)
        setImageFile(model?.image_link)
    }

    const caseDeleteHandler = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteCaseStudy(data))
        }
    }
    useEffect(() => {
        dispatch(fetchAllCaseStudy(0));
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Case Study"
                    url="/bsl/admin/case-study"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Case Study Lists
                                    <button className="btn btn-info btn-mini float-right" onClick={() => {
                                        setIsShow(!isShow);
                                        setIsEdit(false)
                                        setTitle('Add New Project')
                                    }}>
                                        <GrFormAdd/>&nbsp;Add New Project
                                    </button>
                                </h4>
                            </div>
                            <div className="card-body">
                                <VirtualDataTable
                                    name="Case Study Data"
                                    columns={columns}
                                    data={caseStudies}
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
                                    <label>Project Name <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={name}
                                           onChange={(e) => {
                                               setName(e.target.value)
                                           }} placeholder="Project name" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Clients <sup className="text-danger"><MdStar/></sup></label>
                                    <input className="form-control" value={clients}
                                           onChange={(e) => {
                                               setClients(e.target.value)
                                           }} placeholder="Client name" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Location </label>
                                    <input className="form-control" value={location}
                                           onChange={(e) => {
                                               setLocation(e.target.value)
                                           }} placeholder="Project Location. ex: USA" type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Complete Date </label>
                                    <input className="form-control" value={completeDate}
                                           onChange={(e) => {
                                               setCompleteDate(e.target.value)
                                           }} placeholder="Date" type="date"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Technologies </label>
                                    <input className="form-control" value={technologies}
                                           onChange={(e) => {
                                               setTechnologies(e.target.value)
                                           }} placeholder="Technology used for this project. ex: Node, PHP"
                                           type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Project Links </label>
                                    <input className="form-control" value={links}
                                           onChange={(e) => {
                                               setLinks(e.target.value)
                                           }} placeholder="www.example.com"
                                           type="text"/>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                    <label>Tags </label>
                                    <input className="form-control" value={tags}
                                           onChange={(e) => {
                                               setTags(e.target.value)
                                           }} placeholder="Ex: Software, Web Application"
                                           type="text"/>
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
                                        config={editorConfig}
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
