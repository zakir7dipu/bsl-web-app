import Breadcrumb from "@/backend/components/Breadcrumb/Index.jsx";
import FileInput from "@/backend/components/inputFile/Index.jsx";
import {
    createOrganizer,
    deleteOrganizer,
    fetchAllOrganizers,
    updateOrganizer
} from "@/featurs/WorkshopOrganizer/OrganizerSlice.js";
import {showWorkshopSeminarById} from "@/featurs/WorkshopSeminar/WorkshopSlice.js";
import Preloader from "@/frontend/components/Preloader/index.jsx";
import BizAlert from "@/lib/BizAlert.js";
import {infoMessage, useInternalLink, warningMessage} from "@/lib/helper.js";
import BizModal from "@/ui/BizzModal.jsx";
import HeaderMeta from "@/ui/HeaderMeta.jsx";
import RowDropDown from "@/ui/RowDropDown.jsx";
import VirtualDataTable from "@/ui/VertualDataTable/index.jsx";
import React, {useEffect, useState} from 'react';
import {GrFormAdd} from "react-icons/gr";
import {MdStar} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {Link, useParams} from "react-router-dom";

function Index(props) {
    const {id} = useParams();
    const {isLoading, organizers} = useSelector((state) => state.WorkshopOrganizerReducer);
    const {metaInfo} = useSelector((state) => state.workshopSeminarReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const [workshopName, setWorkshopName] = useState("");
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: `${workshopName}`,
            url: "/bsl/admin/workshops"
        },
        {
            name: "Config",
            url: `/bsl/admin/workshops/config/${id}`
        },
        {
            name: "Organizers",
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
            selector: row => row?.title,
            sortable: true,
            sortableKey: "title",
            searchableKey: 'title',
        },
        {
            name: 'Thumbnail',
            selector: row => (
                row.thumbnail && <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.thumbnail)}/>
            ),
            sortable: false,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelOrganizerEdit(row?.id)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteOrganizerHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [title, setTitle] = useState("Add New Workshop/Seminar Days");

    const [selectedId, setSelectedId] = useState("");
    const [cName, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [cWorkshopId, setWorkshopId] = useState("");
    const inputFileHandler = (file) => {
        setThumbnail(file[0])
    }

    const requestHandler = (e) => {
        e.preventDefault();

        let formData = new FormData();
        if (!cName) {
            warningMessage("Name is required.")
        } else {
            formData.append("title", cName);
        }

        if (thumbnail) {
            formData.append("thumbnail", thumbnail);
        }

        formData.append("workshop_seminar_id", id);

        if (cName) {
            infoMessage("Please wait a while, We are processing your request.");
            if (!isEdit) {
                dispatch(createOrganizer(formData))
            } else {
                let data = {
                    dataset: formData,
                    item: selectedId
                }
                dispatch(updateOrganizer(data))
            }
        }
        handleModalClose()
    }
    const handleModalClose = () => {
        setIsShow(!isShow);
        resetHandler()
    }
    const resetHandler = () => {
        setName("");
        setThumbnail("");
        setTitle("");
    }

    const handelOrganizerEdit = (id) => {
        setSelectedId(id)
        let dayMeta = organizers.filter((organizer) => organizer.id === id)
        dayMeta = dayMeta[0]
        setTitle(`Edit ${dayMeta.title}`)

        setName(dayMeta?.title || '')
        setWorkshopId(dayMeta.workshop_seminar_id)

        setIsShow(!isShow);
        setIsEdit(!isEdit);
    }

    const deleteOrganizerHandler = async (id) => {
        setSelectedId(id)
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                item: id
            }
            dispatch(deleteOrganizer(data))
        }
    }

    useEffect(() => {
        if (!isLoading) {
            setTimeout(() => {
                setWorkshopName(metaInfo?.name || "");
            }, 500)
        }
    }, [isLoading])

    useEffect(() => {
        dispatch(showWorkshopSeminarById(id));
    }, [dispatch, id])

    useEffect(() => {
        dispatch(fetchAllOrganizers(id));
    }, [dispatch, id])

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Workshop Organizer"
                    url=""
                />
                <Breadcrumb list={breadcrumb}/>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Organizers Lists</h4>
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
                                        name="Orgainzer Data"
                                        columns={columns}
                                        data={organizers}
                                        dataViewRangeArray={[10, 20, 30, 50, 100]}
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
                                    <label>Title <sup className="text-danger"><MdStar/></sup></label>
                                    <input
                                        type={`text`}
                                        className={`form-control`}
                                        value={cName}
                                        onChange={e => setName(e.target.value)}
                                        placeholder={`Title`}
                                    />
                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-group">
                                    <FileInput
                                        label={"Thumbnail"}
                                        file={thumbnail}
                                        id={`thumbnail`}
                                        handler={inputFileHandler}
                                        required={`required`}
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
