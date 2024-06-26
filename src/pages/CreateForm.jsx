import '../styles/CreateForm.css'
import { Link } from 'react-router-dom'
import { states } from '../data/states';
import { departments } from '../data/department';
import Title from '../components/Title';
import Modale from '../components/Modale';
import Dropdown from '../components/Dropdown';
import Datepicker from '../components/Datepicker';
import { useStore } from 'react-redux'

function CreateForm() {
    const store = useStore()
    function saveEmployee() {
        const firstName = document.getElementById('first-name').value;
        const lastName = document.getElementById('last-name').value;
        const dateOfBirth = document.getElementById('date-of-birth').value;
        const startDate = document.getElementById('start-date').value;
        const department = document.getElementById('department').value;
        const street = document.getElementById('street').value;
        const city = document.getElementById('city').value;
        const state = document.getElementById('state').value;
        const zipCode = document.getElementById('zip-code').value
        if (firstName === "" ||
            lastName === "" ||
            dateOfBirth === "" ||
            startDate === "" ||
            department === "" ||
            street === "" ||
            city === "" ||
            state === "" ||
            zipCode === "") {
            alert("Please fill the form")
        }
        else {
            const currentEmployee = {
                firstName: firstName,
                lastName: lastName,
                dateOfBirth: dateOfBirth,
                startDate: startDate,
                department: department,
                street: street,
                city: city,
                state: states.find(el => el.name === state).abbreviation,
                zipCode: zipCode
            }
            store.dispatch({ type: 'ADD_EMPLOYEE', payload: currentEmployee })
            store.dispatch({ type: 'TOGGLE_VUE' })

        }
    }

    return (

        <div>
            <Title>
                <h1>HRnet</h1>
            </Title>
            <div className="container">
                <Link to="/employeeList">View Current Employees</Link>
                <Title>
                    <h2>Create Employee</h2>
                </Title>

                <form action="#" id="create-employee">
                    <fieldset className='personal_info'>
                        <legend>Personal Information</legend>
                        <label htmlFor="first-name">First Name</label>
                        <input type="text" id="first-name" />

                        <label htmlFor="last-name">Last Name</label>
                        <input type="text" id="last-name" />

                        <Datepicker id="date-of-birth"
                            htmlFor="date-of-birth"
                            label="Date of Birth" />

                        <Datepicker id="start-date"
                            htmlFor="start-date"
                            label="Start Date" />

                        <label htmlFor="department">Department</label>
                        <Dropdown name="department" id="department" data={departments} />
                    </fieldset>
                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" />

                        <label htmlFor="state">State</label>
                        <Dropdown name="state" id="state" data={states} />

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" />
                    </fieldset>


                </form>

                <button id="save_btn" onClick={saveEmployee}>Save</button>
            </div>
            <Modale content="Employee Created!" />

        </div>

    )
}
export default CreateForm