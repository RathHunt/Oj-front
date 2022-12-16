import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

/* ROUTES */
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Index from "./routes/index";
import Problems from "./routes/problems";
import Problem from "./routes/problems/problem";
import Contests from "./routes/contests";
import Contest from "./routes/contests/contest";
import Login from "./routes/auth/login";
import Register from "./routes/auth/register";
import About from "./routes/about";

import "./index.css";
import Guides from "./routes/guides";
import Guide from "./routes/guides/guide";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Index /> },
            {
                path: "problems",
                element: <Problems />,
            },
            {
                path: "problem/:id",
                element: <Problem />,
            },
            {
                path: "contests",
                element: <Contests />,
            },
            {
                path: "contest/:id",
                element: <Contest />,
            },
            {
                path: "guides",
                element: <Guides />,
            },
            {
                path: "guide/:id",
                element: <Guide />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "about",
                element: <About />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
