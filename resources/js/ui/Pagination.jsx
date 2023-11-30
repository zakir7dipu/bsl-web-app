import React, {useEffect} from 'react';
import ReactPaginate from "react-paginate";
import Style from "./Pagination.module.css"

function Pagination({handlePageClick, pageCount, range}) {
    const selectedPage = document.querySelector("li.selected")
    useEffect(() => {
        // console.log(pageCount)
        if (selectedPage) {
            selectedPage.classList.add(Style.selected)
        }
    }, [selectedPage])

    return (
        <ReactPaginate
            className={Style.paginationPart}
            breakLabel="..."
            nextLabel={<span>&rarr;</span>}
            previousLabel={<span>&larr;</span>}
            pageCount={pageCount}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            renderOnZeroPageCount={null}
            marginPagesDisplayed={2}
        />
    );
}

export default Pagination;
