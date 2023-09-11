import React, {useEffect} from 'react';
import ReactPaginate from "react-paginate";
import Style from "./Pagination.module.css"

function Pagination({handlePageClick, pageCount, range}) {
    useEffect(()=>{
        document.querySelector("li.selected").classList.add(Style.selected)
    })
    return (
        <ReactPaginate
            className={Style.paginationPart}
            breakLabel="..."
            nextLabel=">"
            previousLabel="<"
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={range}
            renderOnZeroPageCount={null}
        />
    );
}

export default Pagination;
