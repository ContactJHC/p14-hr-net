// import * as React from 'react'
// import { DataGrid } from '@mui/x-data-grid'

// export default function EmployeesTable({ data }) {
//   const columns = [
//     { field: 'firstName', headerName: 'First name', width: 115 },
//     { field: 'lastName', headerName: 'Last name', width: 115 },
//     { field: 'startDate', headerName: 'Start Date', width: 115 },
//     { field: 'department', headerName: 'Department', width: 115 },
//     { field: 'birthDate', headerName: 'Date of Birth', width: 115 },
//     { field: 'street', headerName: 'Street', width: 115 },
//     { field: 'city', headerName: 'City', width: 115 },
//     { field: 'state', headerName: 'State', width: 115 },
//     { field: 'zipCode', headerName: 'Zip Code', width: 115 }
//   ]
//   const [page, setPage] = React.useState(0)
//   const [pageSize, setPageSize] = React.useState(5);

//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={data}
//         columns={columns}
//         pageSize={pageSize}
//         onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
//         rowsPerPageOptions={[5, 10, 15]}
//         page={page}
//         onPageChange={(newPage) => setPage(newPage)}
//         checkboxSelection
//       />
//     </div>
//   );
// }

import React, { useMemo } from 'react';

import MaterialReactTable from 'material-react-table';


//nested data is ok, see accessorKeys in ColumnDef below

const data = [

  {

    name: {

      firstName: 'John',

      lastName: 'Doe',

    },

    address: '261 Erdman Ford',

    city: 'East Daphne',

    state: 'Kentucky',

  },

  {

    name: {

      firstName: 'Jane',

      lastName: 'Doe',

    },

    address: '769 Dominic Grove',

    city: 'Columbus',

    state: 'Ohio',

  },

  {

    name: {

      firstName: 'Joe',

      lastName: 'Doe',

    },

    address: '566 Brakus Inlet',

    city: 'South Linda',

    state: 'West Virginia',

  },

  {

    name: {

      firstName: 'Kevin',

      lastName: 'Vandy',

    },

    address: '722 Emie Stream',

    city: 'Lincoln',

    state: 'Nebraska',

  },

  {

    name: {

      firstName: 'Joshua',

      lastName: 'Rolluffs',

    },

    address: '32188 Larkin Turnpike',

    city: 'Charleston',

    state: 'South Carolina',

  },

];


const Example = () => {

  //should be memoized or stable

  const columns = useMemo(

    () => [

      {

        accessorKey: 'name.firstName', //access nested data with dot notation

        header: 'First Name',

      },

      {

        accessorKey: 'name.lastName',

        header: 'Last Name',

      },

      {

        accessorKey: 'address', //normal accessorKey

        header: 'Address',

      },

      {

        accessorKey: 'city',

        header: 'City',

      },

      {

        accessorKey: 'state',

        header: 'State',

      },

    ],

    [],

  );


  return <MaterialReactTable columns={columns} data={data} />;

};


export default Example;