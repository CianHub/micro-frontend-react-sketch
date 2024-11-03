import React from "react";
import "./index.scss";
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";

const App = () => (
  <RouterProvider router={router} />
);

const container = document.getElementById('app');
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(<App />);