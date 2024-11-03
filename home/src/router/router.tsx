import React from "react";
import {
    createHashRouter,
} from "react-router-dom";
import {One} from "../pages/one";
import {Two} from "../pages/two";

export const router = createHashRouter([

    {
        path: "/two",
        element: <Two />,
    }, {
        path: "/",
        element: <One />,
    }
]);

