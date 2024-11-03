import React, {lazy, Suspense} from "react";
import {
    createHashRouter,
    Navigate,
} from "react-router-dom";


const One = lazy(() => import("../pages/one"));
const Two = lazy(() => import("../pages/two"));

export const router = createHashRouter([

    {
        path: "/two",
        element: <Suspense fallback={<div>loading..</div>}> <Two /></Suspense>,
    }, {
        path: "/one",
        element: <Suspense fallback={<div>loading..</div>}> <One /></Suspense>,
    },
    {
        path: "*",
        element: <Navigate to="/one" />,
    }
]);

