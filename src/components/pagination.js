

import Pagination from "react-js-pagination";

export function ProPagination({ currentPage, totalPage, onPageChange }) {


    return (
        <Pagination
            linkClass="page-link"
            itemClass="page-item"
            activeClass="active"
            disabledClass="disabled"
            activePage={currentPage}
            itemsCountPerPage={1}
            totalItemsCount={totalPage}
            pageRangeDisplayed={5}
            onChange={(page) => onPageChange(page)}
        />
    );
}