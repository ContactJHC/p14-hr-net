import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    employees : [
        {
            id : 1,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 2,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 3,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 4,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 5,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 6,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 7,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 8,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 9,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 10,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 11,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 12,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 13,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 14,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 15,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        },
        {
            id : 16,
            firstName: 'Roger',
            lastName: 'DUIRO',
            birthDate: '10/08/1996',
            startDate: '24/02/2022',
            department: 'Sales',
            street: 'rue de Paris',
            city: 'Reims',
            state: 'France',
            zipCode: 51000
        }

    ]
}

const employeesSlice = createSlice({
    name: 'employees',
    initialState,
    reducers : {
        addEmployee : (state, action) => {
            console.log(state, action.payload)

            state.employees.push(action.payload)
        },
        // employeesReducer( state = [], action) {
        //     if (state === undefined ) {
        //         return state
        //     }
        //     if (action.type === 'addEmployee') {
        //         return {
        //             ...state,
        //             employees: action.payload.employees
        //         }
        //     }
        // }
    }
})

const { actions, reducer } = employeesSlice

export const { addEmployee } = actions
export default reducer