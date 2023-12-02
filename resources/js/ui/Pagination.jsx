import React from 'react';
import ReactPaginate from "react-paginate";
import {useSearchParams} from "react-router-dom";

function Pagination({handlePageClick, total, range}) {
    const [searchParams] = useSearchParams();

    return (
        <ReactPaginate
            previousLabel={<span>&larr;</span>}
            nextLabel={<span>&rarr;</span>}
            breakLabel={'...'}
            pageCount={Math.ceil(total / range)}
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
        />
    );
}

export default Pagination;
