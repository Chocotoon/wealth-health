import '../styles/EmployeeList.css'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import { useStore } from 'react-redux'
import { Table } from 'nk-table-component'
import { columns } from "../data/columns"
import { mockColumns } from '../data/mockColumns'
import { mockData } from '../data/mockData'

function EmployeeList() {
    const store = useStore()
    const employees = store.getState().employees
    const range = [2, 4, 10, 100]
    return (
        <div>
            <div id="employee-div" className="container">
                <Title>
                    <h1>Current Employees</h1>
                </Title>
                
                    <Table data={mockData} range={range} columns={mockColumns}/>
            
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default EmployeeList