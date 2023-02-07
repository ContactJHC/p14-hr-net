import React from 'react'
import { Link } from 'react-router-dom'
// import { Modal } from '@contactjhc/modal-library'
// import { DatePicker } from "@mui/x-date-pickers"
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'
import SelectCountry from '../../components/SelectCountry/SelectCountry'
// import Modal from '../../components/Modal/Modal'
import StickyHeadTable from '../../components/EmployeesTable/NewNewEmployeesTable'


export default function Employees() {

  const datas = [
    {id: 1, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 2, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 3, firstName: 'poi', lastName: 'doliuu', startDate: '16/01/1995', department: 'HR', birthDate: '20/04/1974', street: 'champollion', city: 'phx', state: 'arizona', zipCode: '2k358'},
    {id: 4, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 5, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 6, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 7, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 8, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 9, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 10, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 11, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 12, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 13, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 14, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
    {id: 15, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'}
  ]

  return (
    <div id="employee-div" className="container">

        <h1>Current Employees</h1>
        <table id="employee-table" class="display"></table>
        <Link to='/NewEmployee'>Create Employee</Link>
        <SelectCountry />
        <div style={{width:"90%"}}>
          <EmployeesTable />
          {/* <StickyHeadTable datas = {datas} /> */}
        </div>
  


    </div>
  )
}
