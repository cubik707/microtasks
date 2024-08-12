// @flow
import * as React from 'react';
import {ReactNode, useState} from "react";
import {Navigate} from "react-router-dom";
import {Error404} from "../components/pages/Error404";

type Props = {
    children: ReactNode
};
export const ProtectedRoute = (props: Props) => {
    const logged = false

    return (
        <>
            {logged ? props.children : <Navigate to='/error404' />}
        </>
    );
};