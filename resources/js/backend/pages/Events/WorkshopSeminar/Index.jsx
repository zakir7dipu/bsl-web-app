import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../../lib/BizAlert.js";
import {useInternalLink} from "../../../../lib/helper.js";
import RowDropDown from "../../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {fetchAllWorkshopSeminar} from "../../../../featurs/WorkshopSeminar/WorkshopSlice.js";
import HeaderMeta from "../../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import VirtualDataTable from "../../../../ui/VertualDataTable/index.jsx";
import Preloader from "../../../components/Preloader/Index.jsx";

function Index(props) {

    const {
        isLoading,
        workshops,
        errorMess
    } = useSelector((state) => state.workshopSeminarReducer);
    const dispatch = useDispatch();

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
            selector: row => row.from_date,
            sortable: true,
            sortableKey: "from_date",
            searchableKey: 'from_date',
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
            selector: row => row.type,
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
                <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.image_link)}/>
            ),
            sortable: false,
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handleWorkshopEdit(row?.slug)} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteWorkshopData(row?.slug)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false,
        },
    ];

    useEffect(() => {
        dispatch(fetchAllWorkshopSeminar());
    }, [dispatch]);

    const handleWorkshopEdit = (id) => {

    }

    const deleteWorkshopData = async (id) => {

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
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
