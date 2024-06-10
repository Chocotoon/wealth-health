import '../styles/TableMenu.css'

function TableMenu({ range, setOffset, setDisplayedRows, dataTable, setCurrentPage,
     offset, currentPage, data, setIsFiltered, setFilteredData }) {

    const handleSearchChange = (e) => {
        const inputValue = e.target.value
        if (inputValue.length >= 2) {
            const filteredData = dataTable.filter(item => {
                return Object.values(item).some(value =>
                    value.toString().toLowerCase().includes(inputValue.toLowerCase())
                )
            })
            setIsFiltered(true)
            if (filteredData) {
            setCurrentPage(1)
            const indexOfLastEntry = currentPage * offset;
            const indexOfFirstEntry = indexOfLastEntry - offset;
            const newCurrentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
            setFilteredData(filteredData)
            setDisplayedRows(newCurrentEntries);
            
            }   
        }
        else {
            setCurrentPage(1)
            const indexOfLastEntry = currentPage * offset;
            const indexOfFirstEntry = indexOfLastEntry - offset;
            const newCurrentEntries = data.slice(indexOfFirstEntry, indexOfLastEntry);
            setIsFiltered(false)
            setDisplayedRows(newCurrentEntries);
            
        }

    }

    return (
        <div className="table_menu">
            <div>Show
                <select onChange={() => {
                    const newOffset = document.querySelector(".table_menu select").value;
                    setCurrentPage(1)
                    setOffset(newOffset)
                }}
                    defaultValue={range[0]}>
                    {range.map(el =>
                        <option id={`id${el}`} key={`${el}`} value={el}>{el}</option>)}
                </select>
                entries</div>
            <div>Search: <input id="searchInput" type="text" onChange={handleSearchChange}></input>
            </div>
        </div>
    )
}
export default TableMenu