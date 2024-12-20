import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {infoMessage, useInternalLink, warningMessage} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {
    createIndustriesData,
    deleteIndustriesData,
    fetchAllIndustries,
    updateIndustriesData
} from "../../../featurs/Industries/IndustriesSlice.js";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";
import BizModal from "../../../ui/BizzModal.jsx";
import FileInput from "../../components/inputFile/Index.jsx";
import Preloader from "../../components/Preloader/index.jsx";
import {MdStar} from "react-icons/md";

function Index(props) {
    const {
        isLoading,
        industries,
        apiUrl,
        errorMess
    } = useSelector((state) => state.industriesReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();

    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Industries",
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
            style: {textTransform: "capitalize"}
        },
        {
            name: 'Indexing',
            selector: row => row?.order_by,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => <img style={{height: "40px", width: "40px"}} src={useInternalLink(row.image_link)}/>,
            sortable: false,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelEdit(row?.slug)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => industriesDeleteHandler(row?.slug)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false,
        },
    ];


    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New Technology");
    const [isEdit, setIsEdit] = useState(false);

    const [selectedIndustry, setSelectedIndustry] = useState("");

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

        if (!indexing) {
            warningMessage("Indexing is required.")
        } else {
            formData.append("order_by", indexing);
        }

        if (imageFile) {
            formData.append("image_link", imageFile);
        }


        if (name && indexing) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createIndustriesData(formData))
            } else {
                let data = {
                    dataset: formData,
                    slug: selectedIndustry
                }
                dispatch(updateIndustriesData(data))
            }
        }
        handleModalClose()
    }

    const handelEdit = (slug) => {
        getMeta(slug)
    }

    const getMeta = (slug) => {
        setSelectedIndustry(slug)
        let industryMeta = industries.filter((industry) => industry.slug === slug)
        industryMeta = industryMeta[0]
        setTitle(`Edit ${industryMeta?.name}`)
        setIsEdit(true)
        setName(industryMeta?.name)
        setIndexing(industryMeta?.order_by)
        setImageFile(industryMeta?.image_link)
        setIsShow(!isShow);
    }

    const industriesDeleteHandler = async (slug) => {
        //setSelectedIndustry(slug)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                slug: slug
            }
            dispatch(deleteIndustriesData(data))
        }
    }
    useEffect(() => {
        dispatch(fetchAllIndustries(0));
    }, [dispatch]);
    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Industries"
                    url="/bsl/admin/industries"
                />
                <Breadcrumb list={breadcrumb}/>


                <div className="row">
                    <div className="col-lg-12 col-sm-12">
                        <div className="card">
                            <div className="card-header">
                                <h4>Industries Lists <button className="btn btn-info btn-mini float-right" onClick={() => {
                                    setIsShow(!isShow);
                                    setIsEdit(false)
                                    setTitle('Add New Industries')
                                }}>
                                    <GrFormAdd/>&nbsp;Add New Industries
                                </button></h4>

                            </div>
                            <div className="card-body">
                                <VirtualDataTable
                                    name="Industries List"
                                    columns={columns}
                                    data={industries}
                                    dataViewRangeArray={[10, 20, 30, 50, 100]}
                                    itemPerPage={10}
                                />
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
