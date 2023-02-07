import * as React from 'react'
import { DataGrid } from '@mui/x-data-grid'

const columns = [
  { field: 'firstName', headerName: 'First name', width: 115 },
  { field: 'lastName', headerName: 'Last name', width: 115 },
  { field: 'startDate', headerName: 'Start Date', width: 115 },
  { field: 'department', headerName: 'Department', width: 115 },
  { field: 'birthDate', headerName: 'Date of Birth', width: 115 },
  { field: 'street', headerName: 'Street', width: 115 },
  { field: 'city', headerName: 'City', width: 115 },
  { field: 'state', headerName: 'State', width: 115 },
  { field: 'zipCode', headerName: 'Zip Code', width: 115 }
]

const rows = [
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

export default function DataTable() {
  const [page, setPage] = React.useState(0)
  const [pageSize, setPageSize] = React.useState(5);

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[5, 10, 15]}
        page={page}
        onPageChange={(newPage) => setPage(newPage)}
        checkboxSelection
      />
    </div>
  );
}