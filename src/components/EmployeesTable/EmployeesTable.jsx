import React, { useMemo } from 'react';
import MaterialReactTable from 'material-react-table';

const EmployeesTable = ({ data }) => {

  const columns = useMemo(

    () => [

      {
        accessorKey: 'firstName',
        header: 'First Name',
        size: 115

      },

      {

        accessorKey: 'lastName',
        header: 'Last Name',
        size: 115

      },

      {

        accessorKey: 'startDate', 
        header: 'Start Date',
        size: 115

      },

      {

        accessorKey: 'department',
        header: 'Department',
        size: 115

      },

      {

        accessorKey: 'birthDate',
        header: 'Date of Birth',
        size: 115

      },

      {

        accessorKey: 'street',
        header: 'Street',
        size: 115

      },

      {

        accessorKey: 'city',
        header: 'City',
        size: 115

      },

      {

        accessorKey: 'state',
        header: 'State',
        size: 115

      },

      {

        accessorKey: 'zipCode',
        header: 'Zip Code',
        size: 115

      }

    ],

    [],

  );


  return <MaterialReactTable columns={columns} data={data} />;

};


export default EmployeesTable