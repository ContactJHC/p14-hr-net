import React from 'react'
import { Link } from 'react-router-dom'
import EmployeesTable from '../../components/EmployeesTable/EmployeesTable'


export default function Employees() {

  // const data = [
  //   {id: 1, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 2, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 3, firstName: 'poi', lastName: 'doliuu', startDate: '16/01/1995', department: 'HR', birthDate: '20/04/1974', street: 'champollion', city: 'phx', state: 'arizona', zipCode: '2k358'},
  //   {id: 4, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 5, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 6, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 7, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 8, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 9, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 10, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 11, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 12, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 13, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 14, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  //   {id: 15, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'}
  // ]

  // const data = JSON.parse(localStorage.getItem('employees')) || []
  const data = JSON.parse(localStorage.getItem('employees'))

  return (
    <div id="employee-div" className="container" style={{marginBottom:"2rem"}}>

        <h1>Current Employees</h1>
        <div style={{margin:"2rem 0", width:"90%"}}>
          <EmployeesTable data={data} />
        </div>
        <Link to='/NewEmployee'>Home</Link>
    </div>
  )
}
