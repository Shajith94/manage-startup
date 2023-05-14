import { createBrowserRouter } from "react-router-dom";
import DashBoardLayout from "../layout/DashBoardLayeout/DashBoardLayout";
import Main from "../layout/Main";
import Page404 from "../pages/404/404";
import Dashboard from "../pages/Dashboard/Dashboard";
import VerifiedStartUp from "../pages/Dashboard/VerifiedStartUp/VerifiedStartUp";
import Home from "../pages/Home/Home";
import StartUp from "../pages/StartUp/StartUp";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/startup',
                element: <StartUp />
            },
        ]
    },
    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children:
            [
                {
                    path: '/dashboard/registered-startup',
                    element: <Dashboard />
                },
                {
                    path: '/dashboard/verified-startup',
                    element: <VerifiedStartUp />
                },
            ]
    },
    {
        path: '*',
        element: <Page404 />
    }
])