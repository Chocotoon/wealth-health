import EmployeeTableTH from "./EmployeeTableHeader"
import EmployeeTableRow from "./EmployeeTableRow"
import TableMenu from "./TableMenu"
import TablePagination from "./TablePagination"
import EmployeeTable from "./EmployeeTable"
import SortIcons from "./SortIcon"
import '../styles/EmployeeTable.css'
import { useState, useEffect } from "react"

function TableOCProject({ data, range, columns }) {

    const firstOffset = range[0];
    const [offset, setOffset] = useState(firstOffset)
    const [displayedRows, setDisplayedRows] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [dataTable, setDataTable] = useState(data)
    const [filteredData, setFilteredData] = useState()
    const [isFiltered, setIsFiltered] = useState(false)

    useEffect(() => {
        const indexOfLastEntry = currentPage * offset;
        const indexOfFirstEntry = indexOfLastEntry - offset;
        const newCurrentEntries = dataTable.slice(indexOfFirstEntry, indexOfLastEntry);
        setDisplayedRows(newCurrentEntries)
    }, [data])

    return (
        <div style={{ width: 900 }}>

            <TableMenu range={range}
                data={data}
                setOffset={setOffset}
                offset={offset}
                setDisplayedRows={setDisplayedRows}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
                setDataTable={setDataTable}
                dataTable={dataTable}
                setIsFiltered={setIsFiltered}
                setFilteredData={setFilteredData} />
            <EmployeeTable>
                <thead>
                    <tr>
                        {columns.map(column => <EmployeeTableTH key={`${column.label}-${column.dataKey}`} scope={column.scope}>
                            {column.label}
                            <SortIcons setDisplayedRows={setDisplayedRows}
                                dataTable={dataTable}
                                type={column.type}
                                dataKey={column.dataKey}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                offset={offset}
                                setDataTable={setDataTable}
                                isFiltered={isFiltered}
                                filteredData={filteredData} />
                        </EmployeeTableTH>
                        )}

                    </tr>
                </thead>
                <tbody>
                    {displayedRows && displayedRows.length > 0 ? (
                        displayedRows.map((employee) => {
                            const keys = Object.keys(employee)
                            const firstKey = keys[0]
                            const secondKey = keys[1]                            
                            return <EmployeeTableRow key={`${employee[firstKey]}-${employee[secondKey]}`} data={employee} />
                        })
                    ) : (
                        <tr><td>No employees available</td></tr>
                    )}

                </tbody>
            </EmployeeTable>
            <TablePagination
                dataTable={dataTable}
                offset={offset}
                setDisplayedRows={setDisplayedRows}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                isFiltered={isFiltered}
                filteredData={filteredData} />
        </div>
    )
}

export default TableOCProject