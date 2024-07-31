import * as React from 'react';
import { createRoot } from 'react-dom/client';

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom"

import Home from '../../Components/Page/Home';
import Login from '../../Components/Page/Login';
import Command from '../../Components/Page/Command';

import App from '../../App'


 const router = createBrowserRouter([
    {
        path: "/",
        element : (<App />),
    },

    {
        path: "/login",
        element: (<Login />),

    },

    {
        path: "/command-list",
        element: (<Command />)
    }
])

export default router