import React, {useEffect} from 'react';
import ReactPaginate from "react-paginate";
import Style from "./Pagination.module.css"
import {PaginationContainer} from './PaginationStyles';
function Pagination({handlePageClick, total, range, currentPage}) {
    // const selectedPage = document.querySelector("li.active")

    const pageChangeHandler = ({selected}) => {
        console.log(selected)
        handlePageClick(selected)
    }
    useEffect(() => {
        // console.log(pageCount)
        // if (selectedPage) {
        //     selectedPage.classList.add(Style.selected)
        // }
    }, [currentPage])

    return (
        // <ReactPaginate
        //     className={Style.paginationPart}
        //     breakLabel="..."
        //     nextLabel={<span>&rarr;</span>}
        //     previousLabel={<span>&larr;</span>}
        //     pageCount={}
        //     onPageChange={handlePageClick}
        //     pageRangeDisplayed={5}
        //     renderOnZeroPageCount={null}
        //     marginPagesDisplayed={2}
        // />
    <PaginationContainer>
    <ReactPaginate
        previousLabel={<span>&larr;</span>}
        nextLabel={<span>&rarr;</span>}
        breakLabel={'...'}
        pageCount={Math.ceil(total / range)}
        // marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={pageChangeHandler}
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
    />
    </PaginationContainer>
    );
}

export default Pagination;
