import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchAllProductsByPage, fetchAllProductsData} from "../../../featurs/Product/ProductSlice.js";
import ServiceItemSkel from "../Skeletons/ServiceItemSkel.jsx";
import ServiceProductItem from "./ServiceProductItem.jsx";
import {uid} from "../../../lib/helper.js";
import Pagination from "../../../ui/Pagination.jsx";

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

    const pageChangeHandler = ({selected}) => {
        let nextPage = selected + 1
        const data = {
            id: service,
            page: nextPage
        }
        dispatch(fetchAllProductsByPage(data))
    }

    useEffect(() => {
        dispatch(fetchAllProductsData(service));
    }, [service, dispatch]);


    return (
        <>
            <div className="rs-inner-blog pt-120 pb-120 md-pt-90 md-pb-90">
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
                        <Pagination handlePageClick={pageChangeHandler} pageCount={total} range={perPage}/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Index;
