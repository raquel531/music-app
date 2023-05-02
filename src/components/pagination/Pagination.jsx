import React from 'react';

function Pagination(props) {

    const { itemsPerPage, totalPages, currentPage, setCurrentPage, filteredSongs } = props

    const nextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const prevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        } else if (filteredSongs.length <= itemsPerPage) {
            setCurrentPage(1);
        }
    };

    return (
        <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
                Previous
            </button>
            <span>{`Page ${currentPage} of ${totalPages}`}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
                Next
            </button>
        </div>
    )
}

export default Pagination