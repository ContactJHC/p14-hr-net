import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'
import SelectCountry from '../../components/SelectCountry/SelectCountry'
import Modal from '../../components/Modal/Modal'


export default function Employees() {
  const [show, setShow] = useState(false)
  let modalStyle = {
    width : '',
    backgroundColor: 'lightgrey',
    borderRadius: '10px',
    color: 'white',
    fontSize: ''
  }

  return (
    <div id="employee-div" class="container">
        <h1>Current Employees</h1>
        <table id="employee-table" class="display"></table>
        <Link to='/NewEmployee'>Create Employee</Link>
        <SelectCountry />
        <EmployeesTable />
        <button onClick={()=>setShow(true)}>Save</button>
        <Modal
          large={true}
          style={modalStyle} 
          onClose={() => setShow(false) } 
          show={show}
        >
          <p>La prop children</p>
        </Modal>

    </div>
  )
}
