import * as React from "react";
import {createBrowserRouter, Navigate, Outlet, RouteObject,} from "react-router-dom";
import App from "../App";
import {Error404} from "../components/pages/Error404";
import {Adidas} from "../components/pages/Adidas";
import {Puma} from "../components/pages/Puma";
import {Abibas} from "../components/pages/Abibas";
import {Prices} from "../components/pages/Prices";
import {Model} from "../components/pages/Model";
import {ProtectedPage} from "../components/pages/ProtectedPage";
import {PrivateRoute} from "./PrivateRoute";
import {Login} from "../components/pages/Login";

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices',
    MODEL: '/:model/:id',
    ERROR: '/error404',
    LOGIN: '/login'
} as const

const publicRoutes:RouteObject[]=[
    {
        path: PATH.ADIDAS,
        element: <Adidas />
    },
    {
        path: PATH.PUMA,
        element: <Puma />,
    },
    {
        path: PATH.ABIBAS,
        element: <Abibas />,
    },
    {
        path: PATH.PRICES,
        element: <Prices />,
    },
    {
        path: PATH.MODEL,
        element: <Model />,
    },
    {
        path: PATH.ERROR,
        element: <Error404/>
    },
    {
        path: PATH.LOGIN,
        element: <Login/>
    }
]

const privateRoutes:RouteObject[]=[
    {
        path: '/protectedPage',
        element: <ProtectedPage/>
    },
]

export const PrivateRoutes = () => {
    const isAuth = true
    return (
        <>
            {isAuth ? <Outlet/> : <Navigate to={PATH.LOGIN}/>}
        </>
    );
};


export const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <Navigate to={PATH.ERROR}/>,
            children: [
                {
                    path: '/',
                    element: <Navigate to={PATH.ADIDAS}/>
                },
                {
                    element: <PrivateRoutes/>,
                    children: privateRoutes
                },
                ...publicRoutes
            ]
    },
]);


