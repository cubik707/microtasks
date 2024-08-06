import {Model} from "../components/pages/Model";
import {Error404} from "../components/pages/Error404";
import * as React from "react";
import {Navigate} from "react-router-dom";

export const adidasRoutes = [
    {
        path: ":model/:id",
        element: <Model/>
    },
    {
        path: "page/error",
        element: <Error404/>
    },
    {
        path: "*",
        element: <Navigate to="/page/error"/>
    }
];