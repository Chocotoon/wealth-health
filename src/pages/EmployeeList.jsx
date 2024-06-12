import '../styles/EmployeeList.css'
import { Link } from 'react-router-dom'
import Title from '../components/Title'
import { useStore } from 'react-redux'
import { Table } from 'nk-table-component'
import { columns } from "../data/columns"

function EmployeeList() {
    const store = useStore()
    const employees = store.getState().employees
    const range = [10, 25, 50, 100]
    return (
        <div>
            <div id="employee-div" className="container">
                <Title>
                    <h1>Current Employees</h1>
                </Title>
                
                    <Table data={employees} range={range} columns={columns}/>
            
                <Link to="/">Home</Link>
            </div>
        </div>
    )
}

export default EmployeeList