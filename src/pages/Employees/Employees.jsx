import React from 'react'
import { Link } from 'react-router-dom'
import SelectCountry from '../../components/SelectCountry'


export default function Employees() {
  return (
    <div id="employee-div" class="container">
        <h1>Current Employees</h1>
        <table id="employee-table" class="display"></table>
        <Link to='/NewEmployee'>Create Employee</Link>
        <SelectCountry />

    </div>
  )
}
