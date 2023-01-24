import { Outlet } from "react-router-dom";
import Employees from "./pages/Employees/Employees";
import NewEmployee from "./pages/NewEmployee/NewEmployee";

export const routes = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Employees />
            },
            {
                path: '/newEmployee',
                element: <NewEmployee />
            }
        ]
    }
]

function Layout() {
    return (
        <>
            <Outlet/>
        </>
    )
}