import '../styles/TablePagination.css'
import { useEffect } from 'react'


function TablePagination({ offset, setDisplayedRows, currentPage, setCurrentPage, dataTable,
    isFiltered, filteredData }) {
    const totalPages = isFiltered ? Math.ceil(filteredData.length / offset) :
        Math.ceil(dataTable.length / offset);
    const setPreviousPage = () => {
        setCurrentPage((prevIndex) =>
            prevIndex === 1 ? 1 : prevIndex - 1)
    };

    const setNextPage = () => {
        setCurrentPage((prevIndex) =>
            prevIndex === totalPages ? totalPages : prevIndex + 1)
    };

    useEffect(() => {
        const indexOfLastEntry = currentPage * offset
        const indexOfFirstEntry = indexOfLastEntry - offset
        const newCurrentEntries = isFiltered ? filteredData.slice(indexOfFirstEntry, indexOfLastEntry) :
            dataTable.slice(indexOfFirstEntry, indexOfLastEntry)
        setDisplayedRows(newCurrentEntries)
    }, [currentPage, offset])

    return (
        <div className="table_pagination">

            {
                <div> Showing {currentPage === 1 ? 1
                    :
                    parseInt(offset) * (currentPage - 1) + 1} to {offset * currentPage} of {isFiltered ? 
                        `${filteredData.length} (filtered)` : dataTable.length} entries
                </div>}

            <div className="table_navigation">
                <p style={{ cursor: "pointer" }} onClick={setPreviousPage}>Previous</p>
                <p style={{ cursor: "pointer" }} onClick={setNextPage}>Next</p>
            </div>
        </div>
    )
}

export default TablePagination