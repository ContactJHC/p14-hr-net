import { Link } from 'react-router-dom'
import { useState } from 'react';
import BasicTimePicker from '../../components/BasicTimePicker/BasicTimePicker'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectCountry from '../../components/SelectCountry/SelectCountry';
import SelectDepartment from '../../components/SelectDepartment/SelectDepartment'
// import { Modal } from '@contactjhc/modal-library';
import Modal from '../../components/Modal/Modal';
import closeIcon from '../../assets/ri_close-circle-fill.svg'

export default function NewEmployee() {
    const [show, setShow] = useState(false)
    let modalStyle = {
      width : '',
      backgroundColor: '#1976d2',
      borderRadius: '10px',
      color: 'white',
      fontSize: '1.5rem',
      fontFamily: 'Roboto',
      height: '6rem',
      textAlign: 'center'
    }

    const [date, setDate] = useState('')
    const [birth, setBirth] = useState('')
    const [department, setDepartment] = useState('')
    const [country, setCountry] = useState('')

    function saveEmployee() {
        setShow(true)
        const firstName = document.getElementById('first-name');
        const lastName = document.getElementById('last-name');
        const street = document.getElementById('street');
        const city = document.getElementById('city');
        const zipCode = document.getElementById('zip-code');
    
        const employees = JSON.parse(localStorage.getItem('employees')) || [];
        const employee = {
            id : Math.trunc(Math.random()*1000/(Math.random())),
            firstName: firstName.value,
            lastName: lastName.value,
            birthDate: new Date(birth).toLocaleDateString('fr-FR'),
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
        <div className="container">
            <div className="contained-container">
                <div className="form-header">
                    <h2>Create Employee</h2>
                    <Link className="link-new-employee" to='/'>View Current Employees</Link>
                </div>
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
                        small={false}
                        large={true}
                        style={modalStyle} 
                        onClose={() => setShow(false) } 
                        show={show}
                        isIcon={true}
                        closeIcon={closeIcon}
                    

                    >
                        <p>Employee Created !</p>
                    </Modal>
                </div>
            </div>
            <button id="save-employee" onClick={saveEmployee}>Save</button>
        </div>
    </>
  )
}
