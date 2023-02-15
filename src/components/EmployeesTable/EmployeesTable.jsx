import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

const EmployeesTable = ({ data }) => {

  const columns = useMemo(

    () => [

      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 50

      },

      {

        accessorKey: 'lastName',
        header: 'Last Name',
        size: 50

      },

      {

        accessorKey: 'startDate', 
        header: 'Start Date',
        size: 30

      },

      {

        accessorKey: 'department',
        header: 'Department',
        size: 50

      },
      {
        accessorKey: 'birthDate',
        header: 'Date of Birth',
        size: 30
      },
      {
        accessorKey: 'street',
        header: 'Street',
        size: 50

      },
      {

        accessorKey: 'city',
        header: 'City',
        size: 50

      },

      {

        accessorKey: 'state',
        header: 'State',
        size: 50

      },

      {

        accessorKey: 'zipCode',
        header: 'Zip Code',
        size: 50

      }

    ],

    [],

  );


  return <MaterialReactTable columns={columns} data={data} />;

};


export default EmployeesTable