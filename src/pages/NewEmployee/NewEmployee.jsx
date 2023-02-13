import { Link } from 'react-router-dom'
import { useState } from 'react';
import BasicTimePicker from '../../components/BasicTimePicker/BasicTimePicker'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import SelectDepartment from '../../components/SelectDepartment/SelectDepartment'
// import Modal from '../../components/Modal/Modal'
// import Modal from '@contactjhc/modal-library/dist/components/Modal/Modal';
import { Modal } from '@contactjhc/modal-library';

export default function NewEmployee() {
    const [show, setShow] = useState(false)
    let modalStyle = {
      width : '',
      backgroundColor: 'lightgrey',
      borderRadius: '10px',
      color: 'black',
      fontSize: ''
    }

    const [date, setDate] = useState('')
    const [birth, setBirth] = useState('')
    const [department, setDepartment] = useState('')
    const [country, setCountry] = useState('')

    function saveEmployee() {
        setShow(true)
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        // const dateOfBirth = document.getElementById('date-of-birth');
        // const startDate = document.getElementById('start-date');
        // const department = document.getElementById('department');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        // const state = document.getElementById('state');
        const zipCode = document.getElementById('zip-code');
    
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
            id : Math.trunc(Math.random()*1000/(Math.random())),
            firstName: firstName.value,
            lastName: lastName.value,
            dateOfBirth: Date.parse(birth),
            startDate: new Date(date).toLocaleDateString('fr-FR'),
            department: department,
            street: street.value,
            city: city.value,
            state: country,
            zipCode: zipCode.value
        };
        console.log(birth, date)
        employees.push(employee);
        localStorage.setItem('employees', JSON.stringify(employees));
        console.log(employees);
        
    }

  return (
    <>
        <div className="title">
            <h1>HRnet</h1>
        </div>
        <div className="container">
            <Link to='/'>View Current Employees</Link>
            <h2>Create Employee</h2>
            <Box
                className="container"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="first-name" label="First Name" variant="outlined" />
                <TextField id="last-name" label="Last Name" variant="outlined" />
                <BasicTimePicker id="date-of-birth" label="Date of Birth" updatedCallBack={(d) => setBirth(d)} />
                <BasicTimePicker id="start-date" label="Start Date" updatedCallBack={(d) => setDate(d)} />
                <div className="address">
                    <legend>Address</legend>
                    <TextField id="street" className="adress-input" label="Street" variant="outlined" />
                    <TextField id="city" className="adress-input" label="City" variant="outlined" />
                    <SelectCountry id="state" className="adress-input" updatedCallBack={(s) => setCountry(s) } />
                    <TextField id="zip-code" className="adress-input" label="Zip Code" variant="outlined" />
                </div>
                <legend>Department</legend>
                <SelectDepartment id="department" updatedCallBack={(d) => setDepartment(d) }/>
            </Box>
            <div style={{position:"relative", zIndex:"1"}}>
            <Modal
                small={true}
                style={modalStyle} 
                onClose={() => setShow(false) } 
                show={show}
            >
                <p>Employee Created!</p>
            </Modal>
            </div>
            <button id="save-employee" onClick={saveEmployee}>Save</button>
        </div>
    </>
  )
}
