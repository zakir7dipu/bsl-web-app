import React, {useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";
import {useSearchParams} from "react-router-dom";

function Pagination({handlePageClick, total, range}) {
    const [searchParams] = useSearchParams();
    const [pageCount, setPageCount] = useState(0)

    useEffect(()=>{
        if(total / range > 1) {
            setPageCount(Math.ceil(total / range))
        }
    },[total, range])

    return (
        <ReactPaginate
            previousLabel={<span>&larr;</span>}
            nextLabel={<span>&rarr;</span>}
            breakLabel={'...'}
            pageCount={pageCount}
            initialPage={(parseInt(searchParams.get("pages")) || 1) - 1}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination justify-content-center'}
            pageClassName={'page-item'}
            pageLinkClassName={'page-link'}
            previousClassName={'page-item'}
            previousLinkClassName={'page-link'}
            nextClassName={'page-item'}
            nextLinkClassName={'page-link'}
            breakClassName={'page-item'}
            breakLinkClassName={'page-link'}
            activeClassName={'active'}
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagination;
