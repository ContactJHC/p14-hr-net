import React from 'react'
import { Link } from 'react-router-dom'
// import { Modal } from '@contactjhc/modal-library'
// import { DatePicker } from "@mui/x-date-pickers"
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'
import SelectCountry from '../../components/SelectCountry/SelectCountry'
// import Modal from '../../components/Modal/Modal'


export default function Employees() {


  return (
    <div id="employee-div" className="container">

        <h1>Current Employees</h1>
        <table id="employee-table" class="display"></table>
        <Link to='/NewEmployee'>Create Employee</Link>
        <SelectCountry />
        <div style={{width:"90%"}}>
          <EmployeesTable />
        </div>
  


    </div>
  )
}
