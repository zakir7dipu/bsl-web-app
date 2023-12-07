import BizModal from "@/ui/BizzModal.jsx";
import React, {useEffect, useState} from 'react';
import {GrFormAdd} from "react-icons/gr";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {
    deleteWorkshopSeminar,
    fetchAllWorkshopSeminar,
    showWorkshopSeminar
} from "../../../../featurs/WorkshopSeminar/WorkshopSlice.js";
import BizAlert from "../../../../lib/BizAlert.js";
import {toStringTime, ucFirst, uid, useInternalLink} from "../../../../lib/helper.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import RowDropDown from "../../../../ui/RowDropDown.jsx";
import VirtualDataTable from "../../../../ui/VertualDataTable/index.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import Preloader from "../../../components/Preloader/Index.jsx";

function Index(props) {

    const {
        isLoading,
        workshops,
        errorMess,
        metaInfo
    } = useSelector((state) => state.workshopSeminarReducer);
    const dispatch = useDispatch();

    console.log(metaInfo)

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Workshop/Seminar",
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
            selector: row => row.name,
            sortable: true,
            sortableKey: "name",
            searchableKey: 'name',
        },
        {
            name: 'From',
            selector: row => row.form_date,
            sortable: true,
            sortableKey: "form_date",
            searchableKey: 'form_date',
        },
        {
            name: 'To',
            selector: row => row.to_date,
            sortable: true,
            sortableKey: "to_date",
            searchableKey: 'to_date',
        },
        {
            name: 'Type',
            selector: row => ucFirst(row.type),
            sortable: true,
            sortableKey: "type",
            searchableKey: 'type',
        },
        {
            name: 'Amount',
            selector: row => row.price,
            sortable: false,
            sortableKey: "price",
            searchableKey: 'price',
        },
        {
            name: 'Thumbnail',
            selector: row => (
                row.image_link && <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.image_link)}/>
            ),
            sortable: false,
        },
        {
            name: 'Config',
            selector: row => (
                <Link to={`config/${row?.id}`} className="btn btn-info btn-sm">Config</Link>
            ),
            sortable: false,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handleWorkshopShow(row?.slug)} className="dropdown-item">Show</Link>
                    <Link to={`${row?.slug}/edit`} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteWorkshopData(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false,
        },
    ];

    useEffect(() => {
        dispatch(fetchAllWorkshopSeminar());
    }, [dispatch]);

    const [isShow, setIsShow] = useState(false);
    const handleModalClose = () => {
        setIsShow(!isShow);

    }
    const handleWorkshopShow = (slug) => {
        dispatch(showWorkshopSeminar(slug))
        setIsShow(!isShow);
    }

    const deleteWorkshopData = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteWorkshopSeminar(data))
        }
    }

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Hosts"
                    url="/bsl/admin/hosts"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Our Workshop
                                        <Link className="btn btn-info btn-mini float-right" to={`create`}>
                                            <GrFormAdd/>&nbsp;Add New
                                        </Link>
                                    </h4>
                                </div>
                                <div className="card-body">
                                    <VirtualDataTable
                                        name="Workshop Data"
                                        columns={columns}
                                        data={workshops}
                                        dataViewRangeArray={[10, 20, 30, 50, 100]}
                                        itemPerPage={10}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <BizModal isShow={isShow} title={`Show ${metaInfo?.name}`} handleClose={handleModalClose} large={'xl'}>
                    <div className="card-body">
                        <table className="table table-responsive table-bordered table">
                            <thead>
                            <tr>
                                <th width={`20%`}>Title</th>
                                <th width={`80%`}>Description</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Workshop/Seminar Name</td>
                                <td>{metaInfo?.name || ''}</td>
                            </tr>
                            <tr>
                                <td>Date</td>
                                <td>{metaInfo?.form_date || ''} - {metaInfo?.to_date || ''}</td>
                            </tr>
                            <tr>
                                <td>Type</td>
                                <td>{metaInfo?.type || ''}</td>
                            </tr>
                            <tr>
                                <td>Sponsors</td>
                                <td>{metaInfo?.sponsors || ''}</td>
                            </tr>
                            <tr>
                                <td>Registration Amount</td>
                                <td>{metaInfo?.price || ''} BDT</td>
                            </tr>
                            <tr>
                                <td>Objective</td>
                                <td><p dangerouslySetInnerHTML={{__html: metaInfo?.objective}}></p></td>
                            </tr>
                            <tr>
                                <td>Description</td>
                                <td><p dangerouslySetInnerHTML={{__html: metaInfo?.description}}></p></td>
                            </tr>
                            <tr>
                                <td>Thumbnail</td>
                                <td><img style={{height: "300px", width: "100%"}}
                                         src={useInternalLink(metaInfo?.image_link)}/></td>
                            </tr>
                            </tbody>
                        </table>
                           <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Workshop/Seminar Wise Sessions
                                        Details</h4>
                                    <p className="text-muted"><code></code>
                                    </p>
                                    {metaInfo?.workshop_days && metaInfo?.workshop_days.map((day, index) =>  <div id={`accordion-${index}`} className="accordion">
                                        <div className="card">
                                            <div className="card-header">
                                                <h5 className="mb-0" data-toggle="collapse" data-target={`#collapse${day?.id}`}
                                                    aria-expanded="true" aria-controls={`collapse${day?.id}`}>
                                                    <i className="fa" aria-hidden="true"></i> {day?.title}
                                                </h5>
                                            </div>
                                            <div id={`collapse${day?.id}`} className="collapse show" data-parent={`#accordion-${day?.id}`}>
                                                <div className="card-body">
                                                    <table className="table table-responsive table-bordered" width="100%">
                                                        <thead>
                                                        <tr>
                                                            <th style={{width:"25%"}}>Title</th>
                                                            <th style={{width:"15%"}}>Host</th>
                                                            <th style={{width:"10%"}}>Start At</th>
                                                            <th style={{width:"10%"}}>End At</th>
                                                            <th style={{width:"30%"}}>Topics</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        { day?.workshop_sessions && day?.workshop_sessions.map(slot => {
                                                            return <tr key={uid()}>
                                                                <td>{slot?.title}</td>
                                                                <td>{slot?.session_hosts?.host?.name}</td>
                                                                <td>{toStringTime(slot?.from)}</td>
                                                                <td>{toStringTime(slot?.to)}</td>
                                                                <td><p dangerouslySetInnerHTML={{__html: slot?.topics}}></p></td>
                                                            </tr>
                                                        })}
                                                        </tbody>
                                                    </table>

                                                </div>
                                            </div>
                                        </div>
                                    </div>)}
                                </div>
                            </div>
                    </div>
                </BizModal>
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
