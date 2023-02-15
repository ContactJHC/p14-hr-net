import React from 'react'
import { Link } from 'react-router-dom'
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'


export default function Employees() {

  const data = JSON.parse(localStorage.getItem('employees')) || []

  return (
    <div id="employee-div" className="container" style={{paddingBottom:"2rem"}}>

        <h1>Current Employees</h1>
        <div style={{margin:"2rem 0", width:"90%", borderRadius:"10px"}}>
          <EmployeesTable data={data} />
        </div>
        <Link id='employee-link-to-home' to='/NewEmployee'>Home</Link>
    </div>
  )
}
