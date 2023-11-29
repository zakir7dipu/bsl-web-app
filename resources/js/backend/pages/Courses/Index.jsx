import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import BizAlert from "../../../lib/BizAlert.js";
import {useInternalLink} from "../../../lib/helper.js";
import RowDropDown from "../../../ui/RowDropDown.jsx";
import {Link} from "react-router-dom";
import {deleteCourseData, fetchAllCourses, showCourseData} from "../../../featurs/Courses/CourseSlice.js";
import Preloader from "../../components/Preloader/Index.jsx";
import HeaderMeta from "../../../ui/HeaderMeta.jsx";
import Breadcrumb from "../../components/Breadcrumb/Index.jsx";
import {GrFormAdd} from "react-icons/gr";
import BizModal from "../../../ui/BizzModal.jsx";
import VirtualDataTable from "../../../ui/VertualDataTable/index.jsx";

function Index(props) {
    const {
        isLoading,
        courses,
        errorMess,
        metaInfo
    } = useSelector((state) => state.coursesReducer);
    const dispatch = useDispatch();

    const bizAlert = new BizAlert();
    const breadcrumb = [
        {
            name: "Dashboard",
            url: "/bsl/admin"
        },
        {
            name: "Courses",
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
            name: 'Services',
            selector: row => row?.service?.title || '',
            sortable: false,
            sortableKey: "title",
            searchableKey: 'title',
        },
        {
            name: 'Name',
            selector: row => row?.name,
            sortable: true,
            sortableKey: "name",
            searchableKey: 'name',
        },
        {
            name: 'Type',
            selector: row => row?.course_type,
            sortable: true,
            sortableKey: "course_type",
            searchableKey: 'course_type',
        },
        {
            name: 'Price',
            selector: row => row?.price,
            sortable: true,
            sortableKey: "price",
            searchableKey: 'price',
        },
        {
            name: 'Curricular',
            selector: row => (
                <Link to={`${row?.id}/curricular`} className="btn btn-info btn-sm">Curricular</Link>
            ),
            sortable: false,

        },
        {
            name: 'Image',
            selector: row => (
                <img style={{height: "60px", width: "60px"}} src={useInternalLink(row.thumbnail)}/>
            ),
            sortable: false
        },
        {
            name: 'Actions',
            selector: (row) => (
                <RowDropDown>
                    <Link to="#" onClick={(e) => handelCourseShow(row?.id)} className="dropdown-item">Show</Link>
                    <Link to={`${row?.id}/edit`} className="dropdown-item">Edit</Link>
                    <Link to="#" onClick={(e) => deleteCourseHandler(row?.id)}
                          className="dropdown-item">Delete</Link>
                </RowDropDown>
            ),
            sortable: false
        },
    ];

    const [isShow, setIsShow] = useState(false);
    const [title, setTitle] = useState("Add New");
    const [isEdit, setIsEdit] = useState(false);

    const handleModalClose = () => {
        setIsShow(!isShow);
    }

    const handelCourseShow = (slug) => {
        getMeta(slug)
    }

    const getMeta = (slug) => {
        dispatch(showCourseData(slug))
        setTitle(`Show ${metaInfo?.title || ''}`)
        setIsEdit(true)
        setIsShow(!isShow);
    }
    const deleteCourseHandler = async (id) => {
        let {isConfirmed} = await bizAlert.confirmAlert(`Are you sure?`, `Once you delete this you can't able to recover this data`);
        if (isConfirmed) {
            let data = {
                id: id
            }
            dispatch(deleteCourseData(data))
        }
    }

    useEffect(() => {
        dispatch(fetchAllCourses());
    }, [dispatch]);

    if (!isLoading) {
        return (
            <>
                <HeaderMeta
                    title="Courses"
                    url="/bsl/admin/courses"
                />
                <Breadcrumb list={breadcrumb}/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Courses Lists
                                        <Link className="btn btn-info btn-mini float-right" to={`create`}>
                                            <GrFormAdd/>&nbsp;Add New
                                        </Link></h4>
                                </div>
                                <div className="card-body">
                                    <VirtualDataTable
                                        name="Course Data"
                                        columns={columns}
                                        data={courses}
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
                                <td>Service Name</td>
                                <td>{metaInfo?.service?.title || ''}</td>
                            </tr>
                            <tr>
                                <td>Name</td>
                                <td>{metaInfo?.name || ''}</td>
                            </tr>
                            <tr>
                                <td>Video Id</td>
                                <td>{metaInfo?.video_id || ''}</td>
                            </tr>
                            <tr>
                                <td>Duration</td>
                                <td>{metaInfo?.duration || ''}</td>
                            </tr>
                            <tr>
                                <td>Price</td>
                                <td>{metaInfo?.price || ''} BDT</td>
                            </tr>
                            <tr>
                                <td>Discount</td>
                                <td>{metaInfo?.discount || ''} BDT</td>
                            </tr>
                            <tr>
                                <td>Total Session</td>
                                <td>{metaInfo?.class_count || ''}</td>
                            </tr>
                            <tr>
                                <td>Class Per Week</td>
                                <td>{metaInfo?.class_per_week || ''}</td>
                            </tr>
                            <tr>
                                <td>Class Duration</td>
                                <td>{metaInfo?.class_duration || ''}</td>
                            </tr>
                            <tr>
                                <td>Language</td>
                                <td>{metaInfo?.language || ''}</td>
                            </tr>
                            <tr>
                                <td>Start Date</td>
                                <td>{metaInfo?.start_date || ''}</td>
                            </tr>
                            <tr>
                                <td>End Date</td>
                                <td>{metaInfo?.end_date || ''}</td>
                            </tr>
                            <tr>
                                <td>Delivery Mode</td>
                                <td>{metaInfo?.delivery_mode || ''}</td>
                            </tr>
                            <tr>
                                <td>Thumbnail</td>
                                <td><img style={{height: "300px", width: "100%"}}
                                         src={useInternalLink(metaInfo?.thumbnail)}/></td>
                            </tr>
                            {metaInfo?.banner &&
                                <tr>
                                    <td>Banner</td>
                                    <td><img style={{height: "300px", width: "100%"}}
                                             src={useInternalLink(metaInfo?.banner)}/></td>
                                </tr>
                            }

                            <tr>
                                <td>Description</td>
                                <td><p dangerouslySetInnerHTML={{__html: metaInfo?.description}}></p></td>
                            </tr>
                            <tr>
                                <td>Curriculum</td>
                                <td><p dangerouslySetInnerHTML={{__html: metaInfo?.curriculum_text}}></p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </BizModal>
            </>
        );
    } else {
        return <Preloader/>
    }
}

export default Index;
