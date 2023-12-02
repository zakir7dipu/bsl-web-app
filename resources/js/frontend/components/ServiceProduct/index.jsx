import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProductsByPage, fetchAllProductsData} from "../../../featurs/Product/ProductSlice.js";
import ServiceItemSkel from "../Skeletons/ServiceItemSkel.jsx";
import ServiceProductItem from "./ServiceProductItem.jsx";
import {uid} from "../../../lib/helper.js";
import Pagination from "../../../ui/Pagination.jsx";
import {useNavigate, useSearchParams} from "react-router-dom";

function Index({service}) {
    const {
        isLoading,
        productsForHomePage,
        lastPage,
        currentPage,
        perPage,
        total,
        apiUrl,
        errorMess
    } = useSelector((state) => state.productReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const pageChangeHandler = ({selected}) => {
        let current = selected + 1
        navigate(`?pages=${current}`)
    }

    // const pageChangeHandler = ({selected}) => {
    //     let nextPage = selected + 1
    //     const data = {
    //         id: service,
    //         page: nextPage
    //     }
    //     dispatch(fetchAllProductsByPage(data))
    // }

    useEffect(() => {
        let nextPage = searchParams.get("pages")
        if (!nextPage) {
            dispatch(fetchAllProductsData(service));
        } else {
            const data = {
                id: service,
                page: nextPage
            }
            dispatch(fetchAllProductsByPage(data))
        }

    }, [service, dispatch, searchParams]);


    return (
        <>
            <div className="rs-inner-blog pt-50 pb-50 md-pt-90 md-pb-90">
                <div className="container">
                    <div className="row">
                        {isLoading &&
                            <ServiceItemSkel count={6}/>
                        }
                        {
                            !isLoading && productsForHomePage?.map(item =>
                                <ServiceProductItem product={item} key={uid()}/>
                            )
                        }
                    </div>

                    <div className="col-md-12 mt-3 text-center">
                        <Pagination
                            handlePageClick={pageChangeHandler}
                            total={total}
                            range={perPage}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
