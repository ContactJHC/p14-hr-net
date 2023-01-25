import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'firstName', headerName: 'First name', width: 130 },
  { field: 'lastName', headerName: 'Last name', width: 130 },
  { field: 'startDate', headerName: 'Start Date', width: 130 },
  { field: 'department', headerName: 'Department', width: 130 },
  { field: 'birthDate', headerName: 'Date of Birth', width: 130 },
  { field: 'street', headerName: 'Street', width: 130 },
  { field: 'city', headerName: 'City', width: 130 },
  { field: 'state', headerName: 'State', width: 130 },
  { field: 'zipCode', headerName: 'Zip Code', width: 130 }
]

const rows = [
  {id: 1, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  {id: 2, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  {id: 3, firstName: 'poi', lastName: 'doliuu', startDate: '16/01/1995', department: 'HR', birthDate: '20/04/1974', street: 'champollion', city: 'phx', state: 'arizona', zipCode: '2k358'},
  {id: 4, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  {id: 5, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  {id: 6, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'},
  {id: 7, firstName: 'jou', lastName: 'dou', startDate: '14/01/1995', department: 'IT', birthDate: '21/05/1984', street: 'champollion', city: 'paris', state: 'france', zipCode: '75001'}
]

export default function DataTable() {
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}