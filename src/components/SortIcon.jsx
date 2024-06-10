import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';

function SortIcons({ type, setDisplayedRows, dataTable, dataKey, setDataTable, currentPage, offset,
    isFiltered, filteredData }) {
    const tableData = dataTable && dataTable.length > 0 ? dataTable : []
    const rows = filteredData
    function sortAscend() {
        if (!isFiltered) {
            const sortedRows = [...tableData].sort((a, b) => {
                if (type === "string") {
                    if (a[dataKey].toLowerCase() < b[dataKey].toLowerCase()) return -1
                    if (a[dataKey].toLowerCase() > b[dataKey].toLowerCase()) return 1
                    return 0
                } else if (type === "date") {
                    if (new Date(a[dataKey]) > new Date(b[dataKey])){
                        return 1
                    }
                    if (new Date(a[dataKey]) < new Date(b[dataKey])){
                        return -1
                    }
                    return 0
                }
                else if (type === "number") {
                    return a[dataKey] - b[dataKey]
                }

            })

            const startIndex = (currentPage - 1) * offset
            const endIndex = startIndex + offset
            const displayedRows = sortedRows.slice(startIndex, endIndex)
            setDisplayedRows(displayedRows)
            setDataTable(sortedRows)
        }
        else {
            const sortedRows = rows.sort((a, b) => {
                if (type === "string") {
                    if (a[dataKey].toLowerCase() < b[dataKey].toLowerCase()) return -1
                    if (a[dataKey].toLowerCase() > b[dataKey].toLowerCase()) return 1
                    return 0
                } else if (type === "date") {
                    if (new Date(a[dataKey]) > new Date(b[dataKey])){
                        return 1
                    }
                    if (new Date(a[dataKey]) < new Date(b[dataKey])){
                        return -1
                    }
                    return 0
                }
                else if (type === "number") {
                    return a[dataKey] - b[dataKey]
                }

            })
            const startIndex = (currentPage - 1) * offset
            const endIndex = startIndex + offset
            const displayedRows = sortedRows.slice(startIndex, endIndex)
            setDisplayedRows(displayedRows)
        }
    }

    function sortDescend() {
        if (!isFiltered) {
            const sortedRows = [...tableData].sort((a, b) => {
                if (type === "string") {
                    if (a[dataKey].toLowerCase() < b[dataKey].toLowerCase()) return 1
                    if (a[dataKey].toLowerCase() > b[dataKey].toLowerCase()) return -1
                    return 0
                }
                else if (type === "date") {
                    if (new Date(a[dataKey]) < new Date(b[dataKey])){
                        return 1
                    }
                    if (new Date(a[dataKey]) > new Date(b[dataKey])){
                        return -1
                    }
                    return 0
                }
                else if (type === "number") {
                    return a[dataKey] + b[dataKey]
                }

            })
            const startIndex = (currentPage - 1) * offset
            const endIndex = startIndex + offset
            const displayedRows = sortedRows.slice(startIndex, endIndex)
            setDisplayedRows(displayedRows)
            setDataTable(sortedRows)
        }
        else {
            const sortedRows = rows.sort((a, b) => {
                if (type === "string") {
                    if (a[dataKey].toLowerCase() < b[dataKey].toLowerCase()) return 1
                    if (a[dataKey].toLowerCase() > b[dataKey].toLowerCase()) return -1
                    return 0
                }
                else if (type === "date") {
                    if (new Date(a[dataKey]) < new Date(b[dataKey])){
                        return 1
                    }
                    if (new Date(a[dataKey]) > new Date(b[dataKey])){
                        return -1
                    }
                    return 0
                }
                else if (type === "number") {
                    return a[dataKey] + b[dataKey]
                }
            })
            const startIndex = (currentPage - 1) * offset
            const endIndex = startIndex + offset
            const displayedRows = sortedRows.slice(startIndex, endIndex)
            setDisplayedRows(displayedRows)
        }
    }


    return (
        <div style={{ display: "flex", flexDirection: "column", marginLeft: "4px" }}>
            <FontAwesomeIcon icon={faCaretUp} style={{ marginBottom: '-8px', cursor: 'pointer' }} onClick={() => sortAscend()} />
            <FontAwesomeIcon icon={faCaretDown} style={{ cursor: 'pointer' }} onClick={() => sortDescend()} />
        </div>
    )
}

export default SortIcons